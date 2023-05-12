import 'virtual:svg-icons-register';
import s from './styles/icon.module.scss';
import { useMemo } from 'react';
import { isNumber } from 'ahooks/es/utils';
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
    const iconSize = useMemo(
        () => isNumber(size) ? `${size}px` : undefined,
        [size],
    );

    const iconTransform = useMemo(
        () => isNumber(rotate) ? `rotate(${rotate}deg)` : undefined,
        [rotate],
    );

    return (
        <svg
            className={s.container}
            style={{
                width: iconSize,
                height: iconSize,
                transform: iconTransform,
                ...style,
            }}
            {...rest}
        >
            {
                title &&
                <title>{title}</title>
            }
            <use
                fill={fill}
                style={useEleStyles}
                xlinkHref={`#ws-${name}`}
            />
        </svg>
    );
};

export default Icon;
