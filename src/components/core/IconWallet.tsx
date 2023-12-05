import styled from 'styled-components'

const dataRandom = [
    <svg preserveAspectRatio='none' x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" transform="translate(6.212037590446844 -0.1517477058121126) rotate(362.5 12 12)" fill="#018E80"></rect><rect x="0" y="0" width="24" height="24" transform="translate(2.5275932731973825 15.567872302321192) rotate(121.5 12 12)" fill="#035C5E"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-19.38388324734091 -4.365726438295349) rotate(368.8 12 12)" fill="#18B7F2"></rect></svg>,
    <svg preserveAspectRatio='none' x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" transform="translate(1.2545228670684243 -0.09916438297488203) rotate(417.8 12 12)" fill="#F96C01"></rect><rect x="0" y="0" width="24" height="24" transform="translate(5.59318334850626 -9.290542965832417) rotate(370.7 12 12)" fill="#2343E1"></rect><rect x="0" y="0" width="24" height="24" transform="translate(14.646715599918668 9.995350228198294) rotate(133.1 12 12)" fill="#C8142C"></rect></svg>,
    <svg preserveAspectRatio='none' x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" transform="translate(4.595431856360183 6.404932244170275) rotate(127.4 12 12)" fill="#F95401"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-3.0666294532676788 -9.52108343067041) rotate(294.5 12 12)" fill="#1888F2"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-0.4528672772581505 21.9067458518869) rotate(157.1 12 12)" fill="#C8143E"></rect></svg>,
    <svg preserveAspectRatio='none' x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" transform="translate(-0.20460045478644479 -0.13873653790056484) rotate(315.3 12 12)" fill="#C8143E"></rect><rect x="0" y="0" width="24" height="24" transform="translate(3.419718106730909 13.607344760532557) rotate(92.2 12 12)" fill="#FA8900"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-21.4264818291685 5.89544485145392) rotate(335.7 12 12)" fill="#2356E1"></rect></svg>,
    <svg preserveAspectRatio='none' x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" transform="translate(-6.590158516254901 -2.1183179074155127) rotate(232.4 12 12)" fill="#2372E1"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-9.760103621094533 -6.981041983818436) rotate(358.3 12 12)" fill="#F28E02"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-15.907979694554163 6.146066846900589) rotate(336.7 12 12)" fill="#018E89"></rect></svg>,
    <svg preserveAspectRatio='none' x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" transform="translate(1.1116250429079486 0.15649795689407733) rotate(66.4 12 12)" fill="#C81441"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-13.8911059410094 -6.0266210577879535) rotate(351.7 12 12)" fill="#F2AE02"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-1.6551903916559587 -17.309568610512198) rotate(325.7 12 12)" fill="#FA8500"></rect></svg>,
    <svg preserveAspectRatio='none' x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" transform="translate(-3.2784143417321783 6.173609283394799) rotate(217.2 12 12)" fill="#188FF2"></rect><rect x="0" y="0" width="24" height="24" transform="translate(1.3422908096517738 -9.534810716096452) rotate(421.2 12 12)" fill="#235CE1"></rect><rect x="0" y="0" width="24" height="24" transform="translate(2.3949915540535094 16.18474756736209) rotate(134.1 12 12)" fill="#FB1855"></rect></svg>,
    <svg preserveAspectRatio='none' x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" transform="translate(-6.227301621013016 -0.9848250957937993) rotate(250.2 12 12)" fill="#F2D602"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-9.107018012704994 -9.25461582722785) rotate(262.1 12 12)" fill="#C81423"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-3.34715174245572 22.947052314946053) rotate(166.7 12 12)" fill="#1868F2"></rect></svg>,
    <svg preserveAspectRatio='none' x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" transform="translate(1.413431156627763 0.3044240042684148) rotate(155.4 12 12)" fill="#C81444"></rect><rect x="0" y="0" width="24" height="24" transform="translate(5.5494975079843005 6.393554575527395) rotate(132.3 12 12)" fill="#235CE1"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-22.91326406651356 0.0769872370734503) rotate(239.5 12 12)" fill="#F2AA02"></rect></svg>,
    <svg preserveAspectRatio='none' x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" transform="translate(0.3692659253700829 -2.2284679047043356) rotate(311.6 12 12)" fill="#C81468"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-13.002500615864667 6.315750097906185) rotate(300.2 12 12)" fill="#FB1882"></rect><rect x="0" y="0" width="24" height="24" transform="translate(7.053920602984743 18.80977707559738) rotate(182.8 12 12)" fill="#018E7E"></rect></svg>
]

interface IIconWallet {
    idItem: number
}

const IconWallet = ({ idItem }: IIconWallet) => {

    return <Wrap>
        <div>
            {dataRandom[idItem]}
        </div>
    </Wrap>


}

export default IconWallet

const Wrap = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    > div {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        width: fit-content;
        transform: translate(-2px, -2px);
        > svg {

        }
    }
`