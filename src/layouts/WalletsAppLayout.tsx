import AppsListLayout from './AppsListLayout'

import Sidebar from '../components/walletsapp/sidebar';

const WalletsAppLayout = ({ children }) => {
    return (
        <AppsListLayout>
            <div className="main-content columns is-fullheight">  
                <div className="column is-2 is-narrow-mobile is-fullheight is-hidden-mobile">
                    <Sidebar />
                </div>

                <div className="column is-10">
                    {children}
                </div>  
            </div>
        </AppsListLayout>
    )
}

export default WalletsAppLayout;