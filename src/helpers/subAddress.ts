interface SubStringAddressProps {
  text: string;
  length?: number;
}
export const subStringAddress = ({
  text = "",
  length = 5,
}: SubStringAddressProps) => {
  if (text.length > 12) {
    return text.substr(0, length - 1) + "..." + text.substr(-length);
  }
  return text;
};
