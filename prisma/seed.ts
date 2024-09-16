const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();
const passwordAdmin = process.env.NEXT_PASSWORD_ADMIN ?? "";

async function main() {
    const password = bcrypt.hashSync(passwordAdmin, 10);

    const userSeed = await prisma.user.create({
        data: {
            email: "admin@admin.com",
            name: "Admin",
            role: "ADMIN",
            password
        }
    })

    console.log({userSeed})
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})