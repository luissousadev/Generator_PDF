export default function InputRequestComponent({
  url,
  onChange,
}: {
  url: string;
  onChange: (value: string) => void;
}) {
  return (
    <>
      <input placeholder="Insira sua URL" onChange={(e) => onChange(e.target.value)} value={url}></input>
    </>
  );
}
