import React, { useState } from 'react'
import className from 'classnames/bind'
import Button from '../Button/Button'
import ImageDisplay from './ImageDisplay/ImageDisplay'
import styles from './ProjectItem.module.scss'
import ModalDisplay from '../Shared/ModalDisplay/ModalDisplay'

const cx = className.bind(styles)

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
          <div className={styles['project-item__tags__container']}>
            <p className={styles['project-item__tags']}>Built with: </p>{' '}
            {project.tags.map(tag => (
              <div key={tag} style={tagStyles}>
                {tag}
              </div>
            ))}
          </div>
          {project.github && (
            <Button
              url={project.github}
              classes={cx('btn btn__project', {
                btn__private: project.privateRepo,
              })}
            >
              {project.privateRepo ? 'Private Repo' : 'GitHub'}
            </Button>
          )}
          {project.website && (
            <Button url={project.website} classes="btn btn__project">
              {project.name}
            </Button>
          )}
        </div>
        <ModalDisplay isOpen={showImage} closeModal={closeModal}>
          <img className="img-modal" src={project.thumbnail} alt="" />
        </ModalDisplay>
      </div>
      <p className={styles['project-item__description']}>
        {project.description}
      </p>
      {/* <div style={{ textAlign: 'center' }}>
        <p className={styles['project-item__tag']}>Built with: </p>{' '}
        {project.tags.map(tag => (
          <p key={tag} style={tagStyles}>
            {tag}
          </p>
        ))}
      </div> */}
    </div>
  )
}

export default ProjectItem
