import styled from 'styled-components';
import React from 'react';
import controller from '../assets/lottie/joystick.json';
import GreetingLottie from "../components/DisplayLottie";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  align-items: flex-start;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 120vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: 1000,
            behavior: "smooth"
          });
      }
      }>
        <span role="img" aria-label="about us">💁🏻‍♂️</span>
        Skill
      </a>
      <a href="/" onClick={(e) => {
          if (window.innerWidth > 767) {
            e.preventDefault();
            window.scrollTo({
              top: 1700,
              behavior: "smooth"
            });
          }
          else if (window.innerWidth > 424) {
            e.preventDefault();
            window.scrollTo({
              top: 2300,
              behavior: "smooth"
            });
          }
          e.preventDefault();
      }
      }>
        <span role="img" aria-label="price">🎓</span>
        Education
      </a>
      <a href="/" onClick={(e) => {
          if (window.innerWidth > 767) {
            e.preventDefault();
            window.scrollTo({
              top: 2600,
              behavior: "smooth"
            });
          }
          else if (window.innerWidth > 424) {
            e.preventDefault();
            window.scrollTo({
              top: 3700,
              behavior: "smooth"
            });
          }
          e.preventDefault();
      }
      }>
        <span role="img" aria-label="contact">👨‍💻</span>
        Experience
        </a>
      <a href="/" onClick={(e) => {
          if (window.innerWidth > 767) {
            e.preventDefault();
            window.scrollTo({
              top: 3550,
              behavior: "smooth"
            });
          }
          else if (window.innerWidth > 424) {
            e.preventDefault();
            window.scrollTo({
              top: 5700,
              behavior: "smooth"
            });
          }
          e.preventDefault();
      }
      }>
        <span role="img" aria-label="contact">🔖</span>
        Project
        </a>
      <a href="/" onClick={(e) => {
        if (window.innerWidth > 767) {
          e.preventDefault();
          window.scrollTo({
            top: 4500,
            behavior: "smooth"
          });
        }
        else if (window.innerWidth > 424) {
          e.preventDefault();
          window.scrollTo({
            top: 7500,
            behavior: "smooth"
          });
        }
        e.preventDefault();
      }
      }>
        <span role="img" aria-label="contact">👍</span>
        Favorite
        </a>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: fixed;
  top: 20rem;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 5rem;
    height: 5rem;
    border-radius: 10px;
    transition: all 0.6s linear;
    position: absolute;
    transform-origin: 1px;
    :first-child {
        transform: ${({ open }) => open ? 'translateY(-70px) translateX(5px) rotate(360deg)' : 'translateY(0px) translateX(0px) rotate(0)'};
    }
    @media (max-width: 768px) {
        :first-child {
            transform: ${({ open }) => open ? 'translateY(-70px) translateX(5px) rotate(360deg)' : 'translateY(0px) translateX(0px) rotate(0)'};
        }
    }

    @media (max-width: 576px) {
        :first-child {
            transform: ${({ open }) => open ? 'translateY(-70px) translateX(5px) rotate(360deg)' : 'translateY(0px) translateX(0px) rotate(0)'};
        }
    }
    @media (max-width: 425px) {
        :first-child {
            transform: ${({ open }) => open ? 'translateY(-70px) translateX(5px) rotate(360deg)' : 'translateY(0px) translateX(0px) rotate(0)'};
        }
    }
    @media (max-width: 375px) {
        :first-child {
            transform: ${({ open }) => open ? 'translateY(-70px) translateX(5px) rotate(360deg)' : 'translateY(0px) translateX(0px) rotate(0)'};
        }
    }
    @media (max-width: 320px) {
        :first-child {
            transform: ${({ open }) => open ? 'translateY(-70px) translateX(5px) rotate(360deg)' : 'translateY(0px) translateX(0px) rotate(0)'};
        }
    }

  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div>
            <GreetingLottie animationData={controller}/>
        </div>
    </StyledBurger>
  )
}


const App = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  )  
}


const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};

export default App;