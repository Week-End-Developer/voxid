'use client'

import { GaugeContainer, GaugeReferenceArc, GaugeValueArc, useGaugeState } from '@mui/x-charts';


export default function Overview() {

    function GaugePointer() {
        const { valueAngle, outerRadius, cx, cy } = useGaugeState();

        if (valueAngle === null) {
            // No value to display
            return null;
        }

        const target = {
            x: cx + outerRadius * Math.sin(valueAngle),
            y: cy - outerRadius * Math.cos(valueAngle),
        };
        return (
            <g>
                <circle cx={cx} cy={cy} r={5} fill="red" />
                <path
                    d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
                    stroke="red"
                    strokeWidth={3}
                />
            </g>
        );
    }

    return (
        <>
            <div style={{ color: '#ced4da', display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
                <div className="styled-card-1" style={{ flex: '4', minWidth: '500px' }}>
                    <div className="card-header">VoxID Analitik</div>
                    <div style={{ marginBottom: '12px' }}>Toplam <span style={{ fontSize: '18px', color: '#45cb85', fontWeight: 'bolder' }}>92.3%</span> Başarı Oranı</div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '18px', color: '#45cb85', fontWeight: 'bolder' }}>25%</span>
                            <span>Tanımlı Ses</span>
                        </div>
                        <div style={{ borderRight: '1px solid #32383e' }}></div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '18px', color: '#45cb85', fontWeight: 'bolder' }}>1.9K</span>
                            <span>Görüşme</span>
                        </div>
                        <div style={{ borderRight: '1px solid #32383e' }}></div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '18px', color: '#45cb85', fontWeight: 'bolder' }}>112</span>
                            <span>Yeni Profil</span>
                        </div>
                        <div style={{ borderRight: '1px solid #32383e' }}></div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '18px', color: '#45cb85', fontWeight: 'bolder' }}>89%</span>
                            <span>Doğrulama</span>
                        </div>
                    </div>
                </div>

                <div className="styled-card-1" style={{ flex: '1' }}>
                    <div className="card-header">Ortalama Günlük İşlem</div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '30px', marginBottom: '12px' }}>2.310</span>
                        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                            <span style={{ color: '#45cb85', marginRight: '2px', fontSize: '18px' }} className="material-symbols-outlined">
                                trending_up
                            </span>
                            <span style={{ color: '#45cb85' }}>5.2%</span>
                            <span style={{ fontSize: '12px', opacity: '0.7', marginLeft: '8px' }}>önceki güne göre</span>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ color: '#ced4da', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <div className="styled-card-1" style={{ flex: '2', minWidth: '200px' }}>
                    <div className="card-header">Son İşlenen Ses Kayıtları</div>
                    <div style={{ fontSize: '30px', marginBottom: '12px' }}>1.240</div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '12px' }}>
                        <span style={{ color: 'red', marginRight: '2px', fontSize: '18px' }} className="material-symbols-outlined">
                            trending_down
                        </span>
                        <span style={{ color: 'red' }}>3.6%</span>
                        <span style={{ fontSize: '12px', opacity: '0.7', marginLeft: '8px' }}>önceki güne göre</span>
                    </div>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    Başarılı
                                </div>
                                <div>
                                    980
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    Beklemede
                                </div>
                                <div>
                                    260
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="styled-card-1" style={{ flex: '2', minWidth: '200px' }}>
                    <div className="card-header">Servis Sorgulanma Kayıtları</div>
                    <div style={{ fontSize: '30px', marginBottom: '12px' }}>15.896 <span style={{ fontSize: '12px', opacity: '0.7', marginLeft: '8px' }}>son 7 gün</span></div>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    Yeni Ses Kayıtları
                                </div>
                                <div>
                                    14.890
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    Tekrar Eden Eski Kayıtları
                                </div>
                                <div>
                                    1.016
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    Yanıt Süresi Ortalama
                                </div>
                                <div>
                                    1.3 ms
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="styled-card-1" style={{ flex: '2', minWidth: '200px' }}>
                    <div className="card-header">Sistem Yoğunluk Oranı Anlık</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <GaugeContainer
                            width={200}
                            height={124}
                            startAngle={-110}
                            endAngle={110}
                            value={85}
                        >
                            <GaugeReferenceArc />
                            <GaugeValueArc />
                            <GaugePointer />
                            <text
                                x="50%"
                                y="95%"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="18"
                                fill="#ced4da"
                            >
                                85%
                            </text>
                        </GaugeContainer>

                    </div>
                </div>
            </div>
        </>
    )
}
