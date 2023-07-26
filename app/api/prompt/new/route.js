import { connectDB } from "@/utils/database";
import Prompt from "@/models/prompt";
export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectDB();
    const newPrompt = await Prompt.create({
      creator: userId,
      prompt,
      tag,
    });
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("failed to create the prompt", { status:500});
  }
};
