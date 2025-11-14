import { generateAIResponse, generateSpeech, generateSystemPrompt } from "@/lib/ai-utils";
import prisma from "@/lib/prisma";



export async function POST(req) {
    try{

        const {jobTitle,jobDescription,interviewType,difficulty} = await req.json();
        const TEMP_USER_ID = "cmhuqe5au0000tyqkxoizs1uv";
        
        if(!jobTitle || !jobDescription || !interviewType || !difficulty){
            return new Response(JSON.stringify({error:"Missing required fields"}),{status:400});
        }
        
        const interview  = await prisma.interview.create({
            data:{
                userId: TEMP_USER_ID,
                jobTitle,
                jobDescription,
                interviewType,
                difficulty
            }
    });

    const prompt = generateSystemPrompt(interview);
    const aiTextMessage = await generateAIResponse(prompt,[],interview);
    const aiAudio = await generateSpeech(aiTextMessage);

    const aiMessage = await prisma.message.create({
        data: {
        interviewId: interview.id,
        sender: 'ai',
        content: aiTextMessage,
      },
    })

    return Response.json({
      interview,
      message: aiMessage,
      audio: aiAudio,
    });
}
    catch(error){
    console.error('Error creating interview:', error);
    return Response.json(
      { error: 'Failed to create interview', details: error.message },
      { status: 500 }
    );
    }
}