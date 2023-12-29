jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useRoute: jest.fn(),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));
