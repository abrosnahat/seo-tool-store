/**
 * @Note: Copies the text passed as param to the system clipboard
 * Check if using HTTPS and navigator.clipboard is available
 * Then uses standard clipboard API, otherwise uses fallback
 * source: https://stackoverflow.com/a/71876238/1431312
 */
export const copyTextToClipBoard = async (text: string) => {
  return window.isSecureContext && navigator.clipboard
    ? navigator.clipboard.writeText(text)
    : unsecuredCopyToClipboard(text);
};

const unsecuredCopyToClipboard = (text: string) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  return new Promise<void>((res, rej) => {
    try {
      document.execCommand('copy');
    } catch (err) {
      rej(err);
    }

    document.body.removeChild(textArea);

    res();
  });
};
