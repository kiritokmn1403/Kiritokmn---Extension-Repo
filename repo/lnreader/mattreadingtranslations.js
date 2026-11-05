var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var e_1, _b;
var Gr = Object.create;
var je = Object.defineProperty, $r = Object.defineProperties, Jr = Object.getOwnPropertyDescriptor, Wr = Object.getOwnPropertyDescriptors, Xr = Object.getOwnPropertyNames, Lu = Object.getOwnPropertySymbols, Kr = Object.getPrototypeOf, Uu = Object.prototype.hasOwnProperty, Zr = Object.prototype.propertyIsEnumerable;
var Ou = function (t, e, r) { return e in t ? je(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r; }, ie = function (t, e) {
    var e_2, _b;
    for (var r in e || (e = {}))
        Uu.call(e, r) && Ou(t, r, e[r]);
    if (Lu)
        try {
            for (var _c = __values(Lu(e)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var r = _d.value;
                Zr.call(e, r) && Ou(t, r, e[r]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    return t;
}, we = function (t, e) { return $r(t, Wr(e)); };
var Qr = function (t, e) { return function () { return (e || t((e = { exports: {} }).exports, e), e.exports); }; }, Ot = function (t, e) { for (var r in e)
    je(t, r, { get: e[r], enumerable: !0 }); }, Pu = function (t, e, r, n) {
    var e_3, _b;
    if (e && typeof e == "object" || typeof e == "function") {
        var _loop_1 = function (c) {
            !Uu.call(t, c) && c !== r && je(t, c, { get: function () { return e[c]; }, enumerable: !(n = Jr(e, c)) || n.enumerable });
        };
        try {
            for (var _c = __values(Xr(e)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var c = _d.value;
                _loop_1(c);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
    return t;
};
var ye = function (t, e, r) { return (r = t != null ? Gr(Kr(t)) : {}, Pu(e || !t || !t.__esModule ? je(r, "default", { value: t, enumerable: !0 }) : r, t)); }, Yr = function (t) { return Pu(je({}, "__esModule", { value: !0 }), t); };
var ve = Qr(function (e0, lr) { lr.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var En = {};
Ot(En, { default: function () { return kn; } });
module.exports = Yr(En);
var ut = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (t) { return t.charCodeAt(0); }));
var rt = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (t) { return t.charCodeAt(0); }));
var Ut, ea = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Ce = (Ut = String.fromCodePoint) !== null && Ut !== void 0 ? Ut : function (t) { var e = ""; return t > 65535 && (t -= 65536, e += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | t & 1023), e += String.fromCharCode(t), e; };
function Pt(t) { var e; return t >= 55296 && t <= 57343 || t > 1114111 ? 65533 : (e = ea.get(t)) !== null && e !== void 0 ? e : t; }
var $;
(function (t) { t[t.NUM = 35] = "NUM", t[t.SEMI = 59] = "SEMI", t[t.EQUALS = 61] = "EQUALS", t[t.ZERO = 48] = "ZERO", t[t.NINE = 57] = "NINE", t[t.LOWER_A = 97] = "LOWER_A", t[t.LOWER_F = 102] = "LOWER_F", t[t.LOWER_X = 120] = "LOWER_X", t[t.LOWER_Z = 122] = "LOWER_Z", t[t.UPPER_A = 65] = "UPPER_A", t[t.UPPER_F = 70] = "UPPER_F", t[t.UPPER_Z = 90] = "UPPER_Z"; })($ || ($ = {}));
var ta = 32, ge;
(function (t) { t[t.VALUE_LENGTH = 49152] = "VALUE_LENGTH", t[t.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", t[t.JUMP_TABLE = 127] = "JUMP_TABLE"; })(ge || (ge = {}));
function Mt(t) { return t >= $.ZERO && t <= $.NINE; }
function ua(t) { return t >= $.UPPER_A && t <= $.UPPER_F || t >= $.LOWER_A && t <= $.LOWER_F; }
function ra(t) { return t >= $.UPPER_A && t <= $.UPPER_Z || t >= $.LOWER_A && t <= $.LOWER_Z || Mt(t); }
function aa(t) { return t === $.EQUALS || ra(t); }
var G;
(function (t) { t[t.EntityStart = 0] = "EntityStart", t[t.NumericStart = 1] = "NumericStart", t[t.NumericDecimal = 2] = "NumericDecimal", t[t.NumericHex = 3] = "NumericHex", t[t.NamedEntity = 4] = "NamedEntity"; })(G || (G = {}));
var ue;
(function (t) { t[t.Legacy = 0] = "Legacy", t[t.Strict = 1] = "Strict", t[t.Attribute = 2] = "Attribute"; })(ue || (ue = {}));
var qe = (function () {
    function qe(e, r, n) {
        this.decodeTree = e, this.emitCodePoint = r, this.errors = n, this.state = G.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = ue.Strict;
    }
    qe.prototype.startEntity = function (e) { this.decodeMode = e, this.state = G.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    qe.prototype.write = function (e, r) { switch (this.state) {
        case G.EntityStart: return e.charCodeAt(r) === $.NUM ? (this.state = G.NumericStart, this.consumed += 1, this.stateNumericStart(e, r + 1)) : (this.state = G.NamedEntity, this.stateNamedEntity(e, r));
        case G.NumericStart: return this.stateNumericStart(e, r);
        case G.NumericDecimal: return this.stateNumericDecimal(e, r);
        case G.NumericHex: return this.stateNumericHex(e, r);
        case G.NamedEntity: return this.stateNamedEntity(e, r);
    } };
    qe.prototype.stateNumericStart = function (e, r) { return r >= e.length ? -1 : (e.charCodeAt(r) | ta) === $.LOWER_X ? (this.state = G.NumericHex, this.consumed += 1, this.stateNumericHex(e, r + 1)) : (this.state = G.NumericDecimal, this.stateNumericDecimal(e, r)); };
    qe.prototype.addToNumericResult = function (e, r, n, c) { if (r !== n) {
        var o = n - r;
        this.result = this.result * Math.pow(c, o) + parseInt(e.substr(r, o), c), this.consumed += o;
    } };
    qe.prototype.stateNumericHex = function (e, r) { var n = r; for (; r < e.length;) {
        var c = e.charCodeAt(r);
        if (Mt(c) || ua(c))
            r += 1;
        else
            return this.addToNumericResult(e, n, r, 16), this.emitNumericEntity(c, 3);
    } return this.addToNumericResult(e, n, r, 16), -1; };
    qe.prototype.stateNumericDecimal = function (e, r) { var n = r; for (; r < e.length;) {
        var c = e.charCodeAt(r);
        if (Mt(c))
            r += 1;
        else
            return this.addToNumericResult(e, n, r, 10), this.emitNumericEntity(c, 2);
    } return this.addToNumericResult(e, n, r, 10), -1; };
    qe.prototype.emitNumericEntity = function (e, r) { var n; if (this.consumed <= r)
        return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (e === $.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === ue.Strict)
        return 0; return this.emitCodePoint(Pt(this.result), this.consumed), this.errors && (e !== $.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    qe.prototype.stateNamedEntity = function (e, r) { var n = this.decodeTree, c = n[this.treeIndex], o = (c & ge.VALUE_LENGTH) >> 14; for (; r < e.length; r++, this.excess++) {
        var g = e.charCodeAt(r);
        if (this.treeIndex = na(n, c, this.treeIndex + Math.max(1, o), g), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === ue.Attribute && (o === 0 || aa(g)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (c = n[this.treeIndex], o = (c & ge.VALUE_LENGTH) >> 14, o !== 0) {
            if (g === $.SEMI)
                return this.emitNamedEntityData(this.treeIndex, o, this.consumed + this.excess);
            this.decodeMode !== ue.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    qe.prototype.emitNotTerminatedNamedEntity = function () { var e; var _b = this, r = _b.result, n = _b.decodeTree, c = (n[r] & ge.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(r, c, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed; };
    qe.prototype.emitNamedEntityData = function (e, r, n) { var c = this.decodeTree; return this.emitCodePoint(r === 1 ? c[e] & ~ge.VALUE_LENGTH : c[e + 1], n), r === 3 && this.emitCodePoint(c[e + 2], n), n; };
    qe.prototype.end = function () { var e; switch (this.state) {
        case G.NamedEntity: return this.result !== 0 && (this.decodeMode !== ue.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case G.NumericDecimal: return this.emitNumericEntity(0, 2);
        case G.NumericHex: return this.emitNumericEntity(0, 3);
        case G.NumericStart: return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case G.EntityStart: return 0;
    } };
    return qe;
}());
function Mu(t) { var e = "", r = new qe(t, function (n) { return e += Ce(n); }); return function (c, o) { var g = 0, v = 0; for (; (v = c.indexOf("&", v)) >= 0;) {
    e += c.slice(g, v), r.startEntity(o);
    var S = r.write(c, v + 1);
    if (S < 0) {
        g = v + r.end();
        break;
    }
    g = v + S, v = S === 0 ? g + 1 : g;
} var y = e + c.slice(g); return e = "", y; }; }
function na(t, e, r, n) { var c = (e & ge.BRANCH_LENGTH) >> 7, o = e & ge.JUMP_TABLE; if (c === 0)
    return o !== 0 && n === o ? r : -1; if (o) {
    var y = n - o;
    return y < 0 || y >= c ? -1 : t[r + y] - 1;
} var g = r, v = g + c - 1; for (; g <= v;) {
    var y = g + v >>> 1, S = t[y];
    if (S < n)
        g = y + 1;
    else if (S > n)
        v = y - 1;
    else
        return t[y + c];
} return -1; }
var On = Mu(ut), Un = Mu(rt);
var I;
(function (t) { t[t.Tab = 9] = "Tab", t[t.NewLine = 10] = "NewLine", t[t.FormFeed = 12] = "FormFeed", t[t.CarriageReturn = 13] = "CarriageReturn", t[t.Space = 32] = "Space", t[t.ExclamationMark = 33] = "ExclamationMark", t[t.Number = 35] = "Number", t[t.Amp = 38] = "Amp", t[t.SingleQuote = 39] = "SingleQuote", t[t.DoubleQuote = 34] = "DoubleQuote", t[t.Dash = 45] = "Dash", t[t.Slash = 47] = "Slash", t[t.Zero = 48] = "Zero", t[t.Nine = 57] = "Nine", t[t.Semi = 59] = "Semi", t[t.Lt = 60] = "Lt", t[t.Eq = 61] = "Eq", t[t.Gt = 62] = "Gt", t[t.Questionmark = 63] = "Questionmark", t[t.UpperA = 65] = "UpperA", t[t.LowerA = 97] = "LowerA", t[t.UpperF = 70] = "UpperF", t[t.LowerF = 102] = "LowerF", t[t.UpperZ = 90] = "UpperZ", t[t.LowerZ = 122] = "LowerZ", t[t.LowerX = 120] = "LowerX", t[t.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(I || (I = {}));
var E;
(function (t) { t[t.Text = 1] = "Text", t[t.BeforeTagName = 2] = "BeforeTagName", t[t.InTagName = 3] = "InTagName", t[t.InSelfClosingTag = 4] = "InSelfClosingTag", t[t.BeforeClosingTagName = 5] = "BeforeClosingTagName", t[t.InClosingTagName = 6] = "InClosingTagName", t[t.AfterClosingTagName = 7] = "AfterClosingTagName", t[t.BeforeAttributeName = 8] = "BeforeAttributeName", t[t.InAttributeName = 9] = "InAttributeName", t[t.AfterAttributeName = 10] = "AfterAttributeName", t[t.BeforeAttributeValue = 11] = "BeforeAttributeValue", t[t.InAttributeValueDq = 12] = "InAttributeValueDq", t[t.InAttributeValueSq = 13] = "InAttributeValueSq", t[t.InAttributeValueNq = 14] = "InAttributeValueNq", t[t.BeforeDeclaration = 15] = "BeforeDeclaration", t[t.InDeclaration = 16] = "InDeclaration", t[t.InProcessingInstruction = 17] = "InProcessingInstruction", t[t.BeforeComment = 18] = "BeforeComment", t[t.CDATASequence = 19] = "CDATASequence", t[t.InSpecialComment = 20] = "InSpecialComment", t[t.InCommentLike = 21] = "InCommentLike", t[t.BeforeSpecialS = 22] = "BeforeSpecialS", t[t.BeforeSpecialT = 23] = "BeforeSpecialT", t[t.SpecialStartSequence = 24] = "SpecialStartSequence", t[t.InSpecialTag = 25] = "InSpecialTag", t[t.InEntity = 26] = "InEntity"; })(E || (E = {}));
function le(t) { return t === I.Space || t === I.NewLine || t === I.Tab || t === I.FormFeed || t === I.CarriageReturn; }
function at(t) { return t === I.Slash || t === I.Gt || le(t); }
function ia(t) { return t >= I.LowerA && t <= I.LowerZ || t >= I.UpperA && t <= I.UpperZ; }
var re;
(function (t) { t[t.NoValue = 0] = "NoValue", t[t.Unquoted = 1] = "Unquoted", t[t.Single = 2] = "Single", t[t.Double = 3] = "Double"; })(re || (re = {}));
var K = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Ne = (function () {
    function Ne(_b, n) {
        var _c = _b.xmlMode, e = _c === void 0 ? !1 : _c, _d = _b.decodeEntities, r = _d === void 0 ? !0 : _d;
        var _this = this;
        this.cbs = n, this.state = E.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = E.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = e, this.decodeEntities = r, this.entityDecoder = new qe(e ? rt : ut, function (c, o) { return _this.emitCodePoint(c, o); });
    }
    Ne.prototype.reset = function () { this.state = E.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = E.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Ne.prototype.write = function (e) { this.offset += this.buffer.length, this.buffer = e, this.parse(); };
    Ne.prototype.end = function () { this.running && this.finish(); };
    Ne.prototype.pause = function () { this.running = !1; };
    Ne.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Ne.prototype.stateText = function (e) { e === I.Lt || !this.decodeEntities && this.fastForwardTo(I.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = E.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && e === I.Amp && this.startEntity(); };
    Ne.prototype.stateSpecialStartSequence = function (e) { var r = this.sequenceIndex === this.currentSequence.length; if (!(r ? at(e) : (e | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!r) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = E.InTagName, this.stateInTagName(e); };
    Ne.prototype.stateInSpecialTag = function (e) { if (this.sequenceIndex === this.currentSequence.length) {
        if (e === I.Gt || le(e)) {
            var r = this.index - this.currentSequence.length;
            if (this.sectionStart < r) {
                var n = this.index;
                this.index = r, this.cbs.ontext(this.sectionStart, r), this.index = n;
            }
            this.isSpecial = !1, this.sectionStart = r + 2, this.stateInClosingTagName(e);
            return;
        }
        this.sequenceIndex = 0;
    } (e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === K.TitleEnd ? this.decodeEntities && e === I.Amp && this.startEntity() : this.fastForwardTo(I.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(e === I.Lt); };
    Ne.prototype.stateCDATASequence = function (e) { e === K.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === K.Cdata.length && (this.state = E.InCommentLike, this.currentSequence = K.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = E.InDeclaration, this.stateInDeclaration(e)); };
    Ne.prototype.fastForwardTo = function (e) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === e)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Ne.prototype.stateInCommentLike = function (e) { e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === K.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = E.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Ne.prototype.isTagStartChar = function (e) { return this.xmlMode ? !at(e) : ia(e); };
    Ne.prototype.startSpecial = function (e, r) { this.isSpecial = !0, this.currentSequence = e, this.sequenceIndex = r, this.state = E.SpecialStartSequence; };
    Ne.prototype.stateBeforeTagName = function (e) { if (e === I.ExclamationMark)
        this.state = E.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (e === I.Questionmark)
        this.state = E.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(e)) {
        var r = e | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = E.InTagName : r === K.ScriptEnd[2] ? this.state = E.BeforeSpecialS : r === K.TitleEnd[2] ? this.state = E.BeforeSpecialT : this.state = E.InTagName;
    }
    else
        e === I.Slash ? this.state = E.BeforeClosingTagName : (this.state = E.Text, this.stateText(e)); };
    Ne.prototype.stateInTagName = function (e) { at(e) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = E.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Ne.prototype.stateBeforeClosingTagName = function (e) { le(e) || (e === I.Gt ? this.state = E.Text : (this.state = this.isTagStartChar(e) ? E.InClosingTagName : E.InSpecialComment, this.sectionStart = this.index)); };
    Ne.prototype.stateInClosingTagName = function (e) { (e === I.Gt || le(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = E.AfterClosingTagName, this.stateAfterClosingTagName(e)); };
    Ne.prototype.stateAfterClosingTagName = function (e) { (e === I.Gt || this.fastForwardTo(I.Gt)) && (this.state = E.Text, this.sectionStart = this.index + 1); };
    Ne.prototype.stateBeforeAttributeName = function (e) { e === I.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = E.InSpecialTag, this.sequenceIndex = 0) : this.state = E.Text, this.sectionStart = this.index + 1) : e === I.Slash ? this.state = E.InSelfClosingTag : le(e) || (this.state = E.InAttributeName, this.sectionStart = this.index); };
    Ne.prototype.stateInSelfClosingTag = function (e) { e === I.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = E.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : le(e) || (this.state = E.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Ne.prototype.stateInAttributeName = function (e) { (e === I.Eq || at(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = E.AfterAttributeName, this.stateAfterAttributeName(e)); };
    Ne.prototype.stateAfterAttributeName = function (e) { e === I.Eq ? this.state = E.BeforeAttributeValue : e === I.Slash || e === I.Gt ? (this.cbs.onattribend(re.NoValue, this.sectionStart), this.sectionStart = -1, this.state = E.BeforeAttributeName, this.stateBeforeAttributeName(e)) : le(e) || (this.cbs.onattribend(re.NoValue, this.sectionStart), this.state = E.InAttributeName, this.sectionStart = this.index); };
    Ne.prototype.stateBeforeAttributeValue = function (e) { e === I.DoubleQuote ? (this.state = E.InAttributeValueDq, this.sectionStart = this.index + 1) : e === I.SingleQuote ? (this.state = E.InAttributeValueSq, this.sectionStart = this.index + 1) : le(e) || (this.sectionStart = this.index, this.state = E.InAttributeValueNq, this.stateInAttributeValueNoQuotes(e)); };
    Ne.prototype.handleInAttributeValue = function (e, r) { e === r || !this.decodeEntities && this.fastForwardTo(r) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(r === I.DoubleQuote ? re.Double : re.Single, this.index + 1), this.state = E.BeforeAttributeName) : this.decodeEntities && e === I.Amp && this.startEntity(); };
    Ne.prototype.stateInAttributeValueDoubleQuotes = function (e) { this.handleInAttributeValue(e, I.DoubleQuote); };
    Ne.prototype.stateInAttributeValueSingleQuotes = function (e) { this.handleInAttributeValue(e, I.SingleQuote); };
    Ne.prototype.stateInAttributeValueNoQuotes = function (e) { le(e) || e === I.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(re.Unquoted, this.index), this.state = E.BeforeAttributeName, this.stateBeforeAttributeName(e)) : this.decodeEntities && e === I.Amp && this.startEntity(); };
    Ne.prototype.stateBeforeDeclaration = function (e) { e === I.OpeningSquareBracket ? (this.state = E.CDATASequence, this.sequenceIndex = 0) : this.state = e === I.Dash ? E.BeforeComment : E.InDeclaration; };
    Ne.prototype.stateInDeclaration = function (e) { (e === I.Gt || this.fastForwardTo(I.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = E.Text, this.sectionStart = this.index + 1); };
    Ne.prototype.stateInProcessingInstruction = function (e) { (e === I.Gt || this.fastForwardTo(I.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = E.Text, this.sectionStart = this.index + 1); };
    Ne.prototype.stateBeforeComment = function (e) { e === I.Dash ? (this.state = E.InCommentLike, this.currentSequence = K.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = E.InDeclaration; };
    Ne.prototype.stateInSpecialComment = function (e) { (e === I.Gt || this.fastForwardTo(I.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = E.Text, this.sectionStart = this.index + 1); };
    Ne.prototype.stateBeforeSpecialS = function (e) { var r = e | 32; r === K.ScriptEnd[3] ? this.startSpecial(K.ScriptEnd, 4) : r === K.StyleEnd[3] ? this.startSpecial(K.StyleEnd, 4) : (this.state = E.InTagName, this.stateInTagName(e)); };
    Ne.prototype.stateBeforeSpecialT = function (e) { var r = e | 32; r === K.TitleEnd[3] ? this.startSpecial(K.TitleEnd, 4) : r === K.TextareaEnd[3] ? this.startSpecial(K.TextareaEnd, 4) : (this.state = E.InTagName, this.stateInTagName(e)); };
    Ne.prototype.startEntity = function () { this.baseState = this.state, this.state = E.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? ue.Strict : this.baseState === E.Text || this.baseState === E.InSpecialTag ? ue.Legacy : ue.Attribute); };
    Ne.prototype.stateInEntity = function () { var e = this.entityDecoder.write(this.buffer, this.index - this.offset); e >= 0 ? (this.state = this.baseState, e === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Ne.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === E.Text || this.state === E.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === E.InAttributeValueDq || this.state === E.InAttributeValueSq || this.state === E.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Ne.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Ne.prototype.parse = function () { for (; this.shouldContinue();) {
        var e = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case E.Text: {
                this.stateText(e);
                break;
            }
            case E.SpecialStartSequence: {
                this.stateSpecialStartSequence(e);
                break;
            }
            case E.InSpecialTag: {
                this.stateInSpecialTag(e);
                break;
            }
            case E.CDATASequence: {
                this.stateCDATASequence(e);
                break;
            }
            case E.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(e);
                break;
            }
            case E.InAttributeName: {
                this.stateInAttributeName(e);
                break;
            }
            case E.InCommentLike: {
                this.stateInCommentLike(e);
                break;
            }
            case E.InSpecialComment: {
                this.stateInSpecialComment(e);
                break;
            }
            case E.BeforeAttributeName: {
                this.stateBeforeAttributeName(e);
                break;
            }
            case E.InTagName: {
                this.stateInTagName(e);
                break;
            }
            case E.InClosingTagName: {
                this.stateInClosingTagName(e);
                break;
            }
            case E.BeforeTagName: {
                this.stateBeforeTagName(e);
                break;
            }
            case E.AfterAttributeName: {
                this.stateAfterAttributeName(e);
                break;
            }
            case E.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(e);
                break;
            }
            case E.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(e);
                break;
            }
            case E.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(e);
                break;
            }
            case E.AfterClosingTagName: {
                this.stateAfterClosingTagName(e);
                break;
            }
            case E.BeforeSpecialS: {
                this.stateBeforeSpecialS(e);
                break;
            }
            case E.BeforeSpecialT: {
                this.stateBeforeSpecialT(e);
                break;
            }
            case E.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(e);
                break;
            }
            case E.InSelfClosingTag: {
                this.stateInSelfClosingTag(e);
                break;
            }
            case E.InDeclaration: {
                this.stateInDeclaration(e);
                break;
            }
            case E.BeforeDeclaration: {
                this.stateBeforeDeclaration(e);
                break;
            }
            case E.BeforeComment: {
                this.stateBeforeComment(e);
                break;
            }
            case E.InProcessingInstruction: {
                this.stateInProcessingInstruction(e);
                break;
            }
            case E.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Ne.prototype.finish = function () { this.state === E.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Ne.prototype.handleTrailingData = function () { var e = this.buffer.length + this.offset; this.sectionStart >= e || (this.state === E.InCommentLike ? this.currentSequence === K.CdataEnd ? this.cbs.oncdata(this.sectionStart, e, 0) : this.cbs.oncomment(this.sectionStart, e, 0) : this.state === E.InTagName || this.state === E.BeforeAttributeName || this.state === E.BeforeAttributeValue || this.state === E.AfterAttributeName || this.state === E.InAttributeName || this.state === E.InAttributeValueSq || this.state === E.InAttributeValueDq || this.state === E.InAttributeValueNq || this.state === E.InClosingTagName || this.cbs.ontext(this.sectionStart, e)); };
    Ne.prototype.emitCodePoint = function (e, r) { this.baseState !== E.Text && this.baseState !== E.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + r, this.index = this.sectionStart - 1, this.cbs.onattribentity(e)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + r, this.index = this.sectionStart - 1, this.cbs.ontextentity(e, this.sectionStart)); };
    return Ne;
}());
var _e = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), F = new Set(["p"]), Bu = new Set(["thead", "tbody"]), Fu = new Set(["dd", "dt"]), ju = new Set(["rt", "rp"]), ca = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", F], ["h1", F], ["h2", F], ["h3", F], ["h4", F], ["h5", F], ["h6", F], ["select", _e], ["input", _e], ["output", _e], ["button", _e], ["datalist", _e], ["textarea", _e], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Fu], ["dt", Fu], ["address", F], ["article", F], ["aside", F], ["blockquote", F], ["details", F], ["div", F], ["dl", F], ["fieldset", F], ["figcaption", F], ["figure", F], ["footer", F], ["form", F], ["header", F], ["hr", F], ["main", F], ["nav", F], ["ol", F], ["pre", F], ["section", F], ["table", F], ["ul", F], ["rt", ju], ["rp", ju], ["tbody", Bu], ["tfoot", Bu]]), sa = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Vu = new Set(["math", "svg"]), zu = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), oa = /\s|\//, Ve = (function () {
    function Ve(e, r) {
        if (r === void 0) { r = {}; }
        var n, c, o, g, v, y;
        this.options = r, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = e != null ? e : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (n = r.lowerCaseTags) !== null && n !== void 0 ? n : this.htmlMode, this.lowerCaseAttributeNames = (c = r.lowerCaseAttributeNames) !== null && c !== void 0 ? c : this.htmlMode, this.recognizeSelfClosing = (o = r.recognizeSelfClosing) !== null && o !== void 0 ? o : !this.htmlMode, this.tokenizer = new ((g = r.Tokenizer) !== null && g !== void 0 ? g : Ne)(this.options, this), this.foreignContext = [!this.htmlMode], (y = (v = this.cbs).onparserinit) === null || y === void 0 || y.call(v, this);
    }
    Ve.prototype.ontext = function (e, r) { var n, c; var o = this.getSlice(e, r); this.endIndex = r - 1, (c = (n = this.cbs).ontext) === null || c === void 0 || c.call(n, o), this.startIndex = r; };
    Ve.prototype.ontextentity = function (e, r) { var n, c; this.endIndex = r - 1, (c = (n = this.cbs).ontext) === null || c === void 0 || c.call(n, Ce(e)), this.startIndex = r; };
    Ve.prototype.isVoidElement = function (e) { return this.htmlMode && sa.has(e); };
    Ve.prototype.onopentagname = function (e, r) { this.endIndex = r; var n = this.getSlice(e, r); this.lowerCaseTagNames && (n = n.toLowerCase()), this.emitOpenTag(n); };
    Ve.prototype.emitOpenTag = function (e) { var r, n, c, o; this.openTagStart = this.startIndex, this.tagname = e; var g = this.htmlMode && ca.get(e); if (g)
        for (; this.stack.length > 0 && g.has(this.stack[0]);) {
            var v = this.stack.shift();
            (n = (r = this.cbs).onclosetag) === null || n === void 0 || n.call(r, v, !0);
        } this.isVoidElement(e) || (this.stack.unshift(e), this.htmlMode && (Vu.has(e) ? this.foreignContext.unshift(!0) : zu.has(e) && this.foreignContext.unshift(!1))), (o = (c = this.cbs).onopentagname) === null || o === void 0 || o.call(c, e), this.cbs.onopentag && (this.attribs = {}); };
    Ve.prototype.endOpenTag = function (e) { var r, n; this.startIndex = this.openTagStart, this.attribs && ((n = (r = this.cbs).onopentag) === null || n === void 0 || n.call(r, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    Ve.prototype.onopentagend = function (e) { this.endIndex = e, this.endOpenTag(!1), this.startIndex = e + 1; };
    Ve.prototype.onclosetag = function (e, r) { var n, c, o, g, v, y, S, T; this.endIndex = r; var L = this.getSlice(e, r); if (this.lowerCaseTagNames && (L = L.toLowerCase()), this.htmlMode && (Vu.has(L) || zu.has(L)) && this.foreignContext.shift(), this.isVoidElement(L))
        this.htmlMode && L === "br" && ((g = (o = this.cbs).onopentagname) === null || g === void 0 || g.call(o, "br"), (y = (v = this.cbs).onopentag) === null || y === void 0 || y.call(v, "br", {}, !0), (T = (S = this.cbs).onclosetag) === null || T === void 0 || T.call(S, "br", !1));
    else {
        var q = this.stack.indexOf(L);
        if (q !== -1)
            for (var N = 0; N <= q; N++) {
                var O = this.stack.shift();
                (c = (n = this.cbs).onclosetag) === null || c === void 0 || c.call(n, O, N !== q);
            }
        else
            this.htmlMode && L === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = r + 1; };
    Ve.prototype.onselfclosingtag = function (e) { this.endIndex = e, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = e + 1) : this.onopentagend(e); };
    Ve.prototype.closeCurrentTag = function (e) { var r, n; var c = this.tagname; this.endOpenTag(e), this.stack[0] === c && ((n = (r = this.cbs).onclosetag) === null || n === void 0 || n.call(r, c, !e), this.stack.shift()); };
    Ve.prototype.onattribname = function (e, r) { this.startIndex = e; var n = this.getSlice(e, r); this.attribname = this.lowerCaseAttributeNames ? n.toLowerCase() : n; };
    Ve.prototype.onattribdata = function (e, r) { this.attribvalue += this.getSlice(e, r); };
    Ve.prototype.onattribentity = function (e) { this.attribvalue += Ce(e); };
    Ve.prototype.onattribend = function (e, r) { var n, c; this.endIndex = r, (c = (n = this.cbs).onattribute) === null || c === void 0 || c.call(n, this.attribname, this.attribvalue, e === re.Double ? '"' : e === re.Single ? "'" : e === re.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    Ve.prototype.getInstructionName = function (e) { var r = e.search(oa), n = r < 0 ? e : e.substr(0, r); return this.lowerCaseTagNames && (n = n.toLowerCase()), n; };
    Ve.prototype.ondeclaration = function (e, r) { this.endIndex = r; var n = this.getSlice(e, r); if (this.cbs.onprocessinginstruction) {
        var c = this.getInstructionName(n);
        this.cbs.onprocessinginstruction("!".concat(c), "!".concat(n));
    } this.startIndex = r + 1; };
    Ve.prototype.onprocessinginstruction = function (e, r) { this.endIndex = r; var n = this.getSlice(e, r); if (this.cbs.onprocessinginstruction) {
        var c = this.getInstructionName(n);
        this.cbs.onprocessinginstruction("?".concat(c), "?".concat(n));
    } this.startIndex = r + 1; };
    Ve.prototype.oncomment = function (e, r, n) { var c, o, g, v; this.endIndex = r, (o = (c = this.cbs).oncomment) === null || o === void 0 || o.call(c, this.getSlice(e, r - n)), (v = (g = this.cbs).oncommentend) === null || v === void 0 || v.call(g), this.startIndex = r + 1; };
    Ve.prototype.oncdata = function (e, r, n) { var c, o, g, v, y, S, T, L, q, N; this.endIndex = r; var O = this.getSlice(e, r - n); !this.htmlMode || this.options.recognizeCDATA ? ((o = (c = this.cbs).oncdatastart) === null || o === void 0 || o.call(c), (v = (g = this.cbs).ontext) === null || v === void 0 || v.call(g, O), (S = (y = this.cbs).oncdataend) === null || S === void 0 || S.call(y)) : ((L = (T = this.cbs).oncomment) === null || L === void 0 || L.call(T, "[CDATA[".concat(O, "]]")), (N = (q = this.cbs).oncommentend) === null || N === void 0 || N.call(q)), this.startIndex = r + 1; };
    Ve.prototype.onend = function () { var e, r; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var n = 0; n < this.stack.length; n++)
            this.cbs.onclosetag(this.stack[n], !0);
    } (r = (e = this.cbs).onend) === null || r === void 0 || r.call(e); };
    Ve.prototype.reset = function () { var e, r, n, c; (r = (e = this.cbs).onreset) === null || r === void 0 || r.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (c = (n = this.cbs).onparserinit) === null || c === void 0 || c.call(n, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    Ve.prototype.parseComplete = function (e) { this.reset(), this.end(e); };
    Ve.prototype.getSlice = function (e, r) { for (; e - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var n = this.buffers[0].slice(e - this.bufferOffset, r - this.bufferOffset); for (; r - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), n += this.buffers[0].slice(0, r - this.bufferOffset); return n; };
    Ve.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    Ve.prototype.write = function (e) { var r, n; if (this.ended) {
        (n = (r = this.cbs).onerror) === null || n === void 0 || n.call(r, new Error(".write() after done!"));
        return;
    } this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++); };
    Ve.prototype.end = function (e) { var r, n; if (this.ended) {
        (n = (r = this.cbs).onerror) === null || n === void 0 || n.call(r, new Error(".end() after done!"));
        return;
    } e && this.write(e), this.ended = !0, this.tokenizer.end(); };
    Ve.prototype.pause = function () { this.tokenizer.pause(); };
    Ve.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    Ve.prototype.parseChunk = function (e) { this.write(e); };
    Ve.prototype.done = function (e) { this.end(e); };
    return Ve;
}());
var nt = {};
Ot(nt, { CDATA: function () { return $t; }, Comment: function () { return zt; }, Directive: function () { return Vt; }, Doctype: function () { return Jt; }, ElementType: function () { return U; }, Root: function () { return Ft; }, Script: function () { return Ht; }, Style: function () { return Rt; }, Tag: function () { return Gt; }, Text: function () { return jt; }, isTag: function () { return Bt; } });
var U;
(function (t) { t.Root = "root", t.Text = "text", t.Directive = "directive", t.Comment = "comment", t.Script = "script", t.Style = "style", t.Tag = "tag", t.CDATA = "cdata", t.Doctype = "doctype"; })(U || (U = {}));
function Bt(t) { return t.type === U.Tag || t.type === U.Script || t.type === U.Style; }
var Ft = U.Root, jt = U.Text, Vt = U.Directive, zt = U.Comment, Ht = U.Script, Rt = U.Style, Gt = U.Tag, $t = U.CDATA, Jt = U.Doctype;
var it = (function () {
    function it() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(it.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (e) { this.parent = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(it.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (e) { this.prev = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(it.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (e) { this.next = e; },
        enumerable: false,
        configurable: true
    });
    it.prototype.cloneNode = function (e) {
        if (e === void 0) { e = !1; }
        return Hu(this, e);
    };
    return it;
}()), ze = (function (_super) {
    __extends(ze, _super);
    function ze(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = e;
        return _this;
    }
    Object.defineProperty(ze.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (e) { this.data = e; },
        enumerable: false,
        configurable: true
    });
    return ze;
}(it)), De = (function (_super) {
    __extends(De, _super);
    function De() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = U.Text;
        return _this;
    }
    Object.defineProperty(De.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return De;
}(ze)), He = (function (_super) {
    __extends(He, _super);
    function He() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = U.Comment;
        return _this;
    }
    Object.defineProperty(He.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return He;
}(ze)), Re = (function (_super) {
    __extends(Re, _super);
    function Re(e, r) {
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = e, _this.type = U.Directive;
        return _this;
    }
    Object.defineProperty(Re.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return Re;
}(ze)), Ge = (function (_super) {
    __extends(Ge, _super);
    function Ge(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = e;
        return _this;
    }
    Object.defineProperty(Ge.prototype, "firstChild", {
        get: function () { var e; return (e = this.children[0]) !== null && e !== void 0 ? e : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ge.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ge.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (e) { this.children = e; },
        enumerable: false,
        configurable: true
    });
    return Ge;
}(it)), $e = (function (_super) {
    __extends($e, _super);
    function $e() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = U.CDATA;
        return _this;
    }
    Object.defineProperty($e.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return $e;
}(Ge)), Ie = (function (_super) {
    __extends(Ie, _super);
    function Ie() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = U.Root;
        return _this;
    }
    Object.defineProperty(Ie.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return Ie;
}(Ge)), Je = (function (_super) {
    __extends(Je, _super);
    function Je(e, r, n, c) {
        if (n === void 0) { n = []; }
        if (c === void 0) { c = e === "script" ? U.Script : e === "style" ? U.Style : U.Tag; }
        var _this = this;
        _this = _super.call(this, n) || this, _this.name = e, _this.attribs = r, _this.type = c;
        return _this;
    }
    Object.defineProperty(Je.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Je.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (e) { this.name = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Je.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (e) { var r, n; return { name: e, value: _this.attribs[e], namespace: (r = _this["x-attribsNamespace"]) === null || r === void 0 ? void 0 : r[e], prefix: (n = _this["x-attribsPrefix"]) === null || n === void 0 ? void 0 : n[e] }; });
        },
        enumerable: false,
        configurable: true
    });
    return Je;
}(Ge));
function M(t) { return Bt(t); }
function Le(t) { return t.type === U.CDATA; }
function ce(t) { return t.type === U.Text; }
function We(t) { return t.type === U.Comment; }
function fa(t) { return t.type === U.Directive; }
function Xt(t) { return t.type === U.Root; }
function Z(t) { return Object.prototype.hasOwnProperty.call(t, "children"); }
function Hu(t, e) {
    if (e === void 0) { e = !1; }
    var r;
    if (ce(t))
        r = new De(t.data);
    else if (We(t))
        r = new He(t.data);
    else if (M(t)) {
        var n = e ? Wt(t.children) : [], c_1 = new Je(t.name, ie({}, t.attribs), n);
        n.forEach(function (o) { return o.parent = c_1; }), t.namespace != null && (c_1.namespace = t.namespace), t["x-attribsNamespace"] && (c_1["x-attribsNamespace"] = ie({}, t["x-attribsNamespace"])), t["x-attribsPrefix"] && (c_1["x-attribsPrefix"] = ie({}, t["x-attribsPrefix"])), r = c_1;
    }
    else if (Le(t)) {
        var n = e ? Wt(t.children) : [], c_2 = new $e(n);
        n.forEach(function (o) { return o.parent = c_2; }), r = c_2;
    }
    else if (Xt(t)) {
        var n = e ? Wt(t.children) : [], c_3 = new Ie(n);
        n.forEach(function (o) { return o.parent = c_3; }), t["x-mode"] && (c_3["x-mode"] = t["x-mode"]), r = c_3;
    }
    else if (fa(t)) {
        var n = new Re(t.name, t.data);
        t["x-name"] != null && (n["x-name"] = t["x-name"], n["x-publicId"] = t["x-publicId"], n["x-systemId"] = t["x-systemId"]), r = n;
    }
    else
        throw new Error("Not implemented yet: ".concat(t.type));
    return r.startIndex = t.startIndex, r.endIndex = t.endIndex, t.sourceCodeLocation != null && (r.sourceCodeLocation = t.sourceCodeLocation), r;
}
function Wt(t) { var e = t.map(function (r) { return Hu(r, !0); }); for (var r = 1; r < e.length; r++)
    e[r].prev = e[r - 1], e[r - 1].next = e[r]; return e; }
var Ru = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, Oe = (function () {
    function Oe(e, r, n) {
        this.dom = [], this.root = new Ie(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof r == "function" && (n = r, r = Ru), typeof e == "object" && (r = e, e = void 0), this.callback = e != null ? e : null, this.options = r != null ? r : Ru, this.elementCB = n != null ? n : null;
    }
    Oe.prototype.onparserinit = function (e) { this.parser = e; };
    Oe.prototype.onreset = function () { this.dom = [], this.root = new Ie(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    Oe.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    Oe.prototype.onerror = function (e) { this.handleCallback(e); };
    Oe.prototype.onclosetag = function () { this.lastNode = null; var e = this.tagStack.pop(); this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e); };
    Oe.prototype.onopentag = function (e, r) { var n = this.options.xmlMode ? U.Tag : void 0, c = new Je(e, r, void 0, n); this.addNode(c), this.tagStack.push(c); };
    Oe.prototype.ontext = function (e) { var r = this.lastNode; if (r && r.type === U.Text)
        r.data += e, this.options.withEndIndices && (r.endIndex = this.parser.endIndex);
    else {
        var n = new De(e);
        this.addNode(n), this.lastNode = n;
    } };
    Oe.prototype.oncomment = function (e) { if (this.lastNode && this.lastNode.type === U.Comment) {
        this.lastNode.data += e;
        return;
    } var r = new He(e); this.addNode(r), this.lastNode = r; };
    Oe.prototype.oncommentend = function () { this.lastNode = null; };
    Oe.prototype.oncdatastart = function () { var e = new De(""), r = new $e([e]); this.addNode(r), e.parent = r, this.lastNode = e; };
    Oe.prototype.oncdataend = function () { this.lastNode = null; };
    Oe.prototype.onprocessinginstruction = function (e, r) { var n = new Re(e, r); this.addNode(n); };
    Oe.prototype.handleCallback = function (e) { if (typeof this.callback == "function")
        this.callback(e, this.dom);
    else if (e)
        throw e; };
    Oe.prototype.addNode = function (e) { var r = this.tagStack[this.tagStack.length - 1], n = r.children[r.children.length - 1]; this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), r.children.push(e), n && (e.prev = n, n.next = e), e.parent = r, this.lastNode = null; };
    return Oe;
}());
var se = {};
Ot(se, { DocumentPosition: function () { return ae; }, append: function () { return _a; }, appendChild: function () { return Na; }, compareDocumentPosition: function () { return nr; }, existsOne: function () { return rr; }, filter: function () { return Pe; }, find: function () { return ht; }, findAll: function () { return La; }, findOne: function () { return pt; }, findOneChild: function () { return Ia; }, getAttributeValue: function () { return Ea; }, getChildren: function () { return lt; }, getElementById: function () { return Ma; }, getElements: function () { return Pa; }, getElementsByClassName: function () { return Ba; }, getElementsByTagName: function () { return Se; }, getElementsByTagType: function () { return Fa; }, getFeed: function () { return cu; }, getInnerHTML: function () { return ka; }, getName: function () { return Ca; }, getOuterHTML: function () { return tr; }, getParent: function () { return ur; }, getSiblings: function () { return dt; }, getText: function () { return ft; }, hasAttrib: function () { return Ta; }, hasChildren: function () { return Z; }, innerText: function () { return tu; }, isCDATA: function () { return Le; }, isComment: function () { return We; }, isDocument: function () { return Xt; }, isTag: function () { return M; }, isText: function () { return ce; }, nextElementSibling: function () { return uu; }, prepend: function () { return au; }, prependChild: function () { return Da; }, prevElementSibling: function () { return ru; }, removeElement: function () { return de; }, removeSubsets: function () { return ja; }, replaceElement: function () { return qa; }, testElement: function () { return Ua; }, textContent: function () { return be; }, uniqueSort: function () { return iu; } });
function ct(t) { for (var e = 1; e < t.length; e++)
    t[e][0] += t[e - 1][0] + 1; return t; }
var la = new Map(ct([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(ct([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(ct([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(ct([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var Kt = /["&'<>$\x80-\uFFFF]/g, Gu = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), $u = String.prototype.codePointAt != null ? function (t, e) { return t.codePointAt(e); } : function (t, e) { return (t.charCodeAt(e) & 64512) === 55296 ? (t.charCodeAt(e) - 55296) * 1024 + t.charCodeAt(e + 1) - 56320 + 65536 : t.charCodeAt(e); };
function Xe(t) { var e = "", r = 0, n; for (; (n = Kt.exec(t)) !== null;) {
    var c = n.index, o = t.charCodeAt(c), g = Gu.get(o);
    g !== void 0 ? (e += t.substring(r, c) + g, r = c + 1) : (e += "".concat(t.substring(r, c), "&#x").concat($u(t, c).toString(16), ";"), r = Kt.lastIndex += +((o & 64512) === 55296));
} return e + t.substr(r); }
function Zt(t, e) { return function (n) { var c, o = 0, g = ""; for (; c = t.exec(n);)
    o !== c.index && (g += n.substring(o, c.index)), g += e.get(c[0].charCodeAt(0)), o = c.index + 1; return g + n.substring(o); }; }
var Ju = Zt(/[&<>'"]/g, Gu), st = Zt(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), ot = Zt(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var Wu;
(function (t) { t[t.XML = 0] = "XML", t[t.HTML = 1] = "HTML"; })(Wu || (Wu = {}));
var Xu;
(function (t) { t[t.UTF8 = 0] = "UTF8", t[t.ASCII = 1] = "ASCII", t[t.Extensive = 2] = "Extensive", t[t.Attribute = 3] = "Attribute", t[t.Text = 4] = "Text"; })(Xu || (Xu = {}));
var Qu = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (t) { return [t.toLowerCase(), t]; })), Yu = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (t) { return [t.toLowerCase(), t]; }));
var ha = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function pa(t) { return t.replace(/"/g, "&quot;"); }
function ga(t, e) { var r; if (!t)
    return; var n = ((r = e.encodeEntities) !== null && r !== void 0 ? r : e.decodeEntities) === !1 ? pa : e.xmlMode || e.encodeEntities !== "utf8" ? Xe : st; return Object.keys(t).map(function (c) { var o, g; var v = (o = t[c]) !== null && o !== void 0 ? o : ""; return e.xmlMode === "foreign" && (c = (g = Yu.get(c)) !== null && g !== void 0 ? g : c), !e.emptyAttrs && !e.xmlMode && v === "" ? c : "".concat(c, "=\"").concat(n(v), "\""); }).join(" "); }
var er = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function eu(t, e) {
    if (e === void 0) { e = {}; }
    var r = "length" in t ? t : [t], n = "";
    for (var c = 0; c < r.length; c++)
        n += ba(r[c], e);
    return n;
}
var Ue = eu;
function ba(t, e) { switch (t.type) {
    case Ft: return eu(t.children, e);
    case Jt:
    case Vt: return wa(t);
    case zt: return Aa(t);
    case $t: return Sa(t);
    case Ht:
    case Rt:
    case Gt: return va(t, e);
    case jt: return ya(t, e);
} }
var ma = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), xa = new Set(["svg", "math"]);
function va(t, e) { var r; e.xmlMode === "foreign" && (t.name = (r = Qu.get(t.name)) !== null && r !== void 0 ? r : t.name, t.parent && ma.has(t.parent.name) && (e = we(ie({}, e), { xmlMode: !1 }))), !e.xmlMode && xa.has(t.name) && (e = we(ie({}, e), { xmlMode: "foreign" })); var n = "<".concat(t.name), c = ga(t.attribs, e); return c && (n += " ".concat(c)), t.children.length === 0 && (e.xmlMode ? e.selfClosingTags !== !1 : e.selfClosingTags && er.has(t.name)) ? (e.xmlMode || (n += " "), n += "/>") : (n += ">", t.children.length > 0 && (n += eu(t.children, e)), (e.xmlMode || !er.has(t.name)) && (n += "</".concat(t.name, ">"))), n; }
function wa(t) { return "<".concat(t.data, ">"); }
function ya(t, e) { var r; var n = t.data || ""; return ((r = e.encodeEntities) !== null && r !== void 0 ? r : e.decodeEntities) !== !1 && !(!e.xmlMode && t.parent && ha.has(t.parent.name)) && (n = e.xmlMode || e.encodeEntities !== "utf8" ? Xe(n) : ot(n)), n; }
function Sa(t) { return "<![CDATA[".concat(t.children[0].data, "]]>"); }
function Aa(t) { return "<!--".concat(t.data, "-->"); }
function tr(t, e) { return Ue(t, e); }
function ka(t, e) { return Z(t) ? t.children.map(function (r) { return tr(r, e); }).join("") : ""; }
function ft(t) {
    return Array.isArray(t) ? t.map(ft).join("") : M(t) ? t.name === "br" ? "\n" : ft(t.children) : Le(t) ? ft(t.children) : ce(t) ? t.data : "";
}
function be(t) { return Array.isArray(t) ? t.map(be).join("") : Z(t) && !We(t) ? be(t.children) : ce(t) ? t.data : ""; }
function tu(t) { return Array.isArray(t) ? t.map(tu).join("") : Z(t) && (t.type === U.Tag || Le(t)) ? tu(t.children) : ce(t) ? t.data : ""; }
function lt(t) { return Z(t) ? t.children : []; }
function ur(t) { return t.parent || null; }
function dt(t) {
    var _b, _c;
    var e = ur(t);
    if (e != null)
        return lt(e);
    var r = [t], n = t.prev, c = t.next;
    for (; n != null;)
        r.unshift(n), _b = n, n = _b.prev;
    for (; c != null;)
        r.push(c), _c = c, c = _c.next;
    return r;
}
function Ea(t, e) { var r; return (r = t.attribs) === null || r === void 0 ? void 0 : r[e]; }
function Ta(t, e) { return t.attribs != null && Object.prototype.hasOwnProperty.call(t.attribs, e) && t.attribs[e] != null; }
function Ca(t) { return t.name; }
function uu(t) {
    var _b;
    var e = t.next;
    for (; e !== null && !M(e);)
        (_b = e, e = _b.next);
    return e;
}
function ru(t) {
    var _b;
    var e = t.prev;
    for (; e !== null && !M(e);)
        (_b = e, e = _b.prev);
    return e;
}
function de(t) { if (t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t.parent) {
    var e = t.parent.children, r = e.lastIndexOf(t);
    r >= 0 && e.splice(r, 1);
} t.next = null, t.prev = null, t.parent = null; }
function qa(t, e) { var r = e.prev = t.prev; r && (r.next = e); var n = e.next = t.next; n && (n.prev = e); var c = e.parent = t.parent; if (c) {
    var o = c.children;
    o[o.lastIndexOf(t)] = e, t.parent = null;
} }
function Na(t, e) { if (de(e), e.next = null, e.parent = t, t.children.push(e) > 1) {
    var r = t.children[t.children.length - 2];
    r.next = e, e.prev = r;
}
else
    e.prev = null; }
function _a(t, e) { de(e); var r = t.parent, n = t.next; if (e.next = n, e.prev = t, t.next = e, e.parent = r, n) {
    if (n.prev = e, r) {
        var c = r.children;
        c.splice(c.lastIndexOf(n), 0, e);
    }
}
else
    r && r.children.push(e); }
function Da(t, e) { if (de(e), e.parent = t, e.prev = null, t.children.unshift(e) !== 1) {
    var r = t.children[1];
    r.prev = e, e.next = r;
}
else
    e.next = null; }
function au(t, e) { de(e); var r = t.parent; if (r) {
    var n = r.children;
    n.splice(n.indexOf(t), 0, e);
} t.prev && (t.prev.next = e), e.parent = r, e.prev = t.prev, e.next = t, t.prev = e; }
function Pe(t, e, r, n) {
    if (r === void 0) { r = !0; }
    if (n === void 0) { n = 1 / 0; }
    return ht(t, Array.isArray(e) ? e : [e], r, n);
}
function ht(t, e, r, n) { var c = [], o = [Array.isArray(e) ? e : [e]], g = [0]; for (;;) {
    if (g[0] >= o[0].length) {
        if (g.length === 1)
            return c;
        o.shift(), g.shift();
        continue;
    }
    var v = o[0][g[0]++];
    if (t(v) && (c.push(v), --n <= 0))
        return c;
    r && Z(v) && v.children.length > 0 && (g.unshift(0), o.unshift(v.children));
} }
function Ia(t, e) { return e.find(t); }
function pt(t, e, r) {
    if (r === void 0) { r = !0; }
    var n = Array.isArray(e) ? e : [e];
    for (var c = 0; c < n.length; c++) {
        var o = n[c];
        if (M(o) && t(o))
            return o;
        if (r && Z(o) && o.children.length > 0) {
            var g = pt(t, o.children, !0);
            if (g)
                return g;
        }
    }
    return null;
}
function rr(t, e) { return (Array.isArray(e) ? e : [e]).some(function (r) { return M(r) && t(r) || Z(r) && rr(t, r.children); }); }
function La(t, e) { var r = [], n = [Array.isArray(e) ? e : [e]], c = [0]; for (;;) {
    if (c[0] >= n[0].length) {
        if (n.length === 1)
            return r;
        n.shift(), c.shift();
        continue;
    }
    var o = n[0][c[0]++];
    M(o) && t(o) && r.push(o), Z(o) && o.children.length > 0 && (c.unshift(0), n.unshift(o.children));
} }
var gt = { tag_name: function (t) { return typeof t == "function" ? function (e) { return M(e) && t(e.name); } : t === "*" ? M : function (e) { return M(e) && e.name === t; }; }, tag_type: function (t) { return typeof t == "function" ? function (e) { return t(e.type); } : function (e) { return e.type === t; }; }, tag_contains: function (t) { return typeof t == "function" ? function (e) { return ce(e) && t(e.data); } : function (e) { return ce(e) && e.data === t; }; } };
function nu(t, e) { return typeof e == "function" ? function (r) { return M(r) && e(r.attribs[t]); } : function (r) { return M(r) && r.attribs[t] === e; }; }
function Oa(t, e) { return function (r) { return t(r) || e(r); }; }
function ar(t) { var e = Object.keys(t).map(function (r) { var n = t[r]; return Object.prototype.hasOwnProperty.call(gt, r) ? gt[r](n) : nu(r, n); }); return e.length === 0 ? null : e.reduce(Oa); }
function Ua(t, e) { var r = ar(t); return r ? r(e) : !0; }
function Pa(t, e, r, n) {
    if (n === void 0) { n = 1 / 0; }
    var c = ar(t);
    return c ? Pe(c, e, r, n) : [];
}
function Ma(t, e, r) {
    if (r === void 0) { r = !0; }
    return Array.isArray(e) || (e = [e]), pt(nu("id", t), e, r);
}
function Se(t, e, r, n) {
    if (r === void 0) { r = !0; }
    if (n === void 0) { n = 1 / 0; }
    return Pe(gt.tag_name(t), e, r, n);
}
function Ba(t, e, r, n) {
    if (r === void 0) { r = !0; }
    if (n === void 0) { n = 1 / 0; }
    return Pe(nu("class", t), e, r, n);
}
function Fa(t, e, r, n) {
    if (r === void 0) { r = !0; }
    if (n === void 0) { n = 1 / 0; }
    return Pe(gt.tag_type(t), e, r, n);
}
function ja(t) { var e = t.length; for (; --e >= 0;) {
    var r = t[e];
    if (e > 0 && t.lastIndexOf(r, e - 1) >= 0) {
        t.splice(e, 1);
        continue;
    }
    for (var n = r.parent; n; n = n.parent)
        if (t.includes(n)) {
            t.splice(e, 1);
            break;
        }
} return t; }
var ae;
(function (t) { t[t.DISCONNECTED = 1] = "DISCONNECTED", t[t.PRECEDING = 2] = "PRECEDING", t[t.FOLLOWING = 4] = "FOLLOWING", t[t.CONTAINS = 8] = "CONTAINS", t[t.CONTAINED_BY = 16] = "CONTAINED_BY"; })(ae || (ae = {}));
function nr(t, e) { var r = [], n = []; if (t === e)
    return 0; var c = Z(t) ? t : t.parent; for (; c;)
    r.unshift(c), c = c.parent; for (c = Z(e) ? e : e.parent; c;)
    n.unshift(c), c = c.parent; var o = Math.min(r.length, n.length), g = 0; for (; g < o && r[g] === n[g];)
    g++; if (g === 0)
    return ae.DISCONNECTED; var v = r[g - 1], y = v.children, S = r[g], T = n[g]; return y.indexOf(S) > y.indexOf(T) ? v === e ? ae.FOLLOWING | ae.CONTAINED_BY : ae.FOLLOWING : v === t ? ae.PRECEDING | ae.CONTAINS : ae.PRECEDING; }
function iu(t) { return t = t.filter(function (e, r, n) { return !n.includes(e, r + 1); }), t.sort(function (e, r) { var n = nr(e, r); return n & ae.PRECEDING ? -1 : n & ae.FOLLOWING ? 1 : 0; }), t; }
function cu(t) { var e = bt(Ga, t); return e ? e.name === "feed" ? Va(e) : za(e) : null; }
function Va(t) { var e; var r = t.children, n = { type: "atom", items: Se("entry", r).map(function (g) { var v; var y = g.children, S = { media: ir(y) }; Y(S, "id", "id", y), Y(S, "title", "title", y); var T = (v = bt("link", y)) === null || v === void 0 ? void 0 : v.attribs.href; T && (S.link = T); var L = me("summary", y) || me("content", y); L && (S.description = L); var q = me("updated", y); return q && (S.pubDate = new Date(q)), S; }) }; Y(n, "id", "id", r), Y(n, "title", "title", r); var c = (e = bt("link", r)) === null || e === void 0 ? void 0 : e.attribs.href; c && (n.link = c), Y(n, "description", "subtitle", r); var o = me("updated", r); return o && (n.updated = new Date(o)), Y(n, "author", "email", r, !0), n; }
function za(t) { var e, r; var n = (r = (e = bt("channel", t.children)) === null || e === void 0 ? void 0 : e.children) !== null && r !== void 0 ? r : [], c = { type: t.name.substr(0, 3), id: "", items: Se("item", t.children).map(function (g) { var v = g.children, y = { media: ir(v) }; Y(y, "id", "guid", v), Y(y, "title", "title", v), Y(y, "link", "link", v), Y(y, "description", "description", v); var S = me("pubDate", v) || me("dc:date", v); return S && (y.pubDate = new Date(S)), y; }) }; Y(c, "title", "title", n), Y(c, "link", "link", n), Y(c, "description", "description", n); var o = me("lastBuildDate", n); return o && (c.updated = new Date(o)), Y(c, "author", "managingEditor", n, !0), c; }
var Ha = ["url", "type", "lang"], Ra = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function ir(t) { return Se("media:content", t).map(function (e) {
    var e_4, _b, e_5, _c;
    var r = e.attribs, n = { medium: r.medium, isDefault: !!r.isDefault };
    try {
        for (var Ha_1 = __values(Ha), Ha_1_1 = Ha_1.next(); !Ha_1_1.done; Ha_1_1 = Ha_1.next()) {
            var c = Ha_1_1.value;
            r[c] && (n[c] = r[c]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (Ha_1_1 && !Ha_1_1.done && (_b = Ha_1.return)) _b.call(Ha_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var Ra_1 = __values(Ra), Ra_1_1 = Ra_1.next(); !Ra_1_1.done; Ra_1_1 = Ra_1.next()) {
            var c = Ra_1_1.value;
            r[c] && (n[c] = parseInt(r[c], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (Ra_1_1 && !Ra_1_1.done && (_c = Ra_1.return)) _c.call(Ra_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return r.expression && (n.expression = r.expression), n;
}); }
function bt(t, e) { return Se(t, e, !0, 1)[0]; }
function me(t, e, r) {
    if (r === void 0) { r = !1; }
    return be(Se(t, e, r, 1)).trim();
}
function Y(t, e, r, n, c) {
    if (c === void 0) { c = !1; }
    var o = me(r, n, c);
    o && (t[e] = o);
}
function Ga(t) { return t === "rss" || t === "feed" || t === "rdf:RDF"; }
function cr(t, e) { var r = new Oe(void 0, e); return new Ve(r, e).end(t), r.root; }
var _;
(function (t) { t.Attribute = "attribute", t.Pseudo = "pseudo", t.PseudoElement = "pseudo-element", t.Tag = "tag", t.Universal = "universal", t.Adjacent = "adjacent", t.Child = "child", t.Descendant = "descendant", t.Parent = "parent", t.Sibling = "sibling", t.ColumnCombinator = "column-combinator"; })(_ || (_ = {}));
var H;
(function (t) { t.Any = "any", t.Element = "element", t.End = "end", t.Equals = "equals", t.Exists = "exists", t.Hyphen = "hyphen", t.Not = "not", t.Start = "start"; })(H || (H = {}));
var sr = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, $a = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, Ja = new Map([[126, H.Element], [94, H.Start], [36, H.End], [42, H.Any], [33, H.Not], [124, H.Hyphen]]), Wa = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function Ae(t) { switch (t.type) {
    case _.Adjacent:
    case _.Child:
    case _.Descendant:
    case _.Parent:
    case _.Sibling:
    case _.ColumnCombinator: return !0;
    default: return !1;
} }
var Xa = new Set(["contains", "icontains"]);
function Ka(t, e, r) { var n = parseInt(e, 16) - 65536; return n !== n || r ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320); }
function Ke(t) { return t.replace($a, Ka); }
function su(t) { return t === 39 || t === 34; }
function or(t) { return t === 32 || t === 9 || t === 10 || t === 12 || t === 13; }
function xe(t) { var e = [], r = fr(e, "".concat(t), 0); if (r < t.length)
    throw new Error("Unmatched selector: ".concat(t.slice(r))); return e; }
function fr(t, e, r) { var n = []; function c(q) { var N = e.slice(r + q).match(sr); if (!N)
    throw new Error("Expected name, found ".concat(e.slice(r))); var _b = __read(N, 1), O = _b[0]; return r += q + O.length, Ke(O); } function o(q) { for (r += q; r < e.length && or(e.charCodeAt(r));)
    r++; } function g() { r += 1; var q = r, N = 1; for (; N > 0 && r < e.length; r++)
    e.charCodeAt(r) === 40 && !v(r) ? N++ : e.charCodeAt(r) === 41 && !v(r) && N--; if (N)
    throw new Error("Parenthesis not matched"); return Ke(e.slice(q, r - 1)); } function v(q) { var N = 0; for (; e.charCodeAt(--q) === 92;)
    N++; return (N & 1) === 1; } function y() { if (n.length > 0 && Ae(n[n.length - 1]))
    throw new Error("Did not expect successive traversals."); } function S(q) { if (n.length > 0 && n[n.length - 1].type === _.Descendant) {
    n[n.length - 1].type = q;
    return;
} y(), n.push({ type: q }); } function T(q, N) { n.push({ type: _.Attribute, name: q, action: N, value: c(1), namespace: null, ignoreCase: "quirks" }); } function L() { if (n.length && n[n.length - 1].type === _.Descendant && n.pop(), n.length === 0)
    throw new Error("Empty sub-selector"); t.push(n); } if (o(0), e.length === r)
    return r; e: for (; r < e.length;) {
    var q = e.charCodeAt(r);
    switch (q) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (n.length === 0 || n[0].type !== _.Descendant) && (y(), n.push({ type: _.Descendant })), o(1);
            break;
        }
        case 62: {
            S(_.Child), o(1);
            break;
        }
        case 60: {
            S(_.Parent), o(1);
            break;
        }
        case 126: {
            S(_.Sibling), o(1);
            break;
        }
        case 43: {
            S(_.Adjacent), o(1);
            break;
        }
        case 46: {
            T("class", H.Element);
            break;
        }
        case 35: {
            T("id", H.Equals);
            break;
        }
        case 91: {
            o(1);
            var N = void 0, O = null;
            e.charCodeAt(r) === 124 ? N = c(1) : e.startsWith("*|", r) ? (O = "*", N = c(2)) : (N = c(0), e.charCodeAt(r) === 124 && e.charCodeAt(r + 1) !== 61 && (O = N, N = c(1))), o(0);
            var P = H.Exists, Q = Ja.get(e.charCodeAt(r));
            if (Q) {
                if (P = Q, e.charCodeAt(r + 1) !== 61)
                    throw new Error("Expected `=`");
                o(2);
            }
            else
                e.charCodeAt(r) === 61 && (P = H.Equals, o(1));
            var te = "", fe = null;
            if (P !== "exists") {
                if (su(e.charCodeAt(r))) {
                    var s = e.charCodeAt(r), d = r + 1;
                    for (; d < e.length && (e.charCodeAt(d) !== s || v(d));)
                        d += 1;
                    if (e.charCodeAt(d) !== s)
                        throw new Error("Attribute value didn't end");
                    te = Ke(e.slice(r + 1, d)), r = d + 1;
                }
                else {
                    var s = r;
                    for (; r < e.length && (!or(e.charCodeAt(r)) && e.charCodeAt(r) !== 93 || v(r));)
                        r += 1;
                    te = Ke(e.slice(s, r));
                }
                o(0);
                var k = e.charCodeAt(r) | 32;
                k === 115 ? (fe = !1, o(1)) : k === 105 && (fe = !0, o(1));
            }
            if (e.charCodeAt(r) !== 93)
                throw new Error("Attribute selector didn't terminate");
            r += 1;
            var R = { type: _.Attribute, name: N, action: P, value: te, namespace: O, ignoreCase: fe };
            n.push(R);
            break;
        }
        case 58: {
            if (e.charCodeAt(r + 1) === 58) {
                n.push({ type: _.PseudoElement, name: c(2).toLowerCase(), data: e.charCodeAt(r) === 40 ? g() : null });
                continue;
            }
            var N = c(1).toLowerCase(), O = null;
            if (e.charCodeAt(r) === 40)
                if (Wa.has(N)) {
                    if (su(e.charCodeAt(r + 1)))
                        throw new Error("Pseudo-selector ".concat(N, " cannot be quoted"));
                    if (O = [], r = fr(O, e, r + 1), e.charCodeAt(r) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(N, " (").concat(e, ")"));
                    r += 1;
                }
                else {
                    if (O = g(), Xa.has(N)) {
                        var P = O.charCodeAt(0);
                        P === O.charCodeAt(O.length - 1) && su(P) && (O = O.slice(1, -1));
                    }
                    O = Ke(O);
                }
            n.push({ type: _.Pseudo, name: N, data: O });
            break;
        }
        case 44: {
            L(), n = [], o(1);
            break;
        }
        default: {
            if (e.startsWith("/*", r)) {
                var P = e.indexOf("*/", r + 2);
                if (P < 0)
                    throw new Error("Comment was not terminated");
                r = P + 2, n.length === 0 && o(0);
                break;
            }
            var N = null, O = void 0;
            if (q === 42)
                r += 1, O = "*";
            else if (q === 124) {
                if (O = "", e.charCodeAt(r + 1) === 124) {
                    S(_.ColumnCombinator), o(2);
                    break;
                }
            }
            else if (sr.test(e.slice(r)))
                O = c(0);
            else
                break e;
            e.charCodeAt(r) === 124 && e.charCodeAt(r + 1) !== 124 && (N = O, e.charCodeAt(r + 1) === 42 ? (O = "*", r += 2) : O = c(1)), n.push(O === "*" ? { type: _.Universal, namespace: N } : { type: _.Tag, name: O, namespace: N });
        }
    }
} return L(), r; }
var vu = ye(ve(), 1);
var he = ye(ve(), 1);
var dr = new Map([[_.Universal, 50], [_.Tag, 30], [_.Attribute, 1], [_.Pseudo, 0]]);
function Ze(t) { return !dr.has(t.type); }
var Za = new Map([[H.Exists, 10], [H.Equals, 8], [H.Not, 7], [H.Start, 6], [H.End, 6], [H.Any, 5]]);
function ou(t) { var e = t.map(hr); for (var r = 1; r < t.length; r++) {
    var n = e[r];
    if (!(n < 0))
        for (var c = r - 1; c >= 0 && n < e[c]; c--) {
            var o = t[c + 1];
            t[c + 1] = t[c], t[c] = o, e[c + 1] = e[c], e[c] = n;
        }
} }
function hr(t) { var e, r; var n = (e = dr.get(t.type)) !== null && e !== void 0 ? e : -1; return t.type === _.Attribute ? (n = (r = Za.get(t.action)) !== null && r !== void 0 ? r : 4, t.action === H.Equals && t.name === "id" && (n = 9), t.ignoreCase && (n >>= 1)) : t.type === _.Pseudo && (t.data ? t.name === "has" || t.name === "contains" ? n = 0 : Array.isArray(t.data) ? (n = Math.min.apply(Math, __spreadArray([], __read(t.data.map(function (c) { return Math.min.apply(Math, __spreadArray([], __read(c.map(hr)), false)); })), false)), n < 0 && (n = 0)) : n = 2 : n = 3), n; }
var Qe = ye(ve(), 1), Qa = /[-[\]{}()*+?.,\\^$|#\s]/g;
function pr(t) { return t.replace(Qa, "\\$&"); }
var Ya = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function ke(t, e) { return typeof t.ignoreCase == "boolean" ? t.ignoreCase : t.ignoreCase === "quirks" ? !!e.quirksMode : !e.xmlMode && Ya.has(t.name); }
var gr = { equals: function (t, e, r) { var n = r.adapter, c = e.name, o = e.value; return ke(e, r) ? (o = o.toLowerCase(), function (g) { var v = n.getAttributeValue(g, c); return v != null && v.length === o.length && v.toLowerCase() === o && t(g); }) : function (g) { return n.getAttributeValue(g, c) === o && t(g); }; }, hyphen: function (t, e, r) { var n = r.adapter, c = e.name, o = e.value, g = o.length; return ke(e, r) ? (o = o.toLowerCase(), function (y) { var S = n.getAttributeValue(y, c); return S != null && (S.length === g || S.charAt(g) === "-") && S.substr(0, g).toLowerCase() === o && t(y); }) : function (y) { var S = n.getAttributeValue(y, c); return S != null && (S.length === g || S.charAt(g) === "-") && S.substr(0, g) === o && t(y); }; }, element: function (t, e, r) { var n = r.adapter, c = e.name, o = e.value; if (/\s/.test(o))
        return Qe.default.falseFunc; var g = new RegExp("(?:^|\\s)".concat(pr(o), "(?:$|\\s)"), ke(e, r) ? "i" : ""); return function (y) { var S = n.getAttributeValue(y, c); return S != null && S.length >= o.length && g.test(S) && t(y); }; }, exists: function (t, _b, _c) {
        var e = _b.name;
        var r = _c.adapter;
        return function (n) { return r.hasAttrib(n, e) && t(n); };
    }, start: function (t, e, r) { var n = r.adapter, c = e.name, o = e.value, g = o.length; return g === 0 ? Qe.default.falseFunc : ke(e, r) ? (o = o.toLowerCase(), function (v) { var y = n.getAttributeValue(v, c); return y != null && y.length >= g && y.substr(0, g).toLowerCase() === o && t(v); }) : function (v) { var y; return !!(!((y = n.getAttributeValue(v, c)) === null || y === void 0) && y.startsWith(o)) && t(v); }; }, end: function (t, e, r) { var n = r.adapter, c = e.name, o = e.value, g = -o.length; return g === 0 ? Qe.default.falseFunc : ke(e, r) ? (o = o.toLowerCase(), function (v) { var y; return ((y = n.getAttributeValue(v, c)) === null || y === void 0 ? void 0 : y.substr(g).toLowerCase()) === o && t(v); }) : function (v) { var y; return !!(!((y = n.getAttributeValue(v, c)) === null || y === void 0) && y.endsWith(o)) && t(v); }; }, any: function (t, e, r) { var n = r.adapter, c = e.name, o = e.value; if (o === "")
        return Qe.default.falseFunc; if (ke(e, r)) {
        var g_1 = new RegExp(pr(o), "i");
        return function (y) { var S = n.getAttributeValue(y, c); return S != null && S.length >= o.length && g_1.test(S) && t(y); };
    } return function (g) { var v; return !!(!((v = n.getAttributeValue(g, c)) === null || v === void 0) && v.includes(o)) && t(g); }; }, not: function (t, e, r) { var n = r.adapter, c = e.name, o = e.value; return o === "" ? function (g) { return !!n.getAttributeValue(g, c) && t(g); } : ke(e, r) ? (o = o.toLowerCase(), function (g) { var v = n.getAttributeValue(g, c); return (v == null || v.length !== o.length || v.toLowerCase() !== o) && t(g); }) : function (g) { return n.getAttributeValue(g, c) !== o && t(g); }; } };
var en = new Set([9, 10, 12, 13, 32]), br = 48, tn = 57;
function mr(t) { if (t = t.trim().toLowerCase(), t === "even")
    return [2, 0]; if (t === "odd")
    return [2, 1]; var e = 0, r = 0, n = o(), c = g(); if (e < t.length && t.charAt(e) === "n" && (e++, r = n * (c != null ? c : 1), v(), e < t.length ? (n = o(), v(), c = g()) : n = c = 0), c === null || e < t.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(t, "')")); return [r, n * c]; function o() { return t.charAt(e) === "-" ? (e++, -1) : (t.charAt(e) === "+" && e++, 1); } function g() { var y = e, S = 0; for (; e < t.length && t.charCodeAt(e) >= br && t.charCodeAt(e) <= tn;)
    S = S * 10 + (t.charCodeAt(e) - br), e++; return e === y ? null : S; } function v() { for (; e < t.length && en.has(t.charCodeAt(e));)
    e++; } }
var fu = ye(ve(), 1);
function xr(t) { var e = t[0], r = t[1] - 1; if (r < 0 && e <= 0)
    return fu.default.falseFunc; if (e === -1)
    return function (o) { return o <= r; }; if (e === 0)
    return function (o) { return o === r; }; if (e === 1)
    return r < 0 ? fu.default.trueFunc : function (o) { return o >= r; }; var n = Math.abs(e), c = (r % n + n) % n; return e > 1 ? function (o) { return o >= r && o % n === c; } : function (o) { return o <= r && o % n === c; }; }
function Me(t) { return xr(mr(t)); }
var ee = ye(ve(), 1);
function mt(t, e) { return function (r) { var n = e.getParent(r); return n != null && e.isTag(n) && t(r); }; }
var Be = { contains: function (t, e, _b) {
        var r = _b.adapter;
        return function (c) { return t(c) && r.getText(c).includes(e); };
    }, icontains: function (t, e, _b) {
        var r = _b.adapter;
        var n = e.toLowerCase();
        return function (o) { return t(o) && r.getText(o).toLowerCase().includes(n); };
    }, "nth-child": function (t, e, _b) {
        var r = _b.adapter, n = _b.equals;
        var c = Me(e);
        return c === ee.default.falseFunc ? ee.default.falseFunc : c === ee.default.trueFunc ? mt(t, r) : function (g) { var v = r.getSiblings(g), y = 0; for (var S = 0; S < v.length && !n(g, v[S]); S++)
            r.isTag(v[S]) && y++; return c(y) && t(g); };
    }, "nth-last-child": function (t, e, _b) {
        var r = _b.adapter, n = _b.equals;
        var c = Me(e);
        return c === ee.default.falseFunc ? ee.default.falseFunc : c === ee.default.trueFunc ? mt(t, r) : function (g) { var v = r.getSiblings(g), y = 0; for (var S = v.length - 1; S >= 0 && !n(g, v[S]); S--)
            r.isTag(v[S]) && y++; return c(y) && t(g); };
    }, "nth-of-type": function (t, e, _b) {
        var r = _b.adapter, n = _b.equals;
        var c = Me(e);
        return c === ee.default.falseFunc ? ee.default.falseFunc : c === ee.default.trueFunc ? mt(t, r) : function (g) { var v = r.getSiblings(g), y = 0; for (var S = 0; S < v.length; S++) {
            var T = v[S];
            if (n(g, T))
                break;
            r.isTag(T) && r.getName(T) === r.getName(g) && y++;
        } return c(y) && t(g); };
    }, "nth-last-of-type": function (t, e, _b) {
        var r = _b.adapter, n = _b.equals;
        var c = Me(e);
        return c === ee.default.falseFunc ? ee.default.falseFunc : c === ee.default.trueFunc ? mt(t, r) : function (g) { var v = r.getSiblings(g), y = 0; for (var S = v.length - 1; S >= 0; S--) {
            var T = v[S];
            if (n(g, T))
                break;
            r.isTag(T) && r.getName(T) === r.getName(g) && y++;
        } return c(y) && t(g); };
    }, root: function (t, e, _b) {
        var r = _b.adapter;
        return function (n) { var c = r.getParent(n); return (c == null || !r.isTag(c)) && t(n); };
    }, scope: function (t, e, r, n) { var c = r.equals; return !n || n.length === 0 ? Be.root(t, e, r) : n.length === 1 ? function (o) { return c(n[0], o) && t(o); } : function (o) { return n.includes(o) && t(o); }; }, hover: lu("isHovered"), visited: lu("isVisited"), active: lu("isActive") };
function lu(t) { return function (r, n, _b) {
    var c = _b.adapter;
    var o = c[t];
    return typeof o != "function" ? ee.default.falseFunc : function (v) { return o(v) && r(v); };
}; }
var Ye = { empty: function (t, _b) {
        var e = _b.adapter;
        return !e.getChildren(t).some(function (r) { return e.isTag(r) || e.getText(r) !== ""; });
    }, "first-child": function (t, _b) {
        var e = _b.adapter, r = _b.equals;
        if (e.prevElementSibling)
            return e.prevElementSibling(t) == null;
        var n = e.getSiblings(t).find(function (c) { return e.isTag(c); });
        return n != null && r(t, n);
    }, "last-child": function (t, _b) {
        var e = _b.adapter, r = _b.equals;
        var n = e.getSiblings(t);
        for (var c = n.length - 1; c >= 0; c--) {
            if (r(t, n[c]))
                return !0;
            if (e.isTag(n[c]))
                break;
        }
        return !1;
    }, "first-of-type": function (t, _b) {
        var e = _b.adapter, r = _b.equals;
        var n = e.getSiblings(t), c = e.getName(t);
        for (var o = 0; o < n.length; o++) {
            var g = n[o];
            if (r(t, g))
                return !0;
            if (e.isTag(g) && e.getName(g) === c)
                break;
        }
        return !1;
    }, "last-of-type": function (t, _b) {
        var e = _b.adapter, r = _b.equals;
        var n = e.getSiblings(t), c = e.getName(t);
        for (var o = n.length - 1; o >= 0; o--) {
            var g = n[o];
            if (r(t, g))
                return !0;
            if (e.isTag(g) && e.getName(g) === c)
                break;
        }
        return !1;
    }, "only-of-type": function (t, _b) {
        var e = _b.adapter, r = _b.equals;
        var n = e.getName(t);
        return e.getSiblings(t).every(function (c) { return r(t, c) || !e.isTag(c) || e.getName(c) !== n; });
    }, "only-child": function (t, _b) {
        var e = _b.adapter, r = _b.equals;
        return e.getSiblings(t).every(function (n) { return r(t, n) || !e.isTag(n); });
    } };
function du(t, e, r, n) { if (r === null) {
    if (t.length > n)
        throw new Error("Pseudo-class :".concat(e, " requires an argument"));
}
else if (t.length === n)
    throw new Error("Pseudo-class :".concat(e, " doesn't have any arguments")); }
var xt = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var ne = ye(ve(), 1);
var gu = {};
function bu(t, e) { return t === ne.default.falseFunc ? ne.default.falseFunc : function (r) { return e.isTag(r) && t(r); }; }
function mu(t, e) { var r = e.getSiblings(t); if (r.length <= 1)
    return []; var n = r.indexOf(t); return n < 0 || n === r.length - 1 ? [] : r.slice(n + 1).filter(e.isTag); }
function pu(t) { return { xmlMode: !!t.xmlMode, lowerCaseAttributeNames: !!t.lowerCaseAttributeNames, lowerCaseTags: !!t.lowerCaseTags, quirksMode: !!t.quirksMode, cacheResults: !!t.cacheResults, pseudos: t.pseudos, adapter: t.adapter, equals: t.equals }; }
var hu = function (t, e, r, n, c) { var o = c(e, pu(r), n); return o === ne.default.trueFunc ? t : o === ne.default.falseFunc ? ne.default.falseFunc : function (g) { return o(g) && t(g); }; }, vt = { is: hu, matches: hu, where: hu, not: function (t, e, r, n, c) { var o = c(e, pu(r), n); return o === ne.default.falseFunc ? t : o === ne.default.trueFunc ? ne.default.falseFunc : function (g) { return !o(g) && t(g); }; }, has: function (t, e, r, n, c) { var o = r.adapter, g = pu(r); g.relativeSelector = !0; var v = e.some(function (T) { return T.some(Ze); }) ? [gu] : void 0, y = c(e, g, v); if (y === ne.default.falseFunc)
        return ne.default.falseFunc; var S = bu(y, o); if (v && y !== ne.default.trueFunc) {
        var _b = y.shouldTestNextSiblings, T_1 = _b === void 0 ? !1 : _b;
        return function (L) { if (!t(L))
            return !1; v[0] = L; var q = o.getChildren(L), N = T_1 ? __spreadArray(__spreadArray([], __read(q), false), __read(mu(L, o)), false) : q; return o.existsOne(S, N); };
    } return function (T) { return t(T) && o.existsOne(S, o.getChildren(T)); }; } };
function vr(t, e, r, n, c) { var o; var g = e.name, v = e.data; if (Array.isArray(v)) {
    if (!(g in vt))
        throw new Error("Unknown pseudo-class :".concat(g, "(").concat(v, ")"));
    return vt[g](t, v, r, n, c);
} var y = (o = r.pseudos) === null || o === void 0 ? void 0 : o[g], S = typeof y == "string" ? y : xt[g]; if (typeof S == "string") {
    if (v != null)
        throw new Error("Pseudo ".concat(g, " doesn't have any arguments"));
    var T = xe(S);
    return vt.is(t, T, r, n, c);
} if (typeof y == "function")
    return du(y, g, v, 1), function (T) { return y(T, v) && t(T); }; if (g in Be)
    return Be[g](t, v, r, n); if (g in Ye) {
    var T_2 = Ye[g];
    return du(T_2, g, v, 2), function (L) { return T_2(L, r, v) && t(L); };
} throw new Error("Unknown pseudo-class :".concat(g)); }
function xu(t, e) { var r = e.getParent(t); return r && e.isTag(r) ? r : null; }
function wr(t, e, r, n, c) { var o = r.adapter, g = r.equals; switch (e.type) {
    case _.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case _.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case _.Attribute: {
        if (e.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!r.xmlMode || r.lowerCaseAttributeNames) && (e.name = e.name.toLowerCase()), gr[e.action](t, e, r);
    }
    case _.Pseudo: return vr(t, e, r, n, c);
    case _.Tag: {
        if (e.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var v_1 = e.name;
        return (!r.xmlMode || r.lowerCaseTags) && (v_1 = v_1.toLowerCase()), function (S) { return o.getName(S) === v_1 && t(S); };
    }
    case _.Descendant: {
        if (r.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (S) { var T = S; for (; T = xu(T, o);)
                if (t(T))
                    return !0; return !1; };
        var v_2 = new WeakSet;
        return function (S) { var T = S; for (; T = xu(T, o);)
            if (!v_2.has(T)) {
                if (o.isTag(T) && t(T))
                    return !0;
                v_2.add(T);
            } return !1; };
    }
    case "_flexibleDescendant": return function (y) { var S = y; do
        if (t(S))
            return !0;
    while (S = xu(S, o)); return !1; };
    case _.Parent: return function (y) { return o.getChildren(y).some(function (S) { return o.isTag(S) && t(S); }); };
    case _.Child: return function (y) { var S = o.getParent(y); return S != null && o.isTag(S) && t(S); };
    case _.Sibling: return function (y) { var S = o.getSiblings(y); for (var T = 0; T < S.length; T++) {
        var L = S[T];
        if (g(y, L))
            break;
        if (o.isTag(L) && t(L))
            return !0;
    } return !1; };
    case _.Adjacent: return o.prevElementSibling ? function (y) { var S = o.prevElementSibling(y); return S != null && t(S); } : function (y) { var S = o.getSiblings(y), T; for (var L = 0; L < S.length; L++) {
        var q = S[L];
        if (g(y, q))
            break;
        o.isTag(q) && (T = q);
    } return !!T && t(T); };
    case _.Universal: {
        if (e.namespace != null && e.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return t;
    }
} }
function yr(t, e, r) { var n = wt(t, e, r); return bu(n, e.adapter); }
function wt(t, e, r) { var n = typeof t == "string" ? xe(t) : t; return yt(n, e, r); }
function Sr(t) { return t.type === _.Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function (e) { return e.some(Sr); })); }
var un = { type: _.Descendant }, rn = { type: "_flexibleDescendant" }, an = { type: _.Pseudo, name: "scope", data: null };
function nn(t, _b, r) {
    var e_6, _c;
    var e = _b.adapter;
    var n = !!(r != null && r.every(function (c) { var o = e.isTag(c) && e.getParent(c); return c === gu || o && e.isTag(o); }));
    try {
        for (var t_1 = __values(t), t_1_1 = t_1.next(); !t_1_1.done; t_1_1 = t_1.next()) {
            var c = t_1_1.value;
            if (!(c.length > 0 && Ze(c[0]) && c[0].type !== _.Descendant))
                if (n && !c.some(Sr))
                    c.unshift(un);
                else
                    continue;
            c.unshift(an);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (t_1_1 && !t_1_1.done && (_c = t_1.return)) _c.call(t_1);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
function yt(t, e, r) { var n; t.forEach(ou), r = (n = e.context) !== null && n !== void 0 ? n : r; var c = Array.isArray(r), o = r && (Array.isArray(r) ? r : [r]); if (e.relativeSelector !== !1)
    nn(t, e, o);
else if (t.some(function (y) { return y.length > 0 && Ze(y[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var g = !1, v = t.map(function (y) { if (y.length >= 2) {
    var _b = __read(y, 2), S = _b[0], T = _b[1];
    S.type !== _.Pseudo || S.name !== "scope" || (c && T.type === _.Descendant ? y[1] = rn : (T.type === _.Adjacent || T.type === _.Sibling) && (g = !0));
} return cn(y, e, o); }).reduce(sn, he.default.falseFunc); return v.shouldTestNextSiblings = g, v; }
function cn(t, e, r) { var n; return t.reduce(function (c, o) { return c === he.default.falseFunc ? he.default.falseFunc : wr(c, o, e, r, yt); }, (n = e.rootFunc) !== null && n !== void 0 ? n : he.default.trueFunc); }
function sn(t, e) { return e === he.default.falseFunc || t === he.default.trueFunc ? t : t === he.default.falseFunc || e === he.default.trueFunc ? e : function (n) { return t(n) || e(n); }; }
var Ar = function (t, e) { return t === e; }, on = { adapter: se, equals: Ar };
function kr(t) { var e, r, n, c; var o = t != null ? t : on; return (e = o.adapter) !== null && e !== void 0 || (o.adapter = se), (r = o.equals) !== null && r !== void 0 || (o.equals = (c = (n = o.adapter) === null || n === void 0 ? void 0 : n.equals) !== null && c !== void 0 ? c : Ar), o; }
function wu(t) { return function (r, n, c) { var o = kr(n); return t(r, o, c); }; }
var L0 = wu(yr), O0 = wu(wt), St = wu(yt);
function Er(t) { return function (r, n, c) { var o = kr(c); typeof r != "function" && (r = wt(r, o, n)); var g = At(n, o.adapter, r.shouldTestNextSiblings); return t(r, g, o); }; }
function At(t, e, r) {
    if (r === void 0) { r = !1; }
    return r && (t = fn(t, e)), Array.isArray(t) ? e.removeSubsets(t) : e.getChildren(t);
}
function fn(t, e) { var r = Array.isArray(t) ? t.slice(0) : [t], n = r.length; for (var c = 0; c < n; c++) {
    var o = mu(r[c], e);
    r.push.apply(r, __spreadArray([], __read(o), false));
} return r; }
var U0 = Er(function (t, e, r) { return t === vu.default.falseFunc || !e || e.length === 0 ? [] : r.adapter.findAll(t, e); }), P0 = Er(function (t, e, r) { return t === vu.default.falseFunc || !e || e.length === 0 ? null : r.adapter.findOne(t, e); });
var Et = ye(ve(), 1);
var ln = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function Fe(t) { return t.type !== "pseudo" ? !1 : ln.has(t.name) ? !0 : t.name === "not" && Array.isArray(t.data) ? t.data.some(function (e) { return e.some(Fe); }) : !1; }
function Tr(t, e, r) { var n = e != null ? parseInt(e, 10) : NaN; switch (t) {
    case "first": return 1;
    case "nth":
    case "eq": return isFinite(n) ? n >= 0 ? n + 1 : 1 / 0 : 0;
    case "lt": return isFinite(n) ? n >= 0 ? Math.min(n, r) : 1 / 0 : 0;
    case "gt": return isFinite(n) ? 1 / 0 : 0;
    case "odd": return 2 * r;
    case "even": return 2 * r - 1;
    case "last":
    case "not": return 1 / 0;
} }
function Cr(t) { for (; t.parent;)
    t = t.parent; return t; }
function kt(t) {
    var e_7, _b;
    var e = [], r = [];
    try {
        for (var t_2 = __values(t), t_2_1 = t_2.next(); !t_2_1.done; t_2_1 = t_2.next()) {
            var n = t_2_1.value;
            n.some(Fe) ? e.push(n) : r.push(n);
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (t_2_1 && !t_2_1.done && (_b = t_2.return)) _b.call(t_2);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return [r, e];
}
var dn = { type: _.Universal, namespace: null }, hn = { type: _.Pseudo, name: "scope", data: null };
function Au(t, e, r) {
    if (r === void 0) { r = {}; }
    return pn([t], e, r);
}
function pn(t, e, r) {
    if (r === void 0) { r = {}; }
    if (typeof e == "function")
        return t.some(e);
    var _b = __read(kt(xe(e)), 2), n = _b[0], c = _b[1];
    return n.length > 0 && t.some(St(n, r)) || c.some(function (o) { return qr(o, t, r).length > 0; });
}
function gn(t, e, r, n) { var c = typeof r == "string" ? parseInt(r, 10) : NaN; switch (t) {
    case "first":
    case "lt": return e;
    case "last": return e.length > 0 ? [e[e.length - 1]] : e;
    case "nth":
    case "eq": return isFinite(c) && Math.abs(c) < e.length ? [c < 0 ? e[e.length + c] : e[c]] : [];
    case "gt": return isFinite(c) ? e.slice(c + 1) : [];
    case "even": return e.filter(function (o, g) { return g % 2 === 0; });
    case "odd": return e.filter(function (o, g) { return g % 2 === 1; });
    case "not": {
        var o_1 = new Set(bn(r, e, n));
        return e.filter(function (g) { return !o_1.has(g); });
    }
} }
function bn(t, e, r) { if (e.length === 0)
    return []; var _b = __read(kt(t), 2), n = _b[0], c = _b[1], o; if (n.length) {
    var g = Su(e, n, r);
    if (c.length === 0)
        return g;
    g.length && (o = new Set(g));
} for (var g = 0; g < c.length && (o == null ? void 0 : o.size) !== e.length; g++) {
    var v = c[g];
    if ((o ? e.filter(function (T) { return M(T) && !o.has(T); }) : e).length === 0)
        break;
    var S = qr(v, e, r);
    if (S.length)
        if (o)
            S.forEach(function (T) { return o.add(T); });
        else {
            if (g === c.length - 1)
                return S;
            o = new Set(S);
        }
} return typeof o != "undefined" ? o.size === e.length ? e : e.filter(function (g) { return o.has(g); }) : []; }
function qr(t, e, r) { var n; if (t.some(Ae)) {
    var c = (n = r.root) !== null && n !== void 0 ? n : Cr(e[0]), o = we(ie({}, r), { context: e, relativeSelector: !1 });
    return t.push(hn), Tt(c, t, o, !0, e.length);
} return Tt(e, t, r, !1, e.length); }
function ku(t, e, r, n) {
    if (r === void 0) { r = {}; }
    if (n === void 0) { n = 1 / 0; }
    if (typeof t == "function")
        return Nr(e, t);
    var _b = __read(kt(xe(t)), 2), c = _b[0], o = _b[1], g = o.map(function (v) { return Tt(e, v, r, !0, n); });
    return c.length && g.push(yu(e, c, r, n)), g.length === 0 ? [] : g.length === 1 ? g[0] : iu(g.reduce(function (v, y) { return __spreadArray(__spreadArray([], __read(v), false), __read(y), false); }));
}
function Tt(t, e, r, n, c) { var o = e.findIndex(Fe), g = e.slice(0, o), v = e[o], y = e.length - 1 === o ? c : 1 / 0, S = Tr(v.name, v.data, y); if (S === 0)
    return []; var L = (g.length === 0 && !Array.isArray(t) ? lt(t).filter(M) : g.length === 0 ? (Array.isArray(t) ? t : [t]).filter(M) : n || g.some(Ae) ? yu(t, [g], r, S) : Su(t, [g], r)).slice(0, S), q = gn(v.name, L, v.data, r); if (q.length === 0 || e.length === o + 1)
    return q; var N = e.slice(o + 1), O = N.some(Ae); if (O) {
    if (Ae(N[0])) {
        var P = N[0].type;
        (P === _.Sibling || P === _.Adjacent) && (q = At(q, se, !0)), N.unshift(dn);
    }
    r = we(ie({}, r), { relativeSelector: !1, rootFunc: function (P) { return q.includes(P); } });
}
else
    r.rootFunc && r.rootFunc !== Et.trueFunc && (r = we(ie({}, r), { rootFunc: Et.trueFunc })); return N.some(Fe) ? Tt(q, N, r, !1, c) : O ? yu(q, [N], r, c) : Su(q, [N], r); }
function yu(t, e, r, n) { var c = St(e, r, t); return Nr(t, c, n); }
function Nr(t, e, r) {
    if (r === void 0) { r = 1 / 0; }
    var n = At(t, se, e.shouldTestNextSiblings);
    return ht(function (c) { return M(c) && e(c); }, n, !0, r);
}
function Su(t, e, r) { var n = (Array.isArray(t) ? t : [t]).filter(M); if (n.length === 0)
    return n; var c = St(e, r); return c === Et.trueFunc ? n : n.filter(c); }
function _r(t) { var e = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(t) || []; return { scheme: e[1], auth: e[2], path: e[3] || "", query: e[4], frag: e[5] }; }
function Eu(t) { var e = [], r = t.split("/"); for (var n = 0; n < r.length; n++) {
    var c = r[n];
    c === ".." ? (e.length > 1 && e.pop(), n === r.length - 1 && e.push("")) : c === "." ? n === r.length - 1 && e.push("") : e.push(c);
} return e.join("/"); }
function qt(t, e) { e = e == null ? "" : String(e).trim(); var r = _r(e); if (r.scheme || !t)
    return e; var n = _r(String(t)); if (!n.scheme)
    return e; var c = n.auth, o, g; if (r.auth !== void 0)
    c = r.auth, o = Eu(r.path), g = r.query;
else if (!r.path)
    o = n.path, g = r.query !== void 0 ? r.query : n.query;
else {
    if (r.path.charAt(0) === "/")
        o = Eu(r.path);
    else {
        var v = c !== void 0 && !n.path ? "/" : n.path.slice(0, n.path.lastIndexOf("/") + 1);
        o = Eu(v + r.path);
    }
    g = r.query;
} return c !== void 0 && o.charAt(0) !== "/" && (o = "/" + o), n.scheme + ":" + (c !== void 0 ? "//" + c : "") + o + (g !== void 0 ? "?" + g : "") + (r.frag !== void 0 ? "#" + r.frag : ""); }
var Ct = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function Dr(t) { if (typeof btoa == "function")
    return btoa(t); var e = ""; for (var r = 0; r < t.length; r += 3) {
    var n = t.charCodeAt(r), c = t.charCodeAt(r + 1), o = t.charCodeAt(r + 2), g = n << 16 | (c || 0) << 8 | (o || 0);
    e += Ct[g >> 18 & 63] + Ct[g >> 12 & 63] + (r + 1 < t.length ? Ct[g >> 6 & 63] : "=") + (r + 2 < t.length ? Ct[g & 63] : "=");
} return e; }
var mn = function (t, e, r) { return ku(t, e, r); }, Ur = function (t, e, r) { return ku(t, e, r, 1)[0] || null; }, Pr = /[\s ]+/g, Ir = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), xn = { containsOwn: function (t, e) { return Cu(t).toLowerCase().includes(String(e).toLowerCase()); }, matches: function (t, e) { return Lr(e).test(Tu(t)); }, matchesOwn: function (t, e) { return Lr(e).test(Cu(t)); }, containsData: function (t, e) { return be(t).includes(e); }, "contains-ci": function (t, e) { return Tu(t).toLowerCase().includes(String(e).toLowerCase()); } };
function Lr(t) { try {
    return new RegExp(t);
}
catch (e) {
    return /$^/;
} }
var Nt = { pseudos: xn, xmlMode: !1, lowerCaseTags: !0 };
function _t(t) { return String(t).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function Tu(t) { if (!t)
    return ""; if (t.type === "text")
    return t.data; var e = "", r = function (n) {
    var e_8, _b;
    try {
        for (var _c = __values(n.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var c = _d.value;
            c.type === "text" ? e += c.data : (c.type === "tag" || c.type === "script" || c.type === "style") && (c.name === "br" ? e += " " : c.type === "tag" && (Ir.has(c.name) && (e += " "), r(c), Ir.has(c.name) && (e += " ")));
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_8) throw e_8.error; }
    }
}; return r(t), e.replace(Pr, " ").trim(); }
function Cu(t) {
    var e_9, _b;
    var e = "";
    try {
        for (var _c = __values(t.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var r = _d.value;
            r.type === "text" && (e += r.data);
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return e.replace(Pr, " ").trim();
}
function Mr(t, e) { if (!e)
    return ""; try {
    return qt(t, e);
}
catch (r) {
    return t ? "" : e;
} }
var Ee = (function () {
    function t(e, r) {
        this.node = e, this.doc = r;
    }
    Object.defineProperty(t.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    t.prototype.select = function (e) { return oe.of(mn(_t(e), this.node, Nt), this.doc); };
    t.prototype.selectFirst = function (e) { var r = Ur(_t(e), this.node, Nt); return r ? new t(r, this.doc) : null; };
    t.prototype.is = function (e) { return Au(this.node, _t(e), Nt); };
    t.prototype.text = function () { return Tu(this.node); };
    t.prototype.ownText = function () { return Cu(this.node); };
    t.prototype.wholeText = function () { return be(this.node); };
    t.prototype.data = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return e.data; }).join(""); };
    t.prototype.html = function () { return (this.node.children || []).map(function (e) { return Ue(e, { decodeEntities: !1 }); }).join("").trim(); };
    t.prototype.outerHtml = function () { return Ue(this.node, { decodeEntities: !1 }); };
    t.prototype.toString = function () { return this.outerHtml(); };
    t.prototype.tagName = function () { return this.node.name || ""; };
    t.prototype.nodeName = function () { return this.node.name || "#" + this.node.type; };
    t.prototype.id = function () { return this.attr("id"); };
    t.prototype.className = function () { return this.attr("class"); };
    t.prototype.classNames = function () { return this.className().split(/\s+/).filter(Boolean); };
    t.prototype.hasClass = function (e) { return this.classNames().includes(e); };
    t.prototype.attr = function (e, r) { if (r !== void 0)
        return this.node.attribs && (this.node.attribs[e] = String(r)), this; if (!this.node.attribs)
        return ""; if (e.startsWith("abs:"))
        return Mr(this.baseUri, this.node.attribs[e.slice(4)] || ""); var n = this.node.attribs[e]; return n == null ? "" : n; };
    t.prototype.absUrl = function (e) { return this.attr("abs:" + e); };
    t.prototype.hasAttr = function (e) { return !!(this.node.attribs && (e.startsWith("abs:") ? e.slice(4) : e) in this.node.attribs); };
    t.prototype.removeAttr = function (e) { return this.node.attribs && delete this.node.attribs[e], this; };
    t.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    t.prototype.dataset = function () {
        var e_10, _b;
        var e = {};
        try {
            for (var _c = __values(Object.entries(this.node.attribs || {})), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _f = __read(_d.value, 2), r = _f[0], n = _f[1];
                r.startsWith("data-") && (e[r.slice(5)] = n);
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return e;
    };
    t.prototype.val = function () { return this.attr("value"); };
    t.prototype.parent = function () { var e = this.node.parent; return e && e.type !== "root" ? new t(e, this.doc) : null; };
    t.prototype.parents = function () { var e = [], r = this.node.parent; for (; r && r.type !== "root";)
        e.push(r), r = r.parent; return oe.of(e, this.doc); };
    t.prototype.closest = function (e) { var r = this.node; for (; r && r.type !== "root";) {
        if (r.type === "tag" && Au(r, _t(e), Nt))
            return new t(r, this.doc);
        r = r.parent;
    } return null; };
    t.prototype.children = function () { return oe.of((this.node.children || []).filter(M), this.doc); };
    t.prototype.child = function (e) { var r = (this.node.children || []).filter(M)[e]; return r ? new t(r, this.doc) : null; };
    t.prototype.childrenSize = function () { return (this.node.children || []).filter(M).length; };
    t.prototype.nextElementSibling = function () { var e = uu(this.node); return e ? new t(e, this.doc) : null; };
    t.prototype.previousElementSibling = function () { var e = ru(this.node); return e ? new t(e, this.doc) : null; };
    t.prototype.siblingElements = function () {
        var _this = this;
        return oe.of(dt(this.node).filter(function (e) { return e !== _this.node && M(e); }), this.doc);
    };
    t.prototype.elementSiblingIndex = function () { return dt(this.node).filter(M).indexOf(this.node); };
    t.prototype.getElementsByTag = function (e) { return this.select(e); };
    t.prototype.getElementsByClass = function (e) { return this.select("." + e); };
    t.prototype.getElementById = function (e) { return this.selectFirst("#" + e); };
    t.prototype.remove = function () { return de(this.node), this; };
    t.prototype.empty = function () { return this.node.children = [], this; };
    t.prototype.textNodes = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return ({ text: function () { return e.data; }, toString: function () { return e.data; } }); }); };
    t.prototype.title = function () { var e = this.selectFirst("title"); return e ? e.text() : ""; };
    t.prototype.body = function () { return this.selectFirst("body") || this; };
    t.prototype.head = function () { return this.selectFirst("head") || this; };
    t.prototype.location = function () { return this.baseUri; };
    return t;
}()), Nu = Object.create(Array.prototype), oe = { of: qu, prototype: Nu };
function qu(t, e) {
    var e_11, _b;
    var r = [];
    try {
        for (var _c = __values(t || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var n = _d.value;
            r.push(n instanceof Ee ? n : new Ee(n, e));
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return Object.setPrototypeOf(r, Nu), r;
}
var Or = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (t) { return this[t] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (t) { return oe.of(this[t] ? [this[t]] : [], null); }, text: function () { return this.map(function (t) { return t.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (t) { return t.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (t) { return t.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (t) { return t.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (t, e) {
        var e_12, _b;
        if (e !== void 0)
            return this.forEach(function (r) { return r.attr(t, e); }), this;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var r = _d.value;
                if (r.hasAttr(t))
                    return r.attr(t);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return "";
    }, eachAttr: function (t) { return this.filter(function (e) { return e.hasAttr(t); }).map(function (e) { return e.attr(t); }); }, hasAttr: function (t) { return this.some(function (e) { return e.hasAttr(t); }); }, hasClass: function (t) { return this.some(function (e) { return e.hasClass(t); }); }, val: function () { return this.length ? this[0].val() : ""; }, select: function (t) {
        var e_13, _b, e_14, _c;
        var e = qu([]), r = new Set;
        try {
            for (var _d = __values(this), _f = _d.next(); !_f.done; _f = _d.next()) {
                var n = _f.value;
                try {
                    for (var _g = (e_14 = void 0, __values(n.select(t))), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var c = _h.value;
                        r.has(c.node) || (r.add(c.node), e.push(c));
                    }
                }
                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_c = _g.return)) _c.call(_g);
                    }
                    finally { if (e_14) throw e_14.error; }
                }
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return e;
    }, selectFirst: function (t) {
        var e_15, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var e = _d.value;
                var r = e.selectFirst(t);
                if (r)
                    return r;
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return null;
    }, is: function (t) { return this.some(function (e) { return e.is(t); }); }, not: function (t) { return oe.of(this.filter(function (e) { return !e.is(t); }), null); }, parents: function () {
        var e_16, _b;
        var t = qu([]);
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var e = _d.value;
                t.push.apply(t, __spreadArray([], __read(e.parents()), false));
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_16) throw e_16.error; }
        }
        return t;
    }, next: function () { return oe.of(this.map(function (t) { return t.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return oe.of(this.map(function (t) { return t.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (t) { return t.remove(); }), this; }, empty: function () { return this.forEach(function (t) { return t.empty(); }), this; }, removeAttr: function (t) { return this.forEach(function (e) { return e.removeAttr(t); }), this; } };
try {
    for (var _c = __values(Object.keys(Or)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var t = _d.value;
        Object.defineProperty(Nu, t, { value: Or[t], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
function Dt(t, e) { var r = cr(String(t == null ? "" : t), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), n = new Ee(r, null); n.doc = n, n.__base = e || ""; var c = Ur("base[href]", r); return c && c.attribs.href && (n.__base = Mr(n.__base, c.attribs.href)), n; }
function Br(t, e) { var r = new Set((e || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), n = Dt(t), c = function (o) {
    var e_17, _b, e_18, _c;
    try {
        for (var _d = __values((o.children || []).slice()), _f = _d.next(); !_f.done; _f = _d.next()) {
            var g = _f.value;
            if (g.type === "script" || g.type === "style" || g.type === "comment") {
                de(g);
                continue;
            }
            if (g.type === "tag" && (c(g), !r.has(g.name))) {
                var v = (g.children || []).slice();
                try {
                    for (var v_3 = (e_18 = void 0, __values(v)), v_3_1 = v_3.next(); !v_3_1.done; v_3_1 = v_3.next()) {
                        var y = v_3_1.value;
                        au(g, y);
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (v_3_1 && !v_3_1.done && (_c = v_3.return)) _c.call(v_3);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
                de(g);
            }
        }
    }
    catch (e_17_1) { e_17 = { error: e_17_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
        }
        finally { if (e_17) throw e_17.error; }
    }
}; return c(n.node), Ue(n.node.children, { decodeEntities: !1 }); }
var et = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function vn(t) { if (typeof Buffer != "undefined")
    return Buffer.from(t).toString("base64"); var e = ""; for (var r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]); return Dr(e); }
function Fr(t) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(t) : Uint8Array.from(unescape(encodeURIComponent(t)), function (e) { return e.charCodeAt(0); }); }
function wn(t) { var e = ""; for (var r = 0; r < t.length; r++) {
    var n = t.charCodeAt(r);
    if (n < 128) {
        e += t[r];
        continue;
    }
    if (n === 128) {
        e += "€";
        continue;
    }
    var c = t.charCodeAt(r + 1);
    n >= 129 && n <= 254 && c >= 64 && c <= 254 && c !== 127 ? (e += __GBK_TABLE[(n - 129) * 190 + (c - 64) - (c > 127 ? 1 : 0)], r++) : e += "�";
} return e; }
var _u = (function () {
    function _u(e, r) {
        this.status = e.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = e.statusText || String(this.status), this.url = e.url || r.url, this.headers = e.headers || {}, this._raw = e, this.request = { url: r.url, headers: r.headers || {} };
    }
    _u.prototype.header = function (e) { var r = Object.keys(this.headers).find(function (n) { return n.toLowerCase() === String(e).toLowerCase(); }); return r ? this.headers[r] : ""; };
    _u.prototype.text = function (e) { if (e && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(e).toLowerCase()).decode(this._raw.bytes);
        }
        catch (n) { } var r = this._raw.text == null ? "" : String(this._raw.text); return e || (e = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), e && /^(gbk|gb2312|gb18030)$/i.test(String(e)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(r) && !/[^\x00-\xff]/.test(r) ? wn(r) : r; };
    _u.prototype.string = function (e) { return this.text(e); };
    _u.prototype.html = function (e) { return Dt(this.text(e), this.url); };
    _u.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (e) {
        return null;
    } };
    _u.prototype.base64 = function () { return vn(this._raw.bytes || Fr(this.text())); };
    _u.prototype.blob = function () { var e = this; return { size: (this._raw.bytes || Fr(this.text())).length, type: this.header("content-type"), base64: function () { return e.base64(); } }; };
    return _u;
}());
function yn(t) {
    var e_19, _b;
    var e = {};
    if (!t)
        return e;
    if (typeof t.forEach == "function" && !Array.isArray(t) && typeof t.entries == "function")
        return t.forEach(function (r, n) { e[n] = r; }), e;
    try {
        for (var _c = __values(Object.keys(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var r = _d.value;
            e[r] = String(t[r]);
        }
    }
    catch (e_19_1) { e_19 = { error: e_19_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_19) throw e_19.error; }
    }
    return e;
}
function Vr(t, e) { var r = function (g) { return ({ getItem: function (v) { var y = t.storageGet(g + v); return y == null ? null : y; }, setItem: function (v, y) { return t.storageSet(g + v, y == null ? null : String(y)); }, removeItem: function (v) { return t.storageSet(g + v, null); }, clear: function () { return t.storageClear && t.storageClear(g); } }); }, n = "__cookie__", c = {}; c.Response = { success: function (g, v) { return ({ code: 0, data: g === void 0 ? null : g, data2: v === void 0 ? null : v }); }, error: function (g) { return ({ code: 1, data: g == null ? "" : String(g) }); } }, c.fetch = function (v, y) {
    return __awaiter(this, void 0, void 0, function () { var S, P, T, L, q, P, N, O, P_1; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                y = y || {};
                S = String(v);
                if (y.queries) {
                    P = Object.entries(y.queries).map(function (_b) {
                        var _c = __read(_b, 2), Q = _c[0], te = _c[1];
                        return encodeURIComponent(Q) + "=" + encodeURIComponent(te);
                    }).join("&");
                    P && (S += (S.includes("?") ? "&" : "?") + P);
                }
                T = Object.assign({ "User-Agent": et }, yn(y.headers)), L = t.storageGet(n);
                L && !Object.keys(T).some(function (P) { return P.toLowerCase() === "cookie"; }) && (T.Cookie = L);
                q = y.body;
                if (q != null && typeof q == "object") {
                    P = Object.keys(T).find(function (Q) { return Q.toLowerCase() === "content-type"; });
                    P && /json/i.test(T[P]) ? q = JSON.stringify(q) : (q = Object.entries(q).map(function (_b) {
                        var _c = __read(_b, 2), Q = _c[0], te = _c[1];
                        return encodeURIComponent(Q) + "=" + encodeURIComponent(te);
                    }).join("&"), P || (T["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                N = { url: S, method: (y.method || (q != null ? "POST" : "GET")).toUpperCase(), headers: T, body: q, timeout: y.timeout };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4, t.request(N)];
            case 2:
                O = _b.sent();
                return [3, 4];
            case 3:
                P_1 = _b.sent();
                O = { status: 0, url: S, headers: {}, text: "", error: String(P_1 && P_1.message || P_1) };
                return [3, 4];
            case 4: return [2, new _u(O, N)];
        }
    }); });
}, c.Http = { get: function (g) { return jr(c, "GET", g); }, post: function (g) { return jr(c, "POST", g); } }, c.Html = { parse: function (g, v) { return Dt(g, v || ""); }, clean: function (g, v) { return Br(g, v); } }, c.localStorage = r("ls:"), c.cacheStorage = r("cs:"), c.localConfig = { getItem: function (g) { return t.config(g); } }, c.localCookie = { setCookie: function (g) { t.storageSet(n, String(g).split(";")[0]); }, getCookie: function () { return t.storageGet(n) || ""; } }, c.sleep = function (g) { return new Promise(function (v) { return typeof setTimeout == "function" ? setTimeout(v, Math.min(Number(g) || 0, 1e4)) : v(); }); }; var o = function () {
    var g = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        g[_i] = arguments[_i];
    }
    try {
        t.log && t.log(g.map(function (v) { return typeof v == "string" ? v : JSON.stringify(v); }).join(" "));
    }
    catch (v) { }
}; return c.Log = { log: o }, c.console = { log: o, error: o, warn: o, info: o }, c.Console = c.console, c.log = o, c.UserAgent = { system: function () { return et; }, chrome: function () { return et; }, android: function () { return et; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, c.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (t.name || "host") + ")"); } }, c.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, c.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, c.Elements = oe, c.Element = Ee, c.__meta = e, c; }
function jr(t, e, r) { var n = { method: e, url: r, headers: {}, body: void 0, queries: void 0 }, c = { headers: function (o) { return Object.assign(n.headers, o || {}), c; }, header: function (o, g) { return n.headers[o] = g, c; }, params: function (o) { return n.queries = o, c; }, queries: function (o) { return n.queries = o, c; }, body: function (o) { return n.body = o, c; }, html: function (o) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, t.fetch(n.url, n)];
                case 1: return [2, (_b.sent()).html(o)];
            }
        }); });
    }, string: function (o) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, t.fetch(n.url, n)];
                case 1: return [2, (_b.sent()).text(o)];
            }
        }); });
    }, text: function (o) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, t.fetch(n.url, n)];
                case 1: return [2, (_b.sent()).text(o)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, t.fetch(n.url, n)];
                case 1: return [2, (_b.sent()).json()];
            }
        }); });
    } }; return c; }
function Te(t, e) { if (!e)
    return ""; if (e = String(e).trim(), /^data:|^blob:/.test(e))
    return e; if (e.startsWith("//"))
    return "https:" + e; if (typeof __abs == "function")
    return __abs(t, e); try {
    return qt(t, e);
}
catch (r) {
    return e;
} }
var z = function (t) { return t == null ? "" : String(t); }, Sn = function (t) { return t.filter(function (e, r) { return e && t.indexOf(e) === r; }); }, It = (function () {
    function class_1(e) {
        var r = e.meta, n = e.scripts, c = e.host;
        this.meta = r, this.host = c, this.env = e.env || Vr(c, r), this.scripts = n, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return z(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.has = function (e) { return !!this.scripts[e]; };
    class_1.prototype.run = function (e) {
        var r = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            r[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var n, c, o, g;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        n = this.scripts[e];
                        if (!n)
                            throw new Error("script " + e + " missing");
                        c = function (v) { var y = _this.host.config(v); return y == null ? (_this.meta.configDefaults || {})[v] : y; };
                        return [4, n(this.env, c)];
                    case 1:
                        o = _b.sent();
                        if (typeof o != "function")
                            throw new Error(e + ": execute() not defined");
                        return [4, o.apply(void 0, __spreadArray([], __read(r.map(z)), false))];
                    case 2:
                        g = _b.sent();
                        if (!g)
                            throw new Error(e + ": empty result");
                        if (g.code !== 0)
                            throw new Error(e + ": " + z(g.data || "error"));
                        return [2, g];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (e) { return z(e).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var e, _b, r_1, r_2; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (this.cache.tabs)
                        return [2, this.cache.tabs];
                    e = [];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 5]);
                    _b = this.has("home");
                    if (!_b) return [3, 3];
                    return [4, this.run("home")];
                case 2:
                    _b = (e = (_c.sent()).data || []);
                    _c.label = 3;
                case 3:
                    _b;
                    return [3, 5];
                case 4:
                    r_1 = _c.sent();
                    this.host.log && this.host.log("home: " + r_1.message);
                    return [3, 5];
                case 5:
                    if (!(!e.length && this.has("genre"))) return [3, 9];
                    _c.label = 6;
                case 6:
                    _c.trys.push([6, 8, , 9]);
                    return [4, this.run("genre")];
                case 7:
                    e = ((_c.sent()).data || []).slice(0, 2);
                    return [3, 9];
                case 8:
                    r_2 = _c.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = e.filter(function (r) { return r && r.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (e, r, n) {
        return __awaiter(this, void 0, void 0, function () {
            var c, o, g, v, y;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        c = e + "|" + r;
                        n = Math.max(1, n | 0);
                        o = n === 1 ? "" : this.tokens[c + "|" + n];
                        if (n > 1 && o == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(e, r, o)];
                    case 1:
                        g = _b.sent(), v = z(g.data2);
                        v && (this.tokens[c + "|" + (n + 1)] = v);
                        y = (g.data || []).filter(Boolean).map(function (S) { return ({ name: z(S.name).trim(), link: Te(S.host || _this.base + "/", S.link), cover: Te(S.host || _this.base + "/", S.cover), description: z(S.description), tag: z(S.tag) }); }).filter(function (S) { return S.name && S.link; });
                        return [2, { items: y, hasNext: !!v && y.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (e) {
        return __awaiter(this, void 0, void 0, function () { var r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    r = _b.sent();
                    return [2, r[0] ? this.list(this.scriptFile(r[0].script), z(r[0].input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.latest = function (e) {
        return __awaiter(this, void 0, void 0, function () { var r, n; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    r = _b.sent(), n = r[1] || r[0];
                    return [2, n ? this.list(this.scriptFile(n.script), z(n.input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.search = function (e, r) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, this.has("search") ? this.list("search", e, r) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (e) {
        return __awaiter(this, void 0, void 0, function () { var r, n; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.run("detail", e)];
                case 1:
                    r = (_b.sent()).data || {}, n = [].concat(r.genres || [], r.tags || []).map(function (c) { return typeof c == "string" ? c : c && c.title; }).filter(Boolean);
                    return [2, { name: z(r.name).trim(), cover: Te(r.host || this.base + "/", r.cover), author: z(r.author).trim(), description: zr(z(r.description)), detail: zr(z(r.detail)), ongoing: r.ongoing !== !1 && r.ongoing !== "false", genres: Sn(n.map(function (c) { return String(c).trim(); })), url: e, format: z(r.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var r, n, n_1, n_1_1, c, _b, _c, e_20_1, _d;
            var e_20, _f;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        r = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", e)];
                    case 1:
                        n = (_g.sent()).data || [e];
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 7, 8, 9]);
                        n_1 = __values(n), n_1_1 = n_1.next();
                        _g.label = 3;
                    case 3:
                        if (!!n_1_1.done) return [3, 6];
                        c = n_1_1.value;
                        _c = (_b = r).concat;
                        return [4, this.run("toc", z(c))];
                    case 4:
                        r = _c.apply(_b, [(_g.sent()).data || []]);
                        _g.label = 5;
                    case 5:
                        n_1_1 = n_1.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_20_1 = _g.sent();
                        e_20 = { error: e_20_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (n_1_1 && !n_1_1.done && (_f = n_1.return)) _f.call(n_1);
                        }
                        finally { if (e_20) throw e_20.error; }
                        return [7];
                    case 9: return [3, 13];
                    case 10:
                        _d = this.has("toc");
                        if (!_d) return [3, 12];
                        return [4, this.run("toc", e)];
                    case 11:
                        _d = (r = (_g.sent()).data || []);
                        _g.label = 12;
                    case 12:
                        _d;
                        _g.label = 13;
                    case 13: return [2, r.filter(function (n) { return n && n.url && n.type !== "section"; }).map(function (n, c) { return ({ name: z(n.name).trim() || "#" + (c + 1), url: Te(n.host || _this.base + "/", n.url), pay: !!(n.pay || n.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var r, _b, _c, n, c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        _b = r = (_d.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", e)];
                    case 3:
                        _c = r = (_d.sent()).data;
                        return [3, 5];
                    case 4:
                        _c = r = [e];
                        _d.label = 5;
                    case 5:
                        _b = _c;
                        _d.label = 6;
                    case 6:
                        _b, typeof r == "string" && (r = r.split(/[\n,]+/));
                        n = function (o) { return !o || /^data:|loading|lazy|blank|placeholder|spacer|\/nocover|1x1\./i.test(String(o)); }, c = function (o) { if (typeof o == "string")
                            return o; if (!o)
                            return ""; var g = o.link || o.url || o.data, v = Array.isArray(o.fallback) ? o.fallback.filter(Boolean) : []; return n(g) && v.length ? v[0] : g; };
                        return [2, (r || []).map(function (o) { return Te(_this.base + "/", c(o)); }).filter(Boolean)];
                }
            });
        });
    };
    class_1.prototype.content = function (e) {
        return __awaiter(this, void 0, void 0, function () { var r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.run("chap", e)];
                case 1:
                    r = _b.sent();
                    return [2, { html: z(r.data), title: z(r.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var r, c, n, r_3, r_3_1, c, o, g, g_2, g_2_1, v, o_2, e_21_1;
            var e_21, _b, e_22, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        r = [{ title: "Default", data: e }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        c = (_d.sent()).data;
                        Array.isArray(c) && c.length && (r = c.map(function (o) { return typeof o == "string" ? { title: "Server", data: o } : { title: z(o.title || o.name || "Server"), data: z(o.data || o.url || o.link) }; }));
                        _d.label = 2;
                    case 2:
                        n = [];
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 10, 11, 12]);
                        r_3 = __values(r), r_3_1 = r_3.next();
                        _d.label = 4;
                    case 4:
                        if (!!r_3_1.done) return [3, 9];
                        c = r_3_1.value;
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 7, , 8]);
                        return [4, this.run("track", c.data)];
                    case 6:
                        o = (_d.sent()).data || {}, g = Array.isArray(o) ? o : [o];
                        try {
                            for (g_2 = (e_22 = void 0, __values(g)), g_2_1 = g_2.next(); !g_2_1.done; g_2_1 = g_2.next()) {
                                v = g_2_1.value;
                                !v || !v.data || v.type !== "webview" && n.push({ url: Te(v.host || this.base + "/", v.data), quality: c.title + (v.quality ? " " + v.quality : ""), headers: v.headers || { Referer: this.base + "/" }, subtitles: (v.subtitles || (v.subtitle ? [{ data: v.subtitle, label: "Sub" }] : [])).map(function (y) { return ({ file: Te(_this.base + "/", y.data || y.file), label: z(y.label || y.language || "Sub") }); }), mimeType: z(v.mimeType) });
                            }
                        }
                        catch (e_22_1) { e_22 = { error: e_22_1 }; }
                        finally {
                            try {
                                if (g_2_1 && !g_2_1.done && (_c = g_2.return)) _c.call(g_2);
                            }
                            finally { if (e_22) throw e_22.error; }
                        }
                        return [3, 8];
                    case 7:
                        o_2 = _d.sent();
                        this.host.log && this.host.log("track " + c.title + ": " + o_2.message);
                        return [3, 8];
                    case 8:
                        r_3_1 = r_3.next();
                        return [3, 4];
                    case 9: return [3, 12];
                    case 10:
                        e_21_1 = _d.sent();
                        e_21 = { error: e_21_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (r_3_1 && !r_3_1.done && (_b = r_3.return)) _b.call(r_3);
                        }
                        finally { if (e_21) throw e_21.error; }
                        return [7];
                    case 12: return [2, n];
                }
            });
        });
    };
    return class_1;
}());
function zr(t) {
    return String(t).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
function J(t, e) {
    return __awaiter(this, void 0, void 0, function () { var r, n, _b, _c; return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                t = t || [];
                r = [], n = 0;
                _d.label = 1;
            case 1:
                if (!(n < t.length)) return [3, 4];
                _c = (_b = r).push;
                return [4, e(t[n], n, t)];
            case 2:
                _c.apply(_b, [_d.sent()]);
                _d.label = 3;
            case 3:
                n++;
                return [3, 1];
            case 4: return [2, r];
        }
    }); });
}
var pe = { id: "mattreadingtranslations", name: "Matt Reading Translations", source: "https://mattreadingtranslations.com", type: "novel", locale: "en", nsfw: !1, version: 3, config: { DOMAIN: { title: "Tên miền", subtitle: "Đổi khi trang đổi tên miền", default: "https://mattreadingtranslations.com", values: ["https://mattreadingtranslations.com"], mode: "input", format: "text" } }, configDefaults: { DOMAIN: "https://mattreadingtranslations.com" }, itemType: 2, lnId: "kiritokmn.mattreadingtranslations", lnIcon: "", lnVersion: "1.2.3" }, Hr = { home: function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (r, n, c, o, g, v, y, S, T, L, q, N, O, P, Q, te, fe) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = e("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function W() {
                                                        return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
                                                            u = [];
                                                            for (a in s.tabs)
                                                                u.push({ title: a, input: a, script: "browse.js" });
                                                            return [2, o.success(u)];
                                                        }); });
                                                    }
                                                    var k, s, d, x;
                                                    return __generator(this, function (_b) {
                                                        k = "https://mattreadingtranslations.com";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (u) { }
                                                        s = { tabs: { Novels: "/novels/" }, search: "/novels/", ch_list: "#toc-container td a, .chapter-table td a", item: ".entry-content a[href]", title: ":self", link: ":self@href", cover: "img@img", pageSize: 999, d_title: "h1", d_cover: ".entry-content img@img || meta[property=og:image]@content", d_desc: ".entry-content p || meta[name=description]@content", ch_next: ".pagination a.current + a", ch_maxPages: 80, content: ".entry-content", c_title: "h1", ch_delay: 500 }, d = { img: function (u) { if (!u)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], i = 0; i < a.length; i++) {
                                                                var f = u.attr(a[i]);
                                                                if (f && f.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(f))
                                                                    return d.fix(f.trim());
                                                            } var l = u.attr("data-srcset") || u.attr("srcset"); return l ? d.fix(l.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (u) { return u ? (u = String(u).trim(), u.indexOf("//") === 0 ? "https:" + u : u.indexOf("http") === 0 ? u : u.charAt(0) === "/" ? k + u : k + "/" + u) : ""; }, text: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            i = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(i < a.length)) return [3, 4];
                                                                            return [4, u.select(a[i]).text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, f.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            i++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            i = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (f in a.headers)
                                                                                    i[f] = a.headers[f];
                                                                            return [4, r(u, { method: a.method, headers: i, body: a.body })];
                                                                        case 1:
                                                                            l = _c.sent(), h = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = l && l.status === 429 && h < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(l)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, T(1500 * (h + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, r(u, { method: a.method, headers: i, body: a.body })];
                                                                        case 6:
                                                                            l = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            h++;
                                                                            return [3, 2];
                                                                        case 8: return [2, l];
                                                                    }
                                                                }); });
                                                            }, cf: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (u.status !== 403 && u.status !== 503 && u.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, u.text()];
                                                                        case 1:
                                                                            a = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(a.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (u.ok)
                                                                                return [2, u];
                                                                            return [4, d.cf(u)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + a.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + u.status + " " + a);
                                                                    }
                                                                }); });
                                                            }, html: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            i = _d.sent();
                                                                            return [4, i.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            i = _d.sent();
                                                                            return [4, i.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (u) { var a = parseInt(u || "1", 10); return isNaN(a) || a < 1 ? 1 : a; }, next: function (u, a) { return u ? String(d.page(a) + 1) : ""; }, isUrl: function (u) { return /^(https?:)?\/\//.test(u || "") || (u || "").charAt(0) === "/"; }, enc: function (u) { return encodeURIComponent(u || ""); }, cleanContent: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                u.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, u.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (u) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(u || ""); } }, x = { pick: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, p, m, b, w, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !u)
                                                                                return [2, ""];
                                                                            i = String(a).split(" || "), f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < i.length)) return [3, 9];
                                                                            l = i[f], h = "text", p = l.lastIndexOf("@");
                                                                            p > 0 && !/\[[^\]]*@/.test(l.slice(p)) && (h = l.slice(p + 1), l = l.slice(0, p));
                                                                            m = l === ":self" ? null : u.select(l), b = l === ":self" ? u : m.size() ? m.first() : null;
                                                                            if (!b) return [3, 8];
                                                                            if (!(h === "text")) return [3, 3];
                                                                            return [4, b.text()];
                                                                        case 2:
                                                                            _b = _d.sent();
                                                                            return [3, 7];
                                                                        case 3:
                                                                            if (!(h === "html")) return [3, 5];
                                                                            return [4, b.html()];
                                                                        case 4:
                                                                            _c = _d.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _c = h === "img" ? d.img(b.is("img") ? b : b.select("img").first()) : h === "own" ? b.ownText() : b.attr(h);
                                                                            _d.label = 6;
                                                                        case 6:
                                                                            _b = _c;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            w = _b;
                                                                            if (w)
                                                                                return [2, String(w).trim()];
                                                                            _d.label = 8;
                                                                        case 8:
                                                                            f++;
                                                                            return [3, 1];
                                                                        case 9: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, url: function (u, a, i) { var f = d.page(a), l = String(u); return l = l.replace(/\[([^\]]*)\]/g, function (h, p) { return f > 1 ? p : ""; }), l = l.replace(/\{p\}/g, String(f)).replace(/\{p0\}/g, String(f - 1)).replace(/\{q\}/g, d.enc(i || "")).replace(/\{base\}/g, k), d.fix(l); }, items: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, f, l, h, p, m, b, w, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                i = function (A) { return a && s[a + A] || s[A]; }, f = u.select(i("item")), l = [], h = {}, p = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(p < f.size())) return [3, 9];
                                                                                return [4, f.get(p)];
                                                                            case 2:
                                                                                m = _g.sent();
                                                                                return [4, x.pick(m, i("link") || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || h[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, x.pick(m, i("title") || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                w = _g.sent();
                                                                                _b = w;
                                                                                if (!_b) return [3, 7];
                                                                                h[b] = 1;
                                                                                _d = (_c = l).push;
                                                                                _f = { name: w, link: d.fix(b) };
                                                                                return [4, x.pick(m, i("cover") || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, x.pick(m, i("desc") || "")];
                                                                            case 6:
                                                                                _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = k, _f)]));
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                _b;
                                                                                _g.label = 8;
                                                                            case 8:
                                                                                p++;
                                                                                return [3, 1];
                                                                            case 9: return [2, l];
                                                                        }
                                                                    });
                                                                });
                                                            }, listPage: function (u, a, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(x.url(u, a, i), s.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            return [4, x.items(f, i ? "s_" : "")];
                                                                        case 2:
                                                                            l = _b.sent(), h = s.next ? f.select(s.next).size() > 0 : l.length >= (s.pageSize || 10);
                                                                            return [2, o.success(l, d.next(h && l.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            i = s.tabs && s.tabs[u] || u;
                                                                            return [4, x.listPage(i, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            if (!(s.q_cut && !d.isUrl(u) && (u = String(u).split(new RegExp(s.q_cut))[0].trim() || u), d.isUrl(u))) return [3, 2];
                                                                            i = d.fix(u);
                                                                            return [4, x.listPage(i + (i.indexOf("?") > 0 ? "&" : "?") + (s.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _c.sent()];
                                                                        case 2:
                                                                            if (!s.search_post) return [3, 5];
                                                                            return [4, d.html(x.url(s.search_post.url, a, u), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: String(s.search_post.body).replace(/\{q\}/g, d.enc(u)) })];
                                                                        case 3:
                                                                            f = _c.sent();
                                                                            return [4, x.items(f, "s_")];
                                                                        case 4:
                                                                            l = _c.sent();
                                                                            return [2, o.success(l, null)];
                                                                        case 5:
                                                                            if (!s.search_json) return [3, 7];
                                                                            return [4, x.jsonSearch(s.search_json, u, a)];
                                                                        case 6:
                                                                            _b = _c.sent();
                                                                            return [3, 9];
                                                                        case 7: return [4, x.listPage(s.search, a, u)];
                                                                        case 8:
                                                                            _b = _c.sent();
                                                                            _c.label = 9;
                                                                        case 9: return [2, _b];
                                                                    }
                                                                }); });
                                                            }, jsonSearch: function (u, a, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.json(x.url(u.url, i, a), s.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            u.list && u.list.split(".").forEach(function (p) { f = f && f[p]; });
                                                                            l = function (p, m) { return String(m || "").indexOf("{") >= 0 ? String(m).replace(/\{(\w+)\}/g, function (b, w) { return p[w] == null ? "" : p[w]; }) : p[m] == null ? "" : String(p[m]); }, h = [];
                                                                            return [2, ((f || []).forEach(function (p) { var m = l(p, u.title || "title"), b = l(p, u.link || "url"); m && b && h.push({ name: m, link: d.fix(b), cover: d.fix(l(p, u.cover || "cover")), description: u.desc ? l(p, u.desc) : "", host: k }); }), o.success(h, u.paged && h.length ? d.next(!0, i) : null))];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!s.genre)
                                                                                return [2, o.success([])];
                                                                            return [4, d.html(d.fix(s.genrePage || "/"))];
                                                                        case 1:
                                                                            u = _b.sent();
                                                                            return [4, J(u.select(s.genre), function (i) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, i.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(i.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, o.success(a.filter(function (i) { return i.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, i, f, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(u, s.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!s.d_genres) return [3, 3];
                                                                                return [4, J(a.select(s.d_genres), function (l) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, l.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(l.attr("href")), _b.script = "search.js", _b)];
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    })];
                                                                            case 2:
                                                                                _b = _j.sent();
                                                                                return [3, 4];
                                                                            case 3:
                                                                                _b = [];
                                                                                _j.label = 4;
                                                                            case 4:
                                                                                i = _b;
                                                                                return [4, x.pick(a, s.d_status)];
                                                                            case 5:
                                                                                f = _j.sent();
                                                                                _d = (_c = o).success;
                                                                                _h = {};
                                                                                return [4, x.pick(a, s.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, x.pick(a, s.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, x.pick(a, s.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, x.pick(a, (s.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = f ? "Tình trạng: " + f : "", _h.ongoing = d.ongoing(f), _h.genres = i, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, i, f, l, h, _b, p, m, b, w, A, _c, _d, _f, _g, C, D, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!s.ch_action) return [3, 2];
                                                                                return [4, x.actionToc(u)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (s.single)
                                                                                    return [2, o.success([{ name: s.single === !0 ? "Xem / Đọc" : s.single, url: u, host: k }])];
                                                                                a = [u], i = [], f = {};
                                                                                return [4, d.html(s.ch_rewrite ? u.replace(new RegExp(s.ch_rewrite[0]), s.ch_rewrite[1]) : u, s.req)];
                                                                            case 3:
                                                                                l = _k.sent();
                                                                                if (!s.ch_url) return [3, 7];
                                                                                return [4, x.pick(l, s.ch_url)];
                                                                            case 4:
                                                                                h = _k.sent();
                                                                                _b = h;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(h), s.req)];
                                                                            case 5:
                                                                                _b = (l = _k.sent());
                                                                                _k.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _k.label = 7;
                                                                            case 7:
                                                                                p = 0;
                                                                                _k.label = 8;
                                                                            case 8:
                                                                                if (!(p < (s.ch_maxPages || 60))) return [3, 22];
                                                                                m = l.select(s.ch_list), b = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(b < m.size())) return [3, 17];
                                                                                return [4, m.get(b)];
                                                                            case 10:
                                                                                w = _k.sent(), A = s.ch_attr ? w.attr(s.ch_attr) : w.attr("href") || w.attr("data-href");
                                                                                _c = !A || A === "#" || f[A];
                                                                                if (_c) return [3, 15];
                                                                                f[A] = 1;
                                                                                _f = (_d = i).push;
                                                                                _j = {};
                                                                                if (!s.ch_name) return [3, 12];
                                                                                return [4, x.pick(w, s.ch_name)];
                                                                            case 11:
                                                                                _g = _k.sent();
                                                                                return [3, 14];
                                                                            case 12: return [4, w.text()];
                                                                            case 13:
                                                                                _g = _k.sent();
                                                                                _k.label = 14;
                                                                            case 14:
                                                                                _c = (_f.apply(_d, [(_j.name = (_g) || w.attr("title"), _j.url = d.fix(A), _j.host = k, _j)]));
                                                                                _k.label = 15;
                                                                            case 15:
                                                                                _c;
                                                                                _k.label = 16;
                                                                            case 16:
                                                                                b++;
                                                                                return [3, 9];
                                                                            case 17:
                                                                                C = s.ch_next ? l.select(s.ch_next).first() : null;
                                                                                if (!C || !C.attr("href"))
                                                                                    return [3, 22];
                                                                                D = d.fix(C.attr("href"));
                                                                                if (a.indexOf(D) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(D);
                                                                                _h = s.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, T(s.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(D, s.req)];
                                                                            case 20:
                                                                                l = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                p++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (s.ch_reverse && i.reverse(), !i.length && s.ch_fallback_single && i.push({ name: s.ch_fallback_single === !0 ? "Xem phim" : s.ch_fallback_single, url: u, host: k }), o.success(i))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i, f, l, h, p, m, b, _b, _c, w, A, C, D, _d, _f, _g, _h, j, V, _j, _k, X, B; return __generator(this, function (_l) {
                                                                    switch (_l.label) {
                                                                        case 0:
                                                                            a = [], i = [u], f = u, l = 0;
                                                                            _l.label = 1;
                                                                        case 1:
                                                                            if (!(l < (s.pages_max || 40))) return [3, 17];
                                                                            if (!s.initmanga) return [3, 5];
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(f, s.req)];
                                                                        case 2: return [4, _c.apply(_b, [_l.sent(), f])];
                                                                        case 3:
                                                                            p = _l.sent();
                                                                            return [4, p.text()];
                                                                        case 4:
                                                                            m = (_l.sent()) || "", b = x.initManga(m);
                                                                            h = c.parse(b ? '<div id="imc-dec">' + b + "</div>" : m, f);
                                                                            return [3, 7];
                                                                        case 5: return [4, d.html(f, s.req)];
                                                                        case 6:
                                                                            h = _l.sent();
                                                                            _l.label = 7;
                                                                        case 7:
                                                                            w = h.select(s.initmanga ? "#imc-dec img, " + (s.pages || "#chapter-content img") : s.pages || ".page-chapter img, .reading-content img, .chapter-content img");
                                                                            if (!s.initmanga) return [3, 11];
                                                                            A = h.select("#imc-dec canvas[data-enc]"), C = 0;
                                                                            _l.label = 8;
                                                                        case 8:
                                                                            if (!(C < A.size())) return [3, 11];
                                                                            _f = (_d = CryptoJS.enc.Latin1).stringify;
                                                                            _h = (_g = CryptoJS.enc.Base64).parse;
                                                                            return [4, A.get(C)];
                                                                        case 9:
                                                                            D = _f.apply(_d, [_h.apply(_g, [(_l.sent()).attr("data-enc")])]).split("").reverse().join("");
                                                                            D && a.indexOf(D) < 0 && a.push(D);
                                                                            _l.label = 10;
                                                                        case 10:
                                                                            C++;
                                                                            return [3, 8];
                                                                        case 11:
                                                                            j = 0;
                                                                            _l.label = 12;
                                                                        case 12:
                                                                            if (!(j < w.size())) return [3, 15];
                                                                            _k = (_j = d).img;
                                                                            return [4, w.get(j)];
                                                                        case 13:
                                                                            V = _k.apply(_j, [_l.sent()]);
                                                                            V && a.indexOf(V) < 0 && a.push(V);
                                                                            _l.label = 14;
                                                                        case 14:
                                                                            j++;
                                                                            return [3, 12];
                                                                        case 15:
                                                                            if (!s.pages_next)
                                                                                return [3, 17];
                                                                            X = h.select(s.pages_next).first();
                                                                            if (!X)
                                                                                return [3, 17];
                                                                            B = d.fix(X.attr("href"));
                                                                            if (!B || i.indexOf(B) >= 0)
                                                                                return [3, 17];
                                                                            i.push(B), f = B;
                                                                            _l.label = 16;
                                                                        case 16:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 17: return [2, o.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i, _b, _c, f, l, h, _d, _f, _g, p, _h, _j, _k, m, b, _l, _m, _o, _p, _q, _s; return __generator(this, function (_v) {
                                                                    switch (_v.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, s.req)];
                                                                        case 1: return [4, _c.apply(_b, [_v.sent(), u])];
                                                                        case 2:
                                                                            a = _v.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            i = (_v.sent()) || "";
                                                                            if (!s.content_rsc) return [3, 5];
                                                                            f = x.rscText(i), l = s.c_locked && new RegExp(s.c_locked, "i").test(i), h = l ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(f || l)) return [3, 5];
                                                                            _f = (_d = o).success;
                                                                            _g = [x.toParas(f) + h];
                                                                            return [4, x.pick(c.parse(i, u), s.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_v.sent()]))];
                                                                        case 5:
                                                                            if (!s.initmanga) return [3, 8];
                                                                            p = x.initManga(i);
                                                                            if (!p) return [3, 8];
                                                                            _j = (_h = o).success;
                                                                            return [4, d.cleanContent(c.parse('<div id="imc-dec">' + p + "</div>", u).select("#imc-dec").first())];
                                                                        case 6:
                                                                            _k = [_v.sent()];
                                                                            return [4, x.pick(c.parse(i, u), s.c_title || "h1 || h2")];
                                                                        case 7: return [2, _j.apply(_h, _k.concat([_v.sent()]))];
                                                                        case 8:
                                                                            m = c.parse(i, u), b = m.select(s.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!b) return [3, 10];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(i.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _m = (_l = o).error;
                                                                            _o = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, x.pick(m, "title")];
                                                                        case 9: return [2, _m.apply(_l, [_o + ((_v.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + i.length + " ký tự)" + (i.length < 400 ? ": " + i.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 10:
                                                                            _q = (_p = o).success;
                                                                            return [4, d.cleanContent(b)];
                                                                        case 11:
                                                                            _s = [_v.sent()];
                                                                            return [4, x.pick(m, s.c_title || "h1 || h2")];
                                                                        case 12: return [2, _q.apply(_p, _s.concat([_v.sent()]))];
                                                                    }
                                                                }); });
                                                            }, initManga: function (u) { var a = /InitMangaEncryptedChapter\s*=\s*(\{[\s\S]*?\})\s*;/.exec(u), i = /"decryption_key"\s*:\s*"([^"]+)"/.exec(u); if (!a || !i || typeof CryptoJS == "undefined")
                                                                return ""; var f; try {
                                                                f = JSON.parse(a[1]);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } if (!f || !f.ciphertext)
                                                                return ""; var l = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(i[1])), h = CryptoJS.PBKDF2(l, CryptoJS.enc.Hex.parse(f.salt), { hasher: CryptoJS.algo.SHA512, keySize: 8, iterations: 999 }); try {
                                                                return CryptoJS.AES.decrypt(f.ciphertext, h, { iv: CryptoJS.enc.Hex.parse(f.iv) }).toString(CryptoJS.enc.Utf8);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } }, rscAction: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, p, m, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (i = [], l = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; f = l.exec(u);)
                                                                                i.indexOf(f[0]) < 0 && i.push(f[0]);
                                                                            h = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), p = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(p < i.length && p < 60)) return [3, 5];
                                                                            return [4, d.get(k + i[p])];
                                                                        case 2:
                                                                            m = _d.sent();
                                                                            if (!!(!m || !m.ok)) return [3, 4];
                                                                            _c = (_b = h).exec;
                                                                            return [4, m.text()];
                                                                        case 3:
                                                                            b = _c.apply(_b, [(_d.sent()) || ""]);
                                                                            if (b)
                                                                                return [2, b[1]];
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            p++;
                                                                            return [3, 1];
                                                                        case 5: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, rscArray: function (u) {
                                                                for (var a = String(u || "").split("\n"), i = 0; i < a.length; i++) {
                                                                    var f = /^[0-9a-f]+:(\[.*)$/.exec(a[i]);
                                                                    if (f)
                                                                        try {
                                                                            var l = JSON.parse(f[1]);
                                                                            if (l && l.length)
                                                                                return l;
                                                                        }
                                                                        catch (h) { }
                                                                }
                                                                return null;
                                                            }, actionToc: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i, f, _b, _c, l, h, p, _d, m, _f, b; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = s.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, s.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), u])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            i = (_g.sent()) || "", f = new RegExp(a.arg).exec(i);
                                                                            if (!f)
                                                                                return [2, o.error("Không tìm thấy mã truyện trên trang " + u)];
                                                                            l = JSON.stringify([f[1]]), h = function (w) {
                                                                                return __awaiter(this, void 0, void 0, function () { var A, _b, _c, _d; return __generator(this, function (_f) {
                                                                                    switch (_f.label) {
                                                                                        case 0: return [4, d.get(u, { method: "POST", headers: { "Next-Action": w, Accept: "text/x-component", "Content-Type": "text/plain;charset=UTF-8" }, body: l })];
                                                                                        case 1:
                                                                                            A = _f.sent();
                                                                                            if (!(A && A.ok)) return [3, 3];
                                                                                            _d = (_c = x).rscArray;
                                                                                            return [4, A.text()];
                                                                                        case 2:
                                                                                            _b = _d.apply(_c, [_f.sent()]);
                                                                                            return [3, 4];
                                                                                        case 3:
                                                                                            _b = null;
                                                                                            _f.label = 4;
                                                                                        case 4: return [2, _b];
                                                                                    }
                                                                                }); });
                                                                            };
                                                                            if (!a.id) return [3, 5];
                                                                            return [4, h(a.id)];
                                                                        case 4:
                                                                            _d = _g.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _d = null;
                                                                            _g.label = 6;
                                                                        case 6:
                                                                            p = _d;
                                                                            if (!!p) return [3, 10];
                                                                            return [4, x.rscAction(i, a.name)];
                                                                        case 7:
                                                                            m = _g.sent();
                                                                            _f = m && m !== a.id;
                                                                            if (!_f) return [3, 9];
                                                                            return [4, h(m)];
                                                                        case 8:
                                                                            _f = (p = _g.sent());
                                                                            _g.label = 9;
                                                                        case 9:
                                                                            _f;
                                                                            _g.label = 10;
                                                                        case 10:
                                                                            if (!p)
                                                                                return [2, o.error('Không lấy được danh sách chương (Server Action "' + a.name + '")')];
                                                                            b = u.replace(/[?#].*$/, "").replace(/\/+$/, "");
                                                                            return [2, o.success(p.map(function (w) { return { name: String(w[a.title || "label"] || "") + (a.lock && w[a.lock] ? " 🔒" : ""), url: b + "/" + w[a.slug || "slugId"], host: k }; }))];
                                                                    }
                                                                }); });
                                                            }, rscText: function (u) { for (var a = "", i, f = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; i = f.exec(u);)
                                                                try {
                                                                    a += JSON.parse(i[1]);
                                                                }
                                                                catch (D) { } for (var l = "", h = /([0-9a-f]+):T([0-9a-f]+),/g, p; p = h.exec(a);) {
                                                                for (var m = parseInt(p[2], 16), b = h.lastIndex, w = 0; b < a.length && w < m;) {
                                                                    var A = a.charCodeAt(b);
                                                                    A < 128 ? w += 1 : A < 2048 ? w += 2 : A >= 55296 && A <= 56319 ? (w += 4, b++) : w += 3, b++;
                                                                }
                                                                var C = a.slice(h.lastIndex, b);
                                                                C.length > l.length && (l = C), h.lastIndex = b;
                                                            } return l; }, toParas: function (u) { return /<p[\s>]|<br\s*\/?>/i.test(u) ? u : u.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!s.servers)
                                                                                return [2, o.success([{ title: "Server", data: u }])];
                                                                            return [4, d.html(u, s.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, J(a.select(s.servers), function (f) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var l;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, x.pick(f, s.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                                case 1:
                                                                                                    l = _c.sent();
                                                                                                    _b = {};
                                                                                                    return [4, f.text()];
                                                                                                case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(l), _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            i = (_b.sent()).filter(function (f) { return f.data; });
                                                                            return [2, o.success(i.length ? i : [{ title: "Server", data: u }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (u) { u = String(u || "").replace(/\\\//g, "/"); var a = u.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || u.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, p, m, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(u))
                                                                                return [2, o.success({ type: "native", data: u, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(u)];
                                                                        case 1:
                                                                            i = _b.sent();
                                                                            return [4, i.text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (!(s.video && !a)) return [3, 4];
                                                                            return [4, x.pick(c.parse(f, u), s.video)];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, o.success({ type: "native", data: d.fix(l), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            h = x.sniff(f);
                                                                            if (h)
                                                                                return [2, o.success({ type: "native", data: h, headers: { Referer: a ? u : k + "/" } })];
                                                                            p = c.parse(f, u), m = p.select(s.iframe || "iframe[src], iframe[data-src]").first();
                                                                            if (!(m && a < 2)) return [3, 6];
                                                                            b = d.fix(m.attr("src") || m.attr("data-src"));
                                                                            if (!b) return [3, 6];
                                                                            return [4, x.track(b, a + 1)];
                                                                        case 5: return [2, _b.sent()];
                                                                        case 6: return [2, o.success({ type: "webview", data: u })];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof W == "function" ? W : void 0];
                                                    });
                                                });
                                            })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
            });
        });
    }, search: function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (r, n, c, o, g, v, y, S, T, L, q, N, O, P, Q, te, fe) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = e("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function W(u, a) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, x.search(u, a)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var k, s, d, x;
                                                    return __generator(this, function (_b) {
                                                        k = "https://mattreadingtranslations.com";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (u) { }
                                                        s = { tabs: { Novels: "/novels/" }, search: "/novels/", ch_list: "#toc-container td a, .chapter-table td a", item: ".entry-content a[href]", title: ":self", link: ":self@href", cover: "img@img", pageSize: 999, d_title: "h1", d_cover: ".entry-content img@img || meta[property=og:image]@content", d_desc: ".entry-content p || meta[name=description]@content", ch_next: ".pagination a.current + a", ch_maxPages: 80, content: ".entry-content", c_title: "h1", ch_delay: 500 }, d = { img: function (u) { if (!u)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], i = 0; i < a.length; i++) {
                                                                var f = u.attr(a[i]);
                                                                if (f && f.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(f))
                                                                    return d.fix(f.trim());
                                                            } var l = u.attr("data-srcset") || u.attr("srcset"); return l ? d.fix(l.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (u) { return u ? (u = String(u).trim(), u.indexOf("//") === 0 ? "https:" + u : u.indexOf("http") === 0 ? u : u.charAt(0) === "/" ? k + u : k + "/" + u) : ""; }, text: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            i = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(i < a.length)) return [3, 4];
                                                                            return [4, u.select(a[i]).text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, f.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            i++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            i = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (f in a.headers)
                                                                                    i[f] = a.headers[f];
                                                                            return [4, r(u, { method: a.method, headers: i, body: a.body })];
                                                                        case 1:
                                                                            l = _c.sent(), h = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = l && l.status === 429 && h < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(l)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, T(1500 * (h + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, r(u, { method: a.method, headers: i, body: a.body })];
                                                                        case 6:
                                                                            l = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            h++;
                                                                            return [3, 2];
                                                                        case 8: return [2, l];
                                                                    }
                                                                }); });
                                                            }, cf: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (u.status !== 403 && u.status !== 503 && u.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, u.text()];
                                                                        case 1:
                                                                            a = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(a.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (u.ok)
                                                                                return [2, u];
                                                                            return [4, d.cf(u)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + a.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + u.status + " " + a);
                                                                    }
                                                                }); });
                                                            }, html: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            i = _d.sent();
                                                                            return [4, i.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            i = _d.sent();
                                                                            return [4, i.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (u) { var a = parseInt(u || "1", 10); return isNaN(a) || a < 1 ? 1 : a; }, next: function (u, a) { return u ? String(d.page(a) + 1) : ""; }, isUrl: function (u) { return /^(https?:)?\/\//.test(u || "") || (u || "").charAt(0) === "/"; }, enc: function (u) { return encodeURIComponent(u || ""); }, cleanContent: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                u.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, u.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (u) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(u || ""); } }, x = { pick: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, p, m, b, w, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !u)
                                                                                return [2, ""];
                                                                            i = String(a).split(" || "), f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < i.length)) return [3, 9];
                                                                            l = i[f], h = "text", p = l.lastIndexOf("@");
                                                                            p > 0 && !/\[[^\]]*@/.test(l.slice(p)) && (h = l.slice(p + 1), l = l.slice(0, p));
                                                                            m = l === ":self" ? null : u.select(l), b = l === ":self" ? u : m.size() ? m.first() : null;
                                                                            if (!b) return [3, 8];
                                                                            if (!(h === "text")) return [3, 3];
                                                                            return [4, b.text()];
                                                                        case 2:
                                                                            _b = _d.sent();
                                                                            return [3, 7];
                                                                        case 3:
                                                                            if (!(h === "html")) return [3, 5];
                                                                            return [4, b.html()];
                                                                        case 4:
                                                                            _c = _d.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _c = h === "img" ? d.img(b.is("img") ? b : b.select("img").first()) : h === "own" ? b.ownText() : b.attr(h);
                                                                            _d.label = 6;
                                                                        case 6:
                                                                            _b = _c;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            w = _b;
                                                                            if (w)
                                                                                return [2, String(w).trim()];
                                                                            _d.label = 8;
                                                                        case 8:
                                                                            f++;
                                                                            return [3, 1];
                                                                        case 9: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, url: function (u, a, i) { var f = d.page(a), l = String(u); return l = l.replace(/\[([^\]]*)\]/g, function (h, p) { return f > 1 ? p : ""; }), l = l.replace(/\{p\}/g, String(f)).replace(/\{p0\}/g, String(f - 1)).replace(/\{q\}/g, d.enc(i || "")).replace(/\{base\}/g, k), d.fix(l); }, items: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, f, l, h, p, m, b, w, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                i = function (A) { return a && s[a + A] || s[A]; }, f = u.select(i("item")), l = [], h = {}, p = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(p < f.size())) return [3, 9];
                                                                                return [4, f.get(p)];
                                                                            case 2:
                                                                                m = _g.sent();
                                                                                return [4, x.pick(m, i("link") || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || h[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, x.pick(m, i("title") || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                w = _g.sent();
                                                                                _b = w;
                                                                                if (!_b) return [3, 7];
                                                                                h[b] = 1;
                                                                                _d = (_c = l).push;
                                                                                _f = { name: w, link: d.fix(b) };
                                                                                return [4, x.pick(m, i("cover") || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, x.pick(m, i("desc") || "")];
                                                                            case 6:
                                                                                _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = k, _f)]));
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                _b;
                                                                                _g.label = 8;
                                                                            case 8:
                                                                                p++;
                                                                                return [3, 1];
                                                                            case 9: return [2, l];
                                                                        }
                                                                    });
                                                                });
                                                            }, listPage: function (u, a, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(x.url(u, a, i), s.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            return [4, x.items(f, i ? "s_" : "")];
                                                                        case 2:
                                                                            l = _b.sent(), h = s.next ? f.select(s.next).size() > 0 : l.length >= (s.pageSize || 10);
                                                                            return [2, o.success(l, d.next(h && l.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            i = s.tabs && s.tabs[u] || u;
                                                                            return [4, x.listPage(i, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            if (!(s.q_cut && !d.isUrl(u) && (u = String(u).split(new RegExp(s.q_cut))[0].trim() || u), d.isUrl(u))) return [3, 2];
                                                                            i = d.fix(u);
                                                                            return [4, x.listPage(i + (i.indexOf("?") > 0 ? "&" : "?") + (s.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _c.sent()];
                                                                        case 2:
                                                                            if (!s.search_post) return [3, 5];
                                                                            return [4, d.html(x.url(s.search_post.url, a, u), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: String(s.search_post.body).replace(/\{q\}/g, d.enc(u)) })];
                                                                        case 3:
                                                                            f = _c.sent();
                                                                            return [4, x.items(f, "s_")];
                                                                        case 4:
                                                                            l = _c.sent();
                                                                            return [2, o.success(l, null)];
                                                                        case 5:
                                                                            if (!s.search_json) return [3, 7];
                                                                            return [4, x.jsonSearch(s.search_json, u, a)];
                                                                        case 6:
                                                                            _b = _c.sent();
                                                                            return [3, 9];
                                                                        case 7: return [4, x.listPage(s.search, a, u)];
                                                                        case 8:
                                                                            _b = _c.sent();
                                                                            _c.label = 9;
                                                                        case 9: return [2, _b];
                                                                    }
                                                                }); });
                                                            }, jsonSearch: function (u, a, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.json(x.url(u.url, i, a), s.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            u.list && u.list.split(".").forEach(function (p) { f = f && f[p]; });
                                                                            l = function (p, m) { return String(m || "").indexOf("{") >= 0 ? String(m).replace(/\{(\w+)\}/g, function (b, w) { return p[w] == null ? "" : p[w]; }) : p[m] == null ? "" : String(p[m]); }, h = [];
                                                                            return [2, ((f || []).forEach(function (p) { var m = l(p, u.title || "title"), b = l(p, u.link || "url"); m && b && h.push({ name: m, link: d.fix(b), cover: d.fix(l(p, u.cover || "cover")), description: u.desc ? l(p, u.desc) : "", host: k }); }), o.success(h, u.paged && h.length ? d.next(!0, i) : null))];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!s.genre)
                                                                                return [2, o.success([])];
                                                                            return [4, d.html(d.fix(s.genrePage || "/"))];
                                                                        case 1:
                                                                            u = _b.sent();
                                                                            return [4, J(u.select(s.genre), function (i) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, i.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(i.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, o.success(a.filter(function (i) { return i.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, i, f, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(u, s.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!s.d_genres) return [3, 3];
                                                                                return [4, J(a.select(s.d_genres), function (l) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, l.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(l.attr("href")), _b.script = "search.js", _b)];
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    })];
                                                                            case 2:
                                                                                _b = _j.sent();
                                                                                return [3, 4];
                                                                            case 3:
                                                                                _b = [];
                                                                                _j.label = 4;
                                                                            case 4:
                                                                                i = _b;
                                                                                return [4, x.pick(a, s.d_status)];
                                                                            case 5:
                                                                                f = _j.sent();
                                                                                _d = (_c = o).success;
                                                                                _h = {};
                                                                                return [4, x.pick(a, s.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, x.pick(a, s.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, x.pick(a, s.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, x.pick(a, (s.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = f ? "Tình trạng: " + f : "", _h.ongoing = d.ongoing(f), _h.genres = i, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, i, f, l, h, _b, p, m, b, w, A, _c, _d, _f, _g, C, D, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!s.ch_action) return [3, 2];
                                                                                return [4, x.actionToc(u)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (s.single)
                                                                                    return [2, o.success([{ name: s.single === !0 ? "Xem / Đọc" : s.single, url: u, host: k }])];
                                                                                a = [u], i = [], f = {};
                                                                                return [4, d.html(s.ch_rewrite ? u.replace(new RegExp(s.ch_rewrite[0]), s.ch_rewrite[1]) : u, s.req)];
                                                                            case 3:
                                                                                l = _k.sent();
                                                                                if (!s.ch_url) return [3, 7];
                                                                                return [4, x.pick(l, s.ch_url)];
                                                                            case 4:
                                                                                h = _k.sent();
                                                                                _b = h;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(h), s.req)];
                                                                            case 5:
                                                                                _b = (l = _k.sent());
                                                                                _k.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _k.label = 7;
                                                                            case 7:
                                                                                p = 0;
                                                                                _k.label = 8;
                                                                            case 8:
                                                                                if (!(p < (s.ch_maxPages || 60))) return [3, 22];
                                                                                m = l.select(s.ch_list), b = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(b < m.size())) return [3, 17];
                                                                                return [4, m.get(b)];
                                                                            case 10:
                                                                                w = _k.sent(), A = s.ch_attr ? w.attr(s.ch_attr) : w.attr("href") || w.attr("data-href");
                                                                                _c = !A || A === "#" || f[A];
                                                                                if (_c) return [3, 15];
                                                                                f[A] = 1;
                                                                                _f = (_d = i).push;
                                                                                _j = {};
                                                                                if (!s.ch_name) return [3, 12];
                                                                                return [4, x.pick(w, s.ch_name)];
                                                                            case 11:
                                                                                _g = _k.sent();
                                                                                return [3, 14];
                                                                            case 12: return [4, w.text()];
                                                                            case 13:
                                                                                _g = _k.sent();
                                                                                _k.label = 14;
                                                                            case 14:
                                                                                _c = (_f.apply(_d, [(_j.name = (_g) || w.attr("title"), _j.url = d.fix(A), _j.host = k, _j)]));
                                                                                _k.label = 15;
                                                                            case 15:
                                                                                _c;
                                                                                _k.label = 16;
                                                                            case 16:
                                                                                b++;
                                                                                return [3, 9];
                                                                            case 17:
                                                                                C = s.ch_next ? l.select(s.ch_next).first() : null;
                                                                                if (!C || !C.attr("href"))
                                                                                    return [3, 22];
                                                                                D = d.fix(C.attr("href"));
                                                                                if (a.indexOf(D) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(D);
                                                                                _h = s.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, T(s.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(D, s.req)];
                                                                            case 20:
                                                                                l = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                p++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (s.ch_reverse && i.reverse(), !i.length && s.ch_fallback_single && i.push({ name: s.ch_fallback_single === !0 ? "Xem phim" : s.ch_fallback_single, url: u, host: k }), o.success(i))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i, f, l, h, p, m, b, _b, _c, w, A, C, D, _d, _f, _g, _h, j, V, _j, _k, X, B; return __generator(this, function (_l) {
                                                                    switch (_l.label) {
                                                                        case 0:
                                                                            a = [], i = [u], f = u, l = 0;
                                                                            _l.label = 1;
                                                                        case 1:
                                                                            if (!(l < (s.pages_max || 40))) return [3, 17];
                                                                            if (!s.initmanga) return [3, 5];
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(f, s.req)];
                                                                        case 2: return [4, _c.apply(_b, [_l.sent(), f])];
                                                                        case 3:
                                                                            p = _l.sent();
                                                                            return [4, p.text()];
                                                                        case 4:
                                                                            m = (_l.sent()) || "", b = x.initManga(m);
                                                                            h = c.parse(b ? '<div id="imc-dec">' + b + "</div>" : m, f);
                                                                            return [3, 7];
                                                                        case 5: return [4, d.html(f, s.req)];
                                                                        case 6:
                                                                            h = _l.sent();
                                                                            _l.label = 7;
                                                                        case 7:
                                                                            w = h.select(s.initmanga ? "#imc-dec img, " + (s.pages || "#chapter-content img") : s.pages || ".page-chapter img, .reading-content img, .chapter-content img");
                                                                            if (!s.initmanga) return [3, 11];
                                                                            A = h.select("#imc-dec canvas[data-enc]"), C = 0;
                                                                            _l.label = 8;
                                                                        case 8:
                                                                            if (!(C < A.size())) return [3, 11];
                                                                            _f = (_d = CryptoJS.enc.Latin1).stringify;
                                                                            _h = (_g = CryptoJS.enc.Base64).parse;
                                                                            return [4, A.get(C)];
                                                                        case 9:
                                                                            D = _f.apply(_d, [_h.apply(_g, [(_l.sent()).attr("data-enc")])]).split("").reverse().join("");
                                                                            D && a.indexOf(D) < 0 && a.push(D);
                                                                            _l.label = 10;
                                                                        case 10:
                                                                            C++;
                                                                            return [3, 8];
                                                                        case 11:
                                                                            j = 0;
                                                                            _l.label = 12;
                                                                        case 12:
                                                                            if (!(j < w.size())) return [3, 15];
                                                                            _k = (_j = d).img;
                                                                            return [4, w.get(j)];
                                                                        case 13:
                                                                            V = _k.apply(_j, [_l.sent()]);
                                                                            V && a.indexOf(V) < 0 && a.push(V);
                                                                            _l.label = 14;
                                                                        case 14:
                                                                            j++;
                                                                            return [3, 12];
                                                                        case 15:
                                                                            if (!s.pages_next)
                                                                                return [3, 17];
                                                                            X = h.select(s.pages_next).first();
                                                                            if (!X)
                                                                                return [3, 17];
                                                                            B = d.fix(X.attr("href"));
                                                                            if (!B || i.indexOf(B) >= 0)
                                                                                return [3, 17];
                                                                            i.push(B), f = B;
                                                                            _l.label = 16;
                                                                        case 16:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 17: return [2, o.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i, _b, _c, f, l, h, _d, _f, _g, p, _h, _j, _k, m, b, _l, _m, _o, _p, _q, _s; return __generator(this, function (_v) {
                                                                    switch (_v.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, s.req)];
                                                                        case 1: return [4, _c.apply(_b, [_v.sent(), u])];
                                                                        case 2:
                                                                            a = _v.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            i = (_v.sent()) || "";
                                                                            if (!s.content_rsc) return [3, 5];
                                                                            f = x.rscText(i), l = s.c_locked && new RegExp(s.c_locked, "i").test(i), h = l ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(f || l)) return [3, 5];
                                                                            _f = (_d = o).success;
                                                                            _g = [x.toParas(f) + h];
                                                                            return [4, x.pick(c.parse(i, u), s.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_v.sent()]))];
                                                                        case 5:
                                                                            if (!s.initmanga) return [3, 8];
                                                                            p = x.initManga(i);
                                                                            if (!p) return [3, 8];
                                                                            _j = (_h = o).success;
                                                                            return [4, d.cleanContent(c.parse('<div id="imc-dec">' + p + "</div>", u).select("#imc-dec").first())];
                                                                        case 6:
                                                                            _k = [_v.sent()];
                                                                            return [4, x.pick(c.parse(i, u), s.c_title || "h1 || h2")];
                                                                        case 7: return [2, _j.apply(_h, _k.concat([_v.sent()]))];
                                                                        case 8:
                                                                            m = c.parse(i, u), b = m.select(s.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!b) return [3, 10];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(i.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _m = (_l = o).error;
                                                                            _o = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, x.pick(m, "title")];
                                                                        case 9: return [2, _m.apply(_l, [_o + ((_v.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + i.length + " ký tự)" + (i.length < 400 ? ": " + i.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 10:
                                                                            _q = (_p = o).success;
                                                                            return [4, d.cleanContent(b)];
                                                                        case 11:
                                                                            _s = [_v.sent()];
                                                                            return [4, x.pick(m, s.c_title || "h1 || h2")];
                                                                        case 12: return [2, _q.apply(_p, _s.concat([_v.sent()]))];
                                                                    }
                                                                }); });
                                                            }, initManga: function (u) { var a = /InitMangaEncryptedChapter\s*=\s*(\{[\s\S]*?\})\s*;/.exec(u), i = /"decryption_key"\s*:\s*"([^"]+)"/.exec(u); if (!a || !i || typeof CryptoJS == "undefined")
                                                                return ""; var f; try {
                                                                f = JSON.parse(a[1]);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } if (!f || !f.ciphertext)
                                                                return ""; var l = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(i[1])), h = CryptoJS.PBKDF2(l, CryptoJS.enc.Hex.parse(f.salt), { hasher: CryptoJS.algo.SHA512, keySize: 8, iterations: 999 }); try {
                                                                return CryptoJS.AES.decrypt(f.ciphertext, h, { iv: CryptoJS.enc.Hex.parse(f.iv) }).toString(CryptoJS.enc.Utf8);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } }, rscAction: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, p, m, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (i = [], l = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; f = l.exec(u);)
                                                                                i.indexOf(f[0]) < 0 && i.push(f[0]);
                                                                            h = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), p = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(p < i.length && p < 60)) return [3, 5];
                                                                            return [4, d.get(k + i[p])];
                                                                        case 2:
                                                                            m = _d.sent();
                                                                            if (!!(!m || !m.ok)) return [3, 4];
                                                                            _c = (_b = h).exec;
                                                                            return [4, m.text()];
                                                                        case 3:
                                                                            b = _c.apply(_b, [(_d.sent()) || ""]);
                                                                            if (b)
                                                                                return [2, b[1]];
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            p++;
                                                                            return [3, 1];
                                                                        case 5: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, rscArray: function (u) {
                                                                for (var a = String(u || "").split("\n"), i = 0; i < a.length; i++) {
                                                                    var f = /^[0-9a-f]+:(\[.*)$/.exec(a[i]);
                                                                    if (f)
                                                                        try {
                                                                            var l = JSON.parse(f[1]);
                                                                            if (l && l.length)
                                                                                return l;
                                                                        }
                                                                        catch (h) { }
                                                                }
                                                                return null;
                                                            }, actionToc: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i, f, _b, _c, l, h, p, _d, m, _f, b; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = s.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, s.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), u])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            i = (_g.sent()) || "", f = new RegExp(a.arg).exec(i);
                                                                            if (!f)
                                                                                return [2, o.error("Không tìm thấy mã truyện trên trang " + u)];
                                                                            l = JSON.stringify([f[1]]), h = function (w) {
                                                                                return __awaiter(this, void 0, void 0, function () { var A, _b, _c, _d; return __generator(this, function (_f) {
                                                                                    switch (_f.label) {
                                                                                        case 0: return [4, d.get(u, { method: "POST", headers: { "Next-Action": w, Accept: "text/x-component", "Content-Type": "text/plain;charset=UTF-8" }, body: l })];
                                                                                        case 1:
                                                                                            A = _f.sent();
                                                                                            if (!(A && A.ok)) return [3, 3];
                                                                                            _d = (_c = x).rscArray;
                                                                                            return [4, A.text()];
                                                                                        case 2:
                                                                                            _b = _d.apply(_c, [_f.sent()]);
                                                                                            return [3, 4];
                                                                                        case 3:
                                                                                            _b = null;
                                                                                            _f.label = 4;
                                                                                        case 4: return [2, _b];
                                                                                    }
                                                                                }); });
                                                                            };
                                                                            if (!a.id) return [3, 5];
                                                                            return [4, h(a.id)];
                                                                        case 4:
                                                                            _d = _g.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _d = null;
                                                                            _g.label = 6;
                                                                        case 6:
                                                                            p = _d;
                                                                            if (!!p) return [3, 10];
                                                                            return [4, x.rscAction(i, a.name)];
                                                                        case 7:
                                                                            m = _g.sent();
                                                                            _f = m && m !== a.id;
                                                                            if (!_f) return [3, 9];
                                                                            return [4, h(m)];
                                                                        case 8:
                                                                            _f = (p = _g.sent());
                                                                            _g.label = 9;
                                                                        case 9:
                                                                            _f;
                                                                            _g.label = 10;
                                                                        case 10:
                                                                            if (!p)
                                                                                return [2, o.error('Không lấy được danh sách chương (Server Action "' + a.name + '")')];
                                                                            b = u.replace(/[?#].*$/, "").replace(/\/+$/, "");
                                                                            return [2, o.success(p.map(function (w) { return { name: String(w[a.title || "label"] || "") + (a.lock && w[a.lock] ? " 🔒" : ""), url: b + "/" + w[a.slug || "slugId"], host: k }; }))];
                                                                    }
                                                                }); });
                                                            }, rscText: function (u) { for (var a = "", i, f = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; i = f.exec(u);)
                                                                try {
                                                                    a += JSON.parse(i[1]);
                                                                }
                                                                catch (D) { } for (var l = "", h = /([0-9a-f]+):T([0-9a-f]+),/g, p; p = h.exec(a);) {
                                                                for (var m = parseInt(p[2], 16), b = h.lastIndex, w = 0; b < a.length && w < m;) {
                                                                    var A = a.charCodeAt(b);
                                                                    A < 128 ? w += 1 : A < 2048 ? w += 2 : A >= 55296 && A <= 56319 ? (w += 4, b++) : w += 3, b++;
                                                                }
                                                                var C = a.slice(h.lastIndex, b);
                                                                C.length > l.length && (l = C), h.lastIndex = b;
                                                            } return l; }, toParas: function (u) { return /<p[\s>]|<br\s*\/?>/i.test(u) ? u : u.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!s.servers)
                                                                                return [2, o.success([{ title: "Server", data: u }])];
                                                                            return [4, d.html(u, s.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, J(a.select(s.servers), function (f) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var l;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, x.pick(f, s.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                                case 1:
                                                                                                    l = _c.sent();
                                                                                                    _b = {};
                                                                                                    return [4, f.text()];
                                                                                                case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(l), _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            i = (_b.sent()).filter(function (f) { return f.data; });
                                                                            return [2, o.success(i.length ? i : [{ title: "Server", data: u }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (u) { u = String(u || "").replace(/\\\//g, "/"); var a = u.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || u.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, p, m, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(u))
                                                                                return [2, o.success({ type: "native", data: u, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(u)];
                                                                        case 1:
                                                                            i = _b.sent();
                                                                            return [4, i.text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (!(s.video && !a)) return [3, 4];
                                                                            return [4, x.pick(c.parse(f, u), s.video)];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, o.success({ type: "native", data: d.fix(l), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            h = x.sniff(f);
                                                                            if (h)
                                                                                return [2, o.success({ type: "native", data: h, headers: { Referer: a ? u : k + "/" } })];
                                                                            p = c.parse(f, u), m = p.select(s.iframe || "iframe[src], iframe[data-src]").first();
                                                                            if (!(m && a < 2)) return [3, 6];
                                                                            b = d.fix(m.attr("src") || m.attr("data-src"));
                                                                            if (!b) return [3, 6];
                                                                            return [4, x.track(b, a + 1)];
                                                                        case 5: return [2, _b.sent()];
                                                                        case 6: return [2, o.success({ type: "webview", data: u })];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof W == "function" ? W : void 0];
                                                    });
                                                });
                                            })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
            });
        });
    }, detail: function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (r, n, c, o, g, v, y, S, T, L, q, N, O, P, Q, te, fe) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = e("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function W(u) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, x.detail(u)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var k, s, d, x;
                                                    return __generator(this, function (_b) {
                                                        k = "https://mattreadingtranslations.com";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (u) { }
                                                        s = { tabs: { Novels: "/novels/" }, search: "/novels/", ch_list: "#toc-container td a, .chapter-table td a", item: ".entry-content a[href]", title: ":self", link: ":self@href", cover: "img@img", pageSize: 999, d_title: "h1", d_cover: ".entry-content img@img || meta[property=og:image]@content", d_desc: ".entry-content p || meta[name=description]@content", ch_next: ".pagination a.current + a", ch_maxPages: 80, content: ".entry-content", c_title: "h1", ch_delay: 500 }, d = { img: function (u) { if (!u)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], i = 0; i < a.length; i++) {
                                                                var f = u.attr(a[i]);
                                                                if (f && f.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(f))
                                                                    return d.fix(f.trim());
                                                            } var l = u.attr("data-srcset") || u.attr("srcset"); return l ? d.fix(l.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (u) { return u ? (u = String(u).trim(), u.indexOf("//") === 0 ? "https:" + u : u.indexOf("http") === 0 ? u : u.charAt(0) === "/" ? k + u : k + "/" + u) : ""; }, text: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            i = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(i < a.length)) return [3, 4];
                                                                            return [4, u.select(a[i]).text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, f.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            i++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            i = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (f in a.headers)
                                                                                    i[f] = a.headers[f];
                                                                            return [4, r(u, { method: a.method, headers: i, body: a.body })];
                                                                        case 1:
                                                                            l = _c.sent(), h = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = l && l.status === 429 && h < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(l)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, T(1500 * (h + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, r(u, { method: a.method, headers: i, body: a.body })];
                                                                        case 6:
                                                                            l = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            h++;
                                                                            return [3, 2];
                                                                        case 8: return [2, l];
                                                                    }
                                                                }); });
                                                            }, cf: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (u.status !== 403 && u.status !== 503 && u.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, u.text()];
                                                                        case 1:
                                                                            a = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(a.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (u.ok)
                                                                                return [2, u];
                                                                            return [4, d.cf(u)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + a.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + u.status + " " + a);
                                                                    }
                                                                }); });
                                                            }, html: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            i = _d.sent();
                                                                            return [4, i.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            i = _d.sent();
                                                                            return [4, i.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (u) { var a = parseInt(u || "1", 10); return isNaN(a) || a < 1 ? 1 : a; }, next: function (u, a) { return u ? String(d.page(a) + 1) : ""; }, isUrl: function (u) { return /^(https?:)?\/\//.test(u || "") || (u || "").charAt(0) === "/"; }, enc: function (u) { return encodeURIComponent(u || ""); }, cleanContent: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                u.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, u.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (u) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(u || ""); } }, x = { pick: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, p, m, b, w, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !u)
                                                                                return [2, ""];
                                                                            i = String(a).split(" || "), f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < i.length)) return [3, 9];
                                                                            l = i[f], h = "text", p = l.lastIndexOf("@");
                                                                            p > 0 && !/\[[^\]]*@/.test(l.slice(p)) && (h = l.slice(p + 1), l = l.slice(0, p));
                                                                            m = l === ":self" ? null : u.select(l), b = l === ":self" ? u : m.size() ? m.first() : null;
                                                                            if (!b) return [3, 8];
                                                                            if (!(h === "text")) return [3, 3];
                                                                            return [4, b.text()];
                                                                        case 2:
                                                                            _b = _d.sent();
                                                                            return [3, 7];
                                                                        case 3:
                                                                            if (!(h === "html")) return [3, 5];
                                                                            return [4, b.html()];
                                                                        case 4:
                                                                            _c = _d.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _c = h === "img" ? d.img(b.is("img") ? b : b.select("img").first()) : h === "own" ? b.ownText() : b.attr(h);
                                                                            _d.label = 6;
                                                                        case 6:
                                                                            _b = _c;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            w = _b;
                                                                            if (w)
                                                                                return [2, String(w).trim()];
                                                                            _d.label = 8;
                                                                        case 8:
                                                                            f++;
                                                                            return [3, 1];
                                                                        case 9: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, url: function (u, a, i) { var f = d.page(a), l = String(u); return l = l.replace(/\[([^\]]*)\]/g, function (h, p) { return f > 1 ? p : ""; }), l = l.replace(/\{p\}/g, String(f)).replace(/\{p0\}/g, String(f - 1)).replace(/\{q\}/g, d.enc(i || "")).replace(/\{base\}/g, k), d.fix(l); }, items: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, f, l, h, p, m, b, w, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                i = function (A) { return a && s[a + A] || s[A]; }, f = u.select(i("item")), l = [], h = {}, p = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(p < f.size())) return [3, 9];
                                                                                return [4, f.get(p)];
                                                                            case 2:
                                                                                m = _g.sent();
                                                                                return [4, x.pick(m, i("link") || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || h[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, x.pick(m, i("title") || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                w = _g.sent();
                                                                                _b = w;
                                                                                if (!_b) return [3, 7];
                                                                                h[b] = 1;
                                                                                _d = (_c = l).push;
                                                                                _f = { name: w, link: d.fix(b) };
                                                                                return [4, x.pick(m, i("cover") || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, x.pick(m, i("desc") || "")];
                                                                            case 6:
                                                                                _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = k, _f)]));
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                _b;
                                                                                _g.label = 8;
                                                                            case 8:
                                                                                p++;
                                                                                return [3, 1];
                                                                            case 9: return [2, l];
                                                                        }
                                                                    });
                                                                });
                                                            }, listPage: function (u, a, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(x.url(u, a, i), s.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            return [4, x.items(f, i ? "s_" : "")];
                                                                        case 2:
                                                                            l = _b.sent(), h = s.next ? f.select(s.next).size() > 0 : l.length >= (s.pageSize || 10);
                                                                            return [2, o.success(l, d.next(h && l.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            i = s.tabs && s.tabs[u] || u;
                                                                            return [4, x.listPage(i, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            if (!(s.q_cut && !d.isUrl(u) && (u = String(u).split(new RegExp(s.q_cut))[0].trim() || u), d.isUrl(u))) return [3, 2];
                                                                            i = d.fix(u);
                                                                            return [4, x.listPage(i + (i.indexOf("?") > 0 ? "&" : "?") + (s.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _c.sent()];
                                                                        case 2:
                                                                            if (!s.search_post) return [3, 5];
                                                                            return [4, d.html(x.url(s.search_post.url, a, u), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: String(s.search_post.body).replace(/\{q\}/g, d.enc(u)) })];
                                                                        case 3:
                                                                            f = _c.sent();
                                                                            return [4, x.items(f, "s_")];
                                                                        case 4:
                                                                            l = _c.sent();
                                                                            return [2, o.success(l, null)];
                                                                        case 5:
                                                                            if (!s.search_json) return [3, 7];
                                                                            return [4, x.jsonSearch(s.search_json, u, a)];
                                                                        case 6:
                                                                            _b = _c.sent();
                                                                            return [3, 9];
                                                                        case 7: return [4, x.listPage(s.search, a, u)];
                                                                        case 8:
                                                                            _b = _c.sent();
                                                                            _c.label = 9;
                                                                        case 9: return [2, _b];
                                                                    }
                                                                }); });
                                                            }, jsonSearch: function (u, a, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.json(x.url(u.url, i, a), s.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            u.list && u.list.split(".").forEach(function (p) { f = f && f[p]; });
                                                                            l = function (p, m) { return String(m || "").indexOf("{") >= 0 ? String(m).replace(/\{(\w+)\}/g, function (b, w) { return p[w] == null ? "" : p[w]; }) : p[m] == null ? "" : String(p[m]); }, h = [];
                                                                            return [2, ((f || []).forEach(function (p) { var m = l(p, u.title || "title"), b = l(p, u.link || "url"); m && b && h.push({ name: m, link: d.fix(b), cover: d.fix(l(p, u.cover || "cover")), description: u.desc ? l(p, u.desc) : "", host: k }); }), o.success(h, u.paged && h.length ? d.next(!0, i) : null))];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!s.genre)
                                                                                return [2, o.success([])];
                                                                            return [4, d.html(d.fix(s.genrePage || "/"))];
                                                                        case 1:
                                                                            u = _b.sent();
                                                                            return [4, J(u.select(s.genre), function (i) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, i.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(i.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, o.success(a.filter(function (i) { return i.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, i, f, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(u, s.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!s.d_genres) return [3, 3];
                                                                                return [4, J(a.select(s.d_genres), function (l) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, l.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(l.attr("href")), _b.script = "search.js", _b)];
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    })];
                                                                            case 2:
                                                                                _b = _j.sent();
                                                                                return [3, 4];
                                                                            case 3:
                                                                                _b = [];
                                                                                _j.label = 4;
                                                                            case 4:
                                                                                i = _b;
                                                                                return [4, x.pick(a, s.d_status)];
                                                                            case 5:
                                                                                f = _j.sent();
                                                                                _d = (_c = o).success;
                                                                                _h = {};
                                                                                return [4, x.pick(a, s.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, x.pick(a, s.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, x.pick(a, s.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, x.pick(a, (s.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = f ? "Tình trạng: " + f : "", _h.ongoing = d.ongoing(f), _h.genres = i, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, i, f, l, h, _b, p, m, b, w, A, _c, _d, _f, _g, C, D, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!s.ch_action) return [3, 2];
                                                                                return [4, x.actionToc(u)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (s.single)
                                                                                    return [2, o.success([{ name: s.single === !0 ? "Xem / Đọc" : s.single, url: u, host: k }])];
                                                                                a = [u], i = [], f = {};
                                                                                return [4, d.html(s.ch_rewrite ? u.replace(new RegExp(s.ch_rewrite[0]), s.ch_rewrite[1]) : u, s.req)];
                                                                            case 3:
                                                                                l = _k.sent();
                                                                                if (!s.ch_url) return [3, 7];
                                                                                return [4, x.pick(l, s.ch_url)];
                                                                            case 4:
                                                                                h = _k.sent();
                                                                                _b = h;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(h), s.req)];
                                                                            case 5:
                                                                                _b = (l = _k.sent());
                                                                                _k.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _k.label = 7;
                                                                            case 7:
                                                                                p = 0;
                                                                                _k.label = 8;
                                                                            case 8:
                                                                                if (!(p < (s.ch_maxPages || 60))) return [3, 22];
                                                                                m = l.select(s.ch_list), b = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(b < m.size())) return [3, 17];
                                                                                return [4, m.get(b)];
                                                                            case 10:
                                                                                w = _k.sent(), A = s.ch_attr ? w.attr(s.ch_attr) : w.attr("href") || w.attr("data-href");
                                                                                _c = !A || A === "#" || f[A];
                                                                                if (_c) return [3, 15];
                                                                                f[A] = 1;
                                                                                _f = (_d = i).push;
                                                                                _j = {};
                                                                                if (!s.ch_name) return [3, 12];
                                                                                return [4, x.pick(w, s.ch_name)];
                                                                            case 11:
                                                                                _g = _k.sent();
                                                                                return [3, 14];
                                                                            case 12: return [4, w.text()];
                                                                            case 13:
                                                                                _g = _k.sent();
                                                                                _k.label = 14;
                                                                            case 14:
                                                                                _c = (_f.apply(_d, [(_j.name = (_g) || w.attr("title"), _j.url = d.fix(A), _j.host = k, _j)]));
                                                                                _k.label = 15;
                                                                            case 15:
                                                                                _c;
                                                                                _k.label = 16;
                                                                            case 16:
                                                                                b++;
                                                                                return [3, 9];
                                                                            case 17:
                                                                                C = s.ch_next ? l.select(s.ch_next).first() : null;
                                                                                if (!C || !C.attr("href"))
                                                                                    return [3, 22];
                                                                                D = d.fix(C.attr("href"));
                                                                                if (a.indexOf(D) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(D);
                                                                                _h = s.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, T(s.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(D, s.req)];
                                                                            case 20:
                                                                                l = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                p++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (s.ch_reverse && i.reverse(), !i.length && s.ch_fallback_single && i.push({ name: s.ch_fallback_single === !0 ? "Xem phim" : s.ch_fallback_single, url: u, host: k }), o.success(i))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i, f, l, h, p, m, b, _b, _c, w, A, C, D, _d, _f, _g, _h, j, V, _j, _k, X, B; return __generator(this, function (_l) {
                                                                    switch (_l.label) {
                                                                        case 0:
                                                                            a = [], i = [u], f = u, l = 0;
                                                                            _l.label = 1;
                                                                        case 1:
                                                                            if (!(l < (s.pages_max || 40))) return [3, 17];
                                                                            if (!s.initmanga) return [3, 5];
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(f, s.req)];
                                                                        case 2: return [4, _c.apply(_b, [_l.sent(), f])];
                                                                        case 3:
                                                                            p = _l.sent();
                                                                            return [4, p.text()];
                                                                        case 4:
                                                                            m = (_l.sent()) || "", b = x.initManga(m);
                                                                            h = c.parse(b ? '<div id="imc-dec">' + b + "</div>" : m, f);
                                                                            return [3, 7];
                                                                        case 5: return [4, d.html(f, s.req)];
                                                                        case 6:
                                                                            h = _l.sent();
                                                                            _l.label = 7;
                                                                        case 7:
                                                                            w = h.select(s.initmanga ? "#imc-dec img, " + (s.pages || "#chapter-content img") : s.pages || ".page-chapter img, .reading-content img, .chapter-content img");
                                                                            if (!s.initmanga) return [3, 11];
                                                                            A = h.select("#imc-dec canvas[data-enc]"), C = 0;
                                                                            _l.label = 8;
                                                                        case 8:
                                                                            if (!(C < A.size())) return [3, 11];
                                                                            _f = (_d = CryptoJS.enc.Latin1).stringify;
                                                                            _h = (_g = CryptoJS.enc.Base64).parse;
                                                                            return [4, A.get(C)];
                                                                        case 9:
                                                                            D = _f.apply(_d, [_h.apply(_g, [(_l.sent()).attr("data-enc")])]).split("").reverse().join("");
                                                                            D && a.indexOf(D) < 0 && a.push(D);
                                                                            _l.label = 10;
                                                                        case 10:
                                                                            C++;
                                                                            return [3, 8];
                                                                        case 11:
                                                                            j = 0;
                                                                            _l.label = 12;
                                                                        case 12:
                                                                            if (!(j < w.size())) return [3, 15];
                                                                            _k = (_j = d).img;
                                                                            return [4, w.get(j)];
                                                                        case 13:
                                                                            V = _k.apply(_j, [_l.sent()]);
                                                                            V && a.indexOf(V) < 0 && a.push(V);
                                                                            _l.label = 14;
                                                                        case 14:
                                                                            j++;
                                                                            return [3, 12];
                                                                        case 15:
                                                                            if (!s.pages_next)
                                                                                return [3, 17];
                                                                            X = h.select(s.pages_next).first();
                                                                            if (!X)
                                                                                return [3, 17];
                                                                            B = d.fix(X.attr("href"));
                                                                            if (!B || i.indexOf(B) >= 0)
                                                                                return [3, 17];
                                                                            i.push(B), f = B;
                                                                            _l.label = 16;
                                                                        case 16:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 17: return [2, o.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i, _b, _c, f, l, h, _d, _f, _g, p, _h, _j, _k, m, b, _l, _m, _o, _p, _q, _s; return __generator(this, function (_v) {
                                                                    switch (_v.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, s.req)];
                                                                        case 1: return [4, _c.apply(_b, [_v.sent(), u])];
                                                                        case 2:
                                                                            a = _v.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            i = (_v.sent()) || "";
                                                                            if (!s.content_rsc) return [3, 5];
                                                                            f = x.rscText(i), l = s.c_locked && new RegExp(s.c_locked, "i").test(i), h = l ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(f || l)) return [3, 5];
                                                                            _f = (_d = o).success;
                                                                            _g = [x.toParas(f) + h];
                                                                            return [4, x.pick(c.parse(i, u), s.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_v.sent()]))];
                                                                        case 5:
                                                                            if (!s.initmanga) return [3, 8];
                                                                            p = x.initManga(i);
                                                                            if (!p) return [3, 8];
                                                                            _j = (_h = o).success;
                                                                            return [4, d.cleanContent(c.parse('<div id="imc-dec">' + p + "</div>", u).select("#imc-dec").first())];
                                                                        case 6:
                                                                            _k = [_v.sent()];
                                                                            return [4, x.pick(c.parse(i, u), s.c_title || "h1 || h2")];
                                                                        case 7: return [2, _j.apply(_h, _k.concat([_v.sent()]))];
                                                                        case 8:
                                                                            m = c.parse(i, u), b = m.select(s.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!b) return [3, 10];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(i.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _m = (_l = o).error;
                                                                            _o = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, x.pick(m, "title")];
                                                                        case 9: return [2, _m.apply(_l, [_o + ((_v.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + i.length + " ký tự)" + (i.length < 400 ? ": " + i.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 10:
                                                                            _q = (_p = o).success;
                                                                            return [4, d.cleanContent(b)];
                                                                        case 11:
                                                                            _s = [_v.sent()];
                                                                            return [4, x.pick(m, s.c_title || "h1 || h2")];
                                                                        case 12: return [2, _q.apply(_p, _s.concat([_v.sent()]))];
                                                                    }
                                                                }); });
                                                            }, initManga: function (u) { var a = /InitMangaEncryptedChapter\s*=\s*(\{[\s\S]*?\})\s*;/.exec(u), i = /"decryption_key"\s*:\s*"([^"]+)"/.exec(u); if (!a || !i || typeof CryptoJS == "undefined")
                                                                return ""; var f; try {
                                                                f = JSON.parse(a[1]);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } if (!f || !f.ciphertext)
                                                                return ""; var l = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(i[1])), h = CryptoJS.PBKDF2(l, CryptoJS.enc.Hex.parse(f.salt), { hasher: CryptoJS.algo.SHA512, keySize: 8, iterations: 999 }); try {
                                                                return CryptoJS.AES.decrypt(f.ciphertext, h, { iv: CryptoJS.enc.Hex.parse(f.iv) }).toString(CryptoJS.enc.Utf8);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } }, rscAction: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, p, m, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (i = [], l = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; f = l.exec(u);)
                                                                                i.indexOf(f[0]) < 0 && i.push(f[0]);
                                                                            h = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), p = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(p < i.length && p < 60)) return [3, 5];
                                                                            return [4, d.get(k + i[p])];
                                                                        case 2:
                                                                            m = _d.sent();
                                                                            if (!!(!m || !m.ok)) return [3, 4];
                                                                            _c = (_b = h).exec;
                                                                            return [4, m.text()];
                                                                        case 3:
                                                                            b = _c.apply(_b, [(_d.sent()) || ""]);
                                                                            if (b)
                                                                                return [2, b[1]];
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            p++;
                                                                            return [3, 1];
                                                                        case 5: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, rscArray: function (u) {
                                                                for (var a = String(u || "").split("\n"), i = 0; i < a.length; i++) {
                                                                    var f = /^[0-9a-f]+:(\[.*)$/.exec(a[i]);
                                                                    if (f)
                                                                        try {
                                                                            var l = JSON.parse(f[1]);
                                                                            if (l && l.length)
                                                                                return l;
                                                                        }
                                                                        catch (h) { }
                                                                }
                                                                return null;
                                                            }, actionToc: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i, f, _b, _c, l, h, p, _d, m, _f, b; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = s.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, s.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), u])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            i = (_g.sent()) || "", f = new RegExp(a.arg).exec(i);
                                                                            if (!f)
                                                                                return [2, o.error("Không tìm thấy mã truyện trên trang " + u)];
                                                                            l = JSON.stringify([f[1]]), h = function (w) {
                                                                                return __awaiter(this, void 0, void 0, function () { var A, _b, _c, _d; return __generator(this, function (_f) {
                                                                                    switch (_f.label) {
                                                                                        case 0: return [4, d.get(u, { method: "POST", headers: { "Next-Action": w, Accept: "text/x-component", "Content-Type": "text/plain;charset=UTF-8" }, body: l })];
                                                                                        case 1:
                                                                                            A = _f.sent();
                                                                                            if (!(A && A.ok)) return [3, 3];
                                                                                            _d = (_c = x).rscArray;
                                                                                            return [4, A.text()];
                                                                                        case 2:
                                                                                            _b = _d.apply(_c, [_f.sent()]);
                                                                                            return [3, 4];
                                                                                        case 3:
                                                                                            _b = null;
                                                                                            _f.label = 4;
                                                                                        case 4: return [2, _b];
                                                                                    }
                                                                                }); });
                                                                            };
                                                                            if (!a.id) return [3, 5];
                                                                            return [4, h(a.id)];
                                                                        case 4:
                                                                            _d = _g.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _d = null;
                                                                            _g.label = 6;
                                                                        case 6:
                                                                            p = _d;
                                                                            if (!!p) return [3, 10];
                                                                            return [4, x.rscAction(i, a.name)];
                                                                        case 7:
                                                                            m = _g.sent();
                                                                            _f = m && m !== a.id;
                                                                            if (!_f) return [3, 9];
                                                                            return [4, h(m)];
                                                                        case 8:
                                                                            _f = (p = _g.sent());
                                                                            _g.label = 9;
                                                                        case 9:
                                                                            _f;
                                                                            _g.label = 10;
                                                                        case 10:
                                                                            if (!p)
                                                                                return [2, o.error('Không lấy được danh sách chương (Server Action "' + a.name + '")')];
                                                                            b = u.replace(/[?#].*$/, "").replace(/\/+$/, "");
                                                                            return [2, o.success(p.map(function (w) { return { name: String(w[a.title || "label"] || "") + (a.lock && w[a.lock] ? " 🔒" : ""), url: b + "/" + w[a.slug || "slugId"], host: k }; }))];
                                                                    }
                                                                }); });
                                                            }, rscText: function (u) { for (var a = "", i, f = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; i = f.exec(u);)
                                                                try {
                                                                    a += JSON.parse(i[1]);
                                                                }
                                                                catch (D) { } for (var l = "", h = /([0-9a-f]+):T([0-9a-f]+),/g, p; p = h.exec(a);) {
                                                                for (var m = parseInt(p[2], 16), b = h.lastIndex, w = 0; b < a.length && w < m;) {
                                                                    var A = a.charCodeAt(b);
                                                                    A < 128 ? w += 1 : A < 2048 ? w += 2 : A >= 55296 && A <= 56319 ? (w += 4, b++) : w += 3, b++;
                                                                }
                                                                var C = a.slice(h.lastIndex, b);
                                                                C.length > l.length && (l = C), h.lastIndex = b;
                                                            } return l; }, toParas: function (u) { return /<p[\s>]|<br\s*\/?>/i.test(u) ? u : u.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!s.servers)
                                                                                return [2, o.success([{ title: "Server", data: u }])];
                                                                            return [4, d.html(u, s.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, J(a.select(s.servers), function (f) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var l;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, x.pick(f, s.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                                case 1:
                                                                                                    l = _c.sent();
                                                                                                    _b = {};
                                                                                                    return [4, f.text()];
                                                                                                case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(l), _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            i = (_b.sent()).filter(function (f) { return f.data; });
                                                                            return [2, o.success(i.length ? i : [{ title: "Server", data: u }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (u) { u = String(u || "").replace(/\\\//g, "/"); var a = u.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || u.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, p, m, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(u))
                                                                                return [2, o.success({ type: "native", data: u, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(u)];
                                                                        case 1:
                                                                            i = _b.sent();
                                                                            return [4, i.text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (!(s.video && !a)) return [3, 4];
                                                                            return [4, x.pick(c.parse(f, u), s.video)];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, o.success({ type: "native", data: d.fix(l), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            h = x.sniff(f);
                                                                            if (h)
                                                                                return [2, o.success({ type: "native", data: h, headers: { Referer: a ? u : k + "/" } })];
                                                                            p = c.parse(f, u), m = p.select(s.iframe || "iframe[src], iframe[data-src]").first();
                                                                            if (!(m && a < 2)) return [3, 6];
                                                                            b = d.fix(m.attr("src") || m.attr("data-src"));
                                                                            if (!b) return [3, 6];
                                                                            return [4, x.track(b, a + 1)];
                                                                        case 5: return [2, _b.sent()];
                                                                        case 6: return [2, o.success({ type: "webview", data: u })];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof W == "function" ? W : void 0];
                                                    });
                                                });
                                            })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
            });
        });
    }, toc: function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (r, n, c, o, g, v, y, S, T, L, q, N, O, P, Q, te, fe) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = e("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function W(u) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, x.toc(u)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var k, s, d, x;
                                                    return __generator(this, function (_b) {
                                                        k = "https://mattreadingtranslations.com";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (u) { }
                                                        s = { tabs: { Novels: "/novels/" }, search: "/novels/", ch_list: "#toc-container td a, .chapter-table td a", item: ".entry-content a[href]", title: ":self", link: ":self@href", cover: "img@img", pageSize: 999, d_title: "h1", d_cover: ".entry-content img@img || meta[property=og:image]@content", d_desc: ".entry-content p || meta[name=description]@content", ch_next: ".pagination a.current + a", ch_maxPages: 80, content: ".entry-content", c_title: "h1", ch_delay: 500 }, d = { img: function (u) { if (!u)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], i = 0; i < a.length; i++) {
                                                                var f = u.attr(a[i]);
                                                                if (f && f.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(f))
                                                                    return d.fix(f.trim());
                                                            } var l = u.attr("data-srcset") || u.attr("srcset"); return l ? d.fix(l.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (u) { return u ? (u = String(u).trim(), u.indexOf("//") === 0 ? "https:" + u : u.indexOf("http") === 0 ? u : u.charAt(0) === "/" ? k + u : k + "/" + u) : ""; }, text: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            i = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(i < a.length)) return [3, 4];
                                                                            return [4, u.select(a[i]).text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, f.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            i++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            i = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (f in a.headers)
                                                                                    i[f] = a.headers[f];
                                                                            return [4, r(u, { method: a.method, headers: i, body: a.body })];
                                                                        case 1:
                                                                            l = _c.sent(), h = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = l && l.status === 429 && h < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(l)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, T(1500 * (h + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, r(u, { method: a.method, headers: i, body: a.body })];
                                                                        case 6:
                                                                            l = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            h++;
                                                                            return [3, 2];
                                                                        case 8: return [2, l];
                                                                    }
                                                                }); });
                                                            }, cf: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (u.status !== 403 && u.status !== 503 && u.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, u.text()];
                                                                        case 1:
                                                                            a = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(a.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (u.ok)
                                                                                return [2, u];
                                                                            return [4, d.cf(u)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + a.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + u.status + " " + a);
                                                                    }
                                                                }); });
                                                            }, html: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            i = _d.sent();
                                                                            return [4, i.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            i = _d.sent();
                                                                            return [4, i.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (u) { var a = parseInt(u || "1", 10); return isNaN(a) || a < 1 ? 1 : a; }, next: function (u, a) { return u ? String(d.page(a) + 1) : ""; }, isUrl: function (u) { return /^(https?:)?\/\//.test(u || "") || (u || "").charAt(0) === "/"; }, enc: function (u) { return encodeURIComponent(u || ""); }, cleanContent: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                u.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, u.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (u) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(u || ""); } }, x = { pick: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, p, m, b, w, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !u)
                                                                                return [2, ""];
                                                                            i = String(a).split(" || "), f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < i.length)) return [3, 9];
                                                                            l = i[f], h = "text", p = l.lastIndexOf("@");
                                                                            p > 0 && !/\[[^\]]*@/.test(l.slice(p)) && (h = l.slice(p + 1), l = l.slice(0, p));
                                                                            m = l === ":self" ? null : u.select(l), b = l === ":self" ? u : m.size() ? m.first() : null;
                                                                            if (!b) return [3, 8];
                                                                            if (!(h === "text")) return [3, 3];
                                                                            return [4, b.text()];
                                                                        case 2:
                                                                            _b = _d.sent();
                                                                            return [3, 7];
                                                                        case 3:
                                                                            if (!(h === "html")) return [3, 5];
                                                                            return [4, b.html()];
                                                                        case 4:
                                                                            _c = _d.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _c = h === "img" ? d.img(b.is("img") ? b : b.select("img").first()) : h === "own" ? b.ownText() : b.attr(h);
                                                                            _d.label = 6;
                                                                        case 6:
                                                                            _b = _c;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            w = _b;
                                                                            if (w)
                                                                                return [2, String(w).trim()];
                                                                            _d.label = 8;
                                                                        case 8:
                                                                            f++;
                                                                            return [3, 1];
                                                                        case 9: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, url: function (u, a, i) { var f = d.page(a), l = String(u); return l = l.replace(/\[([^\]]*)\]/g, function (h, p) { return f > 1 ? p : ""; }), l = l.replace(/\{p\}/g, String(f)).replace(/\{p0\}/g, String(f - 1)).replace(/\{q\}/g, d.enc(i || "")).replace(/\{base\}/g, k), d.fix(l); }, items: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, f, l, h, p, m, b, w, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                i = function (A) { return a && s[a + A] || s[A]; }, f = u.select(i("item")), l = [], h = {}, p = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(p < f.size())) return [3, 9];
                                                                                return [4, f.get(p)];
                                                                            case 2:
                                                                                m = _g.sent();
                                                                                return [4, x.pick(m, i("link") || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || h[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, x.pick(m, i("title") || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                w = _g.sent();
                                                                                _b = w;
                                                                                if (!_b) return [3, 7];
                                                                                h[b] = 1;
                                                                                _d = (_c = l).push;
                                                                                _f = { name: w, link: d.fix(b) };
                                                                                return [4, x.pick(m, i("cover") || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, x.pick(m, i("desc") || "")];
                                                                            case 6:
                                                                                _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = k, _f)]));
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                _b;
                                                                                _g.label = 8;
                                                                            case 8:
                                                                                p++;
                                                                                return [3, 1];
                                                                            case 9: return [2, l];
                                                                        }
                                                                    });
                                                                });
                                                            }, listPage: function (u, a, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(x.url(u, a, i), s.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            return [4, x.items(f, i ? "s_" : "")];
                                                                        case 2:
                                                                            l = _b.sent(), h = s.next ? f.select(s.next).size() > 0 : l.length >= (s.pageSize || 10);
                                                                            return [2, o.success(l, d.next(h && l.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            i = s.tabs && s.tabs[u] || u;
                                                                            return [4, x.listPage(i, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            if (!(s.q_cut && !d.isUrl(u) && (u = String(u).split(new RegExp(s.q_cut))[0].trim() || u), d.isUrl(u))) return [3, 2];
                                                                            i = d.fix(u);
                                                                            return [4, x.listPage(i + (i.indexOf("?") > 0 ? "&" : "?") + (s.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _c.sent()];
                                                                        case 2:
                                                                            if (!s.search_post) return [3, 5];
                                                                            return [4, d.html(x.url(s.search_post.url, a, u), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: String(s.search_post.body).replace(/\{q\}/g, d.enc(u)) })];
                                                                        case 3:
                                                                            f = _c.sent();
                                                                            return [4, x.items(f, "s_")];
                                                                        case 4:
                                                                            l = _c.sent();
                                                                            return [2, o.success(l, null)];
                                                                        case 5:
                                                                            if (!s.search_json) return [3, 7];
                                                                            return [4, x.jsonSearch(s.search_json, u, a)];
                                                                        case 6:
                                                                            _b = _c.sent();
                                                                            return [3, 9];
                                                                        case 7: return [4, x.listPage(s.search, a, u)];
                                                                        case 8:
                                                                            _b = _c.sent();
                                                                            _c.label = 9;
                                                                        case 9: return [2, _b];
                                                                    }
                                                                }); });
                                                            }, jsonSearch: function (u, a, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.json(x.url(u.url, i, a), s.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            u.list && u.list.split(".").forEach(function (p) { f = f && f[p]; });
                                                                            l = function (p, m) { return String(m || "").indexOf("{") >= 0 ? String(m).replace(/\{(\w+)\}/g, function (b, w) { return p[w] == null ? "" : p[w]; }) : p[m] == null ? "" : String(p[m]); }, h = [];
                                                                            return [2, ((f || []).forEach(function (p) { var m = l(p, u.title || "title"), b = l(p, u.link || "url"); m && b && h.push({ name: m, link: d.fix(b), cover: d.fix(l(p, u.cover || "cover")), description: u.desc ? l(p, u.desc) : "", host: k }); }), o.success(h, u.paged && h.length ? d.next(!0, i) : null))];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!s.genre)
                                                                                return [2, o.success([])];
                                                                            return [4, d.html(d.fix(s.genrePage || "/"))];
                                                                        case 1:
                                                                            u = _b.sent();
                                                                            return [4, J(u.select(s.genre), function (i) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, i.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(i.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, o.success(a.filter(function (i) { return i.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, i, f, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(u, s.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!s.d_genres) return [3, 3];
                                                                                return [4, J(a.select(s.d_genres), function (l) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, l.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(l.attr("href")), _b.script = "search.js", _b)];
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    })];
                                                                            case 2:
                                                                                _b = _j.sent();
                                                                                return [3, 4];
                                                                            case 3:
                                                                                _b = [];
                                                                                _j.label = 4;
                                                                            case 4:
                                                                                i = _b;
                                                                                return [4, x.pick(a, s.d_status)];
                                                                            case 5:
                                                                                f = _j.sent();
                                                                                _d = (_c = o).success;
                                                                                _h = {};
                                                                                return [4, x.pick(a, s.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, x.pick(a, s.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, x.pick(a, s.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, x.pick(a, (s.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = f ? "Tình trạng: " + f : "", _h.ongoing = d.ongoing(f), _h.genres = i, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, i, f, l, h, _b, p, m, b, w, A, _c, _d, _f, _g, C, D, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!s.ch_action) return [3, 2];
                                                                                return [4, x.actionToc(u)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (s.single)
                                                                                    return [2, o.success([{ name: s.single === !0 ? "Xem / Đọc" : s.single, url: u, host: k }])];
                                                                                a = [u], i = [], f = {};
                                                                                return [4, d.html(s.ch_rewrite ? u.replace(new RegExp(s.ch_rewrite[0]), s.ch_rewrite[1]) : u, s.req)];
                                                                            case 3:
                                                                                l = _k.sent();
                                                                                if (!s.ch_url) return [3, 7];
                                                                                return [4, x.pick(l, s.ch_url)];
                                                                            case 4:
                                                                                h = _k.sent();
                                                                                _b = h;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(h), s.req)];
                                                                            case 5:
                                                                                _b = (l = _k.sent());
                                                                                _k.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _k.label = 7;
                                                                            case 7:
                                                                                p = 0;
                                                                                _k.label = 8;
                                                                            case 8:
                                                                                if (!(p < (s.ch_maxPages || 60))) return [3, 22];
                                                                                m = l.select(s.ch_list), b = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(b < m.size())) return [3, 17];
                                                                                return [4, m.get(b)];
                                                                            case 10:
                                                                                w = _k.sent(), A = s.ch_attr ? w.attr(s.ch_attr) : w.attr("href") || w.attr("data-href");
                                                                                _c = !A || A === "#" || f[A];
                                                                                if (_c) return [3, 15];
                                                                                f[A] = 1;
                                                                                _f = (_d = i).push;
                                                                                _j = {};
                                                                                if (!s.ch_name) return [3, 12];
                                                                                return [4, x.pick(w, s.ch_name)];
                                                                            case 11:
                                                                                _g = _k.sent();
                                                                                return [3, 14];
                                                                            case 12: return [4, w.text()];
                                                                            case 13:
                                                                                _g = _k.sent();
                                                                                _k.label = 14;
                                                                            case 14:
                                                                                _c = (_f.apply(_d, [(_j.name = (_g) || w.attr("title"), _j.url = d.fix(A), _j.host = k, _j)]));
                                                                                _k.label = 15;
                                                                            case 15:
                                                                                _c;
                                                                                _k.label = 16;
                                                                            case 16:
                                                                                b++;
                                                                                return [3, 9];
                                                                            case 17:
                                                                                C = s.ch_next ? l.select(s.ch_next).first() : null;
                                                                                if (!C || !C.attr("href"))
                                                                                    return [3, 22];
                                                                                D = d.fix(C.attr("href"));
                                                                                if (a.indexOf(D) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(D);
                                                                                _h = s.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, T(s.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(D, s.req)];
                                                                            case 20:
                                                                                l = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                p++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (s.ch_reverse && i.reverse(), !i.length && s.ch_fallback_single && i.push({ name: s.ch_fallback_single === !0 ? "Xem phim" : s.ch_fallback_single, url: u, host: k }), o.success(i))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i, f, l, h, p, m, b, _b, _c, w, A, C, D, _d, _f, _g, _h, j, V, _j, _k, X, B; return __generator(this, function (_l) {
                                                                    switch (_l.label) {
                                                                        case 0:
                                                                            a = [], i = [u], f = u, l = 0;
                                                                            _l.label = 1;
                                                                        case 1:
                                                                            if (!(l < (s.pages_max || 40))) return [3, 17];
                                                                            if (!s.initmanga) return [3, 5];
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(f, s.req)];
                                                                        case 2: return [4, _c.apply(_b, [_l.sent(), f])];
                                                                        case 3:
                                                                            p = _l.sent();
                                                                            return [4, p.text()];
                                                                        case 4:
                                                                            m = (_l.sent()) || "", b = x.initManga(m);
                                                                            h = c.parse(b ? '<div id="imc-dec">' + b + "</div>" : m, f);
                                                                            return [3, 7];
                                                                        case 5: return [4, d.html(f, s.req)];
                                                                        case 6:
                                                                            h = _l.sent();
                                                                            _l.label = 7;
                                                                        case 7:
                                                                            w = h.select(s.initmanga ? "#imc-dec img, " + (s.pages || "#chapter-content img") : s.pages || ".page-chapter img, .reading-content img, .chapter-content img");
                                                                            if (!s.initmanga) return [3, 11];
                                                                            A = h.select("#imc-dec canvas[data-enc]"), C = 0;
                                                                            _l.label = 8;
                                                                        case 8:
                                                                            if (!(C < A.size())) return [3, 11];
                                                                            _f = (_d = CryptoJS.enc.Latin1).stringify;
                                                                            _h = (_g = CryptoJS.enc.Base64).parse;
                                                                            return [4, A.get(C)];
                                                                        case 9:
                                                                            D = _f.apply(_d, [_h.apply(_g, [(_l.sent()).attr("data-enc")])]).split("").reverse().join("");
                                                                            D && a.indexOf(D) < 0 && a.push(D);
                                                                            _l.label = 10;
                                                                        case 10:
                                                                            C++;
                                                                            return [3, 8];
                                                                        case 11:
                                                                            j = 0;
                                                                            _l.label = 12;
                                                                        case 12:
                                                                            if (!(j < w.size())) return [3, 15];
                                                                            _k = (_j = d).img;
                                                                            return [4, w.get(j)];
                                                                        case 13:
                                                                            V = _k.apply(_j, [_l.sent()]);
                                                                            V && a.indexOf(V) < 0 && a.push(V);
                                                                            _l.label = 14;
                                                                        case 14:
                                                                            j++;
                                                                            return [3, 12];
                                                                        case 15:
                                                                            if (!s.pages_next)
                                                                                return [3, 17];
                                                                            X = h.select(s.pages_next).first();
                                                                            if (!X)
                                                                                return [3, 17];
                                                                            B = d.fix(X.attr("href"));
                                                                            if (!B || i.indexOf(B) >= 0)
                                                                                return [3, 17];
                                                                            i.push(B), f = B;
                                                                            _l.label = 16;
                                                                        case 16:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 17: return [2, o.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i, _b, _c, f, l, h, _d, _f, _g, p, _h, _j, _k, m, b, _l, _m, _o, _p, _q, _s; return __generator(this, function (_v) {
                                                                    switch (_v.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, s.req)];
                                                                        case 1: return [4, _c.apply(_b, [_v.sent(), u])];
                                                                        case 2:
                                                                            a = _v.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            i = (_v.sent()) || "";
                                                                            if (!s.content_rsc) return [3, 5];
                                                                            f = x.rscText(i), l = s.c_locked && new RegExp(s.c_locked, "i").test(i), h = l ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(f || l)) return [3, 5];
                                                                            _f = (_d = o).success;
                                                                            _g = [x.toParas(f) + h];
                                                                            return [4, x.pick(c.parse(i, u), s.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_v.sent()]))];
                                                                        case 5:
                                                                            if (!s.initmanga) return [3, 8];
                                                                            p = x.initManga(i);
                                                                            if (!p) return [3, 8];
                                                                            _j = (_h = o).success;
                                                                            return [4, d.cleanContent(c.parse('<div id="imc-dec">' + p + "</div>", u).select("#imc-dec").first())];
                                                                        case 6:
                                                                            _k = [_v.sent()];
                                                                            return [4, x.pick(c.parse(i, u), s.c_title || "h1 || h2")];
                                                                        case 7: return [2, _j.apply(_h, _k.concat([_v.sent()]))];
                                                                        case 8:
                                                                            m = c.parse(i, u), b = m.select(s.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!b) return [3, 10];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(i.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _m = (_l = o).error;
                                                                            _o = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, x.pick(m, "title")];
                                                                        case 9: return [2, _m.apply(_l, [_o + ((_v.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + i.length + " ký tự)" + (i.length < 400 ? ": " + i.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 10:
                                                                            _q = (_p = o).success;
                                                                            return [4, d.cleanContent(b)];
                                                                        case 11:
                                                                            _s = [_v.sent()];
                                                                            return [4, x.pick(m, s.c_title || "h1 || h2")];
                                                                        case 12: return [2, _q.apply(_p, _s.concat([_v.sent()]))];
                                                                    }
                                                                }); });
                                                            }, initManga: function (u) { var a = /InitMangaEncryptedChapter\s*=\s*(\{[\s\S]*?\})\s*;/.exec(u), i = /"decryption_key"\s*:\s*"([^"]+)"/.exec(u); if (!a || !i || typeof CryptoJS == "undefined")
                                                                return ""; var f; try {
                                                                f = JSON.parse(a[1]);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } if (!f || !f.ciphertext)
                                                                return ""; var l = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(i[1])), h = CryptoJS.PBKDF2(l, CryptoJS.enc.Hex.parse(f.salt), { hasher: CryptoJS.algo.SHA512, keySize: 8, iterations: 999 }); try {
                                                                return CryptoJS.AES.decrypt(f.ciphertext, h, { iv: CryptoJS.enc.Hex.parse(f.iv) }).toString(CryptoJS.enc.Utf8);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } }, rscAction: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, p, m, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (i = [], l = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; f = l.exec(u);)
                                                                                i.indexOf(f[0]) < 0 && i.push(f[0]);
                                                                            h = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), p = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(p < i.length && p < 60)) return [3, 5];
                                                                            return [4, d.get(k + i[p])];
                                                                        case 2:
                                                                            m = _d.sent();
                                                                            if (!!(!m || !m.ok)) return [3, 4];
                                                                            _c = (_b = h).exec;
                                                                            return [4, m.text()];
                                                                        case 3:
                                                                            b = _c.apply(_b, [(_d.sent()) || ""]);
                                                                            if (b)
                                                                                return [2, b[1]];
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            p++;
                                                                            return [3, 1];
                                                                        case 5: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, rscArray: function (u) {
                                                                for (var a = String(u || "").split("\n"), i = 0; i < a.length; i++) {
                                                                    var f = /^[0-9a-f]+:(\[.*)$/.exec(a[i]);
                                                                    if (f)
                                                                        try {
                                                                            var l = JSON.parse(f[1]);
                                                                            if (l && l.length)
                                                                                return l;
                                                                        }
                                                                        catch (h) { }
                                                                }
                                                                return null;
                                                            }, actionToc: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i, f, _b, _c, l, h, p, _d, m, _f, b; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = s.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, s.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), u])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            i = (_g.sent()) || "", f = new RegExp(a.arg).exec(i);
                                                                            if (!f)
                                                                                return [2, o.error("Không tìm thấy mã truyện trên trang " + u)];
                                                                            l = JSON.stringify([f[1]]), h = function (w) {
                                                                                return __awaiter(this, void 0, void 0, function () { var A, _b, _c, _d; return __generator(this, function (_f) {
                                                                                    switch (_f.label) {
                                                                                        case 0: return [4, d.get(u, { method: "POST", headers: { "Next-Action": w, Accept: "text/x-component", "Content-Type": "text/plain;charset=UTF-8" }, body: l })];
                                                                                        case 1:
                                                                                            A = _f.sent();
                                                                                            if (!(A && A.ok)) return [3, 3];
                                                                                            _d = (_c = x).rscArray;
                                                                                            return [4, A.text()];
                                                                                        case 2:
                                                                                            _b = _d.apply(_c, [_f.sent()]);
                                                                                            return [3, 4];
                                                                                        case 3:
                                                                                            _b = null;
                                                                                            _f.label = 4;
                                                                                        case 4: return [2, _b];
                                                                                    }
                                                                                }); });
                                                                            };
                                                                            if (!a.id) return [3, 5];
                                                                            return [4, h(a.id)];
                                                                        case 4:
                                                                            _d = _g.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _d = null;
                                                                            _g.label = 6;
                                                                        case 6:
                                                                            p = _d;
                                                                            if (!!p) return [3, 10];
                                                                            return [4, x.rscAction(i, a.name)];
                                                                        case 7:
                                                                            m = _g.sent();
                                                                            _f = m && m !== a.id;
                                                                            if (!_f) return [3, 9];
                                                                            return [4, h(m)];
                                                                        case 8:
                                                                            _f = (p = _g.sent());
                                                                            _g.label = 9;
                                                                        case 9:
                                                                            _f;
                                                                            _g.label = 10;
                                                                        case 10:
                                                                            if (!p)
                                                                                return [2, o.error('Không lấy được danh sách chương (Server Action "' + a.name + '")')];
                                                                            b = u.replace(/[?#].*$/, "").replace(/\/+$/, "");
                                                                            return [2, o.success(p.map(function (w) { return { name: String(w[a.title || "label"] || "") + (a.lock && w[a.lock] ? " 🔒" : ""), url: b + "/" + w[a.slug || "slugId"], host: k }; }))];
                                                                    }
                                                                }); });
                                                            }, rscText: function (u) { for (var a = "", i, f = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; i = f.exec(u);)
                                                                try {
                                                                    a += JSON.parse(i[1]);
                                                                }
                                                                catch (D) { } for (var l = "", h = /([0-9a-f]+):T([0-9a-f]+),/g, p; p = h.exec(a);) {
                                                                for (var m = parseInt(p[2], 16), b = h.lastIndex, w = 0; b < a.length && w < m;) {
                                                                    var A = a.charCodeAt(b);
                                                                    A < 128 ? w += 1 : A < 2048 ? w += 2 : A >= 55296 && A <= 56319 ? (w += 4, b++) : w += 3, b++;
                                                                }
                                                                var C = a.slice(h.lastIndex, b);
                                                                C.length > l.length && (l = C), h.lastIndex = b;
                                                            } return l; }, toParas: function (u) { return /<p[\s>]|<br\s*\/?>/i.test(u) ? u : u.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!s.servers)
                                                                                return [2, o.success([{ title: "Server", data: u }])];
                                                                            return [4, d.html(u, s.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, J(a.select(s.servers), function (f) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var l;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, x.pick(f, s.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                                case 1:
                                                                                                    l = _c.sent();
                                                                                                    _b = {};
                                                                                                    return [4, f.text()];
                                                                                                case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(l), _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            i = (_b.sent()).filter(function (f) { return f.data; });
                                                                            return [2, o.success(i.length ? i : [{ title: "Server", data: u }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (u) { u = String(u || "").replace(/\\\//g, "/"); var a = u.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || u.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, p, m, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(u))
                                                                                return [2, o.success({ type: "native", data: u, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(u)];
                                                                        case 1:
                                                                            i = _b.sent();
                                                                            return [4, i.text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (!(s.video && !a)) return [3, 4];
                                                                            return [4, x.pick(c.parse(f, u), s.video)];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, o.success({ type: "native", data: d.fix(l), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            h = x.sniff(f);
                                                                            if (h)
                                                                                return [2, o.success({ type: "native", data: h, headers: { Referer: a ? u : k + "/" } })];
                                                                            p = c.parse(f, u), m = p.select(s.iframe || "iframe[src], iframe[data-src]").first();
                                                                            if (!(m && a < 2)) return [3, 6];
                                                                            b = d.fix(m.attr("src") || m.attr("data-src"));
                                                                            if (!b) return [3, 6];
                                                                            return [4, x.track(b, a + 1)];
                                                                        case 5: return [2, _b.sent()];
                                                                        case 6: return [2, o.success({ type: "webview", data: u })];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof W == "function" ? W : void 0];
                                                    });
                                                });
                                            })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
            });
        });
    }, chap: function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (r, n, c, o, g, v, y, S, T, L, q, N, O, P, Q, te, fe) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = e("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function W(u) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, x.text(u)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var k, s, d, x;
                                                    return __generator(this, function (_b) {
                                                        k = "https://mattreadingtranslations.com";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (u) { }
                                                        s = { tabs: { Novels: "/novels/" }, search: "/novels/", ch_list: "#toc-container td a, .chapter-table td a", item: ".entry-content a[href]", title: ":self", link: ":self@href", cover: "img@img", pageSize: 999, d_title: "h1", d_cover: ".entry-content img@img || meta[property=og:image]@content", d_desc: ".entry-content p || meta[name=description]@content", ch_next: ".pagination a.current + a", ch_maxPages: 80, content: ".entry-content", c_title: "h1", ch_delay: 500 }, d = { img: function (u) { if (!u)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], i = 0; i < a.length; i++) {
                                                                var f = u.attr(a[i]);
                                                                if (f && f.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(f))
                                                                    return d.fix(f.trim());
                                                            } var l = u.attr("data-srcset") || u.attr("srcset"); return l ? d.fix(l.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (u) { return u ? (u = String(u).trim(), u.indexOf("//") === 0 ? "https:" + u : u.indexOf("http") === 0 ? u : u.charAt(0) === "/" ? k + u : k + "/" + u) : ""; }, text: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            i = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(i < a.length)) return [3, 4];
                                                                            return [4, u.select(a[i]).text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, f.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            i++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            i = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (f in a.headers)
                                                                                    i[f] = a.headers[f];
                                                                            return [4, r(u, { method: a.method, headers: i, body: a.body })];
                                                                        case 1:
                                                                            l = _c.sent(), h = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = l && l.status === 429 && h < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(l)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, T(1500 * (h + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, r(u, { method: a.method, headers: i, body: a.body })];
                                                                        case 6:
                                                                            l = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            h++;
                                                                            return [3, 2];
                                                                        case 8: return [2, l];
                                                                    }
                                                                }); });
                                                            }, cf: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (u.status !== 403 && u.status !== 503 && u.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, u.text()];
                                                                        case 1:
                                                                            a = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(a.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (u.ok)
                                                                                return [2, u];
                                                                            return [4, d.cf(u)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + a.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + u.status + " " + a);
                                                                    }
                                                                }); });
                                                            }, html: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            i = _d.sent();
                                                                            return [4, i.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            i = _d.sent();
                                                                            return [4, i.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (u) { var a = parseInt(u || "1", 10); return isNaN(a) || a < 1 ? 1 : a; }, next: function (u, a) { return u ? String(d.page(a) + 1) : ""; }, isUrl: function (u) { return /^(https?:)?\/\//.test(u || "") || (u || "").charAt(0) === "/"; }, enc: function (u) { return encodeURIComponent(u || ""); }, cleanContent: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                u.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, u.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (u) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(u || ""); } }, x = { pick: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, p, m, b, w, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !u)
                                                                                return [2, ""];
                                                                            i = String(a).split(" || "), f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < i.length)) return [3, 9];
                                                                            l = i[f], h = "text", p = l.lastIndexOf("@");
                                                                            p > 0 && !/\[[^\]]*@/.test(l.slice(p)) && (h = l.slice(p + 1), l = l.slice(0, p));
                                                                            m = l === ":self" ? null : u.select(l), b = l === ":self" ? u : m.size() ? m.first() : null;
                                                                            if (!b) return [3, 8];
                                                                            if (!(h === "text")) return [3, 3];
                                                                            return [4, b.text()];
                                                                        case 2:
                                                                            _b = _d.sent();
                                                                            return [3, 7];
                                                                        case 3:
                                                                            if (!(h === "html")) return [3, 5];
                                                                            return [4, b.html()];
                                                                        case 4:
                                                                            _c = _d.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _c = h === "img" ? d.img(b.is("img") ? b : b.select("img").first()) : h === "own" ? b.ownText() : b.attr(h);
                                                                            _d.label = 6;
                                                                        case 6:
                                                                            _b = _c;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            w = _b;
                                                                            if (w)
                                                                                return [2, String(w).trim()];
                                                                            _d.label = 8;
                                                                        case 8:
                                                                            f++;
                                                                            return [3, 1];
                                                                        case 9: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, url: function (u, a, i) { var f = d.page(a), l = String(u); return l = l.replace(/\[([^\]]*)\]/g, function (h, p) { return f > 1 ? p : ""; }), l = l.replace(/\{p\}/g, String(f)).replace(/\{p0\}/g, String(f - 1)).replace(/\{q\}/g, d.enc(i || "")).replace(/\{base\}/g, k), d.fix(l); }, items: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, f, l, h, p, m, b, w, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                i = function (A) { return a && s[a + A] || s[A]; }, f = u.select(i("item")), l = [], h = {}, p = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(p < f.size())) return [3, 9];
                                                                                return [4, f.get(p)];
                                                                            case 2:
                                                                                m = _g.sent();
                                                                                return [4, x.pick(m, i("link") || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || h[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, x.pick(m, i("title") || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                w = _g.sent();
                                                                                _b = w;
                                                                                if (!_b) return [3, 7];
                                                                                h[b] = 1;
                                                                                _d = (_c = l).push;
                                                                                _f = { name: w, link: d.fix(b) };
                                                                                return [4, x.pick(m, i("cover") || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, x.pick(m, i("desc") || "")];
                                                                            case 6:
                                                                                _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = k, _f)]));
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                _b;
                                                                                _g.label = 8;
                                                                            case 8:
                                                                                p++;
                                                                                return [3, 1];
                                                                            case 9: return [2, l];
                                                                        }
                                                                    });
                                                                });
                                                            }, listPage: function (u, a, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(x.url(u, a, i), s.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            return [4, x.items(f, i ? "s_" : "")];
                                                                        case 2:
                                                                            l = _b.sent(), h = s.next ? f.select(s.next).size() > 0 : l.length >= (s.pageSize || 10);
                                                                            return [2, o.success(l, d.next(h && l.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            i = s.tabs && s.tabs[u] || u;
                                                                            return [4, x.listPage(i, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            if (!(s.q_cut && !d.isUrl(u) && (u = String(u).split(new RegExp(s.q_cut))[0].trim() || u), d.isUrl(u))) return [3, 2];
                                                                            i = d.fix(u);
                                                                            return [4, x.listPage(i + (i.indexOf("?") > 0 ? "&" : "?") + (s.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _c.sent()];
                                                                        case 2:
                                                                            if (!s.search_post) return [3, 5];
                                                                            return [4, d.html(x.url(s.search_post.url, a, u), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: String(s.search_post.body).replace(/\{q\}/g, d.enc(u)) })];
                                                                        case 3:
                                                                            f = _c.sent();
                                                                            return [4, x.items(f, "s_")];
                                                                        case 4:
                                                                            l = _c.sent();
                                                                            return [2, o.success(l, null)];
                                                                        case 5:
                                                                            if (!s.search_json) return [3, 7];
                                                                            return [4, x.jsonSearch(s.search_json, u, a)];
                                                                        case 6:
                                                                            _b = _c.sent();
                                                                            return [3, 9];
                                                                        case 7: return [4, x.listPage(s.search, a, u)];
                                                                        case 8:
                                                                            _b = _c.sent();
                                                                            _c.label = 9;
                                                                        case 9: return [2, _b];
                                                                    }
                                                                }); });
                                                            }, jsonSearch: function (u, a, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.json(x.url(u.url, i, a), s.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            u.list && u.list.split(".").forEach(function (p) { f = f && f[p]; });
                                                                            l = function (p, m) { return String(m || "").indexOf("{") >= 0 ? String(m).replace(/\{(\w+)\}/g, function (b, w) { return p[w] == null ? "" : p[w]; }) : p[m] == null ? "" : String(p[m]); }, h = [];
                                                                            return [2, ((f || []).forEach(function (p) { var m = l(p, u.title || "title"), b = l(p, u.link || "url"); m && b && h.push({ name: m, link: d.fix(b), cover: d.fix(l(p, u.cover || "cover")), description: u.desc ? l(p, u.desc) : "", host: k }); }), o.success(h, u.paged && h.length ? d.next(!0, i) : null))];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!s.genre)
                                                                                return [2, o.success([])];
                                                                            return [4, d.html(d.fix(s.genrePage || "/"))];
                                                                        case 1:
                                                                            u = _b.sent();
                                                                            return [4, J(u.select(s.genre), function (i) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, i.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(i.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, o.success(a.filter(function (i) { return i.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, i, f, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(u, s.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!s.d_genres) return [3, 3];
                                                                                return [4, J(a.select(s.d_genres), function (l) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, l.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(l.attr("href")), _b.script = "search.js", _b)];
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    })];
                                                                            case 2:
                                                                                _b = _j.sent();
                                                                                return [3, 4];
                                                                            case 3:
                                                                                _b = [];
                                                                                _j.label = 4;
                                                                            case 4:
                                                                                i = _b;
                                                                                return [4, x.pick(a, s.d_status)];
                                                                            case 5:
                                                                                f = _j.sent();
                                                                                _d = (_c = o).success;
                                                                                _h = {};
                                                                                return [4, x.pick(a, s.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, x.pick(a, s.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, x.pick(a, s.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, x.pick(a, (s.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = f ? "Tình trạng: " + f : "", _h.ongoing = d.ongoing(f), _h.genres = i, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, i, f, l, h, _b, p, m, b, w, A, _c, _d, _f, _g, C, D, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!s.ch_action) return [3, 2];
                                                                                return [4, x.actionToc(u)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (s.single)
                                                                                    return [2, o.success([{ name: s.single === !0 ? "Xem / Đọc" : s.single, url: u, host: k }])];
                                                                                a = [u], i = [], f = {};
                                                                                return [4, d.html(s.ch_rewrite ? u.replace(new RegExp(s.ch_rewrite[0]), s.ch_rewrite[1]) : u, s.req)];
                                                                            case 3:
                                                                                l = _k.sent();
                                                                                if (!s.ch_url) return [3, 7];
                                                                                return [4, x.pick(l, s.ch_url)];
                                                                            case 4:
                                                                                h = _k.sent();
                                                                                _b = h;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(h), s.req)];
                                                                            case 5:
                                                                                _b = (l = _k.sent());
                                                                                _k.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _k.label = 7;
                                                                            case 7:
                                                                                p = 0;
                                                                                _k.label = 8;
                                                                            case 8:
                                                                                if (!(p < (s.ch_maxPages || 60))) return [3, 22];
                                                                                m = l.select(s.ch_list), b = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(b < m.size())) return [3, 17];
                                                                                return [4, m.get(b)];
                                                                            case 10:
                                                                                w = _k.sent(), A = s.ch_attr ? w.attr(s.ch_attr) : w.attr("href") || w.attr("data-href");
                                                                                _c = !A || A === "#" || f[A];
                                                                                if (_c) return [3, 15];
                                                                                f[A] = 1;
                                                                                _f = (_d = i).push;
                                                                                _j = {};
                                                                                if (!s.ch_name) return [3, 12];
                                                                                return [4, x.pick(w, s.ch_name)];
                                                                            case 11:
                                                                                _g = _k.sent();
                                                                                return [3, 14];
                                                                            case 12: return [4, w.text()];
                                                                            case 13:
                                                                                _g = _k.sent();
                                                                                _k.label = 14;
                                                                            case 14:
                                                                                _c = (_f.apply(_d, [(_j.name = (_g) || w.attr("title"), _j.url = d.fix(A), _j.host = k, _j)]));
                                                                                _k.label = 15;
                                                                            case 15:
                                                                                _c;
                                                                                _k.label = 16;
                                                                            case 16:
                                                                                b++;
                                                                                return [3, 9];
                                                                            case 17:
                                                                                C = s.ch_next ? l.select(s.ch_next).first() : null;
                                                                                if (!C || !C.attr("href"))
                                                                                    return [3, 22];
                                                                                D = d.fix(C.attr("href"));
                                                                                if (a.indexOf(D) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(D);
                                                                                _h = s.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, T(s.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(D, s.req)];
                                                                            case 20:
                                                                                l = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                p++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (s.ch_reverse && i.reverse(), !i.length && s.ch_fallback_single && i.push({ name: s.ch_fallback_single === !0 ? "Xem phim" : s.ch_fallback_single, url: u, host: k }), o.success(i))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i, f, l, h, p, m, b, _b, _c, w, A, C, D, _d, _f, _g, _h, j, V, _j, _k, X, B; return __generator(this, function (_l) {
                                                                    switch (_l.label) {
                                                                        case 0:
                                                                            a = [], i = [u], f = u, l = 0;
                                                                            _l.label = 1;
                                                                        case 1:
                                                                            if (!(l < (s.pages_max || 40))) return [3, 17];
                                                                            if (!s.initmanga) return [3, 5];
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(f, s.req)];
                                                                        case 2: return [4, _c.apply(_b, [_l.sent(), f])];
                                                                        case 3:
                                                                            p = _l.sent();
                                                                            return [4, p.text()];
                                                                        case 4:
                                                                            m = (_l.sent()) || "", b = x.initManga(m);
                                                                            h = c.parse(b ? '<div id="imc-dec">' + b + "</div>" : m, f);
                                                                            return [3, 7];
                                                                        case 5: return [4, d.html(f, s.req)];
                                                                        case 6:
                                                                            h = _l.sent();
                                                                            _l.label = 7;
                                                                        case 7:
                                                                            w = h.select(s.initmanga ? "#imc-dec img, " + (s.pages || "#chapter-content img") : s.pages || ".page-chapter img, .reading-content img, .chapter-content img");
                                                                            if (!s.initmanga) return [3, 11];
                                                                            A = h.select("#imc-dec canvas[data-enc]"), C = 0;
                                                                            _l.label = 8;
                                                                        case 8:
                                                                            if (!(C < A.size())) return [3, 11];
                                                                            _f = (_d = CryptoJS.enc.Latin1).stringify;
                                                                            _h = (_g = CryptoJS.enc.Base64).parse;
                                                                            return [4, A.get(C)];
                                                                        case 9:
                                                                            D = _f.apply(_d, [_h.apply(_g, [(_l.sent()).attr("data-enc")])]).split("").reverse().join("");
                                                                            D && a.indexOf(D) < 0 && a.push(D);
                                                                            _l.label = 10;
                                                                        case 10:
                                                                            C++;
                                                                            return [3, 8];
                                                                        case 11:
                                                                            j = 0;
                                                                            _l.label = 12;
                                                                        case 12:
                                                                            if (!(j < w.size())) return [3, 15];
                                                                            _k = (_j = d).img;
                                                                            return [4, w.get(j)];
                                                                        case 13:
                                                                            V = _k.apply(_j, [_l.sent()]);
                                                                            V && a.indexOf(V) < 0 && a.push(V);
                                                                            _l.label = 14;
                                                                        case 14:
                                                                            j++;
                                                                            return [3, 12];
                                                                        case 15:
                                                                            if (!s.pages_next)
                                                                                return [3, 17];
                                                                            X = h.select(s.pages_next).first();
                                                                            if (!X)
                                                                                return [3, 17];
                                                                            B = d.fix(X.attr("href"));
                                                                            if (!B || i.indexOf(B) >= 0)
                                                                                return [3, 17];
                                                                            i.push(B), f = B;
                                                                            _l.label = 16;
                                                                        case 16:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 17: return [2, o.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i, _b, _c, f, l, h, _d, _f, _g, p, _h, _j, _k, m, b, _l, _m, _o, _p, _q, _s; return __generator(this, function (_v) {
                                                                    switch (_v.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, s.req)];
                                                                        case 1: return [4, _c.apply(_b, [_v.sent(), u])];
                                                                        case 2:
                                                                            a = _v.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            i = (_v.sent()) || "";
                                                                            if (!s.content_rsc) return [3, 5];
                                                                            f = x.rscText(i), l = s.c_locked && new RegExp(s.c_locked, "i").test(i), h = l ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(f || l)) return [3, 5];
                                                                            _f = (_d = o).success;
                                                                            _g = [x.toParas(f) + h];
                                                                            return [4, x.pick(c.parse(i, u), s.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_v.sent()]))];
                                                                        case 5:
                                                                            if (!s.initmanga) return [3, 8];
                                                                            p = x.initManga(i);
                                                                            if (!p) return [3, 8];
                                                                            _j = (_h = o).success;
                                                                            return [4, d.cleanContent(c.parse('<div id="imc-dec">' + p + "</div>", u).select("#imc-dec").first())];
                                                                        case 6:
                                                                            _k = [_v.sent()];
                                                                            return [4, x.pick(c.parse(i, u), s.c_title || "h1 || h2")];
                                                                        case 7: return [2, _j.apply(_h, _k.concat([_v.sent()]))];
                                                                        case 8:
                                                                            m = c.parse(i, u), b = m.select(s.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!b) return [3, 10];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(i.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _m = (_l = o).error;
                                                                            _o = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, x.pick(m, "title")];
                                                                        case 9: return [2, _m.apply(_l, [_o + ((_v.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + i.length + " ký tự)" + (i.length < 400 ? ": " + i.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 10:
                                                                            _q = (_p = o).success;
                                                                            return [4, d.cleanContent(b)];
                                                                        case 11:
                                                                            _s = [_v.sent()];
                                                                            return [4, x.pick(m, s.c_title || "h1 || h2")];
                                                                        case 12: return [2, _q.apply(_p, _s.concat([_v.sent()]))];
                                                                    }
                                                                }); });
                                                            }, initManga: function (u) { var a = /InitMangaEncryptedChapter\s*=\s*(\{[\s\S]*?\})\s*;/.exec(u), i = /"decryption_key"\s*:\s*"([^"]+)"/.exec(u); if (!a || !i || typeof CryptoJS == "undefined")
                                                                return ""; var f; try {
                                                                f = JSON.parse(a[1]);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } if (!f || !f.ciphertext)
                                                                return ""; var l = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(i[1])), h = CryptoJS.PBKDF2(l, CryptoJS.enc.Hex.parse(f.salt), { hasher: CryptoJS.algo.SHA512, keySize: 8, iterations: 999 }); try {
                                                                return CryptoJS.AES.decrypt(f.ciphertext, h, { iv: CryptoJS.enc.Hex.parse(f.iv) }).toString(CryptoJS.enc.Utf8);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } }, rscAction: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, p, m, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (i = [], l = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; f = l.exec(u);)
                                                                                i.indexOf(f[0]) < 0 && i.push(f[0]);
                                                                            h = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), p = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(p < i.length && p < 60)) return [3, 5];
                                                                            return [4, d.get(k + i[p])];
                                                                        case 2:
                                                                            m = _d.sent();
                                                                            if (!!(!m || !m.ok)) return [3, 4];
                                                                            _c = (_b = h).exec;
                                                                            return [4, m.text()];
                                                                        case 3:
                                                                            b = _c.apply(_b, [(_d.sent()) || ""]);
                                                                            if (b)
                                                                                return [2, b[1]];
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            p++;
                                                                            return [3, 1];
                                                                        case 5: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, rscArray: function (u) {
                                                                for (var a = String(u || "").split("\n"), i = 0; i < a.length; i++) {
                                                                    var f = /^[0-9a-f]+:(\[.*)$/.exec(a[i]);
                                                                    if (f)
                                                                        try {
                                                                            var l = JSON.parse(f[1]);
                                                                            if (l && l.length)
                                                                                return l;
                                                                        }
                                                                        catch (h) { }
                                                                }
                                                                return null;
                                                            }, actionToc: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i, f, _b, _c, l, h, p, _d, m, _f, b; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = s.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, s.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), u])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            i = (_g.sent()) || "", f = new RegExp(a.arg).exec(i);
                                                                            if (!f)
                                                                                return [2, o.error("Không tìm thấy mã truyện trên trang " + u)];
                                                                            l = JSON.stringify([f[1]]), h = function (w) {
                                                                                return __awaiter(this, void 0, void 0, function () { var A, _b, _c, _d; return __generator(this, function (_f) {
                                                                                    switch (_f.label) {
                                                                                        case 0: return [4, d.get(u, { method: "POST", headers: { "Next-Action": w, Accept: "text/x-component", "Content-Type": "text/plain;charset=UTF-8" }, body: l })];
                                                                                        case 1:
                                                                                            A = _f.sent();
                                                                                            if (!(A && A.ok)) return [3, 3];
                                                                                            _d = (_c = x).rscArray;
                                                                                            return [4, A.text()];
                                                                                        case 2:
                                                                                            _b = _d.apply(_c, [_f.sent()]);
                                                                                            return [3, 4];
                                                                                        case 3:
                                                                                            _b = null;
                                                                                            _f.label = 4;
                                                                                        case 4: return [2, _b];
                                                                                    }
                                                                                }); });
                                                                            };
                                                                            if (!a.id) return [3, 5];
                                                                            return [4, h(a.id)];
                                                                        case 4:
                                                                            _d = _g.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _d = null;
                                                                            _g.label = 6;
                                                                        case 6:
                                                                            p = _d;
                                                                            if (!!p) return [3, 10];
                                                                            return [4, x.rscAction(i, a.name)];
                                                                        case 7:
                                                                            m = _g.sent();
                                                                            _f = m && m !== a.id;
                                                                            if (!_f) return [3, 9];
                                                                            return [4, h(m)];
                                                                        case 8:
                                                                            _f = (p = _g.sent());
                                                                            _g.label = 9;
                                                                        case 9:
                                                                            _f;
                                                                            _g.label = 10;
                                                                        case 10:
                                                                            if (!p)
                                                                                return [2, o.error('Không lấy được danh sách chương (Server Action "' + a.name + '")')];
                                                                            b = u.replace(/[?#].*$/, "").replace(/\/+$/, "");
                                                                            return [2, o.success(p.map(function (w) { return { name: String(w[a.title || "label"] || "") + (a.lock && w[a.lock] ? " 🔒" : ""), url: b + "/" + w[a.slug || "slugId"], host: k }; }))];
                                                                    }
                                                                }); });
                                                            }, rscText: function (u) { for (var a = "", i, f = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; i = f.exec(u);)
                                                                try {
                                                                    a += JSON.parse(i[1]);
                                                                }
                                                                catch (D) { } for (var l = "", h = /([0-9a-f]+):T([0-9a-f]+),/g, p; p = h.exec(a);) {
                                                                for (var m = parseInt(p[2], 16), b = h.lastIndex, w = 0; b < a.length && w < m;) {
                                                                    var A = a.charCodeAt(b);
                                                                    A < 128 ? w += 1 : A < 2048 ? w += 2 : A >= 55296 && A <= 56319 ? (w += 4, b++) : w += 3, b++;
                                                                }
                                                                var C = a.slice(h.lastIndex, b);
                                                                C.length > l.length && (l = C), h.lastIndex = b;
                                                            } return l; }, toParas: function (u) { return /<p[\s>]|<br\s*\/?>/i.test(u) ? u : u.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!s.servers)
                                                                                return [2, o.success([{ title: "Server", data: u }])];
                                                                            return [4, d.html(u, s.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, J(a.select(s.servers), function (f) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var l;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, x.pick(f, s.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                                case 1:
                                                                                                    l = _c.sent();
                                                                                                    _b = {};
                                                                                                    return [4, f.text()];
                                                                                                case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(l), _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            i = (_b.sent()).filter(function (f) { return f.data; });
                                                                            return [2, o.success(i.length ? i : [{ title: "Server", data: u }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (u) { u = String(u || "").replace(/\\\//g, "/"); var a = u.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || u.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, p, m, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(u))
                                                                                return [2, o.success({ type: "native", data: u, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(u)];
                                                                        case 1:
                                                                            i = _b.sent();
                                                                            return [4, i.text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (!(s.video && !a)) return [3, 4];
                                                                            return [4, x.pick(c.parse(f, u), s.video)];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, o.success({ type: "native", data: d.fix(l), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            h = x.sniff(f);
                                                                            if (h)
                                                                                return [2, o.success({ type: "native", data: h, headers: { Referer: a ? u : k + "/" } })];
                                                                            p = c.parse(f, u), m = p.select(s.iframe || "iframe[src], iframe[data-src]").first();
                                                                            if (!(m && a < 2)) return [3, 6];
                                                                            b = d.fix(m.attr("src") || m.attr("data-src"));
                                                                            if (!b) return [3, 6];
                                                                            return [4, x.track(b, a + 1)];
                                                                        case 5: return [2, _b.sent()];
                                                                        case 6: return [2, o.success({ type: "webview", data: u })];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof W == "function" ? W : void 0];
                                                    });
                                                });
                                            })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
            });
        });
    }, browse: function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (r, n, c, o, g, v, y, S, T, L, q, N, O, P, Q, te, fe) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = e("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function W(u, a) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, x.browse(u, a)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var k, s, d, x;
                                                    return __generator(this, function (_b) {
                                                        k = "https://mattreadingtranslations.com";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (u) { }
                                                        s = { tabs: { Novels: "/novels/" }, search: "/novels/", ch_list: "#toc-container td a, .chapter-table td a", item: ".entry-content a[href]", title: ":self", link: ":self@href", cover: "img@img", pageSize: 999, d_title: "h1", d_cover: ".entry-content img@img || meta[property=og:image]@content", d_desc: ".entry-content p || meta[name=description]@content", ch_next: ".pagination a.current + a", ch_maxPages: 80, content: ".entry-content", c_title: "h1", ch_delay: 500 }, d = { img: function (u) { if (!u)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], i = 0; i < a.length; i++) {
                                                                var f = u.attr(a[i]);
                                                                if (f && f.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(f))
                                                                    return d.fix(f.trim());
                                                            } var l = u.attr("data-srcset") || u.attr("srcset"); return l ? d.fix(l.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (u) { return u ? (u = String(u).trim(), u.indexOf("//") === 0 ? "https:" + u : u.indexOf("http") === 0 ? u : u.charAt(0) === "/" ? k + u : k + "/" + u) : ""; }, text: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            i = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(i < a.length)) return [3, 4];
                                                                            return [4, u.select(a[i]).text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, f.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            i++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            i = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (f in a.headers)
                                                                                    i[f] = a.headers[f];
                                                                            return [4, r(u, { method: a.method, headers: i, body: a.body })];
                                                                        case 1:
                                                                            l = _c.sent(), h = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = l && l.status === 429 && h < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(l)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, T(1500 * (h + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, r(u, { method: a.method, headers: i, body: a.body })];
                                                                        case 6:
                                                                            l = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            h++;
                                                                            return [3, 2];
                                                                        case 8: return [2, l];
                                                                    }
                                                                }); });
                                                            }, cf: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (u.status !== 403 && u.status !== 503 && u.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, u.text()];
                                                                        case 1:
                                                                            a = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(a.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (u.ok)
                                                                                return [2, u];
                                                                            return [4, d.cf(u)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + a.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + u.status + " " + a);
                                                                    }
                                                                }); });
                                                            }, html: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            i = _d.sent();
                                                                            return [4, i.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            i = _d.sent();
                                                                            return [4, i.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (u) { var a = parseInt(u || "1", 10); return isNaN(a) || a < 1 ? 1 : a; }, next: function (u, a) { return u ? String(d.page(a) + 1) : ""; }, isUrl: function (u) { return /^(https?:)?\/\//.test(u || "") || (u || "").charAt(0) === "/"; }, enc: function (u) { return encodeURIComponent(u || ""); }, cleanContent: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                u.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, u.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (u) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(u || ""); } }, x = { pick: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, p, m, b, w, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !u)
                                                                                return [2, ""];
                                                                            i = String(a).split(" || "), f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < i.length)) return [3, 9];
                                                                            l = i[f], h = "text", p = l.lastIndexOf("@");
                                                                            p > 0 && !/\[[^\]]*@/.test(l.slice(p)) && (h = l.slice(p + 1), l = l.slice(0, p));
                                                                            m = l === ":self" ? null : u.select(l), b = l === ":self" ? u : m.size() ? m.first() : null;
                                                                            if (!b) return [3, 8];
                                                                            if (!(h === "text")) return [3, 3];
                                                                            return [4, b.text()];
                                                                        case 2:
                                                                            _b = _d.sent();
                                                                            return [3, 7];
                                                                        case 3:
                                                                            if (!(h === "html")) return [3, 5];
                                                                            return [4, b.html()];
                                                                        case 4:
                                                                            _c = _d.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _c = h === "img" ? d.img(b.is("img") ? b : b.select("img").first()) : h === "own" ? b.ownText() : b.attr(h);
                                                                            _d.label = 6;
                                                                        case 6:
                                                                            _b = _c;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            w = _b;
                                                                            if (w)
                                                                                return [2, String(w).trim()];
                                                                            _d.label = 8;
                                                                        case 8:
                                                                            f++;
                                                                            return [3, 1];
                                                                        case 9: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, url: function (u, a, i) { var f = d.page(a), l = String(u); return l = l.replace(/\[([^\]]*)\]/g, function (h, p) { return f > 1 ? p : ""; }), l = l.replace(/\{p\}/g, String(f)).replace(/\{p0\}/g, String(f - 1)).replace(/\{q\}/g, d.enc(i || "")).replace(/\{base\}/g, k), d.fix(l); }, items: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var i, f, l, h, p, m, b, w, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                i = function (A) { return a && s[a + A] || s[A]; }, f = u.select(i("item")), l = [], h = {}, p = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(p < f.size())) return [3, 9];
                                                                                return [4, f.get(p)];
                                                                            case 2:
                                                                                m = _g.sent();
                                                                                return [4, x.pick(m, i("link") || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || h[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, x.pick(m, i("title") || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                w = _g.sent();
                                                                                _b = w;
                                                                                if (!_b) return [3, 7];
                                                                                h[b] = 1;
                                                                                _d = (_c = l).push;
                                                                                _f = { name: w, link: d.fix(b) };
                                                                                return [4, x.pick(m, i("cover") || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, x.pick(m, i("desc") || "")];
                                                                            case 6:
                                                                                _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = k, _f)]));
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                _b;
                                                                                _g.label = 8;
                                                                            case 8:
                                                                                p++;
                                                                                return [3, 1];
                                                                            case 9: return [2, l];
                                                                        }
                                                                    });
                                                                });
                                                            }, listPage: function (u, a, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(x.url(u, a, i), s.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            return [4, x.items(f, i ? "s_" : "")];
                                                                        case 2:
                                                                            l = _b.sent(), h = s.next ? f.select(s.next).size() > 0 : l.length >= (s.pageSize || 10);
                                                                            return [2, o.success(l, d.next(h && l.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            i = s.tabs && s.tabs[u] || u;
                                                                            return [4, x.listPage(i, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            if (!(s.q_cut && !d.isUrl(u) && (u = String(u).split(new RegExp(s.q_cut))[0].trim() || u), d.isUrl(u))) return [3, 2];
                                                                            i = d.fix(u);
                                                                            return [4, x.listPage(i + (i.indexOf("?") > 0 ? "&" : "?") + (s.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _c.sent()];
                                                                        case 2:
                                                                            if (!s.search_post) return [3, 5];
                                                                            return [4, d.html(x.url(s.search_post.url, a, u), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: String(s.search_post.body).replace(/\{q\}/g, d.enc(u)) })];
                                                                        case 3:
                                                                            f = _c.sent();
                                                                            return [4, x.items(f, "s_")];
                                                                        case 4:
                                                                            l = _c.sent();
                                                                            return [2, o.success(l, null)];
                                                                        case 5:
                                                                            if (!s.search_json) return [3, 7];
                                                                            return [4, x.jsonSearch(s.search_json, u, a)];
                                                                        case 6:
                                                                            _b = _c.sent();
                                                                            return [3, 9];
                                                                        case 7: return [4, x.listPage(s.search, a, u)];
                                                                        case 8:
                                                                            _b = _c.sent();
                                                                            _c.label = 9;
                                                                        case 9: return [2, _b];
                                                                    }
                                                                }); });
                                                            }, jsonSearch: function (u, a, i) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.json(x.url(u.url, i, a), s.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            u.list && u.list.split(".").forEach(function (p) { f = f && f[p]; });
                                                                            l = function (p, m) { return String(m || "").indexOf("{") >= 0 ? String(m).replace(/\{(\w+)\}/g, function (b, w) { return p[w] == null ? "" : p[w]; }) : p[m] == null ? "" : String(p[m]); }, h = [];
                                                                            return [2, ((f || []).forEach(function (p) { var m = l(p, u.title || "title"), b = l(p, u.link || "url"); m && b && h.push({ name: m, link: d.fix(b), cover: d.fix(l(p, u.cover || "cover")), description: u.desc ? l(p, u.desc) : "", host: k }); }), o.success(h, u.paged && h.length ? d.next(!0, i) : null))];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!s.genre)
                                                                                return [2, o.success([])];
                                                                            return [4, d.html(d.fix(s.genrePage || "/"))];
                                                                        case 1:
                                                                            u = _b.sent();
                                                                            return [4, J(u.select(s.genre), function (i) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, i.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(i.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, o.success(a.filter(function (i) { return i.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, i, f, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(u, s.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!s.d_genres) return [3, 3];
                                                                                return [4, J(a.select(s.d_genres), function (l) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, l.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(l.attr("href")), _b.script = "search.js", _b)];
                                                                                                }
                                                                                            });
                                                                                        });
                                                                                    })];
                                                                            case 2:
                                                                                _b = _j.sent();
                                                                                return [3, 4];
                                                                            case 3:
                                                                                _b = [];
                                                                                _j.label = 4;
                                                                            case 4:
                                                                                i = _b;
                                                                                return [4, x.pick(a, s.d_status)];
                                                                            case 5:
                                                                                f = _j.sent();
                                                                                _d = (_c = o).success;
                                                                                _h = {};
                                                                                return [4, x.pick(a, s.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, x.pick(a, s.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, x.pick(a, s.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, x.pick(a, (s.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = f ? "Tình trạng: " + f : "", _h.ongoing = d.ongoing(f), _h.genres = i, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, i, f, l, h, _b, p, m, b, w, A, _c, _d, _f, _g, C, D, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!s.ch_action) return [3, 2];
                                                                                return [4, x.actionToc(u)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (s.single)
                                                                                    return [2, o.success([{ name: s.single === !0 ? "Xem / Đọc" : s.single, url: u, host: k }])];
                                                                                a = [u], i = [], f = {};
                                                                                return [4, d.html(s.ch_rewrite ? u.replace(new RegExp(s.ch_rewrite[0]), s.ch_rewrite[1]) : u, s.req)];
                                                                            case 3:
                                                                                l = _k.sent();
                                                                                if (!s.ch_url) return [3, 7];
                                                                                return [4, x.pick(l, s.ch_url)];
                                                                            case 4:
                                                                                h = _k.sent();
                                                                                _b = h;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(h), s.req)];
                                                                            case 5:
                                                                                _b = (l = _k.sent());
                                                                                _k.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _k.label = 7;
                                                                            case 7:
                                                                                p = 0;
                                                                                _k.label = 8;
                                                                            case 8:
                                                                                if (!(p < (s.ch_maxPages || 60))) return [3, 22];
                                                                                m = l.select(s.ch_list), b = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(b < m.size())) return [3, 17];
                                                                                return [4, m.get(b)];
                                                                            case 10:
                                                                                w = _k.sent(), A = s.ch_attr ? w.attr(s.ch_attr) : w.attr("href") || w.attr("data-href");
                                                                                _c = !A || A === "#" || f[A];
                                                                                if (_c) return [3, 15];
                                                                                f[A] = 1;
                                                                                _f = (_d = i).push;
                                                                                _j = {};
                                                                                if (!s.ch_name) return [3, 12];
                                                                                return [4, x.pick(w, s.ch_name)];
                                                                            case 11:
                                                                                _g = _k.sent();
                                                                                return [3, 14];
                                                                            case 12: return [4, w.text()];
                                                                            case 13:
                                                                                _g = _k.sent();
                                                                                _k.label = 14;
                                                                            case 14:
                                                                                _c = (_f.apply(_d, [(_j.name = (_g) || w.attr("title"), _j.url = d.fix(A), _j.host = k, _j)]));
                                                                                _k.label = 15;
                                                                            case 15:
                                                                                _c;
                                                                                _k.label = 16;
                                                                            case 16:
                                                                                b++;
                                                                                return [3, 9];
                                                                            case 17:
                                                                                C = s.ch_next ? l.select(s.ch_next).first() : null;
                                                                                if (!C || !C.attr("href"))
                                                                                    return [3, 22];
                                                                                D = d.fix(C.attr("href"));
                                                                                if (a.indexOf(D) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(D);
                                                                                _h = s.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, T(s.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(D, s.req)];
                                                                            case 20:
                                                                                l = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                p++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (s.ch_reverse && i.reverse(), !i.length && s.ch_fallback_single && i.push({ name: s.ch_fallback_single === !0 ? "Xem phim" : s.ch_fallback_single, url: u, host: k }), o.success(i))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i, f, l, h, p, m, b, _b, _c, w, A, C, D, _d, _f, _g, _h, j, V, _j, _k, X, B; return __generator(this, function (_l) {
                                                                    switch (_l.label) {
                                                                        case 0:
                                                                            a = [], i = [u], f = u, l = 0;
                                                                            _l.label = 1;
                                                                        case 1:
                                                                            if (!(l < (s.pages_max || 40))) return [3, 17];
                                                                            if (!s.initmanga) return [3, 5];
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(f, s.req)];
                                                                        case 2: return [4, _c.apply(_b, [_l.sent(), f])];
                                                                        case 3:
                                                                            p = _l.sent();
                                                                            return [4, p.text()];
                                                                        case 4:
                                                                            m = (_l.sent()) || "", b = x.initManga(m);
                                                                            h = c.parse(b ? '<div id="imc-dec">' + b + "</div>" : m, f);
                                                                            return [3, 7];
                                                                        case 5: return [4, d.html(f, s.req)];
                                                                        case 6:
                                                                            h = _l.sent();
                                                                            _l.label = 7;
                                                                        case 7:
                                                                            w = h.select(s.initmanga ? "#imc-dec img, " + (s.pages || "#chapter-content img") : s.pages || ".page-chapter img, .reading-content img, .chapter-content img");
                                                                            if (!s.initmanga) return [3, 11];
                                                                            A = h.select("#imc-dec canvas[data-enc]"), C = 0;
                                                                            _l.label = 8;
                                                                        case 8:
                                                                            if (!(C < A.size())) return [3, 11];
                                                                            _f = (_d = CryptoJS.enc.Latin1).stringify;
                                                                            _h = (_g = CryptoJS.enc.Base64).parse;
                                                                            return [4, A.get(C)];
                                                                        case 9:
                                                                            D = _f.apply(_d, [_h.apply(_g, [(_l.sent()).attr("data-enc")])]).split("").reverse().join("");
                                                                            D && a.indexOf(D) < 0 && a.push(D);
                                                                            _l.label = 10;
                                                                        case 10:
                                                                            C++;
                                                                            return [3, 8];
                                                                        case 11:
                                                                            j = 0;
                                                                            _l.label = 12;
                                                                        case 12:
                                                                            if (!(j < w.size())) return [3, 15];
                                                                            _k = (_j = d).img;
                                                                            return [4, w.get(j)];
                                                                        case 13:
                                                                            V = _k.apply(_j, [_l.sent()]);
                                                                            V && a.indexOf(V) < 0 && a.push(V);
                                                                            _l.label = 14;
                                                                        case 14:
                                                                            j++;
                                                                            return [3, 12];
                                                                        case 15:
                                                                            if (!s.pages_next)
                                                                                return [3, 17];
                                                                            X = h.select(s.pages_next).first();
                                                                            if (!X)
                                                                                return [3, 17];
                                                                            B = d.fix(X.attr("href"));
                                                                            if (!B || i.indexOf(B) >= 0)
                                                                                return [3, 17];
                                                                            i.push(B), f = B;
                                                                            _l.label = 16;
                                                                        case 16:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 17: return [2, o.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i, _b, _c, f, l, h, _d, _f, _g, p, _h, _j, _k, m, b, _l, _m, _o, _p, _q, _s; return __generator(this, function (_v) {
                                                                    switch (_v.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, s.req)];
                                                                        case 1: return [4, _c.apply(_b, [_v.sent(), u])];
                                                                        case 2:
                                                                            a = _v.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            i = (_v.sent()) || "";
                                                                            if (!s.content_rsc) return [3, 5];
                                                                            f = x.rscText(i), l = s.c_locked && new RegExp(s.c_locked, "i").test(i), h = l ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(f || l)) return [3, 5];
                                                                            _f = (_d = o).success;
                                                                            _g = [x.toParas(f) + h];
                                                                            return [4, x.pick(c.parse(i, u), s.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_v.sent()]))];
                                                                        case 5:
                                                                            if (!s.initmanga) return [3, 8];
                                                                            p = x.initManga(i);
                                                                            if (!p) return [3, 8];
                                                                            _j = (_h = o).success;
                                                                            return [4, d.cleanContent(c.parse('<div id="imc-dec">' + p + "</div>", u).select("#imc-dec").first())];
                                                                        case 6:
                                                                            _k = [_v.sent()];
                                                                            return [4, x.pick(c.parse(i, u), s.c_title || "h1 || h2")];
                                                                        case 7: return [2, _j.apply(_h, _k.concat([_v.sent()]))];
                                                                        case 8:
                                                                            m = c.parse(i, u), b = m.select(s.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!b) return [3, 10];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(i.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _m = (_l = o).error;
                                                                            _o = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, x.pick(m, "title")];
                                                                        case 9: return [2, _m.apply(_l, [_o + ((_v.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + i.length + " ký tự)" + (i.length < 400 ? ": " + i.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 10:
                                                                            _q = (_p = o).success;
                                                                            return [4, d.cleanContent(b)];
                                                                        case 11:
                                                                            _s = [_v.sent()];
                                                                            return [4, x.pick(m, s.c_title || "h1 || h2")];
                                                                        case 12: return [2, _q.apply(_p, _s.concat([_v.sent()]))];
                                                                    }
                                                                }); });
                                                            }, initManga: function (u) { var a = /InitMangaEncryptedChapter\s*=\s*(\{[\s\S]*?\})\s*;/.exec(u), i = /"decryption_key"\s*:\s*"([^"]+)"/.exec(u); if (!a || !i || typeof CryptoJS == "undefined")
                                                                return ""; var f; try {
                                                                f = JSON.parse(a[1]);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } if (!f || !f.ciphertext)
                                                                return ""; var l = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(i[1])), h = CryptoJS.PBKDF2(l, CryptoJS.enc.Hex.parse(f.salt), { hasher: CryptoJS.algo.SHA512, keySize: 8, iterations: 999 }); try {
                                                                return CryptoJS.AES.decrypt(f.ciphertext, h, { iv: CryptoJS.enc.Hex.parse(f.iv) }).toString(CryptoJS.enc.Utf8);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } }, rscAction: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, p, m, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (i = [], l = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; f = l.exec(u);)
                                                                                i.indexOf(f[0]) < 0 && i.push(f[0]);
                                                                            h = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), p = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(p < i.length && p < 60)) return [3, 5];
                                                                            return [4, d.get(k + i[p])];
                                                                        case 2:
                                                                            m = _d.sent();
                                                                            if (!!(!m || !m.ok)) return [3, 4];
                                                                            _c = (_b = h).exec;
                                                                            return [4, m.text()];
                                                                        case 3:
                                                                            b = _c.apply(_b, [(_d.sent()) || ""]);
                                                                            if (b)
                                                                                return [2, b[1]];
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            p++;
                                                                            return [3, 1];
                                                                        case 5: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, rscArray: function (u) {
                                                                for (var a = String(u || "").split("\n"), i = 0; i < a.length; i++) {
                                                                    var f = /^[0-9a-f]+:(\[.*)$/.exec(a[i]);
                                                                    if (f)
                                                                        try {
                                                                            var l = JSON.parse(f[1]);
                                                                            if (l && l.length)
                                                                                return l;
                                                                        }
                                                                        catch (h) { }
                                                                }
                                                                return null;
                                                            }, actionToc: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i, f, _b, _c, l, h, p, _d, m, _f, b; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = s.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, s.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), u])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            i = (_g.sent()) || "", f = new RegExp(a.arg).exec(i);
                                                                            if (!f)
                                                                                return [2, o.error("Không tìm thấy mã truyện trên trang " + u)];
                                                                            l = JSON.stringify([f[1]]), h = function (w) {
                                                                                return __awaiter(this, void 0, void 0, function () { var A, _b, _c, _d; return __generator(this, function (_f) {
                                                                                    switch (_f.label) {
                                                                                        case 0: return [4, d.get(u, { method: "POST", headers: { "Next-Action": w, Accept: "text/x-component", "Content-Type": "text/plain;charset=UTF-8" }, body: l })];
                                                                                        case 1:
                                                                                            A = _f.sent();
                                                                                            if (!(A && A.ok)) return [3, 3];
                                                                                            _d = (_c = x).rscArray;
                                                                                            return [4, A.text()];
                                                                                        case 2:
                                                                                            _b = _d.apply(_c, [_f.sent()]);
                                                                                            return [3, 4];
                                                                                        case 3:
                                                                                            _b = null;
                                                                                            _f.label = 4;
                                                                                        case 4: return [2, _b];
                                                                                    }
                                                                                }); });
                                                                            };
                                                                            if (!a.id) return [3, 5];
                                                                            return [4, h(a.id)];
                                                                        case 4:
                                                                            _d = _g.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _d = null;
                                                                            _g.label = 6;
                                                                        case 6:
                                                                            p = _d;
                                                                            if (!!p) return [3, 10];
                                                                            return [4, x.rscAction(i, a.name)];
                                                                        case 7:
                                                                            m = _g.sent();
                                                                            _f = m && m !== a.id;
                                                                            if (!_f) return [3, 9];
                                                                            return [4, h(m)];
                                                                        case 8:
                                                                            _f = (p = _g.sent());
                                                                            _g.label = 9;
                                                                        case 9:
                                                                            _f;
                                                                            _g.label = 10;
                                                                        case 10:
                                                                            if (!p)
                                                                                return [2, o.error('Không lấy được danh sách chương (Server Action "' + a.name + '")')];
                                                                            b = u.replace(/[?#].*$/, "").replace(/\/+$/, "");
                                                                            return [2, o.success(p.map(function (w) { return { name: String(w[a.title || "label"] || "") + (a.lock && w[a.lock] ? " 🔒" : ""), url: b + "/" + w[a.slug || "slugId"], host: k }; }))];
                                                                    }
                                                                }); });
                                                            }, rscText: function (u) { for (var a = "", i, f = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; i = f.exec(u);)
                                                                try {
                                                                    a += JSON.parse(i[1]);
                                                                }
                                                                catch (D) { } for (var l = "", h = /([0-9a-f]+):T([0-9a-f]+),/g, p; p = h.exec(a);) {
                                                                for (var m = parseInt(p[2], 16), b = h.lastIndex, w = 0; b < a.length && w < m;) {
                                                                    var A = a.charCodeAt(b);
                                                                    A < 128 ? w += 1 : A < 2048 ? w += 2 : A >= 55296 && A <= 56319 ? (w += 4, b++) : w += 3, b++;
                                                                }
                                                                var C = a.slice(h.lastIndex, b);
                                                                C.length > l.length && (l = C), h.lastIndex = b;
                                                            } return l; }, toParas: function (u) { return /<p[\s>]|<br\s*\/?>/i.test(u) ? u : u.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, i; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!s.servers)
                                                                                return [2, o.success([{ title: "Server", data: u }])];
                                                                            return [4, d.html(u, s.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, J(a.select(s.servers), function (f) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var l;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, x.pick(f, s.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                                case 1:
                                                                                                    l = _c.sent();
                                                                                                    _b = {};
                                                                                                    return [4, f.text()];
                                                                                                case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(l), _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            i = (_b.sent()).filter(function (f) { return f.data; });
                                                                            return [2, o.success(i.length ? i : [{ title: "Server", data: u }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (u) { u = String(u || "").replace(/\\\//g, "/"); var a = u.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || u.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var i, f, l, h, p, m, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(u))
                                                                                return [2, o.success({ type: "native", data: u, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(u)];
                                                                        case 1:
                                                                            i = _b.sent();
                                                                            return [4, i.text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (!(s.video && !a)) return [3, 4];
                                                                            return [4, x.pick(c.parse(f, u), s.video)];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, o.success({ type: "native", data: d.fix(l), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            h = x.sniff(f);
                                                                            if (h)
                                                                                return [2, o.success({ type: "native", data: h, headers: { Referer: a ? u : k + "/" } })];
                                                                            p = c.parse(f, u), m = p.select(s.iframe || "iframe[src], iframe[data-src]").first();
                                                                            if (!(m && a < 2)) return [3, 6];
                                                                            b = d.fix(m.attr("src") || m.attr("data-src"));
                                                                            if (!b) return [3, 6];
                                                                            return [4, x.track(b, a + 1)];
                                                                        case 5: return [2, _b.sent()];
                                                                        case 6: return [2, o.success({ type: "webview", data: u })];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof W == "function" ? W : void 0];
                                                    });
                                                });
                                            })()];
                                    case 1: return [2, _b.sent()];
                                }
                            });
                        });
                    })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.Console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
            });
        });
    } };
function Rr(t) { return new It({ meta: pe, scripts: Hr, host: t }); }
var An = require("@libs/fetch").fetchApi, tt = null;
try {
    tt = require("@libs/storage");
}
catch (t) {
    tt = null;
}
var Du = {}, Lt = tt && tt.storage ? tt.storage : { get: function (t) { return Du[t]; }, set: function (t, e) { Du[t] = e; }, delete: function (t) { delete Du[t]; } }, Iu = (function () {
    function class_2() {
        var _this = this;
        this.id = pe.lnId, this.name = pe.name, this.icon = pe.lnIcon, this.site = pe.source, this.version = pe.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = Rr({ name: "LNReader", request: function (e) { return __awaiter(_this, void 0, void 0, function () {
                var r, n, c;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            r = { method: e.method, headers: e.headers };
                            e.body != null && e.method !== "GET" && (r.body = e.body);
                            return [4, An(e.url, r)];
                        case 1:
                            n = _c.sent(), c = {};
                            try {
                                n.headers.forEach(function (o, g) { c[g] = o; });
                            }
                            catch (o) { }
                            _b = { status: n.status, url: n.url || e.url, headers: c };
                            return [4, n.text()];
                        case 2: return [2, (_b.text = _c.sent(), _b)];
                    }
                });
            }); }, storageGet: function (e) { var r = Lt.get("vb_" + e); return r == null ? null : String(r); }, storageSet: function (e, r) { r == null ? Lt.delete && Lt.delete("vb_" + e) : Lt.set("vb_" + e, String(r)); }, config: function (e) { return null; }, log: function (e) { return console.log(e); } });
    }
    class_2.prototype.popularNovels = function (e, r) {
        return __awaiter(this, void 0, void 0, function () { var _b; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(r && r.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(e)];
                case 1:
                    _b = _c.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(e)];
                case 3:
                    _b = _c.sent();
                    _c.label = 4;
                case 4: return [2, (_b).items.map(function (c) { return ({ name: c.name, path: c.link, cover: c.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (e, r) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.search(e, r)];
                case 1: return [2, (_b.sent()).items.map(function (c) { return ({ name: c.name, path: c.link, cover: c.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (e) {
        return __awaiter(this, void 0, void 0, function () { var r, n; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.detail(e)];
                case 1:
                    r = _b.sent();
                    return [4, this.engine.chapters(e)];
                case 2:
                    n = _b.sent();
                    return [2, { path: e, name: r.name || "Untitled", cover: r.cover, summary: r.description, author: r.author, status: r.ongoing ? "Ongoing" : "Completed", genres: r.genres.join(","), chapters: n.map(function (c, o) { return ({ name: c.name, path: c.url, chapterNumber: o + 1 }); }) }];
            }
        }); });
    };
    class_2.prototype.parseChapter = function (e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.content(e)];
                case 1: return [2, (_b.sent()).html];
            }
        }); });
    };
    class_2.prototype.resolveUrl = function (e, r) { return /^https?:/i.test(e) ? e : pe.source.replace(/\/+$/, "") + "/" + String(e).replace(/^\/+/, ""); };
    return class_2;
}()), kn = new Iu;

if (typeof exports === "object" && exports && module.exports !== exports && module.exports && module.exports.default) exports.default = module.exports.default;
