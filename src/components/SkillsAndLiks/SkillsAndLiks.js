import React from 'react'
import { ListContainer, List, ListTitle } from './style'

const SkillsAndLiks = ({ skills, links }) => {
  const renderSkills = () => {
    const skillsList = skills || []
    return skillsList.map(skill => (
      <div key={skill} title={skill}>
        {skill}
      </div>
    ))
  }

  const renderLinks = () => {
    const linksList = links || []
    return linksList.map(({ name, url }) => (
      <div key={name} title={name}>
        <a href={url} rel="noopener noreferrer" target="_blank">
          {name}
        </a>
      </div>
    ))
  }

  return (
    <ListContainer>
      <List>
        <ListTitle title="Skills">Skills</ListTitle>
        {renderSkills()}
      </List>
      <List>
        <ListTitle title="Stalk me">Stalk me</ListTitle>
        {renderLinks()}
      </List>
    </ListContainer>
  )
}

export default SkillsAndLiks
