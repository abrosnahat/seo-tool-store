interface ToolsProps {
  params: { tool: string };
}
export default function Tools({ params }: ToolsProps) {
  console.log('params', params);

  return <div>tool</div>;
}
