import {
  NotFoundContainer,
  NotFound,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescription,
  HomePageBtn,
} from './styledComponents'

const PageNotFound = () => (
  <NotFoundContainer>
    <NotFound>
      <NotFoundImg src="https://res.cloudinary.com/dfww8i8em/image/upload/v1645344706/erroring_1_vgwj9a.png" />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundDescription>
        we are sorry, the page you requested could not be found. Please go back
        to the homepage.
      </NotFoundDescription>
      <HomePageBtn>Home Page</HomePageBtn>
    </NotFound>
  </NotFoundContainer>
)

export default PageNotFound
