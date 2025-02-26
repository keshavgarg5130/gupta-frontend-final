export default function CanonicalUrl({ path }: { path: string }) {
  const baseUrl = 'https://guptaswitchgears.com'
  return (
    <link
      rel="canonical"
      href={`${baseUrl}${path}`}
    />
  )
}
