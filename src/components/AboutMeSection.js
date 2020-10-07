import React from "react"
import Section from "./Section"
import { ColumnWrapper, RowWrapper } from "../styles/Wrappers.styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledTooltip = styled.div`
  display: none;

  position: absolute;

  background-color: white;
  padding: 10px;

  top: 0;
  z-index: 1;
  border-radius: 5px;

  align-self: center;
  text-align: center;
`

const StyledImageContainer = styled.div`
  height: 50px;
  min-width: 50px;
  margin: 1.5rem;

  position: relative;

  &:hover {
    div {
      display: block;
    }
  }
`

const AboutMeSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allInterestsImagesJson {
        nodes {
          name
          src {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Section
      id="about-me-section"
      outlineTitle="About me"
      title="Who am I?"
      wBackground
    >
      <RowWrapper width="100%">
        <ColumnWrapper width="70%">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            ultricies dictum dolor, eu condimentum lectus lacinia sit amet.
            Aenean fringilla, mauris eu gravida tempor, massa metus suscipit
            velit, ac laoreet lorem risus interdum dui. Nulla maximus mi erat.
            Vivamus nec tempus sapien, eu condimentum turpis. Aenean et augue
            purus. Cras a dui eu justo interdum molestie. In maximus purus non
            arcu ultrices, non dictum velit sagittis. Quisque sed purus eget
            eros ullamcorper pulvinar tempus vel quam. Maecenas libero ex,
            imperdiet sit amet arcu a, dictum efficitur arcu. Aenean a dui
            lacinia, lobortis urna ac, fermentum lorem.
            {/* My name is Przemek and I am a 29 years old living in Poznań. There
            was a time I studied and graduated from Mechanical Engineering
            course. Long time ago, but still... Always loved cars and, as years
            spent at campus went by, I realized that the most interesting
            subsystem for me was engine. I mean combustion engine. Later, as a
            drivetrain engineer in PUT Motorsport Formula Student Team, there
            was a time I had believed I could become an F1 engineer. But the
            things tourned out differently... */}
          </p>
          <p>
            Integer nec congue nisl. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Fusce ultricies nisl in
            sollicitudin consectetur. Sed malesuada fringilla urna, id vehicula
            enim. Proin ac nunc et lacus lobortis placerat.
          </p>
          {/* <p>
            I love driving, getting to know cars, but I soon understood that
            there is to much hurry and carelessness in this field for me to
            handle. I like to do things in a way it was meant to be, not to save
            money once and lose twice.
          </p>
          <p>
            The other day I decided to give a try to programming and that's how
            it continued until today... And I don't intend to ever let the cars
            leave in my number one hobby zone.
          </p> */}
        </ColumnWrapper>
        <ColumnWrapper width="30%">
          {data.allInterestsImagesJson.nodes.map(interest => (
            <StyledImageContainer>
              <StyledTooltip>{interest.name}</StyledTooltip>
              <Img fluid={interest.src.childImageSharp.fluid} />
            </StyledImageContainer>
          ))}
        </ColumnWrapper>
      </RowWrapper>
    </Section>
  )
}

export default AboutMeSection
