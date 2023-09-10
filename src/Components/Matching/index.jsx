import React from 'react'

export default function Matching() {
    const text = "Matching...";
    const rings = 3;
    const ringSectors = 11;
    const preloaderRings = [];
    for (let r = 0; r < rings; ++r) {
        const preloaderSectors = [];
        for (let s = 0; s < ringSectors; ++s) {
            const sectorText = text[s] || '';
            preloaderSectors.push(
                <div className="preloader__sector" key={s}>
                    {sectorText}
                </div>
            );
        }
        preloaderRings.push(
            <div className="preloader__ring" key={r}>
                {preloaderSectors}
            </div>
        );
    }

    return (
        <div className="matching">
            <div className="preloader">{preloaderRings}</div>
        </div>
    )
}
