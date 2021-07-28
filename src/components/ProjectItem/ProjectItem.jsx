import React, { useState } from 'react'
import { DiGithubBadge } from 'react-icons/di'
import { FiExternalLink } from 'react-icons/fi'
// import Button from '../Button/Button'
import ImageDisplay from './ImageDisplay/ImageDisplay'
import styles from './ProjectItem.module.scss'
import ModalDisplay from '../Shared/ModalDisplay/ModalDisplay'

const tagStyles = {
  display: 'inline-block',
  margin: '5px',
  padding: '5px',
  background: 'rgba(44,186,219, 0.2)',
  borderRadius: '5px',
  color: '#2cbadb',
  fontSize: '.8rem',
  fontFamily: 'PT Mono, monospace',
}

const ProjectItem = ({ project }) => {
  const [showImage, setShowImage] = useState(false)

  const showModal = () => {
    setShowImage(true)
  }

  const closeModal = () => {
    setShowImage(false)
  }
  return (
    <div className={styles['project-item']}>
      <h2 className={styles['project-item__title']}>{project.name}</h2>
      <div className={styles['project-item__display']}>
        <ImageDisplay showModal={showModal} thumbnail={project.thumbnail} />
        <div className={styles['project-item__button-container']}>
          <div className={styles.links}>
            {project?.website && (
              <a href={project.website} target="_new">
                <FiExternalLink color="#2cbadb" size="2.5rem" />
              </a>
            )}
            {project?.github && (
              <a href={project.github} target="_new">
                <DiGithubBadge color="#2cbadb" size="3rem" />
              </a>
            )}
          </div>
          <div className={styles['project-item__tags__container']}>
            <p className={styles['project-item__tags']}>Built with: </p>{' '}
            {project.tags.map(tag => (
              <div key={tag} style={tagStyles}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <ModalDisplay isOpen={showImage} closeModal={closeModal}>
          <img className="img-modal" src={project.thumbnail} alt="" />
        </ModalDisplay>
      </div>
      <p className={styles['project-item__description']}>
        {project.description}
      </p>
    </div>
  )
}

export default ProjectItem
