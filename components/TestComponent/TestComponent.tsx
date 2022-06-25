interface TestComponentProps {
  message: string;
}

export default function TestComponent({ message }: TestComponentProps) {
  return (
    <div className='text-3xl font-bold underline text-red-500'>
      {message}
      <img src='' alt='' />
    </div>
  );
}
