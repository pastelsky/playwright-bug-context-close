import React from 'react';

type StyleProps = {
    borderRadius?: number;
    color?: string;
    distance?: number;
};

const BorderRadiusComponent = ({
    nestedBordersStyles,
}: {
    nestedBordersStyles: StyleProps[];
}): JSX.Element => (
    <div>
        Hello
    </div>
    );
/**
* Border Radius Components
*/

export const PrimaryPaletteBorderRadius = (): JSX.Element => (
    <div>
        Hello
    </div>
    );

export const SecondaryPaletteBorderRadius = (): JSX.Element => (
    <div>
        Hello
    </div>
    );

export const ExtendedPaletteBorderRadius = (): JSX.Element => (
    <div>
        Hello
    </div>
    );
