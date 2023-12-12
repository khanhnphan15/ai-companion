import prismadb from "@/lib/prismadb";
import { CompanionForm } from "./components/companion-form";

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

const CompanionIdPage = async ({ params }: CompanionIdPageProps) => {
  try {
    const companionId = params?.companionId?.trim();

    if (!companionId) {
      throw new Error("Invalid companionId");
    }

    console.log("companionId:", companionId);

    // Use the defined companionId to find the companion
    const companion = await prismadb.companion.findUnique({
      where: {
        id: companionId,
      },
    });
    
    // Get categories
    const categories = await prismadb.category.findMany();

    // Render the CompanionForm component with the retrieved data
    return <CompanionForm initialData={companion} categories={categories} />;
  } catch (error: any) {
    console.error("Error loading Companion", error);
    return <div>Error loading Companion: {error.message || "Unknown error"}</div>;
  }
};

export default CompanionIdPage;
