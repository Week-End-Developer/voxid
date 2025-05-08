import Image from "next/image";


// app/dashboard/page.tsx
export default function SpeakerProfile() {
    const data = [
        {
            icon: 'badge',
            label: 'Müşteri No:',
            value: '100123'
        },
        {
            icon: 'fingerprint',
            label: 'Kimlik No:',
            value: '98******01'
        },
        {
            icon: 'person',
            label: 'Ad Soyad:',
            value: 'Test User'
        },
        {
            icon: 'event',
            label: 'İlk İzma Alınma Tarihi:',
            value: '2024-04-27'
        },
        {
            icon: 'check_circle',
            label: 'Durumu:',
            value: 'Aktif'
        },
        {
            icon: 'mood',
            label: 'Genel Duygu Durumu:',
            value: 'Mutlu'
        },
        {
            icon: 'male',
            label: 'Cinsiyet:',
            value: 'Erkek'
        },
        {
            icon: 'hourglass_bottom',
            label: 'Müşteri olma Süresi:',
            value: '1 Yıl 2 Ay 5 Gün'
        },
        {
            icon: 'graphic_eq',
            label: 'Ses Frekansı:',
            value: '450 Hz'
        },
    ]
    return (<>

        <div style={{ color: '#ced4da', display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
            <div className="styled-card-1" style={{ flex: '1', minWidth: '500px' }}>
                <div className="card-header">Kullanıcı</div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: '20px' }}>
                        <Image
                            style={{ borderRadius: '50%', marginBottom: '16px' }}
                            src="/customer.jpg"
                            alt="user"
                            width={150}
                            height={150}
                            priority
                        />
                        <div style={{ fontWeight: '400', marginBottom: '6px' }}>Test User</div>
                        <div style={{ fontWeight: '200', fontSize: '12px', opacity: '0.8' }}>AKB Müşteri</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <div style={{ border: '1px solid #32383e ', borderRadius: '12px', padding: '12px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '180px' }}>
                            <span style={{ fontSize: '18px', marginBottom: '6px', color: 'white' }}>18</span>
                            <span>Toplam Görüşme</span>
                        </div>
                        <div style={{ border: '1px solid #32383e ', borderRadius: '12px', padding: '12px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '180px' }}>
                            <span style={{ fontSize: '18px', marginBottom: '6px', color: 'white' }}>3</span>
                            <span>Son Görüşme</span>
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid #32383e', margin: '18px 0' }}>

                    </div>


                    <div>
                        <div className="customer-info-row-container" style={{ gap: '4px' }}>
                            {data.map((item, index) => (
                                <div key={index} className="customer-info-row">
                                    <div className="align-center" style={{ gap: '6px' }}>
                                        <span className="material-symbols-outlined">
                                            {item.icon}
                                        </span>
                                        {item.label}
                                    </div>
                                    <div>{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="styled-card-1" style={{ flex: '4' }}>
                <div className="card-header">Tüm Görüşme Listesi</div>
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
    </>);
}
