import 'virtual:svg-icons-register';
import * as styles from './Icon.css';
import type { CSSProperties, FC, SVGAttributes } from 'react';

interface IconProps extends SVGAttributes<SVGElement> {
    name: string;
    size?: number;
    title?: string;
    rotate?: number;
    useEleStyles?: CSSProperties;
}

const Icon: FC<IconProps> = (
    {
        className,
        name,
        fill = '#EFF2F6',
        size,
        style,
        title,
        rotate,
        useEleStyles,
        ...rest
    },
) => {
    return (
        <svg
            className={styles.iconContainer}
            fill={fill}
            style={{
                width: size && `${size}px`,
                height: size && `${size}px`,
                transform: `rotate(${rotate ?? 0}deg)`,
                ...style,
            }}
            {...rest}
        >
            {
                title &&
                <title>{title}</title>
            }
            <use xlinkHref={`#ws-${name}`} fill={fill} style={useEleStyles} />
        </svg>
    );
};

export default Icon;
