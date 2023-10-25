interface ToolsProps {
  params: { tool: string };
}
export default function Tools({ params }: ToolsProps) {
  return <div>{params.tool}</div>;
}
