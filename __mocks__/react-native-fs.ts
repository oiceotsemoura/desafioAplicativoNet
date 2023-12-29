jest.mock('react-native-fs', () => {
  return jest.fn().mockImplementation(() => ({
    readFile: jest.fn().mockImplementation(() => ({
      Promise,
    })),
  }));
});
