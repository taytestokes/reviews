/**
 * Mocked object of an axios instance that's
 * returned from the create method. This includes
 * the standard http actions to use when tesing
 * our API requests.
 */
const mockedInstance = {
  get: jest.fn(() => Promise.resolve({})),
  delete: jest.fn(() => Promise.resolve({})),
  post: jest.fn(() => Promise.resolve({})),
  put: jest.fn(() => Promise.resolve({})),
}

/**
 * Mocked axios module that will be
 * used inside of the testing suites.
 */
export default {
  create: () => mockedInstance,
}
