test('adds two numbers correctly', () => {
  expect(2 + 3).toBe(5);
});

test('shows target environment', () => {
  const env = process.env.TARGET_ENV || 'not set';
  console.log('Running tests against environment:', env);
  expect(['dev', 'qa', 'prod', 'not set']).toContain(env);
});