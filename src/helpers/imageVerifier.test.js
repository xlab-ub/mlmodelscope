import ImageVerifier from "./imageVerifier";
import expect from "expect";

describe("ImageVerifier", () => {
  let verifier;
  const LOAD_FAILURE_SRC = 'LOAD_FAILURE_SRC';
  const LOAD_SUCCESS_SRC = 'http://example.com/image1.jpg';

  beforeAll(() => {
    // Mocking Image.prototype.src to call the onload or onerror
    // callbacks depending on the src passed to it
    Object.defineProperty(global.Image.prototype, 'src', {
      // Define the property setter
      set(src) {
        if (src === LOAD_FAILURE_SRC) {
          // Call with setTimeout to simulate async loading
          setTimeout(() => this.onerror(new Error('mocked error')));
        } else if (src === LOAD_SUCCESS_SRC) {
          setTimeout(() => this.onload());
        }
      },
    });
  });

  it("Can verify an image that exists", async () => {
    verifier = new ImageVerifier(LOAD_SUCCESS_SRC);
    let result = await verifier.Verify();

    expect(result).toEqual(true);
  })
  it("Fails an image that does not exist", async () => {
    verifier = new ImageVerifier(LOAD_FAILURE_SRC);
    let result = await verifier.Verify();

    expect(result).toEqual(false);
  })
})
