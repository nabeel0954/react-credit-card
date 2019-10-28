import React,{Component} from 'react'
import App from './App';
import img1 from './image/img.jpg';
import img2 from './image/img1.jpg';
import img3 from './image/img2.jpg';
class Cards extends Component{
    render(){
        return(
            <div className="container-fluid justify-content-center">
            <div className="row">
            <div className="col-md-4">
                <App src={img1}  title='Business Information'
                paragraph="Business information systems are sets of inter-related procedures
                           using IT infrastructure in a business enterprise to generate
                           and disseminate desired information."
                           Link="http://www.yourarticlelibrary.com/management/
                           information-system/
                           business-information-system-meaning-features-and-components/70319"
                           />
          
            </div>
            <div className="col-md-4">
                <App src={img2} title='10 Style Tips For Young Men'
                paragraph="Great!I remember life back then:
                Living like a real adultMaking money (not asking for it)
                Facing new decisions & challenges"
                Link="https://www.realmenrealstyle.com/dress-sharp-tips-young-men/"
                />
            </div>
            <div className="col-md-4">
                <App src={img3} title='MacBook' 
                paragraph="The MacBook is a line of Macintosh laptop computers designed by Apple.
                The MacBook line consists of the original MacBook (2006-present), the MacBook Pro
                (2006-present), and the MacBook Air (2008-present)"
                Link="https://www.computerhope.com/jargon/m/macbook.htm"
                />
            </div>
            </div>
            </div>
        )
    }
}
export default Cards;