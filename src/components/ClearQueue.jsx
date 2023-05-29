import React from 'react'
import ClearAllIcon from '@mui/icons-material/ClearAll';
import styles from '@/style/ClearAll.module.css'
import { useDispatch } from 'react-redux';
import { clear } from '@/redux/actions';

const ClearQueue = () => {
    const dispatch = useDispatch();
    return (<div className={styles.holder}>
        <ClearAllIcon
            onClick={() => { 
                dispatch(clear())
            }}
        />
    </div>
    )
}

export default ClearQueue