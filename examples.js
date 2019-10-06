const decrypt = require('./aishdec');

/**
 *  Letra de una canción de Bad Bunny: Otra noche en miami
 *  Diez en punto de la noche y salgo como de costumbre
 *  Prendas en diamantes que cieguen cuando me alumbre
 *   Me diferencio de la muchedumbre
 *  A mi estilo puede que no te acostumbre'
 *  No sé si irme en el Mercedes o en el Maserati
 */
const example1 = "EIHA YA CSOTR EY YN LPCKF S FNJHO FPGB QC DOVUOZOPF PUFHQNQ FN GJUZNLUEV ROR PGFGXFH PHYODR NY NYSNBUF GR QGGEUFHPVM EE OB GHPFFDXNVER Y NI HTNVYM QUHEY DHC OO WF UPBQUUPCLR AM TE VJ CEZC FN HM GREAFDHT I RA CM MDTYENRJ MREYYBQ FXWSUAWCSAV ROR ZC EIFFH CNNJ EVUUA GGSAQEI NY AFL BB GR DSJEUFH IRP TEJVLNZCOTH ZU RFRBN OPWNF NPR FPARE NFRR TIL LM RULFH YRQ MLHWI YN AIAPQUAN QJ NR FM PBL NOHU FN ESCID OI FR ZBND NY IBW EE YJUWR W B LDT XBF FPRD NY RKRSAQ P GRWMS DLDBB NJ EIQFLB DSF MH BWBZNBND TIL GMEO XO ZNFY FN OB WVHBBD GFF FBJ OO YPS N GGFNGBM CHCT YR TIL QSFNR EYY ZYML VPS PEGTTLBHB QCTPXFM QR KFTHS OA TMM THOAB N DSAQDYFNQ IAEMUQBKF EQ FMCNLPL B TCRZNSE PVWUB EVCFJGHPFP FHSLN YMVIV WOVGRPN";

/**
 * Robadito de internet
 * bepatienttillthelastromanscountrymenandlovershearmeformycauseandbesilentthatyoumayhearbelieve
 * meforminehonourandhaverespecttominehonourthatyoumaybelievecensuremeinyourwisdomandawake
 * yoursensesthatyoumaythebetterjudgeiftherebeanyinthisassemblyanydearfriendofcaesarstohimisaythat
 * brutuslovetocaesarwasnolessthanhisifthenthatfrienddemandwhybrutusroseagainstcaesarthisismy
 * answernotthatilovedcaesarlessbutthatilovedromemorehadyourathercaesarwerelivinganddieallslaves
 * thanthatcaesarweredeadtoliveallfreemenascaesarlovedmeiweepforhimashewasfortunateirejoiceatitas
 * hewasvaliantihonourhimbutashewasambitiousislewhimthereistearsforhislovejoyforhisfortunehonour
 * forhisvalouranddeathforhisambitionwhoisheresobasethatwouldbeabondmanifanyspeakforhimhavei
 * offendedwhoisheresorudethatwouldnotbearomanifanyspeakforhimhaveioffendedwhoisheresovilethat
 * willnotlovehiscountryifanyspeakforhimhaveioffendedipauseforareplythennonehaveioffendedihave
 * donenomoretocaesarthanyoushalldotobrutusthequestionofhisdeathisenrolledinthecapitolhisglory
 * notextenuatedwhereinhewasworthynorhisoffencesenforcedforwhichhesuffereddeathherecomeshis
 * bodymournedbymarkantonywhothoughhehadnohandinhisdeathshallreceivethebenefitofhisdyinga
 * placeinthecommonwealthaswhichofyoushallnotwiththisidepartthatasislewmybestloverforthegood
 * ofromeihavethesamedaggerformyselfwhenitshallpleasemycountrytoneedmydeath
 */
const example = "EIHA YA CSOTR EY YN LPCKF S FNJHO FPGB QC DOVUOZOPF PUFHQNQ FN GJUZNLUEV ROR PGFGXFH PHYODR NY NYSNBUF GR QGGEUFHPVM EE OB GHPFFDXNVER Y NI HTNVYM QUHEY DHC OO WF UPBQUUPCLR AM TE VJ CEZC FN HM GREAFDHT I RA CM MDTYENRJ MREYYBQ FXWSUAWCSAV ROR ZC EIFFH CNNJ EVUUA GGSAQEI NY AFL BB GR DSJEUFH IRP TEJVLNZCOTH ZU RFRBN OPWNF NPR FPARE NFRR TIL LM RULFH YRQ MLHWI YN AIAPQUAN QJ NR FM PBL NOHU FN ESCID OI FR ZBND NY IBW EE YJUWR W B LDT XBF FPRD NY RKRSAQ P GRWMS DLDBB NJ EIQFLB DSF MH BWBZNBND TIL GMEO XO ZNFY FN OB WVHBBD GFF FBJ OO YPS N GGFNGBM CHCT YR TIL QSFNR EYY ZYML VPS PEGTTLBHB QCTPXFM QR KFTHS OA TMM THOAB N DSAQDYFNQ IAEMUQBKF EQ FMCNLPL B TCRZNSE PVWUB EVCFJGHPFP FHSLN YMVIV WOVGRPN";

decrypt(example, {
    groupBy: 4
    //keyLength: 8 
    //key: "HELLOOOO"
});