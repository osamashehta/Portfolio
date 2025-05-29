"use client"

import { useState } from "react"
import { useSelector } from "react-redux"
import { useParams, useNavigate, Link } from "react-router-dom"
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowLeft,
  FaCalendarAlt,
  FaCode,
  FaEye,
  FaImage,
  FaTimes,
} from "react-icons/fa"

// Custom Badge Component
const Badge = ({ children, variant = "default", className = "" }) => {
  const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors"
  const variants = {
    default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    secondary: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    tech: "bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 dark:from-purple-900 dark:to-blue-900 dark:text-purple-200",
  }

  return <span className={`${baseClasses} ${variants[variant]} ${className}`}>{children}</span>
}

// Custom Button Component
const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-gray-300 bg-transparent hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300",
    github: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500 shadow-lg hover:shadow-xl",
    back: "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
  }

  const sizes = {
    default: "px-6 py-3 text-base",
    sm: "px-4 py-2 text-sm",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Image Modal Component
const ImageModal = ({ src, alt, isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 ">
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-600 hover:text-red-800 z-10"
          aria-label="Close modal"
        >
          <FaTimes className="w-6 h-6" />
        </button>
        <img src={src || "/placeholder.svg"} alt={alt} className="max-w-full max-h-full object-contain rounded-lg" />
      </div>
    </div>
  )
}

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
)

// Not Found Component
const ProjectNotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6">
      <div className="text-6xl">🔍</div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Project Not Found</h1>
      <p className="text-gray-600 dark:text-gray-400 max-w-md">
        The project you're looking for doesn't exist or may have been moved.
      </p>
      <Button onClick={() => navigate("/portfolio")} variant="default">
        <FaArrowLeft className="w-4 h-4 mr-2" />
        Back to Portfolio
      </Button>
    </div>
  )
}

function ProjectDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const projects = useSelector((state) => state.project.projects)
  const project = projects.find((project) => project.id == Number.parseInt(id))
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")

  // Loading state (you might want to add this to your Redux store)
  if (!projects.length) {
    return <LoadingSpinner />
  }

  // Project not found
  if (!project) {
    return <ProjectNotFound />
  }

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc)
    setIsImageModalOpen(true)
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 ">
        {/* Header with Breadcrumb */}
        <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 pt-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  onClick={() => navigate("/portfolio")}
                  variant="back"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <FaArrowLeft className="w-4 h-4" />
                  Back to Portfolio
                </Button>
                <nav className="text-sm text-gray-500 dark:text-gray-400">
                  <Link to="/portfolio" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Portfolio
                  </Link>
                  <span className="mx-2">/</span>
                  <span className="text-gray-900 dark:text-white font-medium">{project.title}</span>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Project Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Header */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {project.demoURL && (
                      <Button
                        onClick={() => window.open(project.demoURL, "_blank")}
                        variant="default"
                        className="flex items-center gap-2"
                      >
                        <FaEye className="w-4 h-4" />
                        Live Demo
                        <FaExternalLinkAlt className="w-3 h-3" />
                      </Button>
                    )}

                    {project.githubURL && (
                      <Button
                        onClick={() => window.open(project.githubURL, "_blank")}
                        variant="github"
                        className="flex items-center gap-2"
                      >
                        <FaGithub className="w-4 h-4" />
                        View Code
                        <FaExternalLinkAlt className="w-3 h-3" />
                      </Button>
                    )}
                  </div>

                  {/* Project Meta Info */}
                  {/* <div className="flex flex-wrap gap-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {project.date && (
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                    )}
                    {project.category && (
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <FaCode className="w-4 h-4" />
                        <span>{project.category}</span>
                      </div>
                    )}
                  </div> */}
                </div>
              </div>

              {/* Project Images */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <FaImage className="w-5 h-5" />
                  Project Preview
                </h2>

                <div className="space-y-4">
                  {/* Main Image */}
                  <div
                    className="relative group cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => handleImageClick(project.img)}
                  >
                    <img
                      src={project.img || "/placeholder.svg"}
                      alt={`${project.title} preview`}
                      className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <FaEye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Additional Images (if available) */}
                  {project.additionalImages && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {project.additionalImages.map((img, index) => (
                        <div
                          key={index}
                          className="relative group cursor-pointer overflow-hidden rounded-lg"
                          onClick={() => handleImageClick(img)}
                        >
                          <img
                            src={img || "/placeholder.svg"}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                            <FaEye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Project Features (if available) */}
              {project.features && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column - Technologies & Info */}
            <div className="space-y-6">
              {/* Technologies Used */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-16">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <FaCode className="w-5 h-5" />
                  Technologies Used
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <Badge key={index} variant="tech" className="mb-2">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Stats (if available) */}
              {project.stats && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Stats</h3>
                  <div className="space-y-3">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400 capitalize">{key}:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Links */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
                <div className="space-y-3">
                  {project.demoURL && (
                    <a
                      href={project.demoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <FaExternalLinkAlt className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        Live Demo
                      </span>
                    </a>
                  )}

                  {project.githubURL && (
                    <a
                      href={project.githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <FaGithub className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                        Source Code
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        src={selectedImage || "/placeholder.svg"}
        alt={project.title}
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
      />
    </>
  )
}

export default ProjectDetails
