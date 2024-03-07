import { FooterStyles, Icon } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyles>
      <div>
        <p>GoIT 2023-2024 | Powered by </p>
        <a
          href="https://github.com/P-Alex13"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to Git Hub"
        >
          <Icon />
        </a>
      </div>
    </FooterStyles>
  );
};

export default Footer;
