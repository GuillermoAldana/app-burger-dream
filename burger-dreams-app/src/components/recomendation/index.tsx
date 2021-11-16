import * as React from 'react';
import RecomendationTable from './recomendationTable';
interface RecomendationProps {
    
}
 
const Recomendation: React.FC<RecomendationProps> = () => {
    return ( 
        <React.Fragment>
            <RecomendationTable />
        </React.Fragment>
     );
}
 
export default Recomendation;