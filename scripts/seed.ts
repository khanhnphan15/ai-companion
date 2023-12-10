const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function main() {
    try {
        await db.category.createMany({
            data: [
                { name: "Famous People" },
                { name: "Movie & TV" },
                { name: "Musicians" },
                { name: "Animals" },
                { name: "Philosophy" },
                { name: "Scientists" },
            ]
        });

        console.log('Categories seeded successfully');
    } catch (error) {
        console.error("Error seeding default categories", error);
    } finally {
        await db.$disconnect();
    }
}

main();
