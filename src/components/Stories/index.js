import {Component} from 'react'

class Stories extends Component {
  componentDidMount() {
    this.getStoriesData()
  }

  getStoriesData = async () => {
    const url = 'https://apis.ccbp.in/insta-share/stories'
    const response = await fetch(url)
    console.log(response)
  }

  render() {
    return <>{this.getStoriesData()}</>
  }
}

export default Stories
