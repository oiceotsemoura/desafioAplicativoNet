jest.mock('react-native-vision-camera', () => {
  return jest.fn().mockImplementation(() => ({}));
});
