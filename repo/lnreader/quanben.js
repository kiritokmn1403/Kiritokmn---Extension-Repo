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
var Rr = Object.create;
var Pe = Object.defineProperty, jr = Object.defineProperties, Hr = Object.getOwnPropertyDescriptor, zr = Object.getOwnPropertyDescriptors, Gr = Object.getOwnPropertyNames, Cu = Object.getOwnPropertySymbols, $r = Object.getPrototypeOf, Du = Object.prototype.hasOwnProperty, Jr = Object.prototype.propertyIsEnumerable;
var _u = function (t, e, u) { return e in t ? Pe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: u }) : t[e] = u; }, ue = function (t, e) {
    var e_2, _b;
    for (var u in e || (e = {}))
        Du.call(e, u) && _u(t, u, e[u]);
    if (Cu)
        try {
            for (var _c = __values(Cu(e)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var u = _d.value;
                Jr.call(e, u) && _u(t, u, e[u]);
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
}, ge = function (t, e) { return jr(t, zr(e)); };
var Wr = function (t, e) { return function () { return (e || t((e = { exports: {} }).exports, e), e.exports); }; }, _t = function (t, e) { for (var u in e)
    Pe(t, u, { get: e[u], enumerable: !0 }); }, Iu = function (t, e, u, i) {
    var e_3, _b;
    if (e && typeof e == "object" || typeof e == "function") {
        var _loop_1 = function (n) {
            !Du.call(t, n) && n !== u && Pe(t, n, { get: function () { return e[n]; }, enumerable: !(i = Hr(e, n)) || i.enumerable });
        };
        try {
            for (var _c = __values(Gr(e)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var n = _d.value;
                _loop_1(n);
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
var me = function (t, e, u) { return (u = t != null ? Rr($r(t)) : {}, Iu(e || !t || !t.__esModule ? Pe(u, "default", { value: t, enumerable: !0 }) : u, t)); }, Xr = function (t) { return Iu(Pe({}, "__esModule", { value: !0 }), t); };
var be = Wr(function (Kn, cr) { cr.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var wi = {};
_t(wi, { default: function () { return vi; } });
module.exports = Xr(wi);
var Qe = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (t) { return t.charCodeAt(0); }));
var Ye = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (t) { return t.charCodeAt(0); }));
var Dt, Kr = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Ae = (Dt = String.fromCodePoint) !== null && Dt !== void 0 ? Dt : function (t) { var e = ""; return t > 65535 && (t -= 65536, e += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | t & 1023), e += String.fromCharCode(t), e; };
function It(t) { var e; return t >= 55296 && t <= 57343 || t > 1114111 ? 65533 : (e = Kr.get(t)) !== null && e !== void 0 ? e : t; }
var H;
(function (t) { t[t.NUM = 35] = "NUM", t[t.SEMI = 59] = "SEMI", t[t.EQUALS = 61] = "EQUALS", t[t.ZERO = 48] = "ZERO", t[t.NINE = 57] = "NINE", t[t.LOWER_A = 97] = "LOWER_A", t[t.LOWER_F = 102] = "LOWER_F", t[t.LOWER_X = 120] = "LOWER_X", t[t.LOWER_Z = 122] = "LOWER_Z", t[t.UPPER_A = 65] = "UPPER_A", t[t.UPPER_F = 70] = "UPPER_F", t[t.UPPER_Z = 90] = "UPPER_Z"; })(H || (H = {}));
var Zr = 32, le;
(function (t) { t[t.VALUE_LENGTH = 49152] = "VALUE_LENGTH", t[t.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", t[t.JUMP_TABLE = 127] = "JUMP_TABLE"; })(le || (le = {}));
function Lt(t) { return t >= H.ZERO && t <= H.NINE; }
function Qr(t) { return t >= H.UPPER_A && t <= H.UPPER_F || t >= H.LOWER_A && t <= H.LOWER_F; }
function Yr(t) { return t >= H.UPPER_A && t <= H.UPPER_Z || t >= H.LOWER_A && t <= H.LOWER_Z || Lt(t); }
function ea(t) { return t === H.EQUALS || Yr(t); }
var j;
(function (t) { t[t.EntityStart = 0] = "EntityStart", t[t.NumericStart = 1] = "NumericStart", t[t.NumericDecimal = 2] = "NumericDecimal", t[t.NumericHex = 3] = "NumericHex", t[t.NamedEntity = 4] = "NamedEntity"; })(j || (j = {}));
var Q;
(function (t) { t[t.Legacy = 0] = "Legacy", t[t.Strict = 1] = "Strict", t[t.Attribute = 2] = "Attribute"; })(Q || (Q = {}));
var ke = (function () {
    function ke(e, u, i) {
        this.decodeTree = e, this.emitCodePoint = u, this.errors = i, this.state = j.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = Q.Strict;
    }
    ke.prototype.startEntity = function (e) { this.decodeMode = e, this.state = j.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    ke.prototype.write = function (e, u) { switch (this.state) {
        case j.EntityStart: return e.charCodeAt(u) === H.NUM ? (this.state = j.NumericStart, this.consumed += 1, this.stateNumericStart(e, u + 1)) : (this.state = j.NamedEntity, this.stateNamedEntity(e, u));
        case j.NumericStart: return this.stateNumericStart(e, u);
        case j.NumericDecimal: return this.stateNumericDecimal(e, u);
        case j.NumericHex: return this.stateNumericHex(e, u);
        case j.NamedEntity: return this.stateNamedEntity(e, u);
    } };
    ke.prototype.stateNumericStart = function (e, u) { return u >= e.length ? -1 : (e.charCodeAt(u) | Zr) === H.LOWER_X ? (this.state = j.NumericHex, this.consumed += 1, this.stateNumericHex(e, u + 1)) : (this.state = j.NumericDecimal, this.stateNumericDecimal(e, u)); };
    ke.prototype.addToNumericResult = function (e, u, i, n) { if (u !== i) {
        var s = i - u;
        this.result = this.result * Math.pow(n, s) + parseInt(e.substr(u, s), n), this.consumed += s;
    } };
    ke.prototype.stateNumericHex = function (e, u) { var i = u; for (; u < e.length;) {
        var n = e.charCodeAt(u);
        if (Lt(n) || Qr(n))
            u += 1;
        else
            return this.addToNumericResult(e, i, u, 16), this.emitNumericEntity(n, 3);
    } return this.addToNumericResult(e, i, u, 16), -1; };
    ke.prototype.stateNumericDecimal = function (e, u) { var i = u; for (; u < e.length;) {
        var n = e.charCodeAt(u);
        if (Lt(n))
            u += 1;
        else
            return this.addToNumericResult(e, i, u, 10), this.emitNumericEntity(n, 2);
    } return this.addToNumericResult(e, i, u, 10), -1; };
    ke.prototype.emitNumericEntity = function (e, u) { var i; if (this.consumed <= u)
        return (i = this.errors) === null || i === void 0 || i.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (e === H.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === Q.Strict)
        return 0; return this.emitCodePoint(It(this.result), this.consumed), this.errors && (e !== H.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    ke.prototype.stateNamedEntity = function (e, u) { var i = this.decodeTree, n = i[this.treeIndex], s = (n & le.VALUE_LENGTH) >> 14; for (; u < e.length; u++, this.excess++) {
        var h = e.charCodeAt(u);
        if (this.treeIndex = ta(i, n, this.treeIndex + Math.max(1, s), h), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === Q.Attribute && (s === 0 || ea(h)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (n = i[this.treeIndex], s = (n & le.VALUE_LENGTH) >> 14, s !== 0) {
            if (h === H.SEMI)
                return this.emitNamedEntityData(this.treeIndex, s, this.consumed + this.excess);
            this.decodeMode !== Q.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    ke.prototype.emitNotTerminatedNamedEntity = function () { var e; var _b = this, u = _b.result, i = _b.decodeTree, n = (i[u] & le.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(u, n, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed; };
    ke.prototype.emitNamedEntityData = function (e, u, i) { var n = this.decodeTree; return this.emitCodePoint(u === 1 ? n[e] & ~le.VALUE_LENGTH : n[e + 1], i), u === 3 && this.emitCodePoint(n[e + 2], i), i; };
    ke.prototype.end = function () { var e; switch (this.state) {
        case j.NamedEntity: return this.result !== 0 && (this.decodeMode !== Q.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case j.NumericDecimal: return this.emitNumericEntity(0, 2);
        case j.NumericHex: return this.emitNumericEntity(0, 3);
        case j.NumericStart: return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case j.EntityStart: return 0;
    } };
    return ke;
}());
function Lu(t) { var e = "", u = new ke(t, function (i) { return e += Ae(i); }); return function (n, s) { var h = 0, m = 0; for (; (m = n.indexOf("&", m)) >= 0;) {
    e += n.slice(h, m), u.startEntity(s);
    var S = u.write(n, m + 1);
    if (S < 0) {
        h = m + u.end();
        break;
    }
    h = m + S, m = S === 0 ? h + 1 : h;
} var y = e + n.slice(h); return e = "", y; }; }
function ta(t, e, u, i) { var n = (e & le.BRANCH_LENGTH) >> 7, s = e & le.JUMP_TABLE; if (n === 0)
    return s !== 0 && i === s ? u : -1; if (s) {
    var y = i - s;
    return y < 0 || y >= n ? -1 : t[u + y] - 1;
} var h = u, m = h + n - 1; for (; h <= m;) {
    var y = h + m >>> 1, S = t[y];
    if (S < i)
        h = y + 1;
    else if (S > i)
        m = y - 1;
    else
        return t[y + n];
} return -1; }
var Ci = Lu(Qe), _i = Lu(Ye);
var _;
(function (t) { t[t.Tab = 9] = "Tab", t[t.NewLine = 10] = "NewLine", t[t.FormFeed = 12] = "FormFeed", t[t.CarriageReturn = 13] = "CarriageReturn", t[t.Space = 32] = "Space", t[t.ExclamationMark = 33] = "ExclamationMark", t[t.Number = 35] = "Number", t[t.Amp = 38] = "Amp", t[t.SingleQuote = 39] = "SingleQuote", t[t.DoubleQuote = 34] = "DoubleQuote", t[t.Dash = 45] = "Dash", t[t.Slash = 47] = "Slash", t[t.Zero = 48] = "Zero", t[t.Nine = 57] = "Nine", t[t.Semi = 59] = "Semi", t[t.Lt = 60] = "Lt", t[t.Eq = 61] = "Eq", t[t.Gt = 62] = "Gt", t[t.Questionmark = 63] = "Questionmark", t[t.UpperA = 65] = "UpperA", t[t.LowerA = 97] = "LowerA", t[t.UpperF = 70] = "UpperF", t[t.LowerF = 102] = "LowerF", t[t.UpperZ = 90] = "UpperZ", t[t.LowerZ = 122] = "LowerZ", t[t.LowerX = 120] = "LowerX", t[t.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(_ || (_ = {}));
var T;
(function (t) { t[t.Text = 1] = "Text", t[t.BeforeTagName = 2] = "BeforeTagName", t[t.InTagName = 3] = "InTagName", t[t.InSelfClosingTag = 4] = "InSelfClosingTag", t[t.BeforeClosingTagName = 5] = "BeforeClosingTagName", t[t.InClosingTagName = 6] = "InClosingTagName", t[t.AfterClosingTagName = 7] = "AfterClosingTagName", t[t.BeforeAttributeName = 8] = "BeforeAttributeName", t[t.InAttributeName = 9] = "InAttributeName", t[t.AfterAttributeName = 10] = "AfterAttributeName", t[t.BeforeAttributeValue = 11] = "BeforeAttributeValue", t[t.InAttributeValueDq = 12] = "InAttributeValueDq", t[t.InAttributeValueSq = 13] = "InAttributeValueSq", t[t.InAttributeValueNq = 14] = "InAttributeValueNq", t[t.BeforeDeclaration = 15] = "BeforeDeclaration", t[t.InDeclaration = 16] = "InDeclaration", t[t.InProcessingInstruction = 17] = "InProcessingInstruction", t[t.BeforeComment = 18] = "BeforeComment", t[t.CDATASequence = 19] = "CDATASequence", t[t.InSpecialComment = 20] = "InSpecialComment", t[t.InCommentLike = 21] = "InCommentLike", t[t.BeforeSpecialS = 22] = "BeforeSpecialS", t[t.BeforeSpecialT = 23] = "BeforeSpecialT", t[t.SpecialStartSequence = 24] = "SpecialStartSequence", t[t.InSpecialTag = 25] = "InSpecialTag", t[t.InEntity = 26] = "InEntity"; })(T || (T = {}));
function ce(t) { return t === _.Space || t === _.NewLine || t === _.Tab || t === _.FormFeed || t === _.CarriageReturn; }
function et(t) { return t === _.Slash || t === _.Gt || ce(t); }
function ua(t) { return t >= _.LowerA && t <= _.LowerZ || t >= _.UpperA && t <= _.UpperZ; }
var Y;
(function (t) { t[t.NoValue = 0] = "NoValue", t[t.Unquoted = 1] = "Unquoted", t[t.Single = 2] = "Single", t[t.Double = 3] = "Double"; })(Y || (Y = {}));
var $ = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Te = (function () {
    function Te(_b, i) {
        var _c = _b.xmlMode, e = _c === void 0 ? !1 : _c, _d = _b.decodeEntities, u = _d === void 0 ? !0 : _d;
        var _this = this;
        this.cbs = i, this.state = T.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = T.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = e, this.decodeEntities = u, this.entityDecoder = new ke(e ? Ye : Qe, function (n, s) { return _this.emitCodePoint(n, s); });
    }
    Te.prototype.reset = function () { this.state = T.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = T.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Te.prototype.write = function (e) { this.offset += this.buffer.length, this.buffer = e, this.parse(); };
    Te.prototype.end = function () { this.running && this.finish(); };
    Te.prototype.pause = function () { this.running = !1; };
    Te.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Te.prototype.stateText = function (e) { e === _.Lt || !this.decodeEntities && this.fastForwardTo(_.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = T.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && e === _.Amp && this.startEntity(); };
    Te.prototype.stateSpecialStartSequence = function (e) { var u = this.sequenceIndex === this.currentSequence.length; if (!(u ? et(e) : (e | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!u) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = T.InTagName, this.stateInTagName(e); };
    Te.prototype.stateInSpecialTag = function (e) { if (this.sequenceIndex === this.currentSequence.length) {
        if (e === _.Gt || ce(e)) {
            var u = this.index - this.currentSequence.length;
            if (this.sectionStart < u) {
                var i = this.index;
                this.index = u, this.cbs.ontext(this.sectionStart, u), this.index = i;
            }
            this.isSpecial = !1, this.sectionStart = u + 2, this.stateInClosingTagName(e);
            return;
        }
        this.sequenceIndex = 0;
    } (e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === $.TitleEnd ? this.decodeEntities && e === _.Amp && this.startEntity() : this.fastForwardTo(_.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(e === _.Lt); };
    Te.prototype.stateCDATASequence = function (e) { e === $.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === $.Cdata.length && (this.state = T.InCommentLike, this.currentSequence = $.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = T.InDeclaration, this.stateInDeclaration(e)); };
    Te.prototype.fastForwardTo = function (e) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === e)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Te.prototype.stateInCommentLike = function (e) { e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === $.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = T.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Te.prototype.isTagStartChar = function (e) { return this.xmlMode ? !et(e) : ua(e); };
    Te.prototype.startSpecial = function (e, u) { this.isSpecial = !0, this.currentSequence = e, this.sequenceIndex = u, this.state = T.SpecialStartSequence; };
    Te.prototype.stateBeforeTagName = function (e) { if (e === _.ExclamationMark)
        this.state = T.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (e === _.Questionmark)
        this.state = T.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(e)) {
        var u = e | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = T.InTagName : u === $.ScriptEnd[2] ? this.state = T.BeforeSpecialS : u === $.TitleEnd[2] ? this.state = T.BeforeSpecialT : this.state = T.InTagName;
    }
    else
        e === _.Slash ? this.state = T.BeforeClosingTagName : (this.state = T.Text, this.stateText(e)); };
    Te.prototype.stateInTagName = function (e) { et(e) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = T.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Te.prototype.stateBeforeClosingTagName = function (e) { ce(e) || (e === _.Gt ? this.state = T.Text : (this.state = this.isTagStartChar(e) ? T.InClosingTagName : T.InSpecialComment, this.sectionStart = this.index)); };
    Te.prototype.stateInClosingTagName = function (e) { (e === _.Gt || ce(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = T.AfterClosingTagName, this.stateAfterClosingTagName(e)); };
    Te.prototype.stateAfterClosingTagName = function (e) { (e === _.Gt || this.fastForwardTo(_.Gt)) && (this.state = T.Text, this.sectionStart = this.index + 1); };
    Te.prototype.stateBeforeAttributeName = function (e) { e === _.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = T.InSpecialTag, this.sequenceIndex = 0) : this.state = T.Text, this.sectionStart = this.index + 1) : e === _.Slash ? this.state = T.InSelfClosingTag : ce(e) || (this.state = T.InAttributeName, this.sectionStart = this.index); };
    Te.prototype.stateInSelfClosingTag = function (e) { e === _.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = T.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : ce(e) || (this.state = T.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Te.prototype.stateInAttributeName = function (e) { (e === _.Eq || et(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = T.AfterAttributeName, this.stateAfterAttributeName(e)); };
    Te.prototype.stateAfterAttributeName = function (e) { e === _.Eq ? this.state = T.BeforeAttributeValue : e === _.Slash || e === _.Gt ? (this.cbs.onattribend(Y.NoValue, this.sectionStart), this.sectionStart = -1, this.state = T.BeforeAttributeName, this.stateBeforeAttributeName(e)) : ce(e) || (this.cbs.onattribend(Y.NoValue, this.sectionStart), this.state = T.InAttributeName, this.sectionStart = this.index); };
    Te.prototype.stateBeforeAttributeValue = function (e) { e === _.DoubleQuote ? (this.state = T.InAttributeValueDq, this.sectionStart = this.index + 1) : e === _.SingleQuote ? (this.state = T.InAttributeValueSq, this.sectionStart = this.index + 1) : ce(e) || (this.sectionStart = this.index, this.state = T.InAttributeValueNq, this.stateInAttributeValueNoQuotes(e)); };
    Te.prototype.handleInAttributeValue = function (e, u) { e === u || !this.decodeEntities && this.fastForwardTo(u) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(u === _.DoubleQuote ? Y.Double : Y.Single, this.index + 1), this.state = T.BeforeAttributeName) : this.decodeEntities && e === _.Amp && this.startEntity(); };
    Te.prototype.stateInAttributeValueDoubleQuotes = function (e) { this.handleInAttributeValue(e, _.DoubleQuote); };
    Te.prototype.stateInAttributeValueSingleQuotes = function (e) { this.handleInAttributeValue(e, _.SingleQuote); };
    Te.prototype.stateInAttributeValueNoQuotes = function (e) { ce(e) || e === _.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(Y.Unquoted, this.index), this.state = T.BeforeAttributeName, this.stateBeforeAttributeName(e)) : this.decodeEntities && e === _.Amp && this.startEntity(); };
    Te.prototype.stateBeforeDeclaration = function (e) { e === _.OpeningSquareBracket ? (this.state = T.CDATASequence, this.sequenceIndex = 0) : this.state = e === _.Dash ? T.BeforeComment : T.InDeclaration; };
    Te.prototype.stateInDeclaration = function (e) { (e === _.Gt || this.fastForwardTo(_.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = T.Text, this.sectionStart = this.index + 1); };
    Te.prototype.stateInProcessingInstruction = function (e) { (e === _.Gt || this.fastForwardTo(_.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = T.Text, this.sectionStart = this.index + 1); };
    Te.prototype.stateBeforeComment = function (e) { e === _.Dash ? (this.state = T.InCommentLike, this.currentSequence = $.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = T.InDeclaration; };
    Te.prototype.stateInSpecialComment = function (e) { (e === _.Gt || this.fastForwardTo(_.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = T.Text, this.sectionStart = this.index + 1); };
    Te.prototype.stateBeforeSpecialS = function (e) { var u = e | 32; u === $.ScriptEnd[3] ? this.startSpecial($.ScriptEnd, 4) : u === $.StyleEnd[3] ? this.startSpecial($.StyleEnd, 4) : (this.state = T.InTagName, this.stateInTagName(e)); };
    Te.prototype.stateBeforeSpecialT = function (e) { var u = e | 32; u === $.TitleEnd[3] ? this.startSpecial($.TitleEnd, 4) : u === $.TextareaEnd[3] ? this.startSpecial($.TextareaEnd, 4) : (this.state = T.InTagName, this.stateInTagName(e)); };
    Te.prototype.startEntity = function () { this.baseState = this.state, this.state = T.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? Q.Strict : this.baseState === T.Text || this.baseState === T.InSpecialTag ? Q.Legacy : Q.Attribute); };
    Te.prototype.stateInEntity = function () { var e = this.entityDecoder.write(this.buffer, this.index - this.offset); e >= 0 ? (this.state = this.baseState, e === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Te.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === T.Text || this.state === T.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === T.InAttributeValueDq || this.state === T.InAttributeValueSq || this.state === T.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Te.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Te.prototype.parse = function () { for (; this.shouldContinue();) {
        var e = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case T.Text: {
                this.stateText(e);
                break;
            }
            case T.SpecialStartSequence: {
                this.stateSpecialStartSequence(e);
                break;
            }
            case T.InSpecialTag: {
                this.stateInSpecialTag(e);
                break;
            }
            case T.CDATASequence: {
                this.stateCDATASequence(e);
                break;
            }
            case T.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(e);
                break;
            }
            case T.InAttributeName: {
                this.stateInAttributeName(e);
                break;
            }
            case T.InCommentLike: {
                this.stateInCommentLike(e);
                break;
            }
            case T.InSpecialComment: {
                this.stateInSpecialComment(e);
                break;
            }
            case T.BeforeAttributeName: {
                this.stateBeforeAttributeName(e);
                break;
            }
            case T.InTagName: {
                this.stateInTagName(e);
                break;
            }
            case T.InClosingTagName: {
                this.stateInClosingTagName(e);
                break;
            }
            case T.BeforeTagName: {
                this.stateBeforeTagName(e);
                break;
            }
            case T.AfterAttributeName: {
                this.stateAfterAttributeName(e);
                break;
            }
            case T.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(e);
                break;
            }
            case T.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(e);
                break;
            }
            case T.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(e);
                break;
            }
            case T.AfterClosingTagName: {
                this.stateAfterClosingTagName(e);
                break;
            }
            case T.BeforeSpecialS: {
                this.stateBeforeSpecialS(e);
                break;
            }
            case T.BeforeSpecialT: {
                this.stateBeforeSpecialT(e);
                break;
            }
            case T.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(e);
                break;
            }
            case T.InSelfClosingTag: {
                this.stateInSelfClosingTag(e);
                break;
            }
            case T.InDeclaration: {
                this.stateInDeclaration(e);
                break;
            }
            case T.BeforeDeclaration: {
                this.stateBeforeDeclaration(e);
                break;
            }
            case T.BeforeComment: {
                this.stateBeforeComment(e);
                break;
            }
            case T.InProcessingInstruction: {
                this.stateInProcessingInstruction(e);
                break;
            }
            case T.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Te.prototype.finish = function () { this.state === T.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Te.prototype.handleTrailingData = function () { var e = this.buffer.length + this.offset; this.sectionStart >= e || (this.state === T.InCommentLike ? this.currentSequence === $.CdataEnd ? this.cbs.oncdata(this.sectionStart, e, 0) : this.cbs.oncomment(this.sectionStart, e, 0) : this.state === T.InTagName || this.state === T.BeforeAttributeName || this.state === T.BeforeAttributeValue || this.state === T.AfterAttributeName || this.state === T.InAttributeName || this.state === T.InAttributeValueSq || this.state === T.InAttributeValueDq || this.state === T.InAttributeValueNq || this.state === T.InClosingTagName || this.cbs.ontext(this.sectionStart, e)); };
    Te.prototype.emitCodePoint = function (e, u) { this.baseState !== T.Text && this.baseState !== T.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.onattribentity(e)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.ontextentity(e, this.sectionStart)); };
    return Te;
}());
var Ee = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), B = new Set(["p"]), Ou = new Set(["thead", "tbody"]), Uu = new Set(["dd", "dt"]), Pu = new Set(["rt", "rp"]), ra = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", B], ["h1", B], ["h2", B], ["h3", B], ["h4", B], ["h5", B], ["h6", B], ["select", Ee], ["input", Ee], ["output", Ee], ["button", Ee], ["datalist", Ee], ["textarea", Ee], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Uu], ["dt", Uu], ["address", B], ["article", B], ["aside", B], ["blockquote", B], ["details", B], ["div", B], ["dl", B], ["fieldset", B], ["figcaption", B], ["figure", B], ["footer", B], ["form", B], ["header", B], ["hr", B], ["main", B], ["nav", B], ["ol", B], ["pre", B], ["section", B], ["table", B], ["ul", B], ["rt", Pu], ["rp", Pu], ["tbody", Ou], ["tfoot", Ou]]), aa = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Mu = new Set(["math", "svg"]), Bu = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), ia = /\s|\//, Me = (function () {
    function Me(e, u) {
        if (u === void 0) { u = {}; }
        var i, n, s, h, m, y;
        this.options = u, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = e != null ? e : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (i = u.lowerCaseTags) !== null && i !== void 0 ? i : this.htmlMode, this.lowerCaseAttributeNames = (n = u.lowerCaseAttributeNames) !== null && n !== void 0 ? n : this.htmlMode, this.recognizeSelfClosing = (s = u.recognizeSelfClosing) !== null && s !== void 0 ? s : !this.htmlMode, this.tokenizer = new ((h = u.Tokenizer) !== null && h !== void 0 ? h : Te)(this.options, this), this.foreignContext = [!this.htmlMode], (y = (m = this.cbs).onparserinit) === null || y === void 0 || y.call(m, this);
    }
    Me.prototype.ontext = function (e, u) { var i, n; var s = this.getSlice(e, u); this.endIndex = u - 1, (n = (i = this.cbs).ontext) === null || n === void 0 || n.call(i, s), this.startIndex = u; };
    Me.prototype.ontextentity = function (e, u) { var i, n; this.endIndex = u - 1, (n = (i = this.cbs).ontext) === null || n === void 0 || n.call(i, Ae(e)), this.startIndex = u; };
    Me.prototype.isVoidElement = function (e) { return this.htmlMode && aa.has(e); };
    Me.prototype.onopentagname = function (e, u) { this.endIndex = u; var i = this.getSlice(e, u); this.lowerCaseTagNames && (i = i.toLowerCase()), this.emitOpenTag(i); };
    Me.prototype.emitOpenTag = function (e) { var u, i, n, s; this.openTagStart = this.startIndex, this.tagname = e; var h = this.htmlMode && ra.get(e); if (h)
        for (; this.stack.length > 0 && h.has(this.stack[0]);) {
            var m = this.stack.shift();
            (i = (u = this.cbs).onclosetag) === null || i === void 0 || i.call(u, m, !0);
        } this.isVoidElement(e) || (this.stack.unshift(e), this.htmlMode && (Mu.has(e) ? this.foreignContext.unshift(!0) : Bu.has(e) && this.foreignContext.unshift(!1))), (s = (n = this.cbs).onopentagname) === null || s === void 0 || s.call(n, e), this.cbs.onopentag && (this.attribs = {}); };
    Me.prototype.endOpenTag = function (e) { var u, i; this.startIndex = this.openTagStart, this.attribs && ((i = (u = this.cbs).onopentag) === null || i === void 0 || i.call(u, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    Me.prototype.onopentagend = function (e) { this.endIndex = e, this.endOpenTag(!1), this.startIndex = e + 1; };
    Me.prototype.onclosetag = function (e, u) { var i, n, s, h, m, y, S, E; this.endIndex = u; var D = this.getSlice(e, u); if (this.lowerCaseTagNames && (D = D.toLowerCase()), this.htmlMode && (Mu.has(D) || Bu.has(D)) && this.foreignContext.shift(), this.isVoidElement(D))
        this.htmlMode && D === "br" && ((h = (s = this.cbs).onopentagname) === null || h === void 0 || h.call(s, "br"), (y = (m = this.cbs).onopentag) === null || y === void 0 || y.call(m, "br", {}, !0), (E = (S = this.cbs).onclosetag) === null || E === void 0 || E.call(S, "br", !1));
    else {
        var q = this.stack.indexOf(D);
        if (q !== -1)
            for (var N = 0; N <= q; N++) {
                var I = this.stack.shift();
                (n = (i = this.cbs).onclosetag) === null || n === void 0 || n.call(i, I, N !== q);
            }
        else
            this.htmlMode && D === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = u + 1; };
    Me.prototype.onselfclosingtag = function (e) { this.endIndex = e, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = e + 1) : this.onopentagend(e); };
    Me.prototype.closeCurrentTag = function (e) { var u, i; var n = this.tagname; this.endOpenTag(e), this.stack[0] === n && ((i = (u = this.cbs).onclosetag) === null || i === void 0 || i.call(u, n, !e), this.stack.shift()); };
    Me.prototype.onattribname = function (e, u) { this.startIndex = e; var i = this.getSlice(e, u); this.attribname = this.lowerCaseAttributeNames ? i.toLowerCase() : i; };
    Me.prototype.onattribdata = function (e, u) { this.attribvalue += this.getSlice(e, u); };
    Me.prototype.onattribentity = function (e) { this.attribvalue += Ae(e); };
    Me.prototype.onattribend = function (e, u) { var i, n; this.endIndex = u, (n = (i = this.cbs).onattribute) === null || n === void 0 || n.call(i, this.attribname, this.attribvalue, e === Y.Double ? '"' : e === Y.Single ? "'" : e === Y.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    Me.prototype.getInstructionName = function (e) { var u = e.search(ia), i = u < 0 ? e : e.substr(0, u); return this.lowerCaseTagNames && (i = i.toLowerCase()), i; };
    Me.prototype.ondeclaration = function (e, u) { this.endIndex = u; var i = this.getSlice(e, u); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(i);
        this.cbs.onprocessinginstruction("!".concat(n), "!".concat(i));
    } this.startIndex = u + 1; };
    Me.prototype.onprocessinginstruction = function (e, u) { this.endIndex = u; var i = this.getSlice(e, u); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(i);
        this.cbs.onprocessinginstruction("?".concat(n), "?".concat(i));
    } this.startIndex = u + 1; };
    Me.prototype.oncomment = function (e, u, i) { var n, s, h, m; this.endIndex = u, (s = (n = this.cbs).oncomment) === null || s === void 0 || s.call(n, this.getSlice(e, u - i)), (m = (h = this.cbs).oncommentend) === null || m === void 0 || m.call(h), this.startIndex = u + 1; };
    Me.prototype.oncdata = function (e, u, i) { var n, s, h, m, y, S, E, D, q, N; this.endIndex = u; var I = this.getSlice(e, u - i); !this.htmlMode || this.options.recognizeCDATA ? ((s = (n = this.cbs).oncdatastart) === null || s === void 0 || s.call(n), (m = (h = this.cbs).ontext) === null || m === void 0 || m.call(h, I), (S = (y = this.cbs).oncdataend) === null || S === void 0 || S.call(y)) : ((D = (E = this.cbs).oncomment) === null || D === void 0 || D.call(E, "[CDATA[".concat(I, "]]")), (N = (q = this.cbs).oncommentend) === null || N === void 0 || N.call(q)), this.startIndex = u + 1; };
    Me.prototype.onend = function () { var e, u; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var i = 0; i < this.stack.length; i++)
            this.cbs.onclosetag(this.stack[i], !0);
    } (u = (e = this.cbs).onend) === null || u === void 0 || u.call(e); };
    Me.prototype.reset = function () { var e, u, i, n; (u = (e = this.cbs).onreset) === null || u === void 0 || u.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (n = (i = this.cbs).onparserinit) === null || n === void 0 || n.call(i, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    Me.prototype.parseComplete = function (e) { this.reset(), this.end(e); };
    Me.prototype.getSlice = function (e, u) { for (; e - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var i = this.buffers[0].slice(e - this.bufferOffset, u - this.bufferOffset); for (; u - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), i += this.buffers[0].slice(0, u - this.bufferOffset); return i; };
    Me.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    Me.prototype.write = function (e) { var u, i; if (this.ended) {
        (i = (u = this.cbs).onerror) === null || i === void 0 || i.call(u, new Error(".write() after done!"));
        return;
    } this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++); };
    Me.prototype.end = function (e) { var u, i; if (this.ended) {
        (i = (u = this.cbs).onerror) === null || i === void 0 || i.call(u, new Error(".end() after done!"));
        return;
    } e && this.write(e), this.ended = !0, this.tokenizer.end(); };
    Me.prototype.pause = function () { this.tokenizer.pause(); };
    Me.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    Me.prototype.parseChunk = function (e) { this.write(e); };
    Me.prototype.done = function (e) { this.end(e); };
    return Me;
}());
var tt = {};
_t(tt, { CDATA: function () { return jt; }, Comment: function () { return Bt; }, Directive: function () { return Mt; }, Doctype: function () { return Ht; }, ElementType: function () { return O; }, Root: function () { return Ut; }, Script: function () { return Ft; }, Style: function () { return Vt; }, Tag: function () { return Rt; }, Text: function () { return Pt; }, isTag: function () { return Ot; } });
var O;
(function (t) { t.Root = "root", t.Text = "text", t.Directive = "directive", t.Comment = "comment", t.Script = "script", t.Style = "style", t.Tag = "tag", t.CDATA = "cdata", t.Doctype = "doctype"; })(O || (O = {}));
function Ot(t) { return t.type === O.Tag || t.type === O.Script || t.type === O.Style; }
var Ut = O.Root, Pt = O.Text, Mt = O.Directive, Bt = O.Comment, Ft = O.Script, Vt = O.Style, Rt = O.Tag, jt = O.CDATA, Ht = O.Doctype;
var ut = (function () {
    function ut() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(ut.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (e) { this.parent = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ut.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (e) { this.prev = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ut.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (e) { this.next = e; },
        enumerable: false,
        configurable: true
    });
    ut.prototype.cloneNode = function (e) {
        if (e === void 0) { e = !1; }
        return Fu(this, e);
    };
    return ut;
}()), Be = (function (_super) {
    __extends(Be, _super);
    function Be(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = e;
        return _this;
    }
    Object.defineProperty(Be.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (e) { this.data = e; },
        enumerable: false,
        configurable: true
    });
    return Be;
}(ut)), qe = (function (_super) {
    __extends(qe, _super);
    function qe() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.Text;
        return _this;
    }
    Object.defineProperty(qe.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return qe;
}(Be)), Fe = (function (_super) {
    __extends(Fe, _super);
    function Fe() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.Comment;
        return _this;
    }
    Object.defineProperty(Fe.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return Fe;
}(Be)), Ve = (function (_super) {
    __extends(Ve, _super);
    function Ve(e, u) {
        var _this = this;
        _this = _super.call(this, u) || this, _this.name = e, _this.type = O.Directive;
        return _this;
    }
    Object.defineProperty(Ve.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return Ve;
}(Be)), Re = (function (_super) {
    __extends(Re, _super);
    function Re(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = e;
        return _this;
    }
    Object.defineProperty(Re.prototype, "firstChild", {
        get: function () { var e; return (e = this.children[0]) !== null && e !== void 0 ? e : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Re.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Re.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (e) { this.children = e; },
        enumerable: false,
        configurable: true
    });
    return Re;
}(ut)), je = (function (_super) {
    __extends(je, _super);
    function je() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.CDATA;
        return _this;
    }
    Object.defineProperty(je.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return je;
}(Re)), Ne = (function (_super) {
    __extends(Ne, _super);
    function Ne() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.Root;
        return _this;
    }
    Object.defineProperty(Ne.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return Ne;
}(Re)), He = (function (_super) {
    __extends(He, _super);
    function He(e, u, i, n) {
        if (i === void 0) { i = []; }
        if (n === void 0) { n = e === "script" ? O.Script : e === "style" ? O.Style : O.Tag; }
        var _this = this;
        _this = _super.call(this, i) || this, _this.name = e, _this.attribs = u, _this.type = n;
        return _this;
    }
    Object.defineProperty(He.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(He.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (e) { this.name = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(He.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (e) { var u, i; return { name: e, value: _this.attribs[e], namespace: (u = _this["x-attribsNamespace"]) === null || u === void 0 ? void 0 : u[e], prefix: (i = _this["x-attribsPrefix"]) === null || i === void 0 ? void 0 : i[e] }; });
        },
        enumerable: false,
        configurable: true
    });
    return He;
}(Re));
function P(t) { return Ot(t); }
function Ce(t) { return t.type === O.CDATA; }
function re(t) { return t.type === O.Text; }
function ze(t) { return t.type === O.Comment; }
function na(t) { return t.type === O.Directive; }
function Gt(t) { return t.type === O.Root; }
function J(t) { return Object.prototype.hasOwnProperty.call(t, "children"); }
function Fu(t, e) {
    if (e === void 0) { e = !1; }
    var u;
    if (re(t))
        u = new qe(t.data);
    else if (ze(t))
        u = new Fe(t.data);
    else if (P(t)) {
        var i = e ? zt(t.children) : [], n_1 = new He(t.name, ue({}, t.attribs), i);
        i.forEach(function (s) { return s.parent = n_1; }), t.namespace != null && (n_1.namespace = t.namespace), t["x-attribsNamespace"] && (n_1["x-attribsNamespace"] = ue({}, t["x-attribsNamespace"])), t["x-attribsPrefix"] && (n_1["x-attribsPrefix"] = ue({}, t["x-attribsPrefix"])), u = n_1;
    }
    else if (Ce(t)) {
        var i = e ? zt(t.children) : [], n_2 = new je(i);
        i.forEach(function (s) { return s.parent = n_2; }), u = n_2;
    }
    else if (Gt(t)) {
        var i = e ? zt(t.children) : [], n_3 = new Ne(i);
        i.forEach(function (s) { return s.parent = n_3; }), t["x-mode"] && (n_3["x-mode"] = t["x-mode"]), u = n_3;
    }
    else if (na(t)) {
        var i = new Ve(t.name, t.data);
        t["x-name"] != null && (i["x-name"] = t["x-name"], i["x-publicId"] = t["x-publicId"], i["x-systemId"] = t["x-systemId"]), u = i;
    }
    else
        throw new Error("Not implemented yet: ".concat(t.type));
    return u.startIndex = t.startIndex, u.endIndex = t.endIndex, t.sourceCodeLocation != null && (u.sourceCodeLocation = t.sourceCodeLocation), u;
}
function zt(t) { var e = t.map(function (u) { return Fu(u, !0); }); for (var u = 1; u < e.length; u++)
    e[u].prev = e[u - 1], e[u - 1].next = e[u]; return e; }
var Vu = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, _e = (function () {
    function _e(e, u, i) {
        this.dom = [], this.root = new Ne(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (i = u, u = Vu), typeof e == "object" && (u = e, e = void 0), this.callback = e != null ? e : null, this.options = u != null ? u : Vu, this.elementCB = i != null ? i : null;
    }
    _e.prototype.onparserinit = function (e) { this.parser = e; };
    _e.prototype.onreset = function () { this.dom = [], this.root = new Ne(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    _e.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    _e.prototype.onerror = function (e) { this.handleCallback(e); };
    _e.prototype.onclosetag = function () { this.lastNode = null; var e = this.tagStack.pop(); this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e); };
    _e.prototype.onopentag = function (e, u) { var i = this.options.xmlMode ? O.Tag : void 0, n = new He(e, u, void 0, i); this.addNode(n), this.tagStack.push(n); };
    _e.prototype.ontext = function (e) { var u = this.lastNode; if (u && u.type === O.Text)
        u.data += e, this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
    else {
        var i = new qe(e);
        this.addNode(i), this.lastNode = i;
    } };
    _e.prototype.oncomment = function (e) { if (this.lastNode && this.lastNode.type === O.Comment) {
        this.lastNode.data += e;
        return;
    } var u = new Fe(e); this.addNode(u), this.lastNode = u; };
    _e.prototype.oncommentend = function () { this.lastNode = null; };
    _e.prototype.oncdatastart = function () { var e = new qe(""), u = new je([e]); this.addNode(u), e.parent = u, this.lastNode = e; };
    _e.prototype.oncdataend = function () { this.lastNode = null; };
    _e.prototype.onprocessinginstruction = function (e, u) { var i = new Ve(e, u); this.addNode(i); };
    _e.prototype.handleCallback = function (e) { if (typeof this.callback == "function")
        this.callback(e, this.dom);
    else if (e)
        throw e; };
    _e.prototype.addNode = function (e) { var u = this.tagStack[this.tagStack.length - 1], i = u.children[u.children.length - 1]; this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), u.children.push(e), i && (e.prev = i, i.next = e), e.parent = u, this.lastNode = null; };
    return _e;
}());
var ae = {};
_t(ae, { DocumentPosition: function () { return ee; }, append: function () { return Ea; }, appendChild: function () { return Ta; }, compareDocumentPosition: function () { return tr; }, existsOne: function () { return Yu; }, filter: function () { return Ie; }, find: function () { return ot; }, findAll: function () { return Ca; }, findOne: function () { return ft; }, findOneChild: function () { return Na; }, getAttributeValue: function () { return ya; }, getChildren: function () { return ct; }, getElementById: function () { return La; }, getElements: function () { return Ia; }, getElementsByClassName: function () { return Oa; }, getElementsByTagName: function () { return xe; }, getElementsByTagType: function () { return Ua; }, getFeed: function () { return ru; }, getInnerHTML: function () { return wa; }, getName: function () { return Aa; }, getOuterHTML: function () { return Zu; }, getParent: function () { return Qu; }, getSiblings: function () { return st; }, getText: function () { return nt; }, hasAttrib: function () { return Sa; }, hasChildren: function () { return J; }, innerText: function () { return Zt; }, isCDATA: function () { return Ce; }, isComment: function () { return ze; }, isDocument: function () { return Gt; }, isTag: function () { return P; }, isText: function () { return re; }, nextElementSibling: function () { return Qt; }, prepend: function () { return eu; }, prependChild: function () { return qa; }, prevElementSibling: function () { return Yt; }, removeElement: function () { return se; }, removeSubsets: function () { return Pa; }, replaceElement: function () { return ka; }, testElement: function () { return Da; }, textContent: function () { return de; }, uniqueSort: function () { return uu; } });
function rt(t) { for (var e = 1; e < t.length; e++)
    t[e][0] += t[e - 1][0] + 1; return t; }
var ca = new Map(rt([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(rt([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(rt([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(rt([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var $t = /["&'<>$\x80-\uFFFF]/g, Ru = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), ju = String.prototype.codePointAt != null ? function (t, e) { return t.codePointAt(e); } : function (t, e) { return (t.charCodeAt(e) & 64512) === 55296 ? (t.charCodeAt(e) - 55296) * 1024 + t.charCodeAt(e + 1) - 56320 + 65536 : t.charCodeAt(e); };
function Ge(t) { var e = "", u = 0, i; for (; (i = $t.exec(t)) !== null;) {
    var n = i.index, s = t.charCodeAt(n), h = Ru.get(s);
    h !== void 0 ? (e += t.substring(u, n) + h, u = n + 1) : (e += "".concat(t.substring(u, n), "&#x").concat(ju(t, n).toString(16), ";"), u = $t.lastIndex += +((s & 64512) === 55296));
} return e + t.substr(u); }
function Jt(t, e) { return function (i) { var n, s = 0, h = ""; for (; n = t.exec(i);)
    s !== n.index && (h += i.substring(s, n.index)), h += e.get(n[0].charCodeAt(0)), s = n.index + 1; return h + i.substring(s); }; }
var Hu = Jt(/[&<>'"]/g, Ru), at = Jt(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), it = Jt(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var zu;
(function (t) { t[t.XML = 0] = "XML", t[t.HTML = 1] = "HTML"; })(zu || (zu = {}));
var Gu;
(function (t) { t[t.UTF8 = 0] = "UTF8", t[t.ASCII = 1] = "ASCII", t[t.Extensive = 2] = "Extensive", t[t.Attribute = 3] = "Attribute", t[t.Text = 4] = "Text"; })(Gu || (Gu = {}));
var Wu = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (t) { return [t.toLowerCase(), t]; })), Xu = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (t) { return [t.toLowerCase(), t]; }));
var oa = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function fa(t) { return t.replace(/"/g, "&quot;"); }
function la(t, e) { var u; if (!t)
    return; var i = ((u = e.encodeEntities) !== null && u !== void 0 ? u : e.decodeEntities) === !1 ? fa : e.xmlMode || e.encodeEntities !== "utf8" ? Ge : at; return Object.keys(t).map(function (n) { var s, h; var m = (s = t[n]) !== null && s !== void 0 ? s : ""; return e.xmlMode === "foreign" && (n = (h = Xu.get(n)) !== null && h !== void 0 ? h : n), !e.emptyAttrs && !e.xmlMode && m === "" ? n : "".concat(n, "=\"").concat(i(m), "\""); }).join(" "); }
var Ku = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function Kt(t, e) {
    if (e === void 0) { e = {}; }
    var u = "length" in t ? t : [t], i = "";
    for (var n = 0; n < u.length; n++)
        i += da(u[n], e);
    return i;
}
var De = Kt;
function da(t, e) { switch (t.type) {
    case Ut: return Kt(t.children, e);
    case Ht:
    case Mt: return ga(t);
    case Bt: return va(t);
    case jt: return xa(t);
    case Ft:
    case Vt:
    case Rt: return ba(t, e);
    case Pt: return ma(t, e);
} }
var ha = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), pa = new Set(["svg", "math"]);
function ba(t, e) { var u; e.xmlMode === "foreign" && (t.name = (u = Wu.get(t.name)) !== null && u !== void 0 ? u : t.name, t.parent && ha.has(t.parent.name) && (e = ge(ue({}, e), { xmlMode: !1 }))), !e.xmlMode && pa.has(t.name) && (e = ge(ue({}, e), { xmlMode: "foreign" })); var i = "<".concat(t.name), n = la(t.attribs, e); return n && (i += " ".concat(n)), t.children.length === 0 && (e.xmlMode ? e.selfClosingTags !== !1 : e.selfClosingTags && Ku.has(t.name)) ? (e.xmlMode || (i += " "), i += "/>") : (i += ">", t.children.length > 0 && (i += Kt(t.children, e)), (e.xmlMode || !Ku.has(t.name)) && (i += "</".concat(t.name, ">"))), i; }
function ga(t) { return "<".concat(t.data, ">"); }
function ma(t, e) { var u; var i = t.data || ""; return ((u = e.encodeEntities) !== null && u !== void 0 ? u : e.decodeEntities) !== !1 && !(!e.xmlMode && t.parent && oa.has(t.parent.name)) && (i = e.xmlMode || e.encodeEntities !== "utf8" ? Ge(i) : it(i)), i; }
function xa(t) { return "<![CDATA[".concat(t.children[0].data, "]]>"); }
function va(t) { return "<!--".concat(t.data, "-->"); }
function Zu(t, e) { return De(t, e); }
function wa(t, e) { return J(t) ? t.children.map(function (u) { return Zu(u, e); }).join("") : ""; }
function nt(t) {
    return Array.isArray(t) ? t.map(nt).join("") : P(t) ? t.name === "br" ? "\n" : nt(t.children) : Ce(t) ? nt(t.children) : re(t) ? t.data : "";
}
function de(t) { return Array.isArray(t) ? t.map(de).join("") : J(t) && !ze(t) ? de(t.children) : re(t) ? t.data : ""; }
function Zt(t) { return Array.isArray(t) ? t.map(Zt).join("") : J(t) && (t.type === O.Tag || Ce(t)) ? Zt(t.children) : re(t) ? t.data : ""; }
function ct(t) { return J(t) ? t.children : []; }
function Qu(t) { return t.parent || null; }
function st(t) {
    var _b, _c;
    var e = Qu(t);
    if (e != null)
        return ct(e);
    var u = [t], i = t.prev, n = t.next;
    for (; i != null;)
        u.unshift(i), _b = i, i = _b.prev;
    for (; n != null;)
        u.push(n), _c = n, n = _c.next;
    return u;
}
function ya(t, e) { var u; return (u = t.attribs) === null || u === void 0 ? void 0 : u[e]; }
function Sa(t, e) { return t.attribs != null && Object.prototype.hasOwnProperty.call(t.attribs, e) && t.attribs[e] != null; }
function Aa(t) { return t.name; }
function Qt(t) {
    var _b;
    var e = t.next;
    for (; e !== null && !P(e);)
        (_b = e, e = _b.next);
    return e;
}
function Yt(t) {
    var _b;
    var e = t.prev;
    for (; e !== null && !P(e);)
        (_b = e, e = _b.prev);
    return e;
}
function se(t) { if (t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t.parent) {
    var e = t.parent.children, u = e.lastIndexOf(t);
    u >= 0 && e.splice(u, 1);
} t.next = null, t.prev = null, t.parent = null; }
function ka(t, e) { var u = e.prev = t.prev; u && (u.next = e); var i = e.next = t.next; i && (i.prev = e); var n = e.parent = t.parent; if (n) {
    var s = n.children;
    s[s.lastIndexOf(t)] = e, t.parent = null;
} }
function Ta(t, e) { if (se(e), e.next = null, e.parent = t, t.children.push(e) > 1) {
    var u = t.children[t.children.length - 2];
    u.next = e, e.prev = u;
}
else
    e.prev = null; }
function Ea(t, e) { se(e); var u = t.parent, i = t.next; if (e.next = i, e.prev = t, t.next = e, e.parent = u, i) {
    if (i.prev = e, u) {
        var n = u.children;
        n.splice(n.lastIndexOf(i), 0, e);
    }
}
else
    u && u.children.push(e); }
function qa(t, e) { if (se(e), e.parent = t, e.prev = null, t.children.unshift(e) !== 1) {
    var u = t.children[1];
    u.prev = e, e.next = u;
}
else
    e.next = null; }
function eu(t, e) { se(e); var u = t.parent; if (u) {
    var i = u.children;
    i.splice(i.indexOf(t), 0, e);
} t.prev && (t.prev.next = e), e.parent = u, e.prev = t.prev, e.next = t, t.prev = e; }
function Ie(t, e, u, i) {
    if (u === void 0) { u = !0; }
    if (i === void 0) { i = 1 / 0; }
    return ot(t, Array.isArray(e) ? e : [e], u, i);
}
function ot(t, e, u, i) { var n = [], s = [Array.isArray(e) ? e : [e]], h = [0]; for (;;) {
    if (h[0] >= s[0].length) {
        if (h.length === 1)
            return n;
        s.shift(), h.shift();
        continue;
    }
    var m = s[0][h[0]++];
    if (t(m) && (n.push(m), --i <= 0))
        return n;
    u && J(m) && m.children.length > 0 && (h.unshift(0), s.unshift(m.children));
} }
function Na(t, e) { return e.find(t); }
function ft(t, e, u) {
    if (u === void 0) { u = !0; }
    var i = Array.isArray(e) ? e : [e];
    for (var n = 0; n < i.length; n++) {
        var s = i[n];
        if (P(s) && t(s))
            return s;
        if (u && J(s) && s.children.length > 0) {
            var h = ft(t, s.children, !0);
            if (h)
                return h;
        }
    }
    return null;
}
function Yu(t, e) { return (Array.isArray(e) ? e : [e]).some(function (u) { return P(u) && t(u) || J(u) && Yu(t, u.children); }); }
function Ca(t, e) { var u = [], i = [Array.isArray(e) ? e : [e]], n = [0]; for (;;) {
    if (n[0] >= i[0].length) {
        if (i.length === 1)
            return u;
        i.shift(), n.shift();
        continue;
    }
    var s = i[0][n[0]++];
    P(s) && t(s) && u.push(s), J(s) && s.children.length > 0 && (n.unshift(0), i.unshift(s.children));
} }
var lt = { tag_name: function (t) { return typeof t == "function" ? function (e) { return P(e) && t(e.name); } : t === "*" ? P : function (e) { return P(e) && e.name === t; }; }, tag_type: function (t) { return typeof t == "function" ? function (e) { return t(e.type); } : function (e) { return e.type === t; }; }, tag_contains: function (t) { return typeof t == "function" ? function (e) { return re(e) && t(e.data); } : function (e) { return re(e) && e.data === t; }; } };
function tu(t, e) { return typeof e == "function" ? function (u) { return P(u) && e(u.attribs[t]); } : function (u) { return P(u) && u.attribs[t] === e; }; }
function _a(t, e) { return function (u) { return t(u) || e(u); }; }
function er(t) { var e = Object.keys(t).map(function (u) { var i = t[u]; return Object.prototype.hasOwnProperty.call(lt, u) ? lt[u](i) : tu(u, i); }); return e.length === 0 ? null : e.reduce(_a); }
function Da(t, e) { var u = er(t); return u ? u(e) : !0; }
function Ia(t, e, u, i) {
    if (i === void 0) { i = 1 / 0; }
    var n = er(t);
    return n ? Ie(n, e, u, i) : [];
}
function La(t, e, u) {
    if (u === void 0) { u = !0; }
    return Array.isArray(e) || (e = [e]), ft(tu("id", t), e, u);
}
function xe(t, e, u, i) {
    if (u === void 0) { u = !0; }
    if (i === void 0) { i = 1 / 0; }
    return Ie(lt.tag_name(t), e, u, i);
}
function Oa(t, e, u, i) {
    if (u === void 0) { u = !0; }
    if (i === void 0) { i = 1 / 0; }
    return Ie(tu("class", t), e, u, i);
}
function Ua(t, e, u, i) {
    if (u === void 0) { u = !0; }
    if (i === void 0) { i = 1 / 0; }
    return Ie(lt.tag_type(t), e, u, i);
}
function Pa(t) { var e = t.length; for (; --e >= 0;) {
    var u = t[e];
    if (e > 0 && t.lastIndexOf(u, e - 1) >= 0) {
        t.splice(e, 1);
        continue;
    }
    for (var i = u.parent; i; i = i.parent)
        if (t.includes(i)) {
            t.splice(e, 1);
            break;
        }
} return t; }
var ee;
(function (t) { t[t.DISCONNECTED = 1] = "DISCONNECTED", t[t.PRECEDING = 2] = "PRECEDING", t[t.FOLLOWING = 4] = "FOLLOWING", t[t.CONTAINS = 8] = "CONTAINS", t[t.CONTAINED_BY = 16] = "CONTAINED_BY"; })(ee || (ee = {}));
function tr(t, e) { var u = [], i = []; if (t === e)
    return 0; var n = J(t) ? t : t.parent; for (; n;)
    u.unshift(n), n = n.parent; for (n = J(e) ? e : e.parent; n;)
    i.unshift(n), n = n.parent; var s = Math.min(u.length, i.length), h = 0; for (; h < s && u[h] === i[h];)
    h++; if (h === 0)
    return ee.DISCONNECTED; var m = u[h - 1], y = m.children, S = u[h], E = i[h]; return y.indexOf(S) > y.indexOf(E) ? m === e ? ee.FOLLOWING | ee.CONTAINED_BY : ee.FOLLOWING : m === t ? ee.PRECEDING | ee.CONTAINS : ee.PRECEDING; }
function uu(t) { return t = t.filter(function (e, u, i) { return !i.includes(e, u + 1); }), t.sort(function (e, u) { var i = tr(e, u); return i & ee.PRECEDING ? -1 : i & ee.FOLLOWING ? 1 : 0; }), t; }
function ru(t) { var e = dt(Ra, t); return e ? e.name === "feed" ? Ma(e) : Ba(e) : null; }
function Ma(t) { var e; var u = t.children, i = { type: "atom", items: xe("entry", u).map(function (h) { var m; var y = h.children, S = { media: ur(y) }; X(S, "id", "id", y), X(S, "title", "title", y); var E = (m = dt("link", y)) === null || m === void 0 ? void 0 : m.attribs.href; E && (S.link = E); var D = he("summary", y) || he("content", y); D && (S.description = D); var q = he("updated", y); return q && (S.pubDate = new Date(q)), S; }) }; X(i, "id", "id", u), X(i, "title", "title", u); var n = (e = dt("link", u)) === null || e === void 0 ? void 0 : e.attribs.href; n && (i.link = n), X(i, "description", "subtitle", u); var s = he("updated", u); return s && (i.updated = new Date(s)), X(i, "author", "email", u, !0), i; }
function Ba(t) { var e, u; var i = (u = (e = dt("channel", t.children)) === null || e === void 0 ? void 0 : e.children) !== null && u !== void 0 ? u : [], n = { type: t.name.substr(0, 3), id: "", items: xe("item", t.children).map(function (h) { var m = h.children, y = { media: ur(m) }; X(y, "id", "guid", m), X(y, "title", "title", m), X(y, "link", "link", m), X(y, "description", "description", m); var S = he("pubDate", m) || he("dc:date", m); return S && (y.pubDate = new Date(S)), y; }) }; X(n, "title", "title", i), X(n, "link", "link", i), X(n, "description", "description", i); var s = he("lastBuildDate", i); return s && (n.updated = new Date(s)), X(n, "author", "managingEditor", i, !0), n; }
var Fa = ["url", "type", "lang"], Va = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function ur(t) { return xe("media:content", t).map(function (e) {
    var e_4, _b, e_5, _c;
    var u = e.attribs, i = { medium: u.medium, isDefault: !!u.isDefault };
    try {
        for (var Fa_1 = __values(Fa), Fa_1_1 = Fa_1.next(); !Fa_1_1.done; Fa_1_1 = Fa_1.next()) {
            var n = Fa_1_1.value;
            u[n] && (i[n] = u[n]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (Fa_1_1 && !Fa_1_1.done && (_b = Fa_1.return)) _b.call(Fa_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var Va_1 = __values(Va), Va_1_1 = Va_1.next(); !Va_1_1.done; Va_1_1 = Va_1.next()) {
            var n = Va_1_1.value;
            u[n] && (i[n] = parseInt(u[n], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (Va_1_1 && !Va_1_1.done && (_c = Va_1.return)) _c.call(Va_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return u.expression && (i.expression = u.expression), i;
}); }
function dt(t, e) { return xe(t, e, !0, 1)[0]; }
function he(t, e, u) {
    if (u === void 0) { u = !1; }
    return de(xe(t, e, u, 1)).trim();
}
function X(t, e, u, i, n) {
    if (n === void 0) { n = !1; }
    var s = he(u, i, n);
    s && (t[e] = s);
}
function Ra(t) { return t === "rss" || t === "feed" || t === "rdf:RDF"; }
function rr(t, e) { var u = new _e(void 0, e); return new Me(u, e).end(t), u.root; }
var C;
(function (t) { t.Attribute = "attribute", t.Pseudo = "pseudo", t.PseudoElement = "pseudo-element", t.Tag = "tag", t.Universal = "universal", t.Adjacent = "adjacent", t.Child = "child", t.Descendant = "descendant", t.Parent = "parent", t.Sibling = "sibling", t.ColumnCombinator = "column-combinator"; })(C || (C = {}));
var V;
(function (t) { t.Any = "any", t.Element = "element", t.End = "end", t.Equals = "equals", t.Exists = "exists", t.Hyphen = "hyphen", t.Not = "not", t.Start = "start"; })(V || (V = {}));
var ar = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, ja = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, Ha = new Map([[126, V.Element], [94, V.Start], [36, V.End], [42, V.Any], [33, V.Not], [124, V.Hyphen]]), za = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function ve(t) { switch (t.type) {
    case C.Adjacent:
    case C.Child:
    case C.Descendant:
    case C.Parent:
    case C.Sibling:
    case C.ColumnCombinator: return !0;
    default: return !1;
} }
var Ga = new Set(["contains", "icontains"]);
function $a(t, e, u) { var i = parseInt(e, 16) - 65536; return i !== i || u ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, i & 1023 | 56320); }
function $e(t) { return t.replace(ja, $a); }
function au(t) { return t === 39 || t === 34; }
function ir(t) { return t === 32 || t === 9 || t === 10 || t === 12 || t === 13; }
function pe(t) { var e = [], u = nr(e, "".concat(t), 0); if (u < t.length)
    throw new Error("Unmatched selector: ".concat(t.slice(u))); return e; }
function nr(t, e, u) { var i = []; function n(q) { var N = e.slice(u + q).match(ar); if (!N)
    throw new Error("Expected name, found ".concat(e.slice(u))); var _b = __read(N, 1), I = _b[0]; return u += q + I.length, $e(I); } function s(q) { for (u += q; u < e.length && ir(e.charCodeAt(u));)
    u++; } function h() { u += 1; var q = u, N = 1; for (; N > 0 && u < e.length; u++)
    e.charCodeAt(u) === 40 && !m(u) ? N++ : e.charCodeAt(u) === 41 && !m(u) && N--; if (N)
    throw new Error("Parenthesis not matched"); return $e(e.slice(q, u - 1)); } function m(q) { var N = 0; for (; e.charCodeAt(--q) === 92;)
    N++; return (N & 1) === 1; } function y() { if (i.length > 0 && ve(i[i.length - 1]))
    throw new Error("Did not expect successive traversals."); } function S(q) { if (i.length > 0 && i[i.length - 1].type === C.Descendant) {
    i[i.length - 1].type = q;
    return;
} y(), i.push({ type: q }); } function E(q, N) { i.push({ type: C.Attribute, name: q, action: N, value: n(1), namespace: null, ignoreCase: "quirks" }); } function D() { if (i.length && i[i.length - 1].type === C.Descendant && i.pop(), i.length === 0)
    throw new Error("Empty sub-selector"); t.push(i); } if (s(0), e.length === u)
    return u; e: for (; u < e.length;) {
    var q = e.charCodeAt(u);
    switch (q) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (i.length === 0 || i[0].type !== C.Descendant) && (y(), i.push({ type: C.Descendant })), s(1);
            break;
        }
        case 62: {
            S(C.Child), s(1);
            break;
        }
        case 60: {
            S(C.Parent), s(1);
            break;
        }
        case 126: {
            S(C.Sibling), s(1);
            break;
        }
        case 43: {
            S(C.Adjacent), s(1);
            break;
        }
        case 46: {
            E("class", V.Element);
            break;
        }
        case 35: {
            E("id", V.Equals);
            break;
        }
        case 91: {
            s(1);
            var N = void 0, I = null;
            e.charCodeAt(u) === 124 ? N = n(1) : e.startsWith("*|", u) ? (I = "*", N = n(2)) : (N = n(0), e.charCodeAt(u) === 124 && e.charCodeAt(u + 1) !== 61 && (I = N, N = n(1))), s(0);
            var U = V.Exists, W = Ha.get(e.charCodeAt(u));
            if (W) {
                if (U = W, e.charCodeAt(u + 1) !== 61)
                    throw new Error("Expected `=`");
                s(2);
            }
            else
                e.charCodeAt(u) === 61 && (U = V.Equals, s(1));
            var Z = "", ne = null;
            if (U !== "exists") {
                if (au(e.charCodeAt(u))) {
                    var o = e.charCodeAt(u), d = u + 1;
                    for (; d < e.length && (e.charCodeAt(d) !== o || m(d));)
                        d += 1;
                    if (e.charCodeAt(d) !== o)
                        throw new Error("Attribute value didn't end");
                    Z = $e(e.slice(u + 1, d)), u = d + 1;
                }
                else {
                    var o = u;
                    for (; u < e.length && (!ir(e.charCodeAt(u)) && e.charCodeAt(u) !== 93 || m(u));)
                        u += 1;
                    Z = $e(e.slice(o, u));
                }
                s(0);
                var k = e.charCodeAt(u) | 32;
                k === 115 ? (ne = !1, s(1)) : k === 105 && (ne = !0, s(1));
            }
            if (e.charCodeAt(u) !== 93)
                throw new Error("Attribute selector didn't terminate");
            u += 1;
            var R = { type: C.Attribute, name: N, action: U, value: Z, namespace: I, ignoreCase: ne };
            i.push(R);
            break;
        }
        case 58: {
            if (e.charCodeAt(u + 1) === 58) {
                i.push({ type: C.PseudoElement, name: n(2).toLowerCase(), data: e.charCodeAt(u) === 40 ? h() : null });
                continue;
            }
            var N = n(1).toLowerCase(), I = null;
            if (e.charCodeAt(u) === 40)
                if (za.has(N)) {
                    if (au(e.charCodeAt(u + 1)))
                        throw new Error("Pseudo-selector ".concat(N, " cannot be quoted"));
                    if (I = [], u = nr(I, e, u + 1), e.charCodeAt(u) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(N, " (").concat(e, ")"));
                    u += 1;
                }
                else {
                    if (I = h(), Ga.has(N)) {
                        var U = I.charCodeAt(0);
                        U === I.charCodeAt(I.length - 1) && au(U) && (I = I.slice(1, -1));
                    }
                    I = $e(I);
                }
            i.push({ type: C.Pseudo, name: N, data: I });
            break;
        }
        case 44: {
            D(), i = [], s(1);
            break;
        }
        default: {
            if (e.startsWith("/*", u)) {
                var U = e.indexOf("*/", u + 2);
                if (U < 0)
                    throw new Error("Comment was not terminated");
                u = U + 2, i.length === 0 && s(0);
                break;
            }
            var N = null, I = void 0;
            if (q === 42)
                u += 1, I = "*";
            else if (q === 124) {
                if (I = "", e.charCodeAt(u + 1) === 124) {
                    S(C.ColumnCombinator), s(2);
                    break;
                }
            }
            else if (ar.test(e.slice(u)))
                I = n(0);
            else
                break e;
            e.charCodeAt(u) === 124 && e.charCodeAt(u + 1) !== 124 && (N = I, e.charCodeAt(u + 1) === 42 ? (I = "*", u += 2) : I = n(1)), i.push(I === "*" ? { type: C.Universal, namespace: N } : { type: C.Tag, name: I, namespace: N });
        }
    }
} return D(), u; }
var bu = me(be(), 1);
var oe = me(be(), 1);
var sr = new Map([[C.Universal, 50], [C.Tag, 30], [C.Attribute, 1], [C.Pseudo, 0]]);
function Je(t) { return !sr.has(t.type); }
var Ja = new Map([[V.Exists, 10], [V.Equals, 8], [V.Not, 7], [V.Start, 6], [V.End, 6], [V.Any, 5]]);
function iu(t) { var e = t.map(or); for (var u = 1; u < t.length; u++) {
    var i = e[u];
    if (!(i < 0))
        for (var n = u - 1; n >= 0 && i < e[n]; n--) {
            var s = t[n + 1];
            t[n + 1] = t[n], t[n] = s, e[n + 1] = e[n], e[n] = i;
        }
} }
function or(t) { var e, u; var i = (e = sr.get(t.type)) !== null && e !== void 0 ? e : -1; return t.type === C.Attribute ? (i = (u = Ja.get(t.action)) !== null && u !== void 0 ? u : 4, t.action === V.Equals && t.name === "id" && (i = 9), t.ignoreCase && (i >>= 1)) : t.type === C.Pseudo && (t.data ? t.name === "has" || t.name === "contains" ? i = 0 : Array.isArray(t.data) ? (i = Math.min.apply(Math, __spreadArray([], __read(t.data.map(function (n) { return Math.min.apply(Math, __spreadArray([], __read(n.map(or)), false)); })), false)), i < 0 && (i = 0)) : i = 2 : i = 3), i; }
var We = me(be(), 1), Wa = /[-[\]{}()*+?.,\\^$|#\s]/g;
function fr(t) { return t.replace(Wa, "\\$&"); }
var Xa = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function we(t, e) { return typeof t.ignoreCase == "boolean" ? t.ignoreCase : t.ignoreCase === "quirks" ? !!e.quirksMode : !e.xmlMode && Xa.has(t.name); }
var lr = { equals: function (t, e, u) { var i = u.adapter, n = e.name, s = e.value; return we(e, u) ? (s = s.toLowerCase(), function (h) { var m = i.getAttributeValue(h, n); return m != null && m.length === s.length && m.toLowerCase() === s && t(h); }) : function (h) { return i.getAttributeValue(h, n) === s && t(h); }; }, hyphen: function (t, e, u) { var i = u.adapter, n = e.name, s = e.value, h = s.length; return we(e, u) ? (s = s.toLowerCase(), function (y) { var S = i.getAttributeValue(y, n); return S != null && (S.length === h || S.charAt(h) === "-") && S.substr(0, h).toLowerCase() === s && t(y); }) : function (y) { var S = i.getAttributeValue(y, n); return S != null && (S.length === h || S.charAt(h) === "-") && S.substr(0, h) === s && t(y); }; }, element: function (t, e, u) { var i = u.adapter, n = e.name, s = e.value; if (/\s/.test(s))
        return We.default.falseFunc; var h = new RegExp("(?:^|\\s)".concat(fr(s), "(?:$|\\s)"), we(e, u) ? "i" : ""); return function (y) { var S = i.getAttributeValue(y, n); return S != null && S.length >= s.length && h.test(S) && t(y); }; }, exists: function (t, _b, _c) {
        var e = _b.name;
        var u = _c.adapter;
        return function (i) { return u.hasAttrib(i, e) && t(i); };
    }, start: function (t, e, u) { var i = u.adapter, n = e.name, s = e.value, h = s.length; return h === 0 ? We.default.falseFunc : we(e, u) ? (s = s.toLowerCase(), function (m) { var y = i.getAttributeValue(m, n); return y != null && y.length >= h && y.substr(0, h).toLowerCase() === s && t(m); }) : function (m) { var y; return !!(!((y = i.getAttributeValue(m, n)) === null || y === void 0) && y.startsWith(s)) && t(m); }; }, end: function (t, e, u) { var i = u.adapter, n = e.name, s = e.value, h = -s.length; return h === 0 ? We.default.falseFunc : we(e, u) ? (s = s.toLowerCase(), function (m) { var y; return ((y = i.getAttributeValue(m, n)) === null || y === void 0 ? void 0 : y.substr(h).toLowerCase()) === s && t(m); }) : function (m) { var y; return !!(!((y = i.getAttributeValue(m, n)) === null || y === void 0) && y.endsWith(s)) && t(m); }; }, any: function (t, e, u) { var i = u.adapter, n = e.name, s = e.value; if (s === "")
        return We.default.falseFunc; if (we(e, u)) {
        var h_1 = new RegExp(fr(s), "i");
        return function (y) { var S = i.getAttributeValue(y, n); return S != null && S.length >= s.length && h_1.test(S) && t(y); };
    } return function (h) { var m; return !!(!((m = i.getAttributeValue(h, n)) === null || m === void 0) && m.includes(s)) && t(h); }; }, not: function (t, e, u) { var i = u.adapter, n = e.name, s = e.value; return s === "" ? function (h) { return !!i.getAttributeValue(h, n) && t(h); } : we(e, u) ? (s = s.toLowerCase(), function (h) { var m = i.getAttributeValue(h, n); return (m == null || m.length !== s.length || m.toLowerCase() !== s) && t(h); }) : function (h) { return i.getAttributeValue(h, n) !== s && t(h); }; } };
var Ka = new Set([9, 10, 12, 13, 32]), dr = 48, Za = 57;
function hr(t) { if (t = t.trim().toLowerCase(), t === "even")
    return [2, 0]; if (t === "odd")
    return [2, 1]; var e = 0, u = 0, i = s(), n = h(); if (e < t.length && t.charAt(e) === "n" && (e++, u = i * (n != null ? n : 1), m(), e < t.length ? (i = s(), m(), n = h()) : i = n = 0), n === null || e < t.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(t, "')")); return [u, i * n]; function s() { return t.charAt(e) === "-" ? (e++, -1) : (t.charAt(e) === "+" && e++, 1); } function h() { var y = e, S = 0; for (; e < t.length && t.charCodeAt(e) >= dr && t.charCodeAt(e) <= Za;)
    S = S * 10 + (t.charCodeAt(e) - dr), e++; return e === y ? null : S; } function m() { for (; e < t.length && Ka.has(t.charCodeAt(e));)
    e++; } }
var nu = me(be(), 1);
function pr(t) { var e = t[0], u = t[1] - 1; if (u < 0 && e <= 0)
    return nu.default.falseFunc; if (e === -1)
    return function (s) { return s <= u; }; if (e === 0)
    return function (s) { return s === u; }; if (e === 1)
    return u < 0 ? nu.default.trueFunc : function (s) { return s >= u; }; var i = Math.abs(e), n = (u % i + i) % i; return e > 1 ? function (s) { return s >= u && s % i === n; } : function (s) { return s <= u && s % i === n; }; }
function Le(t) { return pr(hr(t)); }
var K = me(be(), 1);
function ht(t, e) { return function (u) { var i = e.getParent(u); return i != null && e.isTag(i) && t(u); }; }
var Oe = { contains: function (t, e, _b) {
        var u = _b.adapter;
        return function (n) { return t(n) && u.getText(n).includes(e); };
    }, icontains: function (t, e, _b) {
        var u = _b.adapter;
        var i = e.toLowerCase();
        return function (s) { return t(s) && u.getText(s).toLowerCase().includes(i); };
    }, "nth-child": function (t, e, _b) {
        var u = _b.adapter, i = _b.equals;
        var n = Le(e);
        return n === K.default.falseFunc ? K.default.falseFunc : n === K.default.trueFunc ? ht(t, u) : function (h) { var m = u.getSiblings(h), y = 0; for (var S = 0; S < m.length && !i(h, m[S]); S++)
            u.isTag(m[S]) && y++; return n(y) && t(h); };
    }, "nth-last-child": function (t, e, _b) {
        var u = _b.adapter, i = _b.equals;
        var n = Le(e);
        return n === K.default.falseFunc ? K.default.falseFunc : n === K.default.trueFunc ? ht(t, u) : function (h) { var m = u.getSiblings(h), y = 0; for (var S = m.length - 1; S >= 0 && !i(h, m[S]); S--)
            u.isTag(m[S]) && y++; return n(y) && t(h); };
    }, "nth-of-type": function (t, e, _b) {
        var u = _b.adapter, i = _b.equals;
        var n = Le(e);
        return n === K.default.falseFunc ? K.default.falseFunc : n === K.default.trueFunc ? ht(t, u) : function (h) { var m = u.getSiblings(h), y = 0; for (var S = 0; S < m.length; S++) {
            var E = m[S];
            if (i(h, E))
                break;
            u.isTag(E) && u.getName(E) === u.getName(h) && y++;
        } return n(y) && t(h); };
    }, "nth-last-of-type": function (t, e, _b) {
        var u = _b.adapter, i = _b.equals;
        var n = Le(e);
        return n === K.default.falseFunc ? K.default.falseFunc : n === K.default.trueFunc ? ht(t, u) : function (h) { var m = u.getSiblings(h), y = 0; for (var S = m.length - 1; S >= 0; S--) {
            var E = m[S];
            if (i(h, E))
                break;
            u.isTag(E) && u.getName(E) === u.getName(h) && y++;
        } return n(y) && t(h); };
    }, root: function (t, e, _b) {
        var u = _b.adapter;
        return function (i) { var n = u.getParent(i); return (n == null || !u.isTag(n)) && t(i); };
    }, scope: function (t, e, u, i) { var n = u.equals; return !i || i.length === 0 ? Oe.root(t, e, u) : i.length === 1 ? function (s) { return n(i[0], s) && t(s); } : function (s) { return i.includes(s) && t(s); }; }, hover: cu("isHovered"), visited: cu("isVisited"), active: cu("isActive") };
function cu(t) { return function (u, i, _b) {
    var n = _b.adapter;
    var s = n[t];
    return typeof s != "function" ? K.default.falseFunc : function (m) { return s(m) && u(m); };
}; }
var Xe = { empty: function (t, _b) {
        var e = _b.adapter;
        return !e.getChildren(t).some(function (u) { return e.isTag(u) || e.getText(u) !== ""; });
    }, "first-child": function (t, _b) {
        var e = _b.adapter, u = _b.equals;
        if (e.prevElementSibling)
            return e.prevElementSibling(t) == null;
        var i = e.getSiblings(t).find(function (n) { return e.isTag(n); });
        return i != null && u(t, i);
    }, "last-child": function (t, _b) {
        var e = _b.adapter, u = _b.equals;
        var i = e.getSiblings(t);
        for (var n = i.length - 1; n >= 0; n--) {
            if (u(t, i[n]))
                return !0;
            if (e.isTag(i[n]))
                break;
        }
        return !1;
    }, "first-of-type": function (t, _b) {
        var e = _b.adapter, u = _b.equals;
        var i = e.getSiblings(t), n = e.getName(t);
        for (var s = 0; s < i.length; s++) {
            var h = i[s];
            if (u(t, h))
                return !0;
            if (e.isTag(h) && e.getName(h) === n)
                break;
        }
        return !1;
    }, "last-of-type": function (t, _b) {
        var e = _b.adapter, u = _b.equals;
        var i = e.getSiblings(t), n = e.getName(t);
        for (var s = i.length - 1; s >= 0; s--) {
            var h = i[s];
            if (u(t, h))
                return !0;
            if (e.isTag(h) && e.getName(h) === n)
                break;
        }
        return !1;
    }, "only-of-type": function (t, _b) {
        var e = _b.adapter, u = _b.equals;
        var i = e.getName(t);
        return e.getSiblings(t).every(function (n) { return u(t, n) || !e.isTag(n) || e.getName(n) !== i; });
    }, "only-child": function (t, _b) {
        var e = _b.adapter, u = _b.equals;
        return e.getSiblings(t).every(function (i) { return u(t, i) || !e.isTag(i); });
    } };
function su(t, e, u, i) { if (u === null) {
    if (t.length > i)
        throw new Error("Pseudo-class :".concat(e, " requires an argument"));
}
else if (t.length === i)
    throw new Error("Pseudo-class :".concat(e, " doesn't have any arguments")); }
var pt = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var te = me(be(), 1);
var lu = {};
function du(t, e) { return t === te.default.falseFunc ? te.default.falseFunc : function (u) { return e.isTag(u) && t(u); }; }
function hu(t, e) { var u = e.getSiblings(t); if (u.length <= 1)
    return []; var i = u.indexOf(t); return i < 0 || i === u.length - 1 ? [] : u.slice(i + 1).filter(e.isTag); }
function fu(t) { return { xmlMode: !!t.xmlMode, lowerCaseAttributeNames: !!t.lowerCaseAttributeNames, lowerCaseTags: !!t.lowerCaseTags, quirksMode: !!t.quirksMode, cacheResults: !!t.cacheResults, pseudos: t.pseudos, adapter: t.adapter, equals: t.equals }; }
var ou = function (t, e, u, i, n) { var s = n(e, fu(u), i); return s === te.default.trueFunc ? t : s === te.default.falseFunc ? te.default.falseFunc : function (h) { return s(h) && t(h); }; }, bt = { is: ou, matches: ou, where: ou, not: function (t, e, u, i, n) { var s = n(e, fu(u), i); return s === te.default.falseFunc ? t : s === te.default.trueFunc ? te.default.falseFunc : function (h) { return !s(h) && t(h); }; }, has: function (t, e, u, i, n) { var s = u.adapter, h = fu(u); h.relativeSelector = !0; var m = e.some(function (E) { return E.some(Je); }) ? [lu] : void 0, y = n(e, h, m); if (y === te.default.falseFunc)
        return te.default.falseFunc; var S = du(y, s); if (m && y !== te.default.trueFunc) {
        var _b = y.shouldTestNextSiblings, E_1 = _b === void 0 ? !1 : _b;
        return function (D) { if (!t(D))
            return !1; m[0] = D; var q = s.getChildren(D), N = E_1 ? __spreadArray(__spreadArray([], __read(q), false), __read(hu(D, s)), false) : q; return s.existsOne(S, N); };
    } return function (E) { return t(E) && s.existsOne(S, s.getChildren(E)); }; } };
function br(t, e, u, i, n) { var s; var h = e.name, m = e.data; if (Array.isArray(m)) {
    if (!(h in bt))
        throw new Error("Unknown pseudo-class :".concat(h, "(").concat(m, ")"));
    return bt[h](t, m, u, i, n);
} var y = (s = u.pseudos) === null || s === void 0 ? void 0 : s[h], S = typeof y == "string" ? y : pt[h]; if (typeof S == "string") {
    if (m != null)
        throw new Error("Pseudo ".concat(h, " doesn't have any arguments"));
    var E = pe(S);
    return bt.is(t, E, u, i, n);
} if (typeof y == "function")
    return su(y, h, m, 1), function (E) { return y(E, m) && t(E); }; if (h in Oe)
    return Oe[h](t, m, u, i); if (h in Xe) {
    var E_2 = Xe[h];
    return su(E_2, h, m, 2), function (D) { return E_2(D, u, m) && t(D); };
} throw new Error("Unknown pseudo-class :".concat(h)); }
function pu(t, e) { var u = e.getParent(t); return u && e.isTag(u) ? u : null; }
function gr(t, e, u, i, n) { var s = u.adapter, h = u.equals; switch (e.type) {
    case C.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case C.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case C.Attribute: {
        if (e.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!u.xmlMode || u.lowerCaseAttributeNames) && (e.name = e.name.toLowerCase()), lr[e.action](t, e, u);
    }
    case C.Pseudo: return br(t, e, u, i, n);
    case C.Tag: {
        if (e.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var m_1 = e.name;
        return (!u.xmlMode || u.lowerCaseTags) && (m_1 = m_1.toLowerCase()), function (S) { return s.getName(S) === m_1 && t(S); };
    }
    case C.Descendant: {
        if (u.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (S) { var E = S; for (; E = pu(E, s);)
                if (t(E))
                    return !0; return !1; };
        var m_2 = new WeakSet;
        return function (S) { var E = S; for (; E = pu(E, s);)
            if (!m_2.has(E)) {
                if (s.isTag(E) && t(E))
                    return !0;
                m_2.add(E);
            } return !1; };
    }
    case "_flexibleDescendant": return function (y) { var S = y; do
        if (t(S))
            return !0;
    while (S = pu(S, s)); return !1; };
    case C.Parent: return function (y) { return s.getChildren(y).some(function (S) { return s.isTag(S) && t(S); }); };
    case C.Child: return function (y) { var S = s.getParent(y); return S != null && s.isTag(S) && t(S); };
    case C.Sibling: return function (y) { var S = s.getSiblings(y); for (var E = 0; E < S.length; E++) {
        var D = S[E];
        if (h(y, D))
            break;
        if (s.isTag(D) && t(D))
            return !0;
    } return !1; };
    case C.Adjacent: return s.prevElementSibling ? function (y) { var S = s.prevElementSibling(y); return S != null && t(S); } : function (y) { var S = s.getSiblings(y), E; for (var D = 0; D < S.length; D++) {
        var q = S[D];
        if (h(y, q))
            break;
        s.isTag(q) && (E = q);
    } return !!E && t(E); };
    case C.Universal: {
        if (e.namespace != null && e.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return t;
    }
} }
function mr(t, e, u) { var i = gt(t, e, u); return du(i, e.adapter); }
function gt(t, e, u) { var i = typeof t == "string" ? pe(t) : t; return mt(i, e, u); }
function xr(t) { return t.type === C.Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function (e) { return e.some(xr); })); }
var Qa = { type: C.Descendant }, Ya = { type: "_flexibleDescendant" }, ei = { type: C.Pseudo, name: "scope", data: null };
function ti(t, _b, u) {
    var e_6, _c;
    var e = _b.adapter;
    var i = !!(u != null && u.every(function (n) { var s = e.isTag(n) && e.getParent(n); return n === lu || s && e.isTag(s); }));
    try {
        for (var t_1 = __values(t), t_1_1 = t_1.next(); !t_1_1.done; t_1_1 = t_1.next()) {
            var n = t_1_1.value;
            if (!(n.length > 0 && Je(n[0]) && n[0].type !== C.Descendant))
                if (i && !n.some(xr))
                    n.unshift(Qa);
                else
                    continue;
            n.unshift(ei);
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
function mt(t, e, u) { var i; t.forEach(iu), u = (i = e.context) !== null && i !== void 0 ? i : u; var n = Array.isArray(u), s = u && (Array.isArray(u) ? u : [u]); if (e.relativeSelector !== !1)
    ti(t, e, s);
else if (t.some(function (y) { return y.length > 0 && Je(y[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var h = !1, m = t.map(function (y) { if (y.length >= 2) {
    var _b = __read(y, 2), S = _b[0], E = _b[1];
    S.type !== C.Pseudo || S.name !== "scope" || (n && E.type === C.Descendant ? y[1] = Ya : (E.type === C.Adjacent || E.type === C.Sibling) && (h = !0));
} return ui(y, e, s); }).reduce(ri, oe.default.falseFunc); return m.shouldTestNextSiblings = h, m; }
function ui(t, e, u) { var i; return t.reduce(function (n, s) { return n === oe.default.falseFunc ? oe.default.falseFunc : gr(n, s, e, u, mt); }, (i = e.rootFunc) !== null && i !== void 0 ? i : oe.default.trueFunc); }
function ri(t, e) { return e === oe.default.falseFunc || t === oe.default.trueFunc ? t : t === oe.default.falseFunc || e === oe.default.trueFunc ? e : function (i) { return t(i) || e(i); }; }
var vr = function (t, e) { return t === e; }, ai = { adapter: ae, equals: vr };
function wr(t) { var e, u, i, n; var s = t != null ? t : ai; return (e = s.adapter) !== null && e !== void 0 || (s.adapter = ae), (u = s.equals) !== null && u !== void 0 || (s.equals = (n = (i = s.adapter) === null || i === void 0 ? void 0 : i.equals) !== null && n !== void 0 ? n : vr), s; }
function gu(t) { return function (u, i, n) { var s = wr(i); return t(u, s, n); }; }
var C0 = gu(mr), _0 = gu(gt), xt = gu(mt);
function yr(t) { return function (u, i, n) { var s = wr(n); typeof u != "function" && (u = gt(u, s, i)); var h = vt(i, s.adapter, u.shouldTestNextSiblings); return t(u, h, s); }; }
function vt(t, e, u) {
    if (u === void 0) { u = !1; }
    return u && (t = ii(t, e)), Array.isArray(t) ? e.removeSubsets(t) : e.getChildren(t);
}
function ii(t, e) { var u = Array.isArray(t) ? t.slice(0) : [t], i = u.length; for (var n = 0; n < i; n++) {
    var s = hu(u[n], e);
    u.push.apply(u, __spreadArray([], __read(s), false));
} return u; }
var D0 = yr(function (t, e, u) { return t === bu.default.falseFunc || !e || e.length === 0 ? [] : u.adapter.findAll(t, e); }), I0 = yr(function (t, e, u) { return t === bu.default.falseFunc || !e || e.length === 0 ? null : u.adapter.findOne(t, e); });
var yt = me(be(), 1);
var ni = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function Ue(t) { return t.type !== "pseudo" ? !1 : ni.has(t.name) ? !0 : t.name === "not" && Array.isArray(t.data) ? t.data.some(function (e) { return e.some(Ue); }) : !1; }
function Sr(t, e, u) { var i = e != null ? parseInt(e, 10) : NaN; switch (t) {
    case "first": return 1;
    case "nth":
    case "eq": return isFinite(i) ? i >= 0 ? i + 1 : 1 / 0 : 0;
    case "lt": return isFinite(i) ? i >= 0 ? Math.min(i, u) : 1 / 0 : 0;
    case "gt": return isFinite(i) ? 1 / 0 : 0;
    case "odd": return 2 * u;
    case "even": return 2 * u - 1;
    case "last":
    case "not": return 1 / 0;
} }
function Ar(t) { for (; t.parent;)
    t = t.parent; return t; }
function wt(t) {
    var e_7, _b;
    var e = [], u = [];
    try {
        for (var t_2 = __values(t), t_2_1 = t_2.next(); !t_2_1.done; t_2_1 = t_2.next()) {
            var i = t_2_1.value;
            i.some(Ue) ? e.push(i) : u.push(i);
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (t_2_1 && !t_2_1.done && (_b = t_2.return)) _b.call(t_2);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return [u, e];
}
var ci = { type: C.Universal, namespace: null }, si = { type: C.Pseudo, name: "scope", data: null };
function vu(t, e, u) {
    if (u === void 0) { u = {}; }
    return oi([t], e, u);
}
function oi(t, e, u) {
    if (u === void 0) { u = {}; }
    if (typeof e == "function")
        return t.some(e);
    var _b = __read(wt(pe(e)), 2), i = _b[0], n = _b[1];
    return i.length > 0 && t.some(xt(i, u)) || n.some(function (s) { return kr(s, t, u).length > 0; });
}
function fi(t, e, u, i) { var n = typeof u == "string" ? parseInt(u, 10) : NaN; switch (t) {
    case "first":
    case "lt": return e;
    case "last": return e.length > 0 ? [e[e.length - 1]] : e;
    case "nth":
    case "eq": return isFinite(n) && Math.abs(n) < e.length ? [n < 0 ? e[e.length + n] : e[n]] : [];
    case "gt": return isFinite(n) ? e.slice(n + 1) : [];
    case "even": return e.filter(function (s, h) { return h % 2 === 0; });
    case "odd": return e.filter(function (s, h) { return h % 2 === 1; });
    case "not": {
        var s_1 = new Set(li(u, e, i));
        return e.filter(function (h) { return !s_1.has(h); });
    }
} }
function li(t, e, u) { if (e.length === 0)
    return []; var _b = __read(wt(t), 2), i = _b[0], n = _b[1], s; if (i.length) {
    var h = xu(e, i, u);
    if (n.length === 0)
        return h;
    h.length && (s = new Set(h));
} for (var h = 0; h < n.length && (s == null ? void 0 : s.size) !== e.length; h++) {
    var m = n[h];
    if ((s ? e.filter(function (E) { return P(E) && !s.has(E); }) : e).length === 0)
        break;
    var S = kr(m, e, u);
    if (S.length)
        if (s)
            S.forEach(function (E) { return s.add(E); });
        else {
            if (h === n.length - 1)
                return S;
            s = new Set(S);
        }
} return typeof s != "undefined" ? s.size === e.length ? e : e.filter(function (h) { return s.has(h); }) : []; }
function kr(t, e, u) { var i; if (t.some(ve)) {
    var n = (i = u.root) !== null && i !== void 0 ? i : Ar(e[0]), s = ge(ue({}, u), { context: e, relativeSelector: !1 });
    return t.push(si), St(n, t, s, !0, e.length);
} return St(e, t, u, !1, e.length); }
function wu(t, e, u, i) {
    if (u === void 0) { u = {}; }
    if (i === void 0) { i = 1 / 0; }
    if (typeof t == "function")
        return Tr(e, t);
    var _b = __read(wt(pe(t)), 2), n = _b[0], s = _b[1], h = s.map(function (m) { return St(e, m, u, !0, i); });
    return n.length && h.push(mu(e, n, u, i)), h.length === 0 ? [] : h.length === 1 ? h[0] : uu(h.reduce(function (m, y) { return __spreadArray(__spreadArray([], __read(m), false), __read(y), false); }));
}
function St(t, e, u, i, n) { var s = e.findIndex(Ue), h = e.slice(0, s), m = e[s], y = e.length - 1 === s ? n : 1 / 0, S = Sr(m.name, m.data, y); if (S === 0)
    return []; var D = (h.length === 0 && !Array.isArray(t) ? ct(t).filter(P) : h.length === 0 ? (Array.isArray(t) ? t : [t]).filter(P) : i || h.some(ve) ? mu(t, [h], u, S) : xu(t, [h], u)).slice(0, S), q = fi(m.name, D, m.data, u); if (q.length === 0 || e.length === s + 1)
    return q; var N = e.slice(s + 1), I = N.some(ve); if (I) {
    if (ve(N[0])) {
        var U = N[0].type;
        (U === C.Sibling || U === C.Adjacent) && (q = vt(q, ae, !0)), N.unshift(ci);
    }
    u = ge(ue({}, u), { relativeSelector: !1, rootFunc: function (U) { return q.includes(U); } });
}
else
    u.rootFunc && u.rootFunc !== yt.trueFunc && (u = ge(ue({}, u), { rootFunc: yt.trueFunc })); return N.some(Ue) ? St(q, N, u, !1, n) : I ? mu(q, [N], u, n) : xu(q, [N], u); }
function mu(t, e, u, i) { var n = xt(e, u, t); return Tr(t, n, i); }
function Tr(t, e, u) {
    if (u === void 0) { u = 1 / 0; }
    var i = vt(t, ae, e.shouldTestNextSiblings);
    return ot(function (n) { return P(n) && e(n); }, i, !0, u);
}
function xu(t, e, u) { var i = (Array.isArray(t) ? t : [t]).filter(P); if (i.length === 0)
    return i; var n = xt(e, u); return n === yt.trueFunc ? i : i.filter(n); }
function Er(t) { var e = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(t) || []; return { scheme: e[1], auth: e[2], path: e[3] || "", query: e[4], frag: e[5] }; }
function yu(t) { var e = [], u = t.split("/"); for (var i = 0; i < u.length; i++) {
    var n = u[i];
    n === ".." ? (e.length > 1 && e.pop(), i === u.length - 1 && e.push("")) : n === "." ? i === u.length - 1 && e.push("") : e.push(n);
} return e.join("/"); }
function kt(t, e) { e = e == null ? "" : String(e).trim(); var u = Er(e); if (u.scheme || !t)
    return e; var i = Er(String(t)); if (!i.scheme)
    return e; var n = i.auth, s, h; if (u.auth !== void 0)
    n = u.auth, s = yu(u.path), h = u.query;
else if (!u.path)
    s = i.path, h = u.query !== void 0 ? u.query : i.query;
else {
    if (u.path.charAt(0) === "/")
        s = yu(u.path);
    else {
        var m = n !== void 0 && !i.path ? "/" : i.path.slice(0, i.path.lastIndexOf("/") + 1);
        s = yu(m + u.path);
    }
    h = u.query;
} return n !== void 0 && s.charAt(0) !== "/" && (s = "/" + s), i.scheme + ":" + (n !== void 0 ? "//" + n : "") + s + (h !== void 0 ? "?" + h : "") + (u.frag !== void 0 ? "#" + u.frag : ""); }
var At = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function qr(t) { if (typeof btoa == "function")
    return btoa(t); var e = ""; for (var u = 0; u < t.length; u += 3) {
    var i = t.charCodeAt(u), n = t.charCodeAt(u + 1), s = t.charCodeAt(u + 2), h = i << 16 | (n || 0) << 8 | (s || 0);
    e += At[h >> 18 & 63] + At[h >> 12 & 63] + (u + 1 < t.length ? At[h >> 6 & 63] : "=") + (u + 2 < t.length ? At[h & 63] : "=");
} return e; }
var di = function (t, e, u) { return wu(t, e, u); }, Dr = function (t, e, u) { return wu(t, e, u, 1)[0] || null; }, Ir = /[\s ]+/g, Nr = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), hi = { containsOwn: function (t, e) { return Au(t).toLowerCase().includes(String(e).toLowerCase()); }, matches: function (t, e) { return Cr(e).test(Su(t)); }, matchesOwn: function (t, e) { return Cr(e).test(Au(t)); }, containsData: function (t, e) { return de(t).includes(e); }, "contains-ci": function (t, e) { return Su(t).toLowerCase().includes(String(e).toLowerCase()); } };
function Cr(t) { try {
    return new RegExp(t);
}
catch (e) {
    return /$^/;
} }
var Tt = { pseudos: hi, xmlMode: !1, lowerCaseTags: !0 };
function Et(t) { return String(t).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function Su(t) { if (!t)
    return ""; if (t.type === "text")
    return t.data; var e = "", u = function (i) {
    var e_8, _b;
    try {
        for (var _c = __values(i.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var n = _d.value;
            n.type === "text" ? e += n.data : (n.type === "tag" || n.type === "script" || n.type === "style") && (n.name === "br" ? e += " " : n.type === "tag" && (Nr.has(n.name) && (e += " "), u(n), Nr.has(n.name) && (e += " ")));
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_8) throw e_8.error; }
    }
}; return u(t), e.replace(Ir, " ").trim(); }
function Au(t) {
    var e_9, _b;
    var e = "";
    try {
        for (var _c = __values(t.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var u = _d.value;
            u.type === "text" && (e += u.data);
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return e.replace(Ir, " ").trim();
}
function Lr(t, e) { if (!e)
    return ""; try {
    return kt(t, e);
}
catch (u) {
    return t ? "" : e;
} }
var ye = (function () {
    function t(e, u) {
        this.node = e, this.doc = u;
    }
    Object.defineProperty(t.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    t.prototype.select = function (e) { return ie.of(di(Et(e), this.node, Tt), this.doc); };
    t.prototype.selectFirst = function (e) { var u = Dr(Et(e), this.node, Tt); return u ? new t(u, this.doc) : null; };
    t.prototype.is = function (e) { return vu(this.node, Et(e), Tt); };
    t.prototype.text = function () { return Su(this.node); };
    t.prototype.ownText = function () { return Au(this.node); };
    t.prototype.wholeText = function () { return de(this.node); };
    t.prototype.data = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return e.data; }).join(""); };
    t.prototype.html = function () { return (this.node.children || []).map(function (e) { return De(e, { decodeEntities: !1 }); }).join("").trim(); };
    t.prototype.outerHtml = function () { return De(this.node, { decodeEntities: !1 }); };
    t.prototype.toString = function () { return this.outerHtml(); };
    t.prototype.tagName = function () { return this.node.name || ""; };
    t.prototype.nodeName = function () { return this.node.name || "#" + this.node.type; };
    t.prototype.id = function () { return this.attr("id"); };
    t.prototype.className = function () { return this.attr("class"); };
    t.prototype.classNames = function () { return this.className().split(/\s+/).filter(Boolean); };
    t.prototype.hasClass = function (e) { return this.classNames().includes(e); };
    t.prototype.attr = function (e, u) { if (u !== void 0)
        return this.node.attribs && (this.node.attribs[e] = String(u)), this; if (!this.node.attribs)
        return ""; if (e.startsWith("abs:"))
        return Lr(this.baseUri, this.node.attribs[e.slice(4)] || ""); var i = this.node.attribs[e]; return i == null ? "" : i; };
    t.prototype.absUrl = function (e) { return this.attr("abs:" + e); };
    t.prototype.hasAttr = function (e) { return !!(this.node.attribs && (e.startsWith("abs:") ? e.slice(4) : e) in this.node.attribs); };
    t.prototype.removeAttr = function (e) { return this.node.attribs && delete this.node.attribs[e], this; };
    t.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    t.prototype.dataset = function () {
        var e_10, _b;
        var e = {};
        try {
            for (var _c = __values(Object.entries(this.node.attribs || {})), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _f = __read(_d.value, 2), u = _f[0], i = _f[1];
                u.startsWith("data-") && (e[u.slice(5)] = i);
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
    t.prototype.parents = function () { var e = [], u = this.node.parent; for (; u && u.type !== "root";)
        e.push(u), u = u.parent; return ie.of(e, this.doc); };
    t.prototype.closest = function (e) { var u = this.node; for (; u && u.type !== "root";) {
        if (u.type === "tag" && vu(u, Et(e), Tt))
            return new t(u, this.doc);
        u = u.parent;
    } return null; };
    t.prototype.children = function () { return ie.of((this.node.children || []).filter(P), this.doc); };
    t.prototype.child = function (e) { var u = (this.node.children || []).filter(P)[e]; return u ? new t(u, this.doc) : null; };
    t.prototype.childrenSize = function () { return (this.node.children || []).filter(P).length; };
    t.prototype.nextElementSibling = function () { var e = Qt(this.node); return e ? new t(e, this.doc) : null; };
    t.prototype.previousElementSibling = function () { var e = Yt(this.node); return e ? new t(e, this.doc) : null; };
    t.prototype.siblingElements = function () {
        var _this = this;
        return ie.of(st(this.node).filter(function (e) { return e !== _this.node && P(e); }), this.doc);
    };
    t.prototype.elementSiblingIndex = function () { return st(this.node).filter(P).indexOf(this.node); };
    t.prototype.getElementsByTag = function (e) { return this.select(e); };
    t.prototype.getElementsByClass = function (e) { return this.select("." + e); };
    t.prototype.getElementById = function (e) { return this.selectFirst("#" + e); };
    t.prototype.remove = function () { return se(this.node), this; };
    t.prototype.empty = function () { return this.node.children = [], this; };
    t.prototype.textNodes = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return ({ text: function () { return e.data; }, toString: function () { return e.data; } }); }); };
    t.prototype.title = function () { var e = this.selectFirst("title"); return e ? e.text() : ""; };
    t.prototype.body = function () { return this.selectFirst("body") || this; };
    t.prototype.head = function () { return this.selectFirst("head") || this; };
    t.prototype.location = function () { return this.baseUri; };
    return t;
}()), Tu = Object.create(Array.prototype), ie = { of: ku, prototype: Tu };
function ku(t, e) {
    var e_11, _b;
    var u = [];
    try {
        for (var _c = __values(t || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var i = _d.value;
            u.push(i instanceof ye ? i : new ye(i, e));
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return Object.setPrototypeOf(u, Tu), u;
}
var _r = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (t) { return this[t] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (t) { return ie.of(this[t] ? [this[t]] : [], null); }, text: function () { return this.map(function (t) { return t.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (t) { return t.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (t) { return t.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (t) { return t.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (t, e) {
        var e_12, _b;
        if (e !== void 0)
            return this.forEach(function (u) { return u.attr(t, e); }), this;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var u = _d.value;
                if (u.hasAttr(t))
                    return u.attr(t);
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
        var e = ku([]), u = new Set;
        try {
            for (var _d = __values(this), _f = _d.next(); !_f.done; _f = _d.next()) {
                var i = _f.value;
                try {
                    for (var _g = (e_14 = void 0, __values(i.select(t))), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var n = _h.value;
                        u.has(n.node) || (u.add(n.node), e.push(n));
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
                var u = e.selectFirst(t);
                if (u)
                    return u;
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
    }, is: function (t) { return this.some(function (e) { return e.is(t); }); }, not: function (t) { return ie.of(this.filter(function (e) { return !e.is(t); }), null); }, parents: function () {
        var e_16, _b;
        var t = ku([]);
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
    }, next: function () { return ie.of(this.map(function (t) { return t.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return ie.of(this.map(function (t) { return t.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (t) { return t.remove(); }), this; }, empty: function () { return this.forEach(function (t) { return t.empty(); }), this; }, removeAttr: function (t) { return this.forEach(function (e) { return e.removeAttr(t); }), this; } };
try {
    for (var _c = __values(Object.keys(_r)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var t = _d.value;
        Object.defineProperty(Tu, t, { value: _r[t], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
function qt(t, e) { var u = rr(String(t == null ? "" : t), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), i = new ye(u, null); i.doc = i, i.__base = e || ""; var n = Dr("base[href]", u); return n && n.attribs.href && (i.__base = Lr(i.__base, n.attribs.href)), i; }
function Or(t, e) { var u = new Set((e || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), i = qt(t), n = function (s) {
    var e_17, _b, e_18, _c;
    try {
        for (var _d = __values((s.children || []).slice()), _f = _d.next(); !_f.done; _f = _d.next()) {
            var h = _f.value;
            if (h.type === "script" || h.type === "style" || h.type === "comment") {
                se(h);
                continue;
            }
            if (h.type === "tag" && (n(h), !u.has(h.name))) {
                var m = (h.children || []).slice();
                try {
                    for (var m_3 = (e_18 = void 0, __values(m)), m_3_1 = m_3.next(); !m_3_1.done; m_3_1 = m_3.next()) {
                        var y = m_3_1.value;
                        eu(h, y);
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (m_3_1 && !m_3_1.done && (_c = m_3.return)) _c.call(m_3);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
                se(h);
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
}; return n(i.node), De(i.node.children, { decodeEntities: !1 }); }
var Ke = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function pi(t) { if (typeof Buffer != "undefined")
    return Buffer.from(t).toString("base64"); var e = ""; for (var u = 0; u < t.length; u++)
    e += String.fromCharCode(t[u]); return qr(e); }
function Ur(t) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(t) : Uint8Array.from(unescape(encodeURIComponent(t)), function (e) { return e.charCodeAt(0); }); }
function bi(t) { var e = ""; for (var u = 0; u < t.length; u++) {
    var i = t.charCodeAt(u);
    if (i < 128) {
        e += t[u];
        continue;
    }
    if (i === 128) {
        e += "€";
        continue;
    }
    var n = t.charCodeAt(u + 1);
    i >= 129 && i <= 254 && n >= 64 && n <= 254 && n !== 127 ? (e += __GBK_TABLE[(i - 129) * 190 + (n - 64) - (n > 127 ? 1 : 0)], u++) : e += "�";
} return e; }
var Eu = (function () {
    function Eu(e, u) {
        this.status = e.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = e.statusText || String(this.status), this.url = e.url || u.url, this.headers = e.headers || {}, this._raw = e, this.request = { url: u.url, headers: u.headers || {} };
    }
    Eu.prototype.header = function (e) { var u = Object.keys(this.headers).find(function (i) { return i.toLowerCase() === String(e).toLowerCase(); }); return u ? this.headers[u] : ""; };
    Eu.prototype.text = function (e) { if (e && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(e).toLowerCase()).decode(this._raw.bytes);
        }
        catch (i) { } var u = this._raw.text == null ? "" : String(this._raw.text); return e || (e = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), e && /^(gbk|gb2312|gb18030)$/i.test(String(e)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(u) && !/[^\x00-\xff]/.test(u) ? bi(u) : u; };
    Eu.prototype.string = function (e) { return this.text(e); };
    Eu.prototype.html = function (e) { return qt(this.text(e), this.url); };
    Eu.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (e) {
        return null;
    } };
    Eu.prototype.base64 = function () { return pi(this._raw.bytes || Ur(this.text())); };
    Eu.prototype.blob = function () { var e = this; return { size: (this._raw.bytes || Ur(this.text())).length, type: this.header("content-type"), base64: function () { return e.base64(); } }; };
    return Eu;
}());
function gi(t) {
    var e_19, _b;
    var e = {};
    if (!t)
        return e;
    if (typeof t.forEach == "function" && !Array.isArray(t) && typeof t.entries == "function")
        return t.forEach(function (u, i) { e[i] = u; }), e;
    try {
        for (var _c = __values(Object.keys(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var u = _d.value;
            e[u] = String(t[u]);
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
function Mr(t, e) { var u = function (h) { return ({ getItem: function (m) { var y = t.storageGet(h + m); return y == null ? null : y; }, setItem: function (m, y) { return t.storageSet(h + m, y == null ? null : String(y)); }, removeItem: function (m) { return t.storageSet(h + m, null); }, clear: function () { return t.storageClear && t.storageClear(h); } }); }, i = "__cookie__", n = {}; n.Response = { success: function (h, m) { return ({ code: 0, data: h === void 0 ? null : h, data2: m === void 0 ? null : m }); }, error: function (h) { return ({ code: 1, data: h == null ? "" : String(h) }); } }, n.fetch = function (m, y) {
    return __awaiter(this, void 0, void 0, function () { var S, U, E, D, q, U, N, I, U_1; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                y = y || {};
                S = String(m);
                if (y.queries) {
                    U = Object.entries(y.queries).map(function (_b) {
                        var _c = __read(_b, 2), W = _c[0], Z = _c[1];
                        return encodeURIComponent(W) + "=" + encodeURIComponent(Z);
                    }).join("&");
                    U && (S += (S.includes("?") ? "&" : "?") + U);
                }
                E = Object.assign({ "User-Agent": Ke }, gi(y.headers)), D = t.storageGet(i);
                D && !Object.keys(E).some(function (U) { return U.toLowerCase() === "cookie"; }) && (E.Cookie = D);
                q = y.body;
                if (q != null && typeof q == "object") {
                    U = Object.keys(E).find(function (W) { return W.toLowerCase() === "content-type"; });
                    U && /json/i.test(E[U]) ? q = JSON.stringify(q) : (q = Object.entries(q).map(function (_b) {
                        var _c = __read(_b, 2), W = _c[0], Z = _c[1];
                        return encodeURIComponent(W) + "=" + encodeURIComponent(Z);
                    }).join("&"), U || (E["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                N = { url: S, method: (y.method || (q != null ? "POST" : "GET")).toUpperCase(), headers: E, body: q, timeout: y.timeout };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4, t.request(N)];
            case 2:
                I = _b.sent();
                return [3, 4];
            case 3:
                U_1 = _b.sent();
                I = { status: 0, url: S, headers: {}, text: "", error: String(U_1 && U_1.message || U_1) };
                return [3, 4];
            case 4: return [2, new Eu(I, N)];
        }
    }); });
}, n.Http = { get: function (h) { return Pr(n, "GET", h); }, post: function (h) { return Pr(n, "POST", h); } }, n.Html = { parse: function (h, m) { return qt(h, m || ""); }, clean: function (h, m) { return Or(h, m); } }, n.localStorage = u("ls:"), n.cacheStorage = u("cs:"), n.localConfig = { getItem: function (h) { return t.config(h); } }, n.localCookie = { setCookie: function (h) { t.storageSet(i, String(h).split(";")[0]); }, getCookie: function () { return t.storageGet(i) || ""; } }, n.sleep = function (h) { return new Promise(function (m) { return typeof setTimeout == "function" ? setTimeout(m, Math.min(Number(h) || 0, 1e4)) : m(); }); }; var s = function () {
    var h = [];
    for (var _b = 0; _b < arguments.length; _b++) {
        h[_b] = arguments[_b];
    }
    try {
        t.log && t.log(h.map(function (m) { return typeof m == "string" ? m : JSON.stringify(m); }).join(" "));
    }
    catch (m) { }
}; return n.Log = { log: s }, n.console = { log: s, error: s, warn: s, info: s }, n.Console = n.console, n.log = s, n.UserAgent = { system: function () { return Ke; }, chrome: function () { return Ke; }, android: function () { return Ke; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, n.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (t.name || "host") + ")"); } }, n.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, n.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, n.Elements = ie, n.Element = ye, n.__meta = e, n; }
function Pr(t, e, u) { var i = { method: e, url: u, headers: {}, body: void 0, queries: void 0 }, n = { headers: function (s) { return Object.assign(i.headers, s || {}), n; }, header: function (s, h) { return i.headers[s] = h, n; }, params: function (s) { return i.queries = s, n; }, queries: function (s) { return i.queries = s, n; }, body: function (s) { return i.body = s, n; }, html: function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, t.fetch(i.url, i)];
                case 1: return [2, (_b.sent()).html(s)];
            }
        }); });
    }, string: function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, t.fetch(i.url, i)];
                case 1: return [2, (_b.sent()).text(s)];
            }
        }); });
    }, text: function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, t.fetch(i.url, i)];
                case 1: return [2, (_b.sent()).text(s)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, t.fetch(i.url, i)];
                case 1: return [2, (_b.sent()).json()];
            }
        }); });
    } }; return n; }
function Se(t, e) { if (!e)
    return ""; if (e = String(e).trim(), /^data:|^blob:/.test(e))
    return e; if (e.startsWith("//"))
    return "https:" + e; if (typeof __abs == "function")
    return __abs(t, e); try {
    return kt(t, e);
}
catch (u) {
    return e;
} }
var F = function (t) { return t == null ? "" : String(t); }, mi = function (t) { return t.filter(function (e, u) { return e && t.indexOf(e) === u; }); }, Nt = (function () {
    function class_1(e) {
        var u = e.meta, i = e.scripts, n = e.host;
        this.meta = u, this.host = n, this.env = e.env || Mr(n, u), this.scripts = i, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return F(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.has = function (e) { return !!this.scripts[e]; };
    class_1.prototype.run = function (e) {
        var u = [];
        for (var _b = 1; _b < arguments.length; _b++) {
            u[_b - 1] = arguments[_b];
        }
        return __awaiter(this, void 0, void 0, function () {
            var i, n, s, h;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        i = this.scripts[e];
                        if (!i)
                            throw new Error("script " + e + " missing");
                        n = function (m) { var y = _this.host.config(m); return y == null ? (_this.meta.configDefaults || {})[m] : y; };
                        return [4, i(this.env, n)];
                    case 1:
                        s = _c.sent();
                        if (typeof s != "function")
                            throw new Error(e + ": execute() not defined");
                        return [4, s.apply(void 0, __spreadArray([], __read(u.map(F)), false))];
                    case 2:
                        h = _c.sent();
                        if (!h)
                            throw new Error(e + ": empty result");
                        if (h.code !== 0)
                            throw new Error(e + ": " + F(h.data || "error"));
                        return [2, h];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (e) { return F(e).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var e, _b, u_1, u_2; return __generator(this, function (_c) {
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
                    u_1 = _c.sent();
                    this.host.log && this.host.log("home: " + u_1.message);
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
                    u_2 = _c.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = e.filter(function (u) { return u && u.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (e, u, i) {
        return __awaiter(this, void 0, void 0, function () {
            var n, s, h, m, y;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        n = e + "|" + u;
                        i = Math.max(1, i | 0);
                        s = i === 1 ? "" : this.tokens[n + "|" + i];
                        if (i > 1 && s == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(e, u, s)];
                    case 1:
                        h = _b.sent(), m = F(h.data2);
                        m && (this.tokens[n + "|" + (i + 1)] = m);
                        y = (h.data || []).filter(Boolean).map(function (S) { return ({ name: F(S.name).trim(), link: Se(S.host || _this.base + "/", S.link), cover: Se(S.host || _this.base + "/", S.cover), description: F(S.description), tag: F(S.tag) }); }).filter(function (S) { return S.name && S.link; });
                        return [2, { items: y, hasNext: !!m && y.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _b.sent();
                    return [2, u[0] ? this.list(this.scriptFile(u[0].script), F(u[0].input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.latest = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u, i; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _b.sent(), i = u[1] || u[0];
                    return [2, i ? this.list(this.scriptFile(i.script), F(i.input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.search = function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, this.has("search") ? this.list("search", e, u) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u, i; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.run("detail", e)];
                case 1:
                    u = (_b.sent()).data || {}, i = [].concat(u.genres || [], u.tags || []).map(function (n) { return typeof n == "string" ? n : n && n.title; }).filter(Boolean);
                    return [2, { name: F(u.name).trim(), cover: Se(u.host || this.base + "/", u.cover), author: F(u.author).trim(), description: Br(F(u.description)), detail: Br(F(u.detail)), ongoing: u.ongoing !== !1 && u.ongoing !== "false", genres: mi(i.map(function (n) { return String(n).trim(); })), url: e, format: F(u.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var u, i, i_1, i_1_1, n, _b, _c, e_20_1, _d;
            var e_20, _f;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        u = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", e)];
                    case 1:
                        i = (_g.sent()).data || [e];
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 7, 8, 9]);
                        i_1 = __values(i), i_1_1 = i_1.next();
                        _g.label = 3;
                    case 3:
                        if (!!i_1_1.done) return [3, 6];
                        n = i_1_1.value;
                        _c = (_b = u).concat;
                        return [4, this.run("toc", F(n))];
                    case 4:
                        u = _c.apply(_b, [(_g.sent()).data || []]);
                        _g.label = 5;
                    case 5:
                        i_1_1 = i_1.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_20_1 = _g.sent();
                        e_20 = { error: e_20_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (i_1_1 && !i_1_1.done && (_f = i_1.return)) _f.call(i_1);
                        }
                        finally { if (e_20) throw e_20.error; }
                        return [7];
                    case 9: return [3, 13];
                    case 10:
                        _d = this.has("toc");
                        if (!_d) return [3, 12];
                        return [4, this.run("toc", e)];
                    case 11:
                        _d = (u = (_g.sent()).data || []);
                        _g.label = 12;
                    case 12:
                        _d;
                        _g.label = 13;
                    case 13: return [2, u.filter(function (i) { return i && i.url && i.type !== "section"; }).map(function (i, n) { return ({ name: F(i.name).trim() || "#" + (n + 1), url: Se(i.host || _this.base + "/", i.url), pay: !!(i.pay || i.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var u, _b, _c, i, n;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        _b = u = (_d.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", e)];
                    case 3:
                        _c = u = (_d.sent()).data;
                        return [3, 5];
                    case 4:
                        _c = u = [e];
                        _d.label = 5;
                    case 5:
                        _b = _c;
                        _d.label = 6;
                    case 6:
                        _b, typeof u == "string" && (u = u.split(/[\n,]+/));
                        i = function (s) { return !s || /^data:|loading|lazy|blank|placeholder|spacer|\/nocover|1x1\./i.test(String(s)); }, n = function (s) { if (typeof s == "string")
                            return s; if (!s)
                            return ""; var h = s.link || s.url || s.data, m = Array.isArray(s.fallback) ? s.fallback.filter(Boolean) : []; return i(h) && m.length ? m[0] : h; };
                        return [2, (u || []).map(function (s) { return Se(_this.base + "/", n(s)); }).filter(Boolean)];
                }
            });
        });
    };
    class_1.prototype.content = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.run("chap", e)];
                case 1:
                    u = _b.sent();
                    return [2, { html: F(u.data), title: F(u.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var u, n, i, u_3, u_3_1, n, s, h, h_2, h_2_1, m, s_2, e_21_1;
            var e_21, _b, e_22, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        u = [{ title: "Default", data: e }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        n = (_d.sent()).data;
                        Array.isArray(n) && n.length && (u = n.map(function (s) { return typeof s == "string" ? { title: "Server", data: s } : { title: F(s.title || s.name || "Server"), data: F(s.data || s.url || s.link) }; }));
                        _d.label = 2;
                    case 2:
                        i = [];
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 10, 11, 12]);
                        u_3 = __values(u), u_3_1 = u_3.next();
                        _d.label = 4;
                    case 4:
                        if (!!u_3_1.done) return [3, 9];
                        n = u_3_1.value;
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 7, , 8]);
                        return [4, this.run("track", n.data)];
                    case 6:
                        s = (_d.sent()).data || {}, h = Array.isArray(s) ? s : [s];
                        try {
                            for (h_2 = (e_22 = void 0, __values(h)), h_2_1 = h_2.next(); !h_2_1.done; h_2_1 = h_2.next()) {
                                m = h_2_1.value;
                                !m || !m.data || m.type !== "webview" && i.push({ url: Se(m.host || this.base + "/", m.data), quality: n.title + (m.quality ? " " + m.quality : ""), headers: m.headers || { Referer: this.base + "/" }, subtitles: (m.subtitles || (m.subtitle ? [{ data: m.subtitle, label: "Sub" }] : [])).map(function (y) { return ({ file: Se(_this.base + "/", y.data || y.file), label: F(y.label || y.language || "Sub") }); }), mimeType: F(m.mimeType) });
                            }
                        }
                        catch (e_22_1) { e_22 = { error: e_22_1 }; }
                        finally {
                            try {
                                if (h_2_1 && !h_2_1.done && (_c = h_2.return)) _c.call(h_2);
                            }
                            finally { if (e_22) throw e_22.error; }
                        }
                        return [3, 8];
                    case 7:
                        s_2 = _d.sent();
                        this.host.log && this.host.log("track " + n.title + ": " + s_2.message);
                        return [3, 8];
                    case 8:
                        u_3_1 = u_3.next();
                        return [3, 4];
                    case 9: return [3, 12];
                    case 10:
                        e_21_1 = _d.sent();
                        e_21 = { error: e_21_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (u_3_1 && !u_3_1.done && (_b = u_3.return)) _b.call(u_3);
                        }
                        finally { if (e_21) throw e_21.error; }
                        return [7];
                    case 12: return [2, i];
                }
            });
        });
    };
    return class_1;
}());
function Br(t) {
    return String(t).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
function z(t, e) {
    return __awaiter(this, void 0, void 0, function () { var u, i, _b, _c; return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                t = t || [];
                u = [], i = 0;
                _d.label = 1;
            case 1:
                if (!(i < t.length)) return [3, 4];
                _c = (_b = u).push;
                return [4, e(t[i], i, t)];
            case 2:
                _c.apply(_b, [_d.sent()]);
                _d.label = 3;
            case 3:
                i++;
                return [3, 1];
            case 4: return [2, u];
        }
    }); });
}
var fe = { id: "quanben", name: "quanben", source: "https://quanben.io", type: "novel", locale: "zh-CN", nsfw: !1, version: 3, config: { DOMAIN: { title: "Tên miền", subtitle: "Đổi khi trang đổi tên miền", default: "https://quanben.io", values: ["https://quanben.io"], mode: "input", format: "text" } }, configDefaults: { DOMAIN: "https://quanben.io" }, itemType: 2, lnId: "kiritokmn.quanben", lnIcon: "", lnVersion: "1.2.3" }, Fr = { home: function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (u, i, n, s, h, m, y, S, E, D, q, N, I, U, W, Z, ne) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = e("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function G() {
                                                        return __awaiter(this, void 0, void 0, function () { var r, a; return __generator(this, function (_b) {
                                                            r = [];
                                                            for (a in o.tabs)
                                                                r.push({ title: a, input: a, script: "browse.js" });
                                                            return [2, s.success(r)];
                                                        }); });
                                                    }
                                                    var k, o, d, v;
                                                    return __generator(this, function (_b) {
                                                        k = "https://quanben.io";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (r) { }
                                                        o = { tabs: { "Mới cập nhật": "/[?page={p}]" }, search: "/index.php?c=book&a=search&keywords={q}", ch_list: "div.tool_button a", item: "ul.list > li", link: "a@href", title: "a", d_title: "h1 || meta[property=og:title]@content", d_cover: "meta[property=og:image]@content || img@img", d_desc: "meta[property=og:description]@content || meta[name=description]@content", content: "div.description", s_item: "div.box > div > div.list2", s_title: "h3 a", s_link: "h3 a@href", s_cover: "img@img" }, d = { img: function (r) { if (!r)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < a.length; c++) {
                                                                var l = r.attr(a[c]);
                                                                if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                                    return d.fix(l.trim());
                                                            } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? k + r : k + "/" + r) : ""; }, text: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(c < a.length)) return [3, 4];
                                                                            return [4, r.select(a[c]).text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, l.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            c++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            c = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (l in a.headers)
                                                                                    c[l] = a.headers[l];
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 1:
                                                                            f = _c.sent(), p = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = f && f.status === 429 && p < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(f)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, E(1500 * (p + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 6:
                                                                            f = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            p++;
                                                                            return [3, 2];
                                                                        case 8: return [2, f];
                                                                    }
                                                                }); });
                                                            }, cf: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, r.text()];
                                                                        case 1:
                                                                            a = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(a.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.ok)
                                                                                return [2, r];
                                                                            return [4, d.cf(r)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + a.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + a);
                                                                    }
                                                                }); });
                                                            }, html: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (r) { var a = parseInt(r || "1", 10); return isNaN(a) || a < 1 ? 1 : a; }, next: function (r, a) { return r ? String(d.page(a) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, r.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, v = { pick: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, g, x, b, w, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !r)
                                                                                return [2, ""];
                                                                            c = String(a).split(" || "), l = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(l < c.length)) return [3, 9];
                                                                            f = c[l], p = "text", g = f.lastIndexOf("@");
                                                                            g > 0 && !/\[[^\]]*@/.test(f.slice(g)) && (p = f.slice(g + 1), f = f.slice(0, g));
                                                                            x = f === ":self" ? null : r.select(f), b = f === ":self" ? r : x.size() ? x.first() : null;
                                                                            if (!b) return [3, 8];
                                                                            if (!(p === "text")) return [3, 3];
                                                                            return [4, b.text()];
                                                                        case 2:
                                                                            _b = _d.sent();
                                                                            return [3, 7];
                                                                        case 3:
                                                                            if (!(p === "html")) return [3, 5];
                                                                            return [4, b.html()];
                                                                        case 4:
                                                                            _c = _d.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _c = p === "img" ? d.img(b.is("img") ? b : b.select("img").first()) : p === "own" ? b.ownText() : b.attr(p);
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
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 9: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, url: function (r, a, c) { var l = d.page(a), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, g) { return l > 1 ? g : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(c || "")).replace(/\{base\}/g, k), d.fix(f); }, items: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var c, l, f, p, g, x, b, w, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                c = function (A) { return a && o[a + A] || o[A]; }, l = r.select(c("item")), f = [], p = {}, g = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(g < l.size())) return [3, 9];
                                                                                return [4, l.get(g)];
                                                                            case 2:
                                                                                x = _g.sent();
                                                                                return [4, v.pick(x, c("link") || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || p[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, v.pick(x, c("title") || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                w = _g.sent();
                                                                                _b = w;
                                                                                if (!_b) return [3, 7];
                                                                                p[b] = 1;
                                                                                _d = (_c = f).push;
                                                                                _f = { name: w, link: d.fix(b) };
                                                                                return [4, v.pick(x, c("cover") || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, v.pick(x, c("desc") || "")];
                                                                            case 6:
                                                                                _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = k, _f)]));
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                _b;
                                                                                _g.label = 8;
                                                                            case 8:
                                                                                g++;
                                                                                return [3, 1];
                                                                            case 9: return [2, f];
                                                                        }
                                                                    });
                                                                });
                                                            }, listPage: function (r, a, c) {
                                                                return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(v.url(r, a, c), o.req)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, v.items(l, c ? "s_" : "")];
                                                                        case 2:
                                                                            f = _b.sent(), p = o.next ? l.select(o.next).size() > 0 : f.length >= (o.pageSize || 10);
                                                                            return [2, s.success(f, d.next(p && f.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = o.tabs && o.tabs[r] || r;
                                                                            return [4, v.listPage(c, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!d.isUrl(r)) return [3, 2];
                                                                            c = d.fix(r);
                                                                            return [4, v.listPage(c + (c.indexOf("?") > 0 ? "&" : "?") + (o.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                        case 2:
                                                                            if (!o.search_post) return [3, 5];
                                                                            return [4, d.html(v.url(o.search_post.url, a, r), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: String(o.search_post.body).replace(/\{q\}/g, d.enc(r)) })];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            return [4, v.items(l, "s_")];
                                                                        case 4:
                                                                            f = _b.sent();
                                                                            return [2, s.success(f, null)];
                                                                        case 5: return [4, v.listPage(o.search, a, r)];
                                                                        case 6: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var r, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.genre)
                                                                                return [2, s.success([])];
                                                                            return [4, d.html(d.fix(o.genrePage || "/"))];
                                                                        case 1:
                                                                            r = _b.sent();
                                                                            return [4, z(r.select(o.genre), function (c) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, c.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(c.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, s.success(a.filter(function (c) { return c.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(r, o.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!o.d_genres) return [3, 3];
                                                                                return [4, z(a.select(o.d_genres), function (f) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, f.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
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
                                                                                c = _b;
                                                                                return [4, v.pick(a, o.d_status)];
                                                                            case 5:
                                                                                l = _j.sent();
                                                                                _d = (_c = s).success;
                                                                                _h = {};
                                                                                return [4, v.pick(a, o.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, v.pick(a, o.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, v.pick(a, o.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, v.pick(a, (o.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = c, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, f, p, _b, g, x, b, w, A, _c, _d, _f, _g, L, M, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!o.ch_action) return [3, 2];
                                                                                return [4, v.actionToc(r)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (o.single)
                                                                                    return [2, s.success([{ name: o.single === !0 ? "Xem / Đọc" : o.single, url: r, host: k }])];
                                                                                a = [r], c = [], l = {};
                                                                                return [4, d.html(o.ch_rewrite ? r.replace(new RegExp(o.ch_rewrite[0]), o.ch_rewrite[1]) : r, o.req)];
                                                                            case 3:
                                                                                f = _k.sent();
                                                                                if (!o.ch_url) return [3, 7];
                                                                                return [4, v.pick(f, o.ch_url)];
                                                                            case 4:
                                                                                p = _k.sent();
                                                                                _b = p;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(p), o.req)];
                                                                            case 5:
                                                                                _b = (f = _k.sent());
                                                                                _k.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _k.label = 7;
                                                                            case 7:
                                                                                g = 0;
                                                                                _k.label = 8;
                                                                            case 8:
                                                                                if (!(g < (o.ch_maxPages || 60))) return [3, 22];
                                                                                x = f.select(o.ch_list), b = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(b < x.size())) return [3, 17];
                                                                                return [4, x.get(b)];
                                                                            case 10:
                                                                                w = _k.sent(), A = o.ch_attr ? w.attr(o.ch_attr) : w.attr("href") || w.attr("data-href");
                                                                                _c = !A || A === "#" || l[A];
                                                                                if (_c) return [3, 15];
                                                                                l[A] = 1;
                                                                                _f = (_d = c).push;
                                                                                _j = {};
                                                                                if (!o.ch_name) return [3, 12];
                                                                                return [4, v.pick(w, o.ch_name)];
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
                                                                                L = o.ch_next ? f.select(o.ch_next).first() : null;
                                                                                if (!L || !L.attr("href"))
                                                                                    return [3, 22];
                                                                                M = d.fix(L.attr("href"));
                                                                                if (a.indexOf(M) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(M);
                                                                                _h = o.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, E(o.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(M, o.req)];
                                                                            case 20:
                                                                                f = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                g++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (o.ch_reverse && c.reverse(), !c.length && o.ch_fallback_single && c.push({ name: o.ch_fallback_single === !0 ? "Xem phim" : o.ch_fallback_single, url: r, host: k }), s.success(c))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, f, p, g, x, b, _b, _c, w, A; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            a = [], c = [r], l = r, f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < (o.pages_max || 40))) return [3, 8];
                                                                            return [4, d.html(l, o.req)];
                                                                        case 2:
                                                                            p = _d.sent(), g = p.select(o.pages || ".page-chapter img, .reading-content img, .chapter-content img"), x = 0;
                                                                            _d.label = 3;
                                                                        case 3:
                                                                            if (!(x < g.size())) return [3, 6];
                                                                            _c = (_b = d).img;
                                                                            return [4, g.get(x)];
                                                                        case 4:
                                                                            b = _c.apply(_b, [_d.sent()]);
                                                                            b && a.indexOf(b) < 0 && a.push(b);
                                                                            _d.label = 5;
                                                                        case 5:
                                                                            x++;
                                                                            return [3, 3];
                                                                        case 6:
                                                                            if (!o.pages_next)
                                                                                return [3, 8];
                                                                            w = p.select(o.pages_next).first();
                                                                            if (!w)
                                                                                return [3, 8];
                                                                            A = d.fix(w.attr("href"));
                                                                            if (!A || c.indexOf(A) >= 0)
                                                                                return [3, 8];
                                                                            c.push(A), l = A;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            f++;
                                                                            return [3, 1];
                                                                        case 8: return [2, s.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, _b, _c, l, f, p, _d, _f, _g, g, x, _h, _j, _k, _l, _m, _o; return __generator(this, function (_p) {
                                                                    switch (_p.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_p.sent(), r])];
                                                                        case 2:
                                                                            a = _p.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            c = (_p.sent()) || "";
                                                                            if (!o.content_rsc) return [3, 5];
                                                                            l = v.rscText(c), f = o.c_locked && new RegExp(o.c_locked, "i").test(c), p = f ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(l || f)) return [3, 5];
                                                                            _f = (_d = s).success;
                                                                            _g = [v.toParas(l) + p];
                                                                            return [4, v.pick(n.parse(c, r), o.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_p.sent()]))];
                                                                        case 5:
                                                                            g = n.parse(c, r), x = g.select(o.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!x) return [3, 7];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(c.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _j = (_h = s).error;
                                                                            _k = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, v.pick(g, "title")];
                                                                        case 6: return [2, _j.apply(_h, [_k + ((_p.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + c.length + " ký tự)" + (c.length < 400 ? ": " + c.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 7:
                                                                            _m = (_l = s).success;
                                                                            return [4, d.cleanContent(x)];
                                                                        case 8:
                                                                            _o = [_p.sent()];
                                                                            return [4, v.pick(g, o.c_title || "h1 || h2")];
                                                                        case 9: return [2, _m.apply(_l, _o.concat([_p.sent()]))];
                                                                    }
                                                                }); });
                                                            }, rscAction: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, g, x, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (c = [], f = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; l = f.exec(r);)
                                                                                c.indexOf(l[0]) < 0 && c.push(l[0]);
                                                                            p = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), g = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(g < c.length && g < 60)) return [3, 5];
                                                                            return [4, d.get(k + c[g])];
                                                                        case 2:
                                                                            x = _d.sent();
                                                                            if (!!(!x || !x.ok)) return [3, 4];
                                                                            _c = (_b = p).exec;
                                                                            return [4, x.text()];
                                                                        case 3:
                                                                            b = _c.apply(_b, [(_d.sent()) || ""]);
                                                                            if (b)
                                                                                return [2, b[1]];
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            g++;
                                                                            return [3, 1];
                                                                        case 5: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, rscArray: function (r) {
                                                                for (var a = String(r || "").split("\n"), c = 0; c < a.length; c++) {
                                                                    var l = /^[0-9a-f]+:(\[.*)$/.exec(a[c]);
                                                                    if (l)
                                                                        try {
                                                                            var f = JSON.parse(l[1]);
                                                                            if (f && f.length)
                                                                                return f;
                                                                        }
                                                                        catch (p) { }
                                                                }
                                                                return null;
                                                            }, actionToc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, _b, _c, f, p, g, _d, x, _f, b; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = o.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), r])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            c = (_g.sent()) || "", l = new RegExp(a.arg).exec(c);
                                                                            if (!l)
                                                                                return [2, s.error("Không tìm thấy mã truyện trên trang " + r)];
                                                                            f = JSON.stringify([l[1]]), p = function (w) {
                                                                                return __awaiter(this, void 0, void 0, function () { var A, _b, _c, _d; return __generator(this, function (_f) {
                                                                                    switch (_f.label) {
                                                                                        case 0: return [4, d.get(r, { method: "POST", headers: { "Next-Action": w, Accept: "text/x-component", "Content-Type": "text/plain;charset=UTF-8" }, body: f })];
                                                                                        case 1:
                                                                                            A = _f.sent();
                                                                                            if (!(A && A.ok)) return [3, 3];
                                                                                            _d = (_c = v).rscArray;
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
                                                                            return [4, p(a.id)];
                                                                        case 4:
                                                                            _d = _g.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _d = null;
                                                                            _g.label = 6;
                                                                        case 6:
                                                                            g = _d;
                                                                            if (!!g) return [3, 10];
                                                                            return [4, v.rscAction(c, a.name)];
                                                                        case 7:
                                                                            x = _g.sent();
                                                                            _f = x && x !== a.id;
                                                                            if (!_f) return [3, 9];
                                                                            return [4, p(x)];
                                                                        case 8:
                                                                            _f = (g = _g.sent());
                                                                            _g.label = 9;
                                                                        case 9:
                                                                            _f;
                                                                            _g.label = 10;
                                                                        case 10:
                                                                            if (!g)
                                                                                return [2, s.error('Không lấy được danh sách chương (Server Action "' + a.name + '")')];
                                                                            b = r.replace(/[?#].*$/, "").replace(/\/+$/, "");
                                                                            return [2, s.success(g.map(function (w) { return { name: String(w[a.title || "label"] || "") + (a.lock && w[a.lock] ? " 🔒" : ""), url: b + "/" + w[a.slug || "slugId"], host: k }; }))];
                                                                    }
                                                                }); });
                                                            }, rscText: function (r) { for (var a = "", c, l = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; c = l.exec(r);)
                                                                try {
                                                                    a += JSON.parse(c[1]);
                                                                }
                                                                catch (M) { } for (var f = "", p = /([0-9a-f]+):T([0-9a-f]+),/g, g; g = p.exec(a);) {
                                                                for (var x = parseInt(g[2], 16), b = p.lastIndex, w = 0; b < a.length && w < x;) {
                                                                    var A = a.charCodeAt(b);
                                                                    A < 128 ? w += 1 : A < 2048 ? w += 2 : A >= 55296 && A <= 56319 ? (w += 4, b++) : w += 3, b++;
                                                                }
                                                                var L = a.slice(p.lastIndex, b);
                                                                L.length > f.length && (f = L), p.lastIndex = b;
                                                            } return f; }, toParas: function (r) { return /<p[\s>]|<br\s*\/?>/i.test(r) ? r : r.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.servers)
                                                                                return [2, s.success([{ title: "Server", data: r }])];
                                                                            return [4, d.html(r, o.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, z(a.select(o.servers), function (l) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var f;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, v.pick(l, o.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                                case 1:
                                                                                                    f = _c.sent();
                                                                                                    _b = {};
                                                                                                    return [4, l.text()];
                                                                                                case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            c = (_b.sent()).filter(function (l) { return l.data; });
                                                                            return [2, s.success(c.length ? c : [{ title: "Server", data: r }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var a = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, g, x, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                                return [2, s.success({ type: "native", data: r, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(r)];
                                                                        case 1:
                                                                            c = _b.sent();
                                                                            return [4, c.text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (!(o.video && !a)) return [3, 4];
                                                                            return [4, v.pick(n.parse(l, r), o.video)];
                                                                        case 3:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            p = v.sniff(l);
                                                                            if (p)
                                                                                return [2, s.success({ type: "native", data: p, headers: { Referer: a ? r : k + "/" } })];
                                                                            g = n.parse(l, r), x = g.select(o.iframe || "iframe[src], iframe[data-src]").first();
                                                                            if (!(x && a < 2)) return [3, 6];
                                                                            b = d.fix(x.attr("src") || x.attr("data-src"));
                                                                            if (!b) return [3, 6];
                                                                            return [4, v.track(b, a + 1)];
                                                                        case 5: return [2, _b.sent()];
                                                                        case 6: return [2, s.success({ type: "webview", data: r })];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof G == "function" ? G : void 0];
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
                return [2, (function (u, i, n, s, h, m, y, S, E, D, q, N, I, U, W, Z, ne) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = e("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function G(r, a) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, v.search(r, a)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var k, o, d, v;
                                                    return __generator(this, function (_b) {
                                                        k = "https://quanben.io";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (r) { }
                                                        o = { tabs: { "Mới cập nhật": "/[?page={p}]" }, search: "/index.php?c=book&a=search&keywords={q}", ch_list: "div.tool_button a", item: "ul.list > li", link: "a@href", title: "a", d_title: "h1 || meta[property=og:title]@content", d_cover: "meta[property=og:image]@content || img@img", d_desc: "meta[property=og:description]@content || meta[name=description]@content", content: "div.description", s_item: "div.box > div > div.list2", s_title: "h3 a", s_link: "h3 a@href", s_cover: "img@img" }, d = { img: function (r) { if (!r)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < a.length; c++) {
                                                                var l = r.attr(a[c]);
                                                                if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                                    return d.fix(l.trim());
                                                            } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? k + r : k + "/" + r) : ""; }, text: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(c < a.length)) return [3, 4];
                                                                            return [4, r.select(a[c]).text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, l.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            c++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            c = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (l in a.headers)
                                                                                    c[l] = a.headers[l];
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 1:
                                                                            f = _c.sent(), p = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = f && f.status === 429 && p < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(f)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, E(1500 * (p + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 6:
                                                                            f = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            p++;
                                                                            return [3, 2];
                                                                        case 8: return [2, f];
                                                                    }
                                                                }); });
                                                            }, cf: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, r.text()];
                                                                        case 1:
                                                                            a = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(a.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.ok)
                                                                                return [2, r];
                                                                            return [4, d.cf(r)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + a.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + a);
                                                                    }
                                                                }); });
                                                            }, html: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (r) { var a = parseInt(r || "1", 10); return isNaN(a) || a < 1 ? 1 : a; }, next: function (r, a) { return r ? String(d.page(a) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, r.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, v = { pick: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, g, x, b, w, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !r)
                                                                                return [2, ""];
                                                                            c = String(a).split(" || "), l = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(l < c.length)) return [3, 9];
                                                                            f = c[l], p = "text", g = f.lastIndexOf("@");
                                                                            g > 0 && !/\[[^\]]*@/.test(f.slice(g)) && (p = f.slice(g + 1), f = f.slice(0, g));
                                                                            x = f === ":self" ? null : r.select(f), b = f === ":self" ? r : x.size() ? x.first() : null;
                                                                            if (!b) return [3, 8];
                                                                            if (!(p === "text")) return [3, 3];
                                                                            return [4, b.text()];
                                                                        case 2:
                                                                            _b = _d.sent();
                                                                            return [3, 7];
                                                                        case 3:
                                                                            if (!(p === "html")) return [3, 5];
                                                                            return [4, b.html()];
                                                                        case 4:
                                                                            _c = _d.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _c = p === "img" ? d.img(b.is("img") ? b : b.select("img").first()) : p === "own" ? b.ownText() : b.attr(p);
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
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 9: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, url: function (r, a, c) { var l = d.page(a), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, g) { return l > 1 ? g : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(c || "")).replace(/\{base\}/g, k), d.fix(f); }, items: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var c, l, f, p, g, x, b, w, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                c = function (A) { return a && o[a + A] || o[A]; }, l = r.select(c("item")), f = [], p = {}, g = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(g < l.size())) return [3, 9];
                                                                                return [4, l.get(g)];
                                                                            case 2:
                                                                                x = _g.sent();
                                                                                return [4, v.pick(x, c("link") || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || p[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, v.pick(x, c("title") || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                w = _g.sent();
                                                                                _b = w;
                                                                                if (!_b) return [3, 7];
                                                                                p[b] = 1;
                                                                                _d = (_c = f).push;
                                                                                _f = { name: w, link: d.fix(b) };
                                                                                return [4, v.pick(x, c("cover") || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, v.pick(x, c("desc") || "")];
                                                                            case 6:
                                                                                _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = k, _f)]));
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                _b;
                                                                                _g.label = 8;
                                                                            case 8:
                                                                                g++;
                                                                                return [3, 1];
                                                                            case 9: return [2, f];
                                                                        }
                                                                    });
                                                                });
                                                            }, listPage: function (r, a, c) {
                                                                return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(v.url(r, a, c), o.req)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, v.items(l, c ? "s_" : "")];
                                                                        case 2:
                                                                            f = _b.sent(), p = o.next ? l.select(o.next).size() > 0 : f.length >= (o.pageSize || 10);
                                                                            return [2, s.success(f, d.next(p && f.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = o.tabs && o.tabs[r] || r;
                                                                            return [4, v.listPage(c, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!d.isUrl(r)) return [3, 2];
                                                                            c = d.fix(r);
                                                                            return [4, v.listPage(c + (c.indexOf("?") > 0 ? "&" : "?") + (o.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                        case 2:
                                                                            if (!o.search_post) return [3, 5];
                                                                            return [4, d.html(v.url(o.search_post.url, a, r), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: String(o.search_post.body).replace(/\{q\}/g, d.enc(r)) })];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            return [4, v.items(l, "s_")];
                                                                        case 4:
                                                                            f = _b.sent();
                                                                            return [2, s.success(f, null)];
                                                                        case 5: return [4, v.listPage(o.search, a, r)];
                                                                        case 6: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var r, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.genre)
                                                                                return [2, s.success([])];
                                                                            return [4, d.html(d.fix(o.genrePage || "/"))];
                                                                        case 1:
                                                                            r = _b.sent();
                                                                            return [4, z(r.select(o.genre), function (c) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, c.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(c.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, s.success(a.filter(function (c) { return c.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(r, o.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!o.d_genres) return [3, 3];
                                                                                return [4, z(a.select(o.d_genres), function (f) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, f.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
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
                                                                                c = _b;
                                                                                return [4, v.pick(a, o.d_status)];
                                                                            case 5:
                                                                                l = _j.sent();
                                                                                _d = (_c = s).success;
                                                                                _h = {};
                                                                                return [4, v.pick(a, o.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, v.pick(a, o.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, v.pick(a, o.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, v.pick(a, (o.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = c, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, f, p, _b, g, x, b, w, A, _c, _d, _f, _g, L, M, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!o.ch_action) return [3, 2];
                                                                                return [4, v.actionToc(r)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (o.single)
                                                                                    return [2, s.success([{ name: o.single === !0 ? "Xem / Đọc" : o.single, url: r, host: k }])];
                                                                                a = [r], c = [], l = {};
                                                                                return [4, d.html(o.ch_rewrite ? r.replace(new RegExp(o.ch_rewrite[0]), o.ch_rewrite[1]) : r, o.req)];
                                                                            case 3:
                                                                                f = _k.sent();
                                                                                if (!o.ch_url) return [3, 7];
                                                                                return [4, v.pick(f, o.ch_url)];
                                                                            case 4:
                                                                                p = _k.sent();
                                                                                _b = p;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(p), o.req)];
                                                                            case 5:
                                                                                _b = (f = _k.sent());
                                                                                _k.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _k.label = 7;
                                                                            case 7:
                                                                                g = 0;
                                                                                _k.label = 8;
                                                                            case 8:
                                                                                if (!(g < (o.ch_maxPages || 60))) return [3, 22];
                                                                                x = f.select(o.ch_list), b = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(b < x.size())) return [3, 17];
                                                                                return [4, x.get(b)];
                                                                            case 10:
                                                                                w = _k.sent(), A = o.ch_attr ? w.attr(o.ch_attr) : w.attr("href") || w.attr("data-href");
                                                                                _c = !A || A === "#" || l[A];
                                                                                if (_c) return [3, 15];
                                                                                l[A] = 1;
                                                                                _f = (_d = c).push;
                                                                                _j = {};
                                                                                if (!o.ch_name) return [3, 12];
                                                                                return [4, v.pick(w, o.ch_name)];
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
                                                                                L = o.ch_next ? f.select(o.ch_next).first() : null;
                                                                                if (!L || !L.attr("href"))
                                                                                    return [3, 22];
                                                                                M = d.fix(L.attr("href"));
                                                                                if (a.indexOf(M) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(M);
                                                                                _h = o.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, E(o.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(M, o.req)];
                                                                            case 20:
                                                                                f = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                g++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (o.ch_reverse && c.reverse(), !c.length && o.ch_fallback_single && c.push({ name: o.ch_fallback_single === !0 ? "Xem phim" : o.ch_fallback_single, url: r, host: k }), s.success(c))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, f, p, g, x, b, _b, _c, w, A; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            a = [], c = [r], l = r, f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < (o.pages_max || 40))) return [3, 8];
                                                                            return [4, d.html(l, o.req)];
                                                                        case 2:
                                                                            p = _d.sent(), g = p.select(o.pages || ".page-chapter img, .reading-content img, .chapter-content img"), x = 0;
                                                                            _d.label = 3;
                                                                        case 3:
                                                                            if (!(x < g.size())) return [3, 6];
                                                                            _c = (_b = d).img;
                                                                            return [4, g.get(x)];
                                                                        case 4:
                                                                            b = _c.apply(_b, [_d.sent()]);
                                                                            b && a.indexOf(b) < 0 && a.push(b);
                                                                            _d.label = 5;
                                                                        case 5:
                                                                            x++;
                                                                            return [3, 3];
                                                                        case 6:
                                                                            if (!o.pages_next)
                                                                                return [3, 8];
                                                                            w = p.select(o.pages_next).first();
                                                                            if (!w)
                                                                                return [3, 8];
                                                                            A = d.fix(w.attr("href"));
                                                                            if (!A || c.indexOf(A) >= 0)
                                                                                return [3, 8];
                                                                            c.push(A), l = A;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            f++;
                                                                            return [3, 1];
                                                                        case 8: return [2, s.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, _b, _c, l, f, p, _d, _f, _g, g, x, _h, _j, _k, _l, _m, _o; return __generator(this, function (_p) {
                                                                    switch (_p.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_p.sent(), r])];
                                                                        case 2:
                                                                            a = _p.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            c = (_p.sent()) || "";
                                                                            if (!o.content_rsc) return [3, 5];
                                                                            l = v.rscText(c), f = o.c_locked && new RegExp(o.c_locked, "i").test(c), p = f ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(l || f)) return [3, 5];
                                                                            _f = (_d = s).success;
                                                                            _g = [v.toParas(l) + p];
                                                                            return [4, v.pick(n.parse(c, r), o.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_p.sent()]))];
                                                                        case 5:
                                                                            g = n.parse(c, r), x = g.select(o.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!x) return [3, 7];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(c.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _j = (_h = s).error;
                                                                            _k = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, v.pick(g, "title")];
                                                                        case 6: return [2, _j.apply(_h, [_k + ((_p.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + c.length + " ký tự)" + (c.length < 400 ? ": " + c.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 7:
                                                                            _m = (_l = s).success;
                                                                            return [4, d.cleanContent(x)];
                                                                        case 8:
                                                                            _o = [_p.sent()];
                                                                            return [4, v.pick(g, o.c_title || "h1 || h2")];
                                                                        case 9: return [2, _m.apply(_l, _o.concat([_p.sent()]))];
                                                                    }
                                                                }); });
                                                            }, rscAction: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, g, x, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (c = [], f = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; l = f.exec(r);)
                                                                                c.indexOf(l[0]) < 0 && c.push(l[0]);
                                                                            p = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), g = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(g < c.length && g < 60)) return [3, 5];
                                                                            return [4, d.get(k + c[g])];
                                                                        case 2:
                                                                            x = _d.sent();
                                                                            if (!!(!x || !x.ok)) return [3, 4];
                                                                            _c = (_b = p).exec;
                                                                            return [4, x.text()];
                                                                        case 3:
                                                                            b = _c.apply(_b, [(_d.sent()) || ""]);
                                                                            if (b)
                                                                                return [2, b[1]];
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            g++;
                                                                            return [3, 1];
                                                                        case 5: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, rscArray: function (r) {
                                                                for (var a = String(r || "").split("\n"), c = 0; c < a.length; c++) {
                                                                    var l = /^[0-9a-f]+:(\[.*)$/.exec(a[c]);
                                                                    if (l)
                                                                        try {
                                                                            var f = JSON.parse(l[1]);
                                                                            if (f && f.length)
                                                                                return f;
                                                                        }
                                                                        catch (p) { }
                                                                }
                                                                return null;
                                                            }, actionToc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, _b, _c, f, p, g, _d, x, _f, b; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = o.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), r])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            c = (_g.sent()) || "", l = new RegExp(a.arg).exec(c);
                                                                            if (!l)
                                                                                return [2, s.error("Không tìm thấy mã truyện trên trang " + r)];
                                                                            f = JSON.stringify([l[1]]), p = function (w) {
                                                                                return __awaiter(this, void 0, void 0, function () { var A, _b, _c, _d; return __generator(this, function (_f) {
                                                                                    switch (_f.label) {
                                                                                        case 0: return [4, d.get(r, { method: "POST", headers: { "Next-Action": w, Accept: "text/x-component", "Content-Type": "text/plain;charset=UTF-8" }, body: f })];
                                                                                        case 1:
                                                                                            A = _f.sent();
                                                                                            if (!(A && A.ok)) return [3, 3];
                                                                                            _d = (_c = v).rscArray;
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
                                                                            return [4, p(a.id)];
                                                                        case 4:
                                                                            _d = _g.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _d = null;
                                                                            _g.label = 6;
                                                                        case 6:
                                                                            g = _d;
                                                                            if (!!g) return [3, 10];
                                                                            return [4, v.rscAction(c, a.name)];
                                                                        case 7:
                                                                            x = _g.sent();
                                                                            _f = x && x !== a.id;
                                                                            if (!_f) return [3, 9];
                                                                            return [4, p(x)];
                                                                        case 8:
                                                                            _f = (g = _g.sent());
                                                                            _g.label = 9;
                                                                        case 9:
                                                                            _f;
                                                                            _g.label = 10;
                                                                        case 10:
                                                                            if (!g)
                                                                                return [2, s.error('Không lấy được danh sách chương (Server Action "' + a.name + '")')];
                                                                            b = r.replace(/[?#].*$/, "").replace(/\/+$/, "");
                                                                            return [2, s.success(g.map(function (w) { return { name: String(w[a.title || "label"] || "") + (a.lock && w[a.lock] ? " 🔒" : ""), url: b + "/" + w[a.slug || "slugId"], host: k }; }))];
                                                                    }
                                                                }); });
                                                            }, rscText: function (r) { for (var a = "", c, l = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; c = l.exec(r);)
                                                                try {
                                                                    a += JSON.parse(c[1]);
                                                                }
                                                                catch (M) { } for (var f = "", p = /([0-9a-f]+):T([0-9a-f]+),/g, g; g = p.exec(a);) {
                                                                for (var x = parseInt(g[2], 16), b = p.lastIndex, w = 0; b < a.length && w < x;) {
                                                                    var A = a.charCodeAt(b);
                                                                    A < 128 ? w += 1 : A < 2048 ? w += 2 : A >= 55296 && A <= 56319 ? (w += 4, b++) : w += 3, b++;
                                                                }
                                                                var L = a.slice(p.lastIndex, b);
                                                                L.length > f.length && (f = L), p.lastIndex = b;
                                                            } return f; }, toParas: function (r) { return /<p[\s>]|<br\s*\/?>/i.test(r) ? r : r.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.servers)
                                                                                return [2, s.success([{ title: "Server", data: r }])];
                                                                            return [4, d.html(r, o.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, z(a.select(o.servers), function (l) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var f;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, v.pick(l, o.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                                case 1:
                                                                                                    f = _c.sent();
                                                                                                    _b = {};
                                                                                                    return [4, l.text()];
                                                                                                case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            c = (_b.sent()).filter(function (l) { return l.data; });
                                                                            return [2, s.success(c.length ? c : [{ title: "Server", data: r }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var a = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, g, x, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                                return [2, s.success({ type: "native", data: r, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(r)];
                                                                        case 1:
                                                                            c = _b.sent();
                                                                            return [4, c.text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (!(o.video && !a)) return [3, 4];
                                                                            return [4, v.pick(n.parse(l, r), o.video)];
                                                                        case 3:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            p = v.sniff(l);
                                                                            if (p)
                                                                                return [2, s.success({ type: "native", data: p, headers: { Referer: a ? r : k + "/" } })];
                                                                            g = n.parse(l, r), x = g.select(o.iframe || "iframe[src], iframe[data-src]").first();
                                                                            if (!(x && a < 2)) return [3, 6];
                                                                            b = d.fix(x.attr("src") || x.attr("data-src"));
                                                                            if (!b) return [3, 6];
                                                                            return [4, v.track(b, a + 1)];
                                                                        case 5: return [2, _b.sent()];
                                                                        case 6: return [2, s.success({ type: "webview", data: r })];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof G == "function" ? G : void 0];
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
                return [2, (function (u, i, n, s, h, m, y, S, E, D, q, N, I, U, W, Z, ne) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = e("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function G(r) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, v.detail(r)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var k, o, d, v;
                                                    return __generator(this, function (_b) {
                                                        k = "https://quanben.io";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (r) { }
                                                        o = { tabs: { "Mới cập nhật": "/[?page={p}]" }, search: "/index.php?c=book&a=search&keywords={q}", ch_list: "div.tool_button a", item: "ul.list > li", link: "a@href", title: "a", d_title: "h1 || meta[property=og:title]@content", d_cover: "meta[property=og:image]@content || img@img", d_desc: "meta[property=og:description]@content || meta[name=description]@content", content: "div.description", s_item: "div.box > div > div.list2", s_title: "h3 a", s_link: "h3 a@href", s_cover: "img@img" }, d = { img: function (r) { if (!r)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < a.length; c++) {
                                                                var l = r.attr(a[c]);
                                                                if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                                    return d.fix(l.trim());
                                                            } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? k + r : k + "/" + r) : ""; }, text: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(c < a.length)) return [3, 4];
                                                                            return [4, r.select(a[c]).text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, l.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            c++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            c = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (l in a.headers)
                                                                                    c[l] = a.headers[l];
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 1:
                                                                            f = _c.sent(), p = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = f && f.status === 429 && p < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(f)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, E(1500 * (p + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 6:
                                                                            f = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            p++;
                                                                            return [3, 2];
                                                                        case 8: return [2, f];
                                                                    }
                                                                }); });
                                                            }, cf: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, r.text()];
                                                                        case 1:
                                                                            a = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(a.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.ok)
                                                                                return [2, r];
                                                                            return [4, d.cf(r)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + a.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + a);
                                                                    }
                                                                }); });
                                                            }, html: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (r) { var a = parseInt(r || "1", 10); return isNaN(a) || a < 1 ? 1 : a; }, next: function (r, a) { return r ? String(d.page(a) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, r.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, v = { pick: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, g, x, b, w, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !r)
                                                                                return [2, ""];
                                                                            c = String(a).split(" || "), l = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(l < c.length)) return [3, 9];
                                                                            f = c[l], p = "text", g = f.lastIndexOf("@");
                                                                            g > 0 && !/\[[^\]]*@/.test(f.slice(g)) && (p = f.slice(g + 1), f = f.slice(0, g));
                                                                            x = f === ":self" ? null : r.select(f), b = f === ":self" ? r : x.size() ? x.first() : null;
                                                                            if (!b) return [3, 8];
                                                                            if (!(p === "text")) return [3, 3];
                                                                            return [4, b.text()];
                                                                        case 2:
                                                                            _b = _d.sent();
                                                                            return [3, 7];
                                                                        case 3:
                                                                            if (!(p === "html")) return [3, 5];
                                                                            return [4, b.html()];
                                                                        case 4:
                                                                            _c = _d.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _c = p === "img" ? d.img(b.is("img") ? b : b.select("img").first()) : p === "own" ? b.ownText() : b.attr(p);
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
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 9: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, url: function (r, a, c) { var l = d.page(a), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, g) { return l > 1 ? g : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(c || "")).replace(/\{base\}/g, k), d.fix(f); }, items: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var c, l, f, p, g, x, b, w, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                c = function (A) { return a && o[a + A] || o[A]; }, l = r.select(c("item")), f = [], p = {}, g = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(g < l.size())) return [3, 9];
                                                                                return [4, l.get(g)];
                                                                            case 2:
                                                                                x = _g.sent();
                                                                                return [4, v.pick(x, c("link") || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || p[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, v.pick(x, c("title") || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                w = _g.sent();
                                                                                _b = w;
                                                                                if (!_b) return [3, 7];
                                                                                p[b] = 1;
                                                                                _d = (_c = f).push;
                                                                                _f = { name: w, link: d.fix(b) };
                                                                                return [4, v.pick(x, c("cover") || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, v.pick(x, c("desc") || "")];
                                                                            case 6:
                                                                                _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = k, _f)]));
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                _b;
                                                                                _g.label = 8;
                                                                            case 8:
                                                                                g++;
                                                                                return [3, 1];
                                                                            case 9: return [2, f];
                                                                        }
                                                                    });
                                                                });
                                                            }, listPage: function (r, a, c) {
                                                                return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(v.url(r, a, c), o.req)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, v.items(l, c ? "s_" : "")];
                                                                        case 2:
                                                                            f = _b.sent(), p = o.next ? l.select(o.next).size() > 0 : f.length >= (o.pageSize || 10);
                                                                            return [2, s.success(f, d.next(p && f.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = o.tabs && o.tabs[r] || r;
                                                                            return [4, v.listPage(c, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!d.isUrl(r)) return [3, 2];
                                                                            c = d.fix(r);
                                                                            return [4, v.listPage(c + (c.indexOf("?") > 0 ? "&" : "?") + (o.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                        case 2:
                                                                            if (!o.search_post) return [3, 5];
                                                                            return [4, d.html(v.url(o.search_post.url, a, r), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: String(o.search_post.body).replace(/\{q\}/g, d.enc(r)) })];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            return [4, v.items(l, "s_")];
                                                                        case 4:
                                                                            f = _b.sent();
                                                                            return [2, s.success(f, null)];
                                                                        case 5: return [4, v.listPage(o.search, a, r)];
                                                                        case 6: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var r, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.genre)
                                                                                return [2, s.success([])];
                                                                            return [4, d.html(d.fix(o.genrePage || "/"))];
                                                                        case 1:
                                                                            r = _b.sent();
                                                                            return [4, z(r.select(o.genre), function (c) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, c.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(c.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, s.success(a.filter(function (c) { return c.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(r, o.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!o.d_genres) return [3, 3];
                                                                                return [4, z(a.select(o.d_genres), function (f) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, f.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
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
                                                                                c = _b;
                                                                                return [4, v.pick(a, o.d_status)];
                                                                            case 5:
                                                                                l = _j.sent();
                                                                                _d = (_c = s).success;
                                                                                _h = {};
                                                                                return [4, v.pick(a, o.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, v.pick(a, o.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, v.pick(a, o.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, v.pick(a, (o.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = c, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, f, p, _b, g, x, b, w, A, _c, _d, _f, _g, L, M, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!o.ch_action) return [3, 2];
                                                                                return [4, v.actionToc(r)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (o.single)
                                                                                    return [2, s.success([{ name: o.single === !0 ? "Xem / Đọc" : o.single, url: r, host: k }])];
                                                                                a = [r], c = [], l = {};
                                                                                return [4, d.html(o.ch_rewrite ? r.replace(new RegExp(o.ch_rewrite[0]), o.ch_rewrite[1]) : r, o.req)];
                                                                            case 3:
                                                                                f = _k.sent();
                                                                                if (!o.ch_url) return [3, 7];
                                                                                return [4, v.pick(f, o.ch_url)];
                                                                            case 4:
                                                                                p = _k.sent();
                                                                                _b = p;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(p), o.req)];
                                                                            case 5:
                                                                                _b = (f = _k.sent());
                                                                                _k.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _k.label = 7;
                                                                            case 7:
                                                                                g = 0;
                                                                                _k.label = 8;
                                                                            case 8:
                                                                                if (!(g < (o.ch_maxPages || 60))) return [3, 22];
                                                                                x = f.select(o.ch_list), b = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(b < x.size())) return [3, 17];
                                                                                return [4, x.get(b)];
                                                                            case 10:
                                                                                w = _k.sent(), A = o.ch_attr ? w.attr(o.ch_attr) : w.attr("href") || w.attr("data-href");
                                                                                _c = !A || A === "#" || l[A];
                                                                                if (_c) return [3, 15];
                                                                                l[A] = 1;
                                                                                _f = (_d = c).push;
                                                                                _j = {};
                                                                                if (!o.ch_name) return [3, 12];
                                                                                return [4, v.pick(w, o.ch_name)];
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
                                                                                L = o.ch_next ? f.select(o.ch_next).first() : null;
                                                                                if (!L || !L.attr("href"))
                                                                                    return [3, 22];
                                                                                M = d.fix(L.attr("href"));
                                                                                if (a.indexOf(M) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(M);
                                                                                _h = o.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, E(o.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(M, o.req)];
                                                                            case 20:
                                                                                f = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                g++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (o.ch_reverse && c.reverse(), !c.length && o.ch_fallback_single && c.push({ name: o.ch_fallback_single === !0 ? "Xem phim" : o.ch_fallback_single, url: r, host: k }), s.success(c))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, f, p, g, x, b, _b, _c, w, A; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            a = [], c = [r], l = r, f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < (o.pages_max || 40))) return [3, 8];
                                                                            return [4, d.html(l, o.req)];
                                                                        case 2:
                                                                            p = _d.sent(), g = p.select(o.pages || ".page-chapter img, .reading-content img, .chapter-content img"), x = 0;
                                                                            _d.label = 3;
                                                                        case 3:
                                                                            if (!(x < g.size())) return [3, 6];
                                                                            _c = (_b = d).img;
                                                                            return [4, g.get(x)];
                                                                        case 4:
                                                                            b = _c.apply(_b, [_d.sent()]);
                                                                            b && a.indexOf(b) < 0 && a.push(b);
                                                                            _d.label = 5;
                                                                        case 5:
                                                                            x++;
                                                                            return [3, 3];
                                                                        case 6:
                                                                            if (!o.pages_next)
                                                                                return [3, 8];
                                                                            w = p.select(o.pages_next).first();
                                                                            if (!w)
                                                                                return [3, 8];
                                                                            A = d.fix(w.attr("href"));
                                                                            if (!A || c.indexOf(A) >= 0)
                                                                                return [3, 8];
                                                                            c.push(A), l = A;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            f++;
                                                                            return [3, 1];
                                                                        case 8: return [2, s.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, _b, _c, l, f, p, _d, _f, _g, g, x, _h, _j, _k, _l, _m, _o; return __generator(this, function (_p) {
                                                                    switch (_p.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_p.sent(), r])];
                                                                        case 2:
                                                                            a = _p.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            c = (_p.sent()) || "";
                                                                            if (!o.content_rsc) return [3, 5];
                                                                            l = v.rscText(c), f = o.c_locked && new RegExp(o.c_locked, "i").test(c), p = f ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(l || f)) return [3, 5];
                                                                            _f = (_d = s).success;
                                                                            _g = [v.toParas(l) + p];
                                                                            return [4, v.pick(n.parse(c, r), o.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_p.sent()]))];
                                                                        case 5:
                                                                            g = n.parse(c, r), x = g.select(o.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!x) return [3, 7];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(c.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _j = (_h = s).error;
                                                                            _k = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, v.pick(g, "title")];
                                                                        case 6: return [2, _j.apply(_h, [_k + ((_p.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + c.length + " ký tự)" + (c.length < 400 ? ": " + c.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 7:
                                                                            _m = (_l = s).success;
                                                                            return [4, d.cleanContent(x)];
                                                                        case 8:
                                                                            _o = [_p.sent()];
                                                                            return [4, v.pick(g, o.c_title || "h1 || h2")];
                                                                        case 9: return [2, _m.apply(_l, _o.concat([_p.sent()]))];
                                                                    }
                                                                }); });
                                                            }, rscAction: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, g, x, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (c = [], f = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; l = f.exec(r);)
                                                                                c.indexOf(l[0]) < 0 && c.push(l[0]);
                                                                            p = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), g = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(g < c.length && g < 60)) return [3, 5];
                                                                            return [4, d.get(k + c[g])];
                                                                        case 2:
                                                                            x = _d.sent();
                                                                            if (!!(!x || !x.ok)) return [3, 4];
                                                                            _c = (_b = p).exec;
                                                                            return [4, x.text()];
                                                                        case 3:
                                                                            b = _c.apply(_b, [(_d.sent()) || ""]);
                                                                            if (b)
                                                                                return [2, b[1]];
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            g++;
                                                                            return [3, 1];
                                                                        case 5: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, rscArray: function (r) {
                                                                for (var a = String(r || "").split("\n"), c = 0; c < a.length; c++) {
                                                                    var l = /^[0-9a-f]+:(\[.*)$/.exec(a[c]);
                                                                    if (l)
                                                                        try {
                                                                            var f = JSON.parse(l[1]);
                                                                            if (f && f.length)
                                                                                return f;
                                                                        }
                                                                        catch (p) { }
                                                                }
                                                                return null;
                                                            }, actionToc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, _b, _c, f, p, g, _d, x, _f, b; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = o.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), r])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            c = (_g.sent()) || "", l = new RegExp(a.arg).exec(c);
                                                                            if (!l)
                                                                                return [2, s.error("Không tìm thấy mã truyện trên trang " + r)];
                                                                            f = JSON.stringify([l[1]]), p = function (w) {
                                                                                return __awaiter(this, void 0, void 0, function () { var A, _b, _c, _d; return __generator(this, function (_f) {
                                                                                    switch (_f.label) {
                                                                                        case 0: return [4, d.get(r, { method: "POST", headers: { "Next-Action": w, Accept: "text/x-component", "Content-Type": "text/plain;charset=UTF-8" }, body: f })];
                                                                                        case 1:
                                                                                            A = _f.sent();
                                                                                            if (!(A && A.ok)) return [3, 3];
                                                                                            _d = (_c = v).rscArray;
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
                                                                            return [4, p(a.id)];
                                                                        case 4:
                                                                            _d = _g.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _d = null;
                                                                            _g.label = 6;
                                                                        case 6:
                                                                            g = _d;
                                                                            if (!!g) return [3, 10];
                                                                            return [4, v.rscAction(c, a.name)];
                                                                        case 7:
                                                                            x = _g.sent();
                                                                            _f = x && x !== a.id;
                                                                            if (!_f) return [3, 9];
                                                                            return [4, p(x)];
                                                                        case 8:
                                                                            _f = (g = _g.sent());
                                                                            _g.label = 9;
                                                                        case 9:
                                                                            _f;
                                                                            _g.label = 10;
                                                                        case 10:
                                                                            if (!g)
                                                                                return [2, s.error('Không lấy được danh sách chương (Server Action "' + a.name + '")')];
                                                                            b = r.replace(/[?#].*$/, "").replace(/\/+$/, "");
                                                                            return [2, s.success(g.map(function (w) { return { name: String(w[a.title || "label"] || "") + (a.lock && w[a.lock] ? " 🔒" : ""), url: b + "/" + w[a.slug || "slugId"], host: k }; }))];
                                                                    }
                                                                }); });
                                                            }, rscText: function (r) { for (var a = "", c, l = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; c = l.exec(r);)
                                                                try {
                                                                    a += JSON.parse(c[1]);
                                                                }
                                                                catch (M) { } for (var f = "", p = /([0-9a-f]+):T([0-9a-f]+),/g, g; g = p.exec(a);) {
                                                                for (var x = parseInt(g[2], 16), b = p.lastIndex, w = 0; b < a.length && w < x;) {
                                                                    var A = a.charCodeAt(b);
                                                                    A < 128 ? w += 1 : A < 2048 ? w += 2 : A >= 55296 && A <= 56319 ? (w += 4, b++) : w += 3, b++;
                                                                }
                                                                var L = a.slice(p.lastIndex, b);
                                                                L.length > f.length && (f = L), p.lastIndex = b;
                                                            } return f; }, toParas: function (r) { return /<p[\s>]|<br\s*\/?>/i.test(r) ? r : r.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.servers)
                                                                                return [2, s.success([{ title: "Server", data: r }])];
                                                                            return [4, d.html(r, o.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, z(a.select(o.servers), function (l) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var f;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, v.pick(l, o.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                                case 1:
                                                                                                    f = _c.sent();
                                                                                                    _b = {};
                                                                                                    return [4, l.text()];
                                                                                                case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            c = (_b.sent()).filter(function (l) { return l.data; });
                                                                            return [2, s.success(c.length ? c : [{ title: "Server", data: r }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var a = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, g, x, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                                return [2, s.success({ type: "native", data: r, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(r)];
                                                                        case 1:
                                                                            c = _b.sent();
                                                                            return [4, c.text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (!(o.video && !a)) return [3, 4];
                                                                            return [4, v.pick(n.parse(l, r), o.video)];
                                                                        case 3:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            p = v.sniff(l);
                                                                            if (p)
                                                                                return [2, s.success({ type: "native", data: p, headers: { Referer: a ? r : k + "/" } })];
                                                                            g = n.parse(l, r), x = g.select(o.iframe || "iframe[src], iframe[data-src]").first();
                                                                            if (!(x && a < 2)) return [3, 6];
                                                                            b = d.fix(x.attr("src") || x.attr("data-src"));
                                                                            if (!b) return [3, 6];
                                                                            return [4, v.track(b, a + 1)];
                                                                        case 5: return [2, _b.sent()];
                                                                        case 6: return [2, s.success({ type: "webview", data: r })];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof G == "function" ? G : void 0];
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
                return [2, (function (u, i, n, s, h, m, y, S, E, D, q, N, I, U, W, Z, ne) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = e("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function G(r) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, v.toc(r)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var k, o, d, v;
                                                    return __generator(this, function (_b) {
                                                        k = "https://quanben.io";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (r) { }
                                                        o = { tabs: { "Mới cập nhật": "/[?page={p}]" }, search: "/index.php?c=book&a=search&keywords={q}", ch_list: "div.tool_button a", item: "ul.list > li", link: "a@href", title: "a", d_title: "h1 || meta[property=og:title]@content", d_cover: "meta[property=og:image]@content || img@img", d_desc: "meta[property=og:description]@content || meta[name=description]@content", content: "div.description", s_item: "div.box > div > div.list2", s_title: "h3 a", s_link: "h3 a@href", s_cover: "img@img" }, d = { img: function (r) { if (!r)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < a.length; c++) {
                                                                var l = r.attr(a[c]);
                                                                if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                                    return d.fix(l.trim());
                                                            } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? k + r : k + "/" + r) : ""; }, text: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(c < a.length)) return [3, 4];
                                                                            return [4, r.select(a[c]).text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, l.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            c++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            c = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (l in a.headers)
                                                                                    c[l] = a.headers[l];
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 1:
                                                                            f = _c.sent(), p = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = f && f.status === 429 && p < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(f)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, E(1500 * (p + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 6:
                                                                            f = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            p++;
                                                                            return [3, 2];
                                                                        case 8: return [2, f];
                                                                    }
                                                                }); });
                                                            }, cf: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, r.text()];
                                                                        case 1:
                                                                            a = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(a.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.ok)
                                                                                return [2, r];
                                                                            return [4, d.cf(r)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + a.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + a);
                                                                    }
                                                                }); });
                                                            }, html: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (r) { var a = parseInt(r || "1", 10); return isNaN(a) || a < 1 ? 1 : a; }, next: function (r, a) { return r ? String(d.page(a) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, r.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, v = { pick: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, g, x, b, w, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !r)
                                                                                return [2, ""];
                                                                            c = String(a).split(" || "), l = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(l < c.length)) return [3, 9];
                                                                            f = c[l], p = "text", g = f.lastIndexOf("@");
                                                                            g > 0 && !/\[[^\]]*@/.test(f.slice(g)) && (p = f.slice(g + 1), f = f.slice(0, g));
                                                                            x = f === ":self" ? null : r.select(f), b = f === ":self" ? r : x.size() ? x.first() : null;
                                                                            if (!b) return [3, 8];
                                                                            if (!(p === "text")) return [3, 3];
                                                                            return [4, b.text()];
                                                                        case 2:
                                                                            _b = _d.sent();
                                                                            return [3, 7];
                                                                        case 3:
                                                                            if (!(p === "html")) return [3, 5];
                                                                            return [4, b.html()];
                                                                        case 4:
                                                                            _c = _d.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _c = p === "img" ? d.img(b.is("img") ? b : b.select("img").first()) : p === "own" ? b.ownText() : b.attr(p);
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
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 9: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, url: function (r, a, c) { var l = d.page(a), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, g) { return l > 1 ? g : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(c || "")).replace(/\{base\}/g, k), d.fix(f); }, items: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var c, l, f, p, g, x, b, w, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                c = function (A) { return a && o[a + A] || o[A]; }, l = r.select(c("item")), f = [], p = {}, g = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(g < l.size())) return [3, 9];
                                                                                return [4, l.get(g)];
                                                                            case 2:
                                                                                x = _g.sent();
                                                                                return [4, v.pick(x, c("link") || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || p[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, v.pick(x, c("title") || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                w = _g.sent();
                                                                                _b = w;
                                                                                if (!_b) return [3, 7];
                                                                                p[b] = 1;
                                                                                _d = (_c = f).push;
                                                                                _f = { name: w, link: d.fix(b) };
                                                                                return [4, v.pick(x, c("cover") || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, v.pick(x, c("desc") || "")];
                                                                            case 6:
                                                                                _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = k, _f)]));
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                _b;
                                                                                _g.label = 8;
                                                                            case 8:
                                                                                g++;
                                                                                return [3, 1];
                                                                            case 9: return [2, f];
                                                                        }
                                                                    });
                                                                });
                                                            }, listPage: function (r, a, c) {
                                                                return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(v.url(r, a, c), o.req)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, v.items(l, c ? "s_" : "")];
                                                                        case 2:
                                                                            f = _b.sent(), p = o.next ? l.select(o.next).size() > 0 : f.length >= (o.pageSize || 10);
                                                                            return [2, s.success(f, d.next(p && f.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = o.tabs && o.tabs[r] || r;
                                                                            return [4, v.listPage(c, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!d.isUrl(r)) return [3, 2];
                                                                            c = d.fix(r);
                                                                            return [4, v.listPage(c + (c.indexOf("?") > 0 ? "&" : "?") + (o.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                        case 2:
                                                                            if (!o.search_post) return [3, 5];
                                                                            return [4, d.html(v.url(o.search_post.url, a, r), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: String(o.search_post.body).replace(/\{q\}/g, d.enc(r)) })];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            return [4, v.items(l, "s_")];
                                                                        case 4:
                                                                            f = _b.sent();
                                                                            return [2, s.success(f, null)];
                                                                        case 5: return [4, v.listPage(o.search, a, r)];
                                                                        case 6: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var r, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.genre)
                                                                                return [2, s.success([])];
                                                                            return [4, d.html(d.fix(o.genrePage || "/"))];
                                                                        case 1:
                                                                            r = _b.sent();
                                                                            return [4, z(r.select(o.genre), function (c) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, c.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(c.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, s.success(a.filter(function (c) { return c.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(r, o.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!o.d_genres) return [3, 3];
                                                                                return [4, z(a.select(o.d_genres), function (f) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, f.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
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
                                                                                c = _b;
                                                                                return [4, v.pick(a, o.d_status)];
                                                                            case 5:
                                                                                l = _j.sent();
                                                                                _d = (_c = s).success;
                                                                                _h = {};
                                                                                return [4, v.pick(a, o.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, v.pick(a, o.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, v.pick(a, o.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, v.pick(a, (o.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = c, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, f, p, _b, g, x, b, w, A, _c, _d, _f, _g, L, M, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!o.ch_action) return [3, 2];
                                                                                return [4, v.actionToc(r)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (o.single)
                                                                                    return [2, s.success([{ name: o.single === !0 ? "Xem / Đọc" : o.single, url: r, host: k }])];
                                                                                a = [r], c = [], l = {};
                                                                                return [4, d.html(o.ch_rewrite ? r.replace(new RegExp(o.ch_rewrite[0]), o.ch_rewrite[1]) : r, o.req)];
                                                                            case 3:
                                                                                f = _k.sent();
                                                                                if (!o.ch_url) return [3, 7];
                                                                                return [4, v.pick(f, o.ch_url)];
                                                                            case 4:
                                                                                p = _k.sent();
                                                                                _b = p;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(p), o.req)];
                                                                            case 5:
                                                                                _b = (f = _k.sent());
                                                                                _k.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _k.label = 7;
                                                                            case 7:
                                                                                g = 0;
                                                                                _k.label = 8;
                                                                            case 8:
                                                                                if (!(g < (o.ch_maxPages || 60))) return [3, 22];
                                                                                x = f.select(o.ch_list), b = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(b < x.size())) return [3, 17];
                                                                                return [4, x.get(b)];
                                                                            case 10:
                                                                                w = _k.sent(), A = o.ch_attr ? w.attr(o.ch_attr) : w.attr("href") || w.attr("data-href");
                                                                                _c = !A || A === "#" || l[A];
                                                                                if (_c) return [3, 15];
                                                                                l[A] = 1;
                                                                                _f = (_d = c).push;
                                                                                _j = {};
                                                                                if (!o.ch_name) return [3, 12];
                                                                                return [4, v.pick(w, o.ch_name)];
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
                                                                                L = o.ch_next ? f.select(o.ch_next).first() : null;
                                                                                if (!L || !L.attr("href"))
                                                                                    return [3, 22];
                                                                                M = d.fix(L.attr("href"));
                                                                                if (a.indexOf(M) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(M);
                                                                                _h = o.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, E(o.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(M, o.req)];
                                                                            case 20:
                                                                                f = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                g++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (o.ch_reverse && c.reverse(), !c.length && o.ch_fallback_single && c.push({ name: o.ch_fallback_single === !0 ? "Xem phim" : o.ch_fallback_single, url: r, host: k }), s.success(c))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, f, p, g, x, b, _b, _c, w, A; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            a = [], c = [r], l = r, f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < (o.pages_max || 40))) return [3, 8];
                                                                            return [4, d.html(l, o.req)];
                                                                        case 2:
                                                                            p = _d.sent(), g = p.select(o.pages || ".page-chapter img, .reading-content img, .chapter-content img"), x = 0;
                                                                            _d.label = 3;
                                                                        case 3:
                                                                            if (!(x < g.size())) return [3, 6];
                                                                            _c = (_b = d).img;
                                                                            return [4, g.get(x)];
                                                                        case 4:
                                                                            b = _c.apply(_b, [_d.sent()]);
                                                                            b && a.indexOf(b) < 0 && a.push(b);
                                                                            _d.label = 5;
                                                                        case 5:
                                                                            x++;
                                                                            return [3, 3];
                                                                        case 6:
                                                                            if (!o.pages_next)
                                                                                return [3, 8];
                                                                            w = p.select(o.pages_next).first();
                                                                            if (!w)
                                                                                return [3, 8];
                                                                            A = d.fix(w.attr("href"));
                                                                            if (!A || c.indexOf(A) >= 0)
                                                                                return [3, 8];
                                                                            c.push(A), l = A;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            f++;
                                                                            return [3, 1];
                                                                        case 8: return [2, s.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, _b, _c, l, f, p, _d, _f, _g, g, x, _h, _j, _k, _l, _m, _o; return __generator(this, function (_p) {
                                                                    switch (_p.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_p.sent(), r])];
                                                                        case 2:
                                                                            a = _p.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            c = (_p.sent()) || "";
                                                                            if (!o.content_rsc) return [3, 5];
                                                                            l = v.rscText(c), f = o.c_locked && new RegExp(o.c_locked, "i").test(c), p = f ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(l || f)) return [3, 5];
                                                                            _f = (_d = s).success;
                                                                            _g = [v.toParas(l) + p];
                                                                            return [4, v.pick(n.parse(c, r), o.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_p.sent()]))];
                                                                        case 5:
                                                                            g = n.parse(c, r), x = g.select(o.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!x) return [3, 7];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(c.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _j = (_h = s).error;
                                                                            _k = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, v.pick(g, "title")];
                                                                        case 6: return [2, _j.apply(_h, [_k + ((_p.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + c.length + " ký tự)" + (c.length < 400 ? ": " + c.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 7:
                                                                            _m = (_l = s).success;
                                                                            return [4, d.cleanContent(x)];
                                                                        case 8:
                                                                            _o = [_p.sent()];
                                                                            return [4, v.pick(g, o.c_title || "h1 || h2")];
                                                                        case 9: return [2, _m.apply(_l, _o.concat([_p.sent()]))];
                                                                    }
                                                                }); });
                                                            }, rscAction: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, g, x, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (c = [], f = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; l = f.exec(r);)
                                                                                c.indexOf(l[0]) < 0 && c.push(l[0]);
                                                                            p = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), g = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(g < c.length && g < 60)) return [3, 5];
                                                                            return [4, d.get(k + c[g])];
                                                                        case 2:
                                                                            x = _d.sent();
                                                                            if (!!(!x || !x.ok)) return [3, 4];
                                                                            _c = (_b = p).exec;
                                                                            return [4, x.text()];
                                                                        case 3:
                                                                            b = _c.apply(_b, [(_d.sent()) || ""]);
                                                                            if (b)
                                                                                return [2, b[1]];
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            g++;
                                                                            return [3, 1];
                                                                        case 5: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, rscArray: function (r) {
                                                                for (var a = String(r || "").split("\n"), c = 0; c < a.length; c++) {
                                                                    var l = /^[0-9a-f]+:(\[.*)$/.exec(a[c]);
                                                                    if (l)
                                                                        try {
                                                                            var f = JSON.parse(l[1]);
                                                                            if (f && f.length)
                                                                                return f;
                                                                        }
                                                                        catch (p) { }
                                                                }
                                                                return null;
                                                            }, actionToc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, _b, _c, f, p, g, _d, x, _f, b; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = o.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), r])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            c = (_g.sent()) || "", l = new RegExp(a.arg).exec(c);
                                                                            if (!l)
                                                                                return [2, s.error("Không tìm thấy mã truyện trên trang " + r)];
                                                                            f = JSON.stringify([l[1]]), p = function (w) {
                                                                                return __awaiter(this, void 0, void 0, function () { var A, _b, _c, _d; return __generator(this, function (_f) {
                                                                                    switch (_f.label) {
                                                                                        case 0: return [4, d.get(r, { method: "POST", headers: { "Next-Action": w, Accept: "text/x-component", "Content-Type": "text/plain;charset=UTF-8" }, body: f })];
                                                                                        case 1:
                                                                                            A = _f.sent();
                                                                                            if (!(A && A.ok)) return [3, 3];
                                                                                            _d = (_c = v).rscArray;
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
                                                                            return [4, p(a.id)];
                                                                        case 4:
                                                                            _d = _g.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _d = null;
                                                                            _g.label = 6;
                                                                        case 6:
                                                                            g = _d;
                                                                            if (!!g) return [3, 10];
                                                                            return [4, v.rscAction(c, a.name)];
                                                                        case 7:
                                                                            x = _g.sent();
                                                                            _f = x && x !== a.id;
                                                                            if (!_f) return [3, 9];
                                                                            return [4, p(x)];
                                                                        case 8:
                                                                            _f = (g = _g.sent());
                                                                            _g.label = 9;
                                                                        case 9:
                                                                            _f;
                                                                            _g.label = 10;
                                                                        case 10:
                                                                            if (!g)
                                                                                return [2, s.error('Không lấy được danh sách chương (Server Action "' + a.name + '")')];
                                                                            b = r.replace(/[?#].*$/, "").replace(/\/+$/, "");
                                                                            return [2, s.success(g.map(function (w) { return { name: String(w[a.title || "label"] || "") + (a.lock && w[a.lock] ? " 🔒" : ""), url: b + "/" + w[a.slug || "slugId"], host: k }; }))];
                                                                    }
                                                                }); });
                                                            }, rscText: function (r) { for (var a = "", c, l = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; c = l.exec(r);)
                                                                try {
                                                                    a += JSON.parse(c[1]);
                                                                }
                                                                catch (M) { } for (var f = "", p = /([0-9a-f]+):T([0-9a-f]+),/g, g; g = p.exec(a);) {
                                                                for (var x = parseInt(g[2], 16), b = p.lastIndex, w = 0; b < a.length && w < x;) {
                                                                    var A = a.charCodeAt(b);
                                                                    A < 128 ? w += 1 : A < 2048 ? w += 2 : A >= 55296 && A <= 56319 ? (w += 4, b++) : w += 3, b++;
                                                                }
                                                                var L = a.slice(p.lastIndex, b);
                                                                L.length > f.length && (f = L), p.lastIndex = b;
                                                            } return f; }, toParas: function (r) { return /<p[\s>]|<br\s*\/?>/i.test(r) ? r : r.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.servers)
                                                                                return [2, s.success([{ title: "Server", data: r }])];
                                                                            return [4, d.html(r, o.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, z(a.select(o.servers), function (l) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var f;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, v.pick(l, o.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                                case 1:
                                                                                                    f = _c.sent();
                                                                                                    _b = {};
                                                                                                    return [4, l.text()];
                                                                                                case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            c = (_b.sent()).filter(function (l) { return l.data; });
                                                                            return [2, s.success(c.length ? c : [{ title: "Server", data: r }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var a = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, g, x, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                                return [2, s.success({ type: "native", data: r, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(r)];
                                                                        case 1:
                                                                            c = _b.sent();
                                                                            return [4, c.text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (!(o.video && !a)) return [3, 4];
                                                                            return [4, v.pick(n.parse(l, r), o.video)];
                                                                        case 3:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            p = v.sniff(l);
                                                                            if (p)
                                                                                return [2, s.success({ type: "native", data: p, headers: { Referer: a ? r : k + "/" } })];
                                                                            g = n.parse(l, r), x = g.select(o.iframe || "iframe[src], iframe[data-src]").first();
                                                                            if (!(x && a < 2)) return [3, 6];
                                                                            b = d.fix(x.attr("src") || x.attr("data-src"));
                                                                            if (!b) return [3, 6];
                                                                            return [4, v.track(b, a + 1)];
                                                                        case 5: return [2, _b.sent()];
                                                                        case 6: return [2, s.success({ type: "webview", data: r })];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof G == "function" ? G : void 0];
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
                return [2, (function (u, i, n, s, h, m, y, S, E, D, q, N, I, U, W, Z, ne) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = e("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function G(r) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, v.text(r)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var k, o, d, v;
                                                    return __generator(this, function (_b) {
                                                        k = "https://quanben.io";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (r) { }
                                                        o = { tabs: { "Mới cập nhật": "/[?page={p}]" }, search: "/index.php?c=book&a=search&keywords={q}", ch_list: "div.tool_button a", item: "ul.list > li", link: "a@href", title: "a", d_title: "h1 || meta[property=og:title]@content", d_cover: "meta[property=og:image]@content || img@img", d_desc: "meta[property=og:description]@content || meta[name=description]@content", content: "div.description", s_item: "div.box > div > div.list2", s_title: "h3 a", s_link: "h3 a@href", s_cover: "img@img" }, d = { img: function (r) { if (!r)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < a.length; c++) {
                                                                var l = r.attr(a[c]);
                                                                if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                                    return d.fix(l.trim());
                                                            } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? k + r : k + "/" + r) : ""; }, text: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(c < a.length)) return [3, 4];
                                                                            return [4, r.select(a[c]).text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, l.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            c++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            c = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (l in a.headers)
                                                                                    c[l] = a.headers[l];
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 1:
                                                                            f = _c.sent(), p = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = f && f.status === 429 && p < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(f)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, E(1500 * (p + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 6:
                                                                            f = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            p++;
                                                                            return [3, 2];
                                                                        case 8: return [2, f];
                                                                    }
                                                                }); });
                                                            }, cf: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, r.text()];
                                                                        case 1:
                                                                            a = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(a.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.ok)
                                                                                return [2, r];
                                                                            return [4, d.cf(r)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + a.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + a);
                                                                    }
                                                                }); });
                                                            }, html: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (r) { var a = parseInt(r || "1", 10); return isNaN(a) || a < 1 ? 1 : a; }, next: function (r, a) { return r ? String(d.page(a) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, r.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, v = { pick: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, g, x, b, w, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !r)
                                                                                return [2, ""];
                                                                            c = String(a).split(" || "), l = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(l < c.length)) return [3, 9];
                                                                            f = c[l], p = "text", g = f.lastIndexOf("@");
                                                                            g > 0 && !/\[[^\]]*@/.test(f.slice(g)) && (p = f.slice(g + 1), f = f.slice(0, g));
                                                                            x = f === ":self" ? null : r.select(f), b = f === ":self" ? r : x.size() ? x.first() : null;
                                                                            if (!b) return [3, 8];
                                                                            if (!(p === "text")) return [3, 3];
                                                                            return [4, b.text()];
                                                                        case 2:
                                                                            _b = _d.sent();
                                                                            return [3, 7];
                                                                        case 3:
                                                                            if (!(p === "html")) return [3, 5];
                                                                            return [4, b.html()];
                                                                        case 4:
                                                                            _c = _d.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _c = p === "img" ? d.img(b.is("img") ? b : b.select("img").first()) : p === "own" ? b.ownText() : b.attr(p);
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
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 9: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, url: function (r, a, c) { var l = d.page(a), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, g) { return l > 1 ? g : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(c || "")).replace(/\{base\}/g, k), d.fix(f); }, items: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var c, l, f, p, g, x, b, w, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                c = function (A) { return a && o[a + A] || o[A]; }, l = r.select(c("item")), f = [], p = {}, g = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(g < l.size())) return [3, 9];
                                                                                return [4, l.get(g)];
                                                                            case 2:
                                                                                x = _g.sent();
                                                                                return [4, v.pick(x, c("link") || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || p[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, v.pick(x, c("title") || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                w = _g.sent();
                                                                                _b = w;
                                                                                if (!_b) return [3, 7];
                                                                                p[b] = 1;
                                                                                _d = (_c = f).push;
                                                                                _f = { name: w, link: d.fix(b) };
                                                                                return [4, v.pick(x, c("cover") || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, v.pick(x, c("desc") || "")];
                                                                            case 6:
                                                                                _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = k, _f)]));
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                _b;
                                                                                _g.label = 8;
                                                                            case 8:
                                                                                g++;
                                                                                return [3, 1];
                                                                            case 9: return [2, f];
                                                                        }
                                                                    });
                                                                });
                                                            }, listPage: function (r, a, c) {
                                                                return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(v.url(r, a, c), o.req)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, v.items(l, c ? "s_" : "")];
                                                                        case 2:
                                                                            f = _b.sent(), p = o.next ? l.select(o.next).size() > 0 : f.length >= (o.pageSize || 10);
                                                                            return [2, s.success(f, d.next(p && f.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = o.tabs && o.tabs[r] || r;
                                                                            return [4, v.listPage(c, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!d.isUrl(r)) return [3, 2];
                                                                            c = d.fix(r);
                                                                            return [4, v.listPage(c + (c.indexOf("?") > 0 ? "&" : "?") + (o.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                        case 2:
                                                                            if (!o.search_post) return [3, 5];
                                                                            return [4, d.html(v.url(o.search_post.url, a, r), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: String(o.search_post.body).replace(/\{q\}/g, d.enc(r)) })];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            return [4, v.items(l, "s_")];
                                                                        case 4:
                                                                            f = _b.sent();
                                                                            return [2, s.success(f, null)];
                                                                        case 5: return [4, v.listPage(o.search, a, r)];
                                                                        case 6: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var r, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.genre)
                                                                                return [2, s.success([])];
                                                                            return [4, d.html(d.fix(o.genrePage || "/"))];
                                                                        case 1:
                                                                            r = _b.sent();
                                                                            return [4, z(r.select(o.genre), function (c) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, c.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(c.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, s.success(a.filter(function (c) { return c.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(r, o.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!o.d_genres) return [3, 3];
                                                                                return [4, z(a.select(o.d_genres), function (f) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, f.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
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
                                                                                c = _b;
                                                                                return [4, v.pick(a, o.d_status)];
                                                                            case 5:
                                                                                l = _j.sent();
                                                                                _d = (_c = s).success;
                                                                                _h = {};
                                                                                return [4, v.pick(a, o.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, v.pick(a, o.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, v.pick(a, o.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, v.pick(a, (o.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = c, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, f, p, _b, g, x, b, w, A, _c, _d, _f, _g, L, M, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!o.ch_action) return [3, 2];
                                                                                return [4, v.actionToc(r)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (o.single)
                                                                                    return [2, s.success([{ name: o.single === !0 ? "Xem / Đọc" : o.single, url: r, host: k }])];
                                                                                a = [r], c = [], l = {};
                                                                                return [4, d.html(o.ch_rewrite ? r.replace(new RegExp(o.ch_rewrite[0]), o.ch_rewrite[1]) : r, o.req)];
                                                                            case 3:
                                                                                f = _k.sent();
                                                                                if (!o.ch_url) return [3, 7];
                                                                                return [4, v.pick(f, o.ch_url)];
                                                                            case 4:
                                                                                p = _k.sent();
                                                                                _b = p;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(p), o.req)];
                                                                            case 5:
                                                                                _b = (f = _k.sent());
                                                                                _k.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _k.label = 7;
                                                                            case 7:
                                                                                g = 0;
                                                                                _k.label = 8;
                                                                            case 8:
                                                                                if (!(g < (o.ch_maxPages || 60))) return [3, 22];
                                                                                x = f.select(o.ch_list), b = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(b < x.size())) return [3, 17];
                                                                                return [4, x.get(b)];
                                                                            case 10:
                                                                                w = _k.sent(), A = o.ch_attr ? w.attr(o.ch_attr) : w.attr("href") || w.attr("data-href");
                                                                                _c = !A || A === "#" || l[A];
                                                                                if (_c) return [3, 15];
                                                                                l[A] = 1;
                                                                                _f = (_d = c).push;
                                                                                _j = {};
                                                                                if (!o.ch_name) return [3, 12];
                                                                                return [4, v.pick(w, o.ch_name)];
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
                                                                                L = o.ch_next ? f.select(o.ch_next).first() : null;
                                                                                if (!L || !L.attr("href"))
                                                                                    return [3, 22];
                                                                                M = d.fix(L.attr("href"));
                                                                                if (a.indexOf(M) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(M);
                                                                                _h = o.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, E(o.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(M, o.req)];
                                                                            case 20:
                                                                                f = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                g++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (o.ch_reverse && c.reverse(), !c.length && o.ch_fallback_single && c.push({ name: o.ch_fallback_single === !0 ? "Xem phim" : o.ch_fallback_single, url: r, host: k }), s.success(c))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, f, p, g, x, b, _b, _c, w, A; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            a = [], c = [r], l = r, f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < (o.pages_max || 40))) return [3, 8];
                                                                            return [4, d.html(l, o.req)];
                                                                        case 2:
                                                                            p = _d.sent(), g = p.select(o.pages || ".page-chapter img, .reading-content img, .chapter-content img"), x = 0;
                                                                            _d.label = 3;
                                                                        case 3:
                                                                            if (!(x < g.size())) return [3, 6];
                                                                            _c = (_b = d).img;
                                                                            return [4, g.get(x)];
                                                                        case 4:
                                                                            b = _c.apply(_b, [_d.sent()]);
                                                                            b && a.indexOf(b) < 0 && a.push(b);
                                                                            _d.label = 5;
                                                                        case 5:
                                                                            x++;
                                                                            return [3, 3];
                                                                        case 6:
                                                                            if (!o.pages_next)
                                                                                return [3, 8];
                                                                            w = p.select(o.pages_next).first();
                                                                            if (!w)
                                                                                return [3, 8];
                                                                            A = d.fix(w.attr("href"));
                                                                            if (!A || c.indexOf(A) >= 0)
                                                                                return [3, 8];
                                                                            c.push(A), l = A;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            f++;
                                                                            return [3, 1];
                                                                        case 8: return [2, s.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, _b, _c, l, f, p, _d, _f, _g, g, x, _h, _j, _k, _l, _m, _o; return __generator(this, function (_p) {
                                                                    switch (_p.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_p.sent(), r])];
                                                                        case 2:
                                                                            a = _p.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            c = (_p.sent()) || "";
                                                                            if (!o.content_rsc) return [3, 5];
                                                                            l = v.rscText(c), f = o.c_locked && new RegExp(o.c_locked, "i").test(c), p = f ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(l || f)) return [3, 5];
                                                                            _f = (_d = s).success;
                                                                            _g = [v.toParas(l) + p];
                                                                            return [4, v.pick(n.parse(c, r), o.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_p.sent()]))];
                                                                        case 5:
                                                                            g = n.parse(c, r), x = g.select(o.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!x) return [3, 7];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(c.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _j = (_h = s).error;
                                                                            _k = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, v.pick(g, "title")];
                                                                        case 6: return [2, _j.apply(_h, [_k + ((_p.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + c.length + " ký tự)" + (c.length < 400 ? ": " + c.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 7:
                                                                            _m = (_l = s).success;
                                                                            return [4, d.cleanContent(x)];
                                                                        case 8:
                                                                            _o = [_p.sent()];
                                                                            return [4, v.pick(g, o.c_title || "h1 || h2")];
                                                                        case 9: return [2, _m.apply(_l, _o.concat([_p.sent()]))];
                                                                    }
                                                                }); });
                                                            }, rscAction: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, g, x, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (c = [], f = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; l = f.exec(r);)
                                                                                c.indexOf(l[0]) < 0 && c.push(l[0]);
                                                                            p = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), g = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(g < c.length && g < 60)) return [3, 5];
                                                                            return [4, d.get(k + c[g])];
                                                                        case 2:
                                                                            x = _d.sent();
                                                                            if (!!(!x || !x.ok)) return [3, 4];
                                                                            _c = (_b = p).exec;
                                                                            return [4, x.text()];
                                                                        case 3:
                                                                            b = _c.apply(_b, [(_d.sent()) || ""]);
                                                                            if (b)
                                                                                return [2, b[1]];
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            g++;
                                                                            return [3, 1];
                                                                        case 5: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, rscArray: function (r) {
                                                                for (var a = String(r || "").split("\n"), c = 0; c < a.length; c++) {
                                                                    var l = /^[0-9a-f]+:(\[.*)$/.exec(a[c]);
                                                                    if (l)
                                                                        try {
                                                                            var f = JSON.parse(l[1]);
                                                                            if (f && f.length)
                                                                                return f;
                                                                        }
                                                                        catch (p) { }
                                                                }
                                                                return null;
                                                            }, actionToc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, _b, _c, f, p, g, _d, x, _f, b; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = o.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), r])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            c = (_g.sent()) || "", l = new RegExp(a.arg).exec(c);
                                                                            if (!l)
                                                                                return [2, s.error("Không tìm thấy mã truyện trên trang " + r)];
                                                                            f = JSON.stringify([l[1]]), p = function (w) {
                                                                                return __awaiter(this, void 0, void 0, function () { var A, _b, _c, _d; return __generator(this, function (_f) {
                                                                                    switch (_f.label) {
                                                                                        case 0: return [4, d.get(r, { method: "POST", headers: { "Next-Action": w, Accept: "text/x-component", "Content-Type": "text/plain;charset=UTF-8" }, body: f })];
                                                                                        case 1:
                                                                                            A = _f.sent();
                                                                                            if (!(A && A.ok)) return [3, 3];
                                                                                            _d = (_c = v).rscArray;
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
                                                                            return [4, p(a.id)];
                                                                        case 4:
                                                                            _d = _g.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _d = null;
                                                                            _g.label = 6;
                                                                        case 6:
                                                                            g = _d;
                                                                            if (!!g) return [3, 10];
                                                                            return [4, v.rscAction(c, a.name)];
                                                                        case 7:
                                                                            x = _g.sent();
                                                                            _f = x && x !== a.id;
                                                                            if (!_f) return [3, 9];
                                                                            return [4, p(x)];
                                                                        case 8:
                                                                            _f = (g = _g.sent());
                                                                            _g.label = 9;
                                                                        case 9:
                                                                            _f;
                                                                            _g.label = 10;
                                                                        case 10:
                                                                            if (!g)
                                                                                return [2, s.error('Không lấy được danh sách chương (Server Action "' + a.name + '")')];
                                                                            b = r.replace(/[?#].*$/, "").replace(/\/+$/, "");
                                                                            return [2, s.success(g.map(function (w) { return { name: String(w[a.title || "label"] || "") + (a.lock && w[a.lock] ? " 🔒" : ""), url: b + "/" + w[a.slug || "slugId"], host: k }; }))];
                                                                    }
                                                                }); });
                                                            }, rscText: function (r) { for (var a = "", c, l = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; c = l.exec(r);)
                                                                try {
                                                                    a += JSON.parse(c[1]);
                                                                }
                                                                catch (M) { } for (var f = "", p = /([0-9a-f]+):T([0-9a-f]+),/g, g; g = p.exec(a);) {
                                                                for (var x = parseInt(g[2], 16), b = p.lastIndex, w = 0; b < a.length && w < x;) {
                                                                    var A = a.charCodeAt(b);
                                                                    A < 128 ? w += 1 : A < 2048 ? w += 2 : A >= 55296 && A <= 56319 ? (w += 4, b++) : w += 3, b++;
                                                                }
                                                                var L = a.slice(p.lastIndex, b);
                                                                L.length > f.length && (f = L), p.lastIndex = b;
                                                            } return f; }, toParas: function (r) { return /<p[\s>]|<br\s*\/?>/i.test(r) ? r : r.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.servers)
                                                                                return [2, s.success([{ title: "Server", data: r }])];
                                                                            return [4, d.html(r, o.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, z(a.select(o.servers), function (l) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var f;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, v.pick(l, o.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                                case 1:
                                                                                                    f = _c.sent();
                                                                                                    _b = {};
                                                                                                    return [4, l.text()];
                                                                                                case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            c = (_b.sent()).filter(function (l) { return l.data; });
                                                                            return [2, s.success(c.length ? c : [{ title: "Server", data: r }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var a = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, g, x, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                                return [2, s.success({ type: "native", data: r, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(r)];
                                                                        case 1:
                                                                            c = _b.sent();
                                                                            return [4, c.text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (!(o.video && !a)) return [3, 4];
                                                                            return [4, v.pick(n.parse(l, r), o.video)];
                                                                        case 3:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            p = v.sniff(l);
                                                                            if (p)
                                                                                return [2, s.success({ type: "native", data: p, headers: { Referer: a ? r : k + "/" } })];
                                                                            g = n.parse(l, r), x = g.select(o.iframe || "iframe[src], iframe[data-src]").first();
                                                                            if (!(x && a < 2)) return [3, 6];
                                                                            b = d.fix(x.attr("src") || x.attr("data-src"));
                                                                            if (!b) return [3, 6];
                                                                            return [4, v.track(b, a + 1)];
                                                                        case 5: return [2, _b.sent()];
                                                                        case 6: return [2, s.success({ type: "webview", data: r })];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof G == "function" ? G : void 0];
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
                return [2, (function (u, i, n, s, h, m, y, S, E, D, q, N, I, U, W, Z, ne) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = e("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function G(r, a) {
                                                        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                            switch (_b.label) {
                                                                case 0: return [4, v.browse(r, a)];
                                                                case 1: return [2, _b.sent()];
                                                            }
                                                        }); });
                                                    }
                                                    var k, o, d, v;
                                                    return __generator(this, function (_b) {
                                                        k = "https://quanben.io";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (r) { }
                                                        o = { tabs: { "Mới cập nhật": "/[?page={p}]" }, search: "/index.php?c=book&a=search&keywords={q}", ch_list: "div.tool_button a", item: "ul.list > li", link: "a@href", title: "a", d_title: "h1 || meta[property=og:title]@content", d_cover: "meta[property=og:image]@content || img@img", d_desc: "meta[property=og:description]@content || meta[name=description]@content", content: "div.description", s_item: "div.box > div > div.list2", s_title: "h3 a", s_link: "h3 a@href", s_cover: "img@img" }, d = { img: function (r) { if (!r)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < a.length; c++) {
                                                                var l = r.attr(a[c]);
                                                                if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                                    return d.fix(l.trim());
                                                            } var f = r.attr("data-srcset") || r.attr("srcset"); return f ? d.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (r) { return r ? (r = String(r).trim(), r.indexOf("//") === 0 ? "https:" + r : r.indexOf("http") === 0 ? r : r.charAt(0) === "/" ? k + r : k + "/" + r) : ""; }, text: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(c < a.length)) return [3, 4];
                                                                            return [4, r.select(a[c]).text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, l.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            c++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            c = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (l in a.headers)
                                                                                    c[l] = a.headers[l];
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 1:
                                                                            f = _c.sent(), p = 0;
                                                                            _c.label = 2;
                                                                        case 2:
                                                                            _b = f && f.status === 429 && p < 3;
                                                                            if (!_b) return [3, 4];
                                                                            return [4, d.cf(f)];
                                                                        case 3:
                                                                            _b = !(_c.sent());
                                                                            _c.label = 4;
                                                                        case 4:
                                                                            if (!_b) return [3, 8];
                                                                            return [4, E(1500 * (p + 1))];
                                                                        case 5:
                                                                            _c.sent();
                                                                            return [4, u(r, { method: a.method, headers: c, body: a.body })];
                                                                        case 6:
                                                                            f = _c.sent();
                                                                            _c.label = 7;
                                                                        case 7:
                                                                            p++;
                                                                            return [3, 2];
                                                                        case 8: return [2, f];
                                                                    }
                                                                }); });
                                                            }, cf: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.status !== 403 && r.status !== 503 && r.status !== 429)
                                                                                return [2, !1];
                                                                            return [4, r.text()];
                                                                        case 1:
                                                                            a = (_b.sent()) || "";
                                                                            return [2, /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(a.slice(0, 2e4))];
                                                                    }
                                                                }); });
                                                            }, check: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (r.ok)
                                                                                return [2, r];
                                                                            return [4, d.cf(r)];
                                                                        case 1: throw (_b.sent()) ? new Error("CLOUDFLARE: trang " + a.split("/").slice(0, 3).join("/") + " yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.") : new Error("HTTP " + r.status + " " + a);
                                                                    }
                                                                }); });
                                                            }, html: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), r])];
                                                                        case 2:
                                                                            c = _d.sent();
                                                                            return [4, c.json()];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, page: function (r) { var a = parseInt(r || "1", 10); return isNaN(a) || a < 1 ? 1 : a; }, next: function (r, a) { return r ? String(d.page(a) + 1) : ""; }, isUrl: function (r) { return /^(https?:)?\/\//.test(r || "") || (r || "").charAt(0) === "/"; }, enc: function (r) { return encodeURIComponent(r || ""); }, cleanContent: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    return __generator(this, function (_b) {
                                                                        switch (_b.label) {
                                                                            case 0:
                                                                                r.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                                return [4, r.html()];
                                                                            case 1: return [2, (_b.sent()).replace(/\r\n?/g, "\n").replace(/&#13;|&#x0?[dD];/g, "").replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                                        }
                                                                    });
                                                                });
                                                            }, ongoing: function (r) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(r || ""); } }, v = { pick: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, g, x, b, w, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !r)
                                                                                return [2, ""];
                                                                            c = String(a).split(" || "), l = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(l < c.length)) return [3, 9];
                                                                            f = c[l], p = "text", g = f.lastIndexOf("@");
                                                                            g > 0 && !/\[[^\]]*@/.test(f.slice(g)) && (p = f.slice(g + 1), f = f.slice(0, g));
                                                                            x = f === ":self" ? null : r.select(f), b = f === ":self" ? r : x.size() ? x.first() : null;
                                                                            if (!b) return [3, 8];
                                                                            if (!(p === "text")) return [3, 3];
                                                                            return [4, b.text()];
                                                                        case 2:
                                                                            _b = _d.sent();
                                                                            return [3, 7];
                                                                        case 3:
                                                                            if (!(p === "html")) return [3, 5];
                                                                            return [4, b.html()];
                                                                        case 4:
                                                                            _c = _d.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _c = p === "img" ? d.img(b.is("img") ? b : b.select("img").first()) : p === "own" ? b.ownText() : b.attr(p);
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
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 9: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, url: function (r, a, c) { var l = d.page(a), f = String(r); return f = f.replace(/\[([^\]]*)\]/g, function (p, g) { return l > 1 ? g : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, d.enc(c || "")).replace(/\{base\}/g, k), d.fix(f); }, items: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var c, l, f, p, g, x, b, w, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                c = function (A) { return a && o[a + A] || o[A]; }, l = r.select(c("item")), f = [], p = {}, g = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(g < l.size())) return [3, 9];
                                                                                return [4, l.get(g)];
                                                                            case 2:
                                                                                x = _g.sent();
                                                                                return [4, v.pick(x, c("link") || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || p[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, v.pick(x, c("title") || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                w = _g.sent();
                                                                                _b = w;
                                                                                if (!_b) return [3, 7];
                                                                                p[b] = 1;
                                                                                _d = (_c = f).push;
                                                                                _f = { name: w, link: d.fix(b) };
                                                                                return [4, v.pick(x, c("cover") || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, v.pick(x, c("desc") || "")];
                                                                            case 6:
                                                                                _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = k, _f)]));
                                                                                _g.label = 7;
                                                                            case 7:
                                                                                _b;
                                                                                _g.label = 8;
                                                                            case 8:
                                                                                g++;
                                                                                return [3, 1];
                                                                            case 9: return [2, f];
                                                                        }
                                                                    });
                                                                });
                                                            }, listPage: function (r, a, c) {
                                                                return __awaiter(this, void 0, void 0, function () { var l, f, p; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(v.url(r, a, c), o.req)];
                                                                        case 1:
                                                                            l = _b.sent();
                                                                            return [4, v.items(l, c ? "s_" : "")];
                                                                        case 2:
                                                                            f = _b.sent(), p = o.next ? l.select(o.next).size() > 0 : f.length >= (o.pageSize || 10);
                                                                            return [2, s.success(f, d.next(p && f.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            c = o.tabs && o.tabs[r] || r;
                                                                            return [4, v.listPage(c, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!d.isUrl(r)) return [3, 2];
                                                                            c = d.fix(r);
                                                                            return [4, v.listPage(c + (c.indexOf("?") > 0 ? "&" : "?") + (o.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                        case 2:
                                                                            if (!o.search_post) return [3, 5];
                                                                            return [4, d.html(v.url(o.search_post.url, a, r), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: String(o.search_post.body).replace(/\{q\}/g, d.enc(r)) })];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            return [4, v.items(l, "s_")];
                                                                        case 4:
                                                                            f = _b.sent();
                                                                            return [2, s.success(f, null)];
                                                                        case 5: return [4, v.listPage(o.search, a, r)];
                                                                        case 6: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var r, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.genre)
                                                                                return [2, s.success([])];
                                                                            return [4, d.html(d.fix(o.genrePage || "/"))];
                                                                        case 1:
                                                                            r = _b.sent();
                                                                            return [4, z(r.select(o.genre), function (c) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, c.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(c.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, s.success(a.filter(function (c) { return c.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(r, o.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!o.d_genres) return [3, 3];
                                                                                return [4, z(a.select(o.d_genres), function (f) {
                                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                                            var _b;
                                                                                            return __generator(this, function (_c) {
                                                                                                switch (_c.label) {
                                                                                                    case 0:
                                                                                                        _b = {};
                                                                                                        return [4, f.text()];
                                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(f.attr("href")), _b.script = "search.js", _b)];
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
                                                                                c = _b;
                                                                                return [4, v.pick(a, o.d_status)];
                                                                            case 5:
                                                                                l = _j.sent();
                                                                                _d = (_c = s).success;
                                                                                _h = {};
                                                                                return [4, v.pick(a, o.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, v.pick(a, o.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, v.pick(a, o.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, v.pick(a, (o.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = d.ongoing(l), _h.genres = c, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, c, l, f, p, _b, g, x, b, w, A, _c, _d, _f, _g, L, M, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!o.ch_action) return [3, 2];
                                                                                return [4, v.actionToc(r)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (o.single)
                                                                                    return [2, s.success([{ name: o.single === !0 ? "Xem / Đọc" : o.single, url: r, host: k }])];
                                                                                a = [r], c = [], l = {};
                                                                                return [4, d.html(o.ch_rewrite ? r.replace(new RegExp(o.ch_rewrite[0]), o.ch_rewrite[1]) : r, o.req)];
                                                                            case 3:
                                                                                f = _k.sent();
                                                                                if (!o.ch_url) return [3, 7];
                                                                                return [4, v.pick(f, o.ch_url)];
                                                                            case 4:
                                                                                p = _k.sent();
                                                                                _b = p;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(p), o.req)];
                                                                            case 5:
                                                                                _b = (f = _k.sent());
                                                                                _k.label = 6;
                                                                            case 6:
                                                                                _b;
                                                                                _k.label = 7;
                                                                            case 7:
                                                                                g = 0;
                                                                                _k.label = 8;
                                                                            case 8:
                                                                                if (!(g < (o.ch_maxPages || 60))) return [3, 22];
                                                                                x = f.select(o.ch_list), b = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(b < x.size())) return [3, 17];
                                                                                return [4, x.get(b)];
                                                                            case 10:
                                                                                w = _k.sent(), A = o.ch_attr ? w.attr(o.ch_attr) : w.attr("href") || w.attr("data-href");
                                                                                _c = !A || A === "#" || l[A];
                                                                                if (_c) return [3, 15];
                                                                                l[A] = 1;
                                                                                _f = (_d = c).push;
                                                                                _j = {};
                                                                                if (!o.ch_name) return [3, 12];
                                                                                return [4, v.pick(w, o.ch_name)];
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
                                                                                L = o.ch_next ? f.select(o.ch_next).first() : null;
                                                                                if (!L || !L.attr("href"))
                                                                                    return [3, 22];
                                                                                M = d.fix(L.attr("href"));
                                                                                if (a.indexOf(M) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(M);
                                                                                _h = o.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, E(o.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(M, o.req)];
                                                                            case 20:
                                                                                f = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                g++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (o.ch_reverse && c.reverse(), !c.length && o.ch_fallback_single && c.push({ name: o.ch_fallback_single === !0 ? "Xem phim" : o.ch_fallback_single, url: r, host: k }), s.success(c))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, f, p, g, x, b, _b, _c, w, A; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            a = [], c = [r], l = r, f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < (o.pages_max || 40))) return [3, 8];
                                                                            return [4, d.html(l, o.req)];
                                                                        case 2:
                                                                            p = _d.sent(), g = p.select(o.pages || ".page-chapter img, .reading-content img, .chapter-content img"), x = 0;
                                                                            _d.label = 3;
                                                                        case 3:
                                                                            if (!(x < g.size())) return [3, 6];
                                                                            _c = (_b = d).img;
                                                                            return [4, g.get(x)];
                                                                        case 4:
                                                                            b = _c.apply(_b, [_d.sent()]);
                                                                            b && a.indexOf(b) < 0 && a.push(b);
                                                                            _d.label = 5;
                                                                        case 5:
                                                                            x++;
                                                                            return [3, 3];
                                                                        case 6:
                                                                            if (!o.pages_next)
                                                                                return [3, 8];
                                                                            w = p.select(o.pages_next).first();
                                                                            if (!w)
                                                                                return [3, 8];
                                                                            A = d.fix(w.attr("href"));
                                                                            if (!A || c.indexOf(A) >= 0)
                                                                                return [3, 8];
                                                                            c.push(A), l = A;
                                                                            _d.label = 7;
                                                                        case 7:
                                                                            f++;
                                                                            return [3, 1];
                                                                        case 8: return [2, s.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, _b, _c, l, f, p, _d, _f, _g, g, x, _h, _j, _k, _l, _m, _o; return __generator(this, function (_p) {
                                                                    switch (_p.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_p.sent(), r])];
                                                                        case 2:
                                                                            a = _p.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            c = (_p.sent()) || "";
                                                                            if (!o.content_rsc) return [3, 5];
                                                                            l = v.rscText(c), f = o.c_locked && new RegExp(o.c_locked, "i").test(c), p = f ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(l || f)) return [3, 5];
                                                                            _f = (_d = s).success;
                                                                            _g = [v.toParas(l) + p];
                                                                            return [4, v.pick(n.parse(c, r), o.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_p.sent()]))];
                                                                        case 5:
                                                                            g = n.parse(c, r), x = g.select(o.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!x) return [3, 7];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(c.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _j = (_h = s).error;
                                                                            _k = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, v.pick(g, "title")];
                                                                        case 6: return [2, _j.apply(_h, [_k + ((_p.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + c.length + " ký tự)" + (c.length < 400 ? ": " + c.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 7:
                                                                            _m = (_l = s).success;
                                                                            return [4, d.cleanContent(x)];
                                                                        case 8:
                                                                            _o = [_p.sent()];
                                                                            return [4, v.pick(g, o.c_title || "h1 || h2")];
                                                                        case 9: return [2, _m.apply(_l, _o.concat([_p.sent()]))];
                                                                    }
                                                                }); });
                                                            }, rscAction: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, g, x, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (c = [], f = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; l = f.exec(r);)
                                                                                c.indexOf(l[0]) < 0 && c.push(l[0]);
                                                                            p = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), g = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(g < c.length && g < 60)) return [3, 5];
                                                                            return [4, d.get(k + c[g])];
                                                                        case 2:
                                                                            x = _d.sent();
                                                                            if (!!(!x || !x.ok)) return [3, 4];
                                                                            _c = (_b = p).exec;
                                                                            return [4, x.text()];
                                                                        case 3:
                                                                            b = _c.apply(_b, [(_d.sent()) || ""]);
                                                                            if (b)
                                                                                return [2, b[1]];
                                                                            _d.label = 4;
                                                                        case 4:
                                                                            g++;
                                                                            return [3, 1];
                                                                        case 5: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, rscArray: function (r) {
                                                                for (var a = String(r || "").split("\n"), c = 0; c < a.length; c++) {
                                                                    var l = /^[0-9a-f]+:(\[.*)$/.exec(a[c]);
                                                                    if (l)
                                                                        try {
                                                                            var f = JSON.parse(l[1]);
                                                                            if (f && f.length)
                                                                                return f;
                                                                        }
                                                                        catch (p) { }
                                                                }
                                                                return null;
                                                            }, actionToc: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c, l, _b, _c, f, p, g, _d, x, _f, b; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = o.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(r, o.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), r])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            c = (_g.sent()) || "", l = new RegExp(a.arg).exec(c);
                                                                            if (!l)
                                                                                return [2, s.error("Không tìm thấy mã truyện trên trang " + r)];
                                                                            f = JSON.stringify([l[1]]), p = function (w) {
                                                                                return __awaiter(this, void 0, void 0, function () { var A, _b, _c, _d; return __generator(this, function (_f) {
                                                                                    switch (_f.label) {
                                                                                        case 0: return [4, d.get(r, { method: "POST", headers: { "Next-Action": w, Accept: "text/x-component", "Content-Type": "text/plain;charset=UTF-8" }, body: f })];
                                                                                        case 1:
                                                                                            A = _f.sent();
                                                                                            if (!(A && A.ok)) return [3, 3];
                                                                                            _d = (_c = v).rscArray;
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
                                                                            return [4, p(a.id)];
                                                                        case 4:
                                                                            _d = _g.sent();
                                                                            return [3, 6];
                                                                        case 5:
                                                                            _d = null;
                                                                            _g.label = 6;
                                                                        case 6:
                                                                            g = _d;
                                                                            if (!!g) return [3, 10];
                                                                            return [4, v.rscAction(c, a.name)];
                                                                        case 7:
                                                                            x = _g.sent();
                                                                            _f = x && x !== a.id;
                                                                            if (!_f) return [3, 9];
                                                                            return [4, p(x)];
                                                                        case 8:
                                                                            _f = (g = _g.sent());
                                                                            _g.label = 9;
                                                                        case 9:
                                                                            _f;
                                                                            _g.label = 10;
                                                                        case 10:
                                                                            if (!g)
                                                                                return [2, s.error('Không lấy được danh sách chương (Server Action "' + a.name + '")')];
                                                                            b = r.replace(/[?#].*$/, "").replace(/\/+$/, "");
                                                                            return [2, s.success(g.map(function (w) { return { name: String(w[a.title || "label"] || "") + (a.lock && w[a.lock] ? " 🔒" : ""), url: b + "/" + w[a.slug || "slugId"], host: k }; }))];
                                                                    }
                                                                }); });
                                                            }, rscText: function (r) { for (var a = "", c, l = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; c = l.exec(r);)
                                                                try {
                                                                    a += JSON.parse(c[1]);
                                                                }
                                                                catch (M) { } for (var f = "", p = /([0-9a-f]+):T([0-9a-f]+),/g, g; g = p.exec(a);) {
                                                                for (var x = parseInt(g[2], 16), b = p.lastIndex, w = 0; b < a.length && w < x;) {
                                                                    var A = a.charCodeAt(b);
                                                                    A < 128 ? w += 1 : A < 2048 ? w += 2 : A >= 55296 && A <= 56319 ? (w += 4, b++) : w += 3, b++;
                                                                }
                                                                var L = a.slice(p.lastIndex, b);
                                                                L.length > f.length && (f = L), p.lastIndex = b;
                                                            } return f; }, toParas: function (r) { return /<p[\s>]|<br\s*\/?>/i.test(r) ? r : r.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (r) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, c; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!o.servers)
                                                                                return [2, s.success([{ title: "Server", data: r }])];
                                                                            return [4, d.html(r, o.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, z(a.select(o.servers), function (l) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var f;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, v.pick(l, o.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                                case 1:
                                                                                                    f = _c.sent();
                                                                                                    _b = {};
                                                                                                    return [4, l.text()];
                                                                                                case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = d.fix(f), _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            c = (_b.sent()).filter(function (l) { return l.data; });
                                                                            return [2, s.success(c.length ? c : [{ title: "Server", data: r }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (r) { r = String(r || "").replace(/\\\//g, "/"); var a = r.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || r.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (r, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var c, l, f, p, g, x, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(r))
                                                                                return [2, s.success({ type: "native", data: r, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(r)];
                                                                        case 1:
                                                                            c = _b.sent();
                                                                            return [4, c.text()];
                                                                        case 2:
                                                                            l = _b.sent();
                                                                            if (!(o.video && !a)) return [3, 4];
                                                                            return [4, v.pick(n.parse(l, r), o.video)];
                                                                        case 3:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, s.success({ type: "native", data: d.fix(f), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            p = v.sniff(l);
                                                                            if (p)
                                                                                return [2, s.success({ type: "native", data: p, headers: { Referer: a ? r : k + "/" } })];
                                                                            g = n.parse(l, r), x = g.select(o.iframe || "iframe[src], iframe[data-src]").first();
                                                                            if (!(x && a < 2)) return [3, 6];
                                                                            b = d.fix(x.attr("src") || x.attr("data-src"));
                                                                            if (!b) return [3, 6];
                                                                            return [4, v.track(b, a + 1)];
                                                                        case 5: return [2, _b.sent()];
                                                                        case 6: return [2, s.success({ type: "webview", data: r })];
                                                                    }
                                                                }); });
                                                            } };
                                                        return [2, typeof G == "function" ? G : void 0];
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
function Vr(t) { return new Nt({ meta: fe, scripts: Fr, host: t }); }
var xi = require("@libs/fetch").fetchApi, Ze = null;
try {
    Ze = require("@libs/storage");
}
catch (t) {
    Ze = null;
}
var qu = {}, Ct = Ze && Ze.storage ? Ze.storage : { get: function (t) { return qu[t]; }, set: function (t, e) { qu[t] = e; }, delete: function (t) { delete qu[t]; } }, Nu = (function () {
    function class_2() {
        var _this = this;
        this.id = fe.lnId, this.name = fe.name, this.icon = fe.lnIcon, this.site = fe.source, this.version = fe.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = Vr({ name: "LNReader", request: function (e) { return __awaiter(_this, void 0, void 0, function () {
                var u, i, n;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            u = { method: e.method, headers: e.headers };
                            e.body != null && e.method !== "GET" && (u.body = e.body);
                            return [4, xi(e.url, u)];
                        case 1:
                            i = _c.sent(), n = {};
                            try {
                                i.headers.forEach(function (s, h) { n[h] = s; });
                            }
                            catch (s) { }
                            _b = { status: i.status, url: i.url || e.url, headers: n };
                            return [4, i.text()];
                        case 2: return [2, (_b.text = _c.sent(), _b)];
                    }
                });
            }); }, storageGet: function (e) { var u = Ct.get("vb_" + e); return u == null ? null : String(u); }, storageSet: function (e, u) { u == null ? Ct.delete && Ct.delete("vb_" + e) : Ct.set("vb_" + e, String(u)); }, config: function (e) { return null; }, log: function (e) { return console.log(e); } });
    }
    class_2.prototype.popularNovels = function (e, u) {
        return __awaiter(this, void 0, void 0, function () { var _b; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(u && u.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(e)];
                case 1:
                    _b = _c.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(e)];
                case 3:
                    _b = _c.sent();
                    _c.label = 4;
                case 4: return [2, (_b).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.search(e, u)];
                case 1: return [2, (_b.sent()).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u, i; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.detail(e)];
                case 1:
                    u = _b.sent();
                    return [4, this.engine.chapters(e)];
                case 2:
                    i = _b.sent();
                    return [2, { path: e, name: u.name || "Untitled", cover: u.cover, summary: u.description, author: u.author, status: u.ongoing ? "Ongoing" : "Completed", genres: u.genres.join(","), chapters: i.map(function (n, s) { return ({ name: n.name, path: n.url, chapterNumber: s + 1 }); }) }];
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
    class_2.prototype.resolveUrl = function (e, u) { return /^https?:/i.test(e) ? e : fe.source.replace(/\/+$/, "") + "/" + String(e).replace(/^\/+/, ""); };
    return class_2;
}()), vi = new Nu;

if (typeof exports === "object" && exports && module.exports !== exports && module.exports && module.exports.default) exports.default = module.exports.default;
