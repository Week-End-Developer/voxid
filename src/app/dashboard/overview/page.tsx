'use client'

import { GaugeContainer, GaugeReferenceArc, GaugeValueArc, useGaugeState } from '@mui/x-charts';

export default function Overview() {
    function GaugePointer() {
        const { valueAngle, outerRadius, cx, cy } = useGaugeState();

        if (valueAngle === null) {
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
        <div className="dashboard">
            <div className="dashboard__row">
                <div className="card dashboard__analytics">
                    <div className="dashboard__analytics-header">
                        <h2 className="card__header">VoxID Analitik</h2>
                    </div>
                    <div className="dashboard__success-rate">
                        <div className="dashboard__success-rate-content">
                            <span className="dashboard__success-rate-label">Toplam Başarı Oranı</span>
                            <span className="dashboard__success-rate-value">92.3%</span>
                        </div>
                        <div className="dashboard__success-rate-bar">
                            <div className="dashboard__success-rate-progress" style={{ width: '92.3%' }}></div>
                        </div>
                    </div>
                    <div className="dashboard__stats">
                        <div className="dashboard__stat-item">
                            <div className="dashboard__stat-icon-wrapper">
                                <span className="material-symbols-outlined dashboard__stat-icon">record_voice_over</span>
                            </div>
                            <span className="dashboard__stat-value">25%</span>
                            <span className="dashboard__stat-label">Tanımlı Ses</span>
                        </div>
                        <div className="dashboard__divider"></div>
                        <div className="dashboard__stat-item">
                            <div className="dashboard__stat-icon-wrapper">
                                <span className="material-symbols-outlined dashboard__stat-icon">forum</span>
                            </div>
                            <span className="dashboard__stat-value">1.9K</span>
                            <span className="dashboard__stat-label">Görüşme</span>
                        </div>
                        <div className="dashboard__divider"></div>
                        <div className="dashboard__stat-item">
                            <div className="dashboard__stat-icon-wrapper">
                                <span className="material-symbols-outlined dashboard__stat-icon">person_add</span>
                            </div>
                            <span className="dashboard__stat-value">112</span>
                            <span className="dashboard__stat-label">Yeni Profil</span>
                        </div>
                        <div className="dashboard__divider"></div>
                        <div className="dashboard__stat-item">
                            <div className="dashboard__stat-icon-wrapper">
                                <span className="material-symbols-outlined dashboard__stat-icon">verified</span>
                            </div>
                            <span className="dashboard__stat-value">89%</span>
                            <span className="dashboard__stat-label">Doğrulama</span>
                        </div>
                    </div>
                </div>

                <div className="card dashboard__daily">
                    <h2 className="card__header">Ortalama Günlük İşlem</h2>
                    <div className="dashboard__daily-stats">
                        <span className="dashboard__daily-value">2.310</span>
                        <div className="dashboard__trend">
                            <span className="dashboard__trend-icon material-symbols-outlined">trending_up</span>
                            <span className="dashboard__trend-value">5.2%</span>
                            <span className="dashboard__trend-label">önceki güne göre</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dashboard__row">
                <div className="card dashboard__records">
                    <h2 className="card__header">Son İşlenen Ses Kayıtları</h2>
                    <div className="dashboard__records-value">1.240</div>
                    <div className="dashboard__trend dashboard__trend--negative">
                        <span className="dashboard__trend-icon material-symbols-outlined">trending_down</span>
                        <span className="dashboard__trend-value">3.6%</span>
                        <span className="dashboard__trend-label">önceki güne göre</span>
                    </div>
                    <div className="dashboard__records-stats">
                        <div className="info-row">
                            <span className="info-row__label">Başarılı</span>
                            <span className="info-row__value">980</span>
                        </div>
                        <div className="info-row">
                            <span className="info-row__label">Beklemede</span>
                            <span className="info-row__value">260</span>
                        </div>
                    </div>
                </div>

                <div className="card dashboard__service">
                    <h2 className="card__header">Servis Sorgulanma Kayıtları</h2>
                    <div className="dashboard__service-value">
                        15.896 <span className="dashboard__service-period">son 7 gün</span>
                    </div>
                    <div className="dashboard__service-stats">
                        <div className="info-row">
                            <span className="info-row__label">Yeni Ses Kayıtları</span>
                            <span className="info-row__value">14.890</span>
                        </div>
                        <div className="info-row">
                            <span className="info-row__label">Tekrar Eden Eski Kayıtları</span>
                            <span className="info-row__value">1.016</span>
                        </div>
                        <div className="info-row">
                            <span className="info-row__label">Yanıt Süresi Ortalama</span>
                            <span className="info-row__value">1.3 ms</span>
                        </div>
                    </div>
                </div>

                <div className="card dashboard__load">
                    <h2 className="card__header">Sistem Yoğunluk Oranı Anlık</h2>
                    <div className="dashboard__gauge">
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
                                fill="currentColor"
                            >
                                85%
                            </text>
                        </GaugeContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}
