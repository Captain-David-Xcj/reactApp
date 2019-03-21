import React from 'react';
import Button from './Button';
import Link from './Link';
import Logo from './Logo';
import LoadWebsite from './LoadWebsite'

const EnhancedButton = LoadWebsite(Button)
const EnhancedLink = LoadWebsite(Link)
const EnhancedLogo = LoadWebsite(Logo)

class Content extends React.Component {
    render() {
        return (
            <div>
                <EnhancedButton/>
                <br/>
                <br/>
                <EnhancedLink/>
                <br/>
                <br/>
                <EnhancedLogo/>
                <br/>
                <br/>
                <iframe id="frame" src="" width="600" height="500"/>
            </div>
        )
    }
}

export default Content;