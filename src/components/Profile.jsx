import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className = {s.content}>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" />
            </div>
            <div>
                <img src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg" />
            </div>
            <div>
            my posts
            <div>
                new post
            </div>
            </div>
            <div>
                <div>
                Post 1
                </div>
                <div>
                Post 2
                </div>
            </div>
        </div>
    )
}

export default Profile;