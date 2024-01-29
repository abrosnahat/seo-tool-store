import { Button, Card, CardBody } from '@nextui-org/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Card className='max-w-full w-max m-auto'>
      <CardBody className='items-center gap-8 p-6 md:p-16'>
        <h1 className='text-9xl'>404</h1>
        <h2 className='text-2xl font-bold'>Страница не найдена</h2>
        <Button
          as={Link}
          href='/tools'
          variant='shadow'
          color='primary'
          size='lg'
        >
          Вернуться к инструментам
        </Button>
      </CardBody>
    </Card>
  );
}
