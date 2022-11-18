const loadMetaTags = async () => {
  return (await import('../src/plugins/routes')).getMetaTags();
};

export default async function Head() {
  const meta = await loadMetaTags();

  return (
    <>
      <title>{meta['/plugin-a'].title}</title>
      <meta name="description" content={meta['/plugin-a'].description} />
    </>
  );
}
