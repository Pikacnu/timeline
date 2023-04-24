import styles from '../styles/era.module.scss';
import { format } from 'date-fns';

export interface EraProps {
    className?: string;
    eradata?:Era[];
}

export interface Thing {
    date: Date;
    thing: string;
    other?:string[];
}
export interface Era {
    eraname: string;
    describe?: string;
    thing: Thing[];
}


export const Timeline = ({ className ,eradata }: EraProps) => {

    if(!eradata){
        eradata = [{eraname: 'Error',describe:'',thing: [{ date: new Date(), thing: 'import era with undefind'}]}];
    }

    const erabuild: JSX.Element[] = eradata.map((obj: Era) => {
        //era set
        const { eraname, describe, thing } = obj;
        let modifydescribe: string = describe? `(${describe})`: '';

        //set random color
        const index = eradata?.findIndex(obj => obj.eraname === eraname);

        const r = 255 - (index===0?0:Math.floor(Math.random() * 256));
        const g = 255 - (index===0?0:Math.floor(Math.random() * 256));
        const b = 255 - (index===0?0:Math.floor(Math.random() * 256));
        //style
        const color: React.CSSProperties = {
            borderBottom:`10px solid rgb(${r},${g}, ${b})`,
        };
        console.log(color)

        return (
            <div className={styles.era}>
                <div style={color} className={styles.timeline}>
                    {eraname} {modifydescribe}
                </div>
                <div className={styles.events}>
                    {thing.map((obj) => {
                        const {other,date,thing} = obj
                        return (
                        <>
                            <div className={styles.event}>
                                <div className={styles.thing}>
                                    <div className={styles.year}>{format(date, 'yyyy')}</div>
                                    <div className={styles.thing}>{thing}</div>
                                </div>
                                {other ?.map((things)=>{return <div className={styles.other}>{`${things.replace(/\(/g, ' ⁀').replace(/\)/g, '‿')}`}</div>})}
                            </div>
                        </>
                    )})}
                </div>
            </div>
        );
    });
    return (
        <div className={(styles.root, className)}>
            <div className={styles.timelines}>
            {erabuild}
            </div>
        </div>
    );
};