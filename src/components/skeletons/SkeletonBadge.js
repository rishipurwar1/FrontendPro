import React from 'react'

const SkeletonBadge = ({type}) => {
   let content = '';
   switch (type) {
      case 'small':
         content = '&emsp;';
          break;
      case 'medium':
         content = '&emsp;&emsp;';
         break;
      default:
         console.log("WRONG TYPE VALUE FOR SKELETON BADGE!");
   }
    return (
      <span className={`text-xs inline-block py-2 px-3
      mb-3 rounded-full text-gray-400 bg-gray-400 last:mr-0 mr-2`}>{content}</span>
    )
}

export default SkeletonBadge;
