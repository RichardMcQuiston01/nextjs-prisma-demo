const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const { users, customers, invoices, revenue } = require( './data' );

const load = async () => {
  try {
    await prisma.user.deleteMany();

    await prisma.user.createMany({
      data: users
    });

    await prisma.customer.deleteMany();

    await prisma.customer.createMany({
      data: customers
    });

    await prisma.revenue.deleteMany();

    await prisma.revenue.createMany({
      data: revenue
    });

    await prisma.invoice.deleteMany();
    
    await prisma.invoice.createMany({
      data: invoices
    });
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load();