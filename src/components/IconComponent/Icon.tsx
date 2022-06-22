import React, { FC, forwardRef, LegacyRef, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
// @ts-ignore
import { ReactComponent as Required } from '../../utils/icons/required.svg'


export const iconMap = {
	Required,
}

export type IconType = keyof typeof iconMap

export interface IconProps extends HTMLAttributes<SVGSVGElement> {
	type: IconType
	color?: string
	width?: string
	height?: string
}

const Container = styled('svg')<Partial<IconProps>>`
	display: inline-block;
	height: ${({ height }) => height ?? '1em'};
	width: ${({ width }) => width ?? '1em'};
	line-height: 1;

	color: ${({ color }) => color ?? 'inherit'};
	vertical-align: -0.125em;
`
const ContainerMedium = styled('svg')<Partial<IconProps>>`
	display: inline-block;
	height: 40px;
	width: 40px;
`

export const Icon: FC<IconProps> = forwardRef(
	({ type, ...svgProps }, ref: LegacyRef<SVGSVGElement>) => (
		<Container as={iconMap[type]} {...svgProps} ref={ref} />
	)
)
export const IconMedium: FC<IconProps> = forwardRef(
	({ type, ...svgProps }, ref: LegacyRef<SVGSVGElement>) => (
		<ContainerMedium as={iconMap[type]} {...svgProps} ref={ref} />
	)
)
