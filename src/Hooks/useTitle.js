import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - ONLINE GYM with Trainer`;
    }, [title])
};

export default useTitle;