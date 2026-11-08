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
var e_1, _a;
var Yr = Object.create;
var Ke = Object.defineProperty, _r = Object.defineProperties, e0 = Object.getOwnPropertyDescriptor, u0 = Object.getOwnPropertyDescriptors, t0 = Object.getOwnPropertyNames, Ft = Object.getOwnPropertySymbols, r0 = Object.getPrototypeOf, Gt = Object.prototype.hasOwnProperty, n0 = Object.prototype.propertyIsEnumerable;
var Vt = function (u, e, t) { return e in u ? Ke(u, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : u[e] = t; }, de = function (u, e) {
    var e_2, _a;
    for (var t in e || (e = {}))
        Gt.call(e, t) && Vt(u, t, e[t]);
    if (Ft)
        try {
            for (var _b = __values(Ft(e)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                n0.call(e, t) && Vt(u, t, e[t]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    return u;
}, ke = function (u, e) { return _r(u, u0(e)); };
var i0 = function (u, e) { return function () { return (e || u((e = { exports: {} }).exports, e), e.exports); }; }, Gu = function (u, e) { for (var t in e)
    Ke(u, t, { get: e[t], enumerable: !0 }); }, jt = function (u, e, t, r) {
    var e_3, _a;
    if (e && typeof e == "object" || typeof e == "function") {
        var _loop_1 = function (n) {
            !Gt.call(u, n) && n !== t && Ke(u, n, { get: function () { return e[n]; }, enumerable: !(r = e0(e, n)) || r.enumerable });
        };
        try {
            for (var _b = __values(t0(e)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var n = _c.value;
                _loop_1(n);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
    return u;
};
var Ne = function (u, e, t) { return (t = u != null ? Yr(r0(u)) : {}, jt(e || !u || !u.__esModule ? Ke(t, "default", { value: u, enumerable: !0 }) : t, u)); }, a0 = function (u) { return jt(Ke({}, "__esModule", { value: !0 }), u); };
var Te = i0(function (sa, xr) { xr.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var Ln = {};
Gu(Ln, { default: function () { return In; } });
module.exports = a0(Ln);
var ou = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (u) { return u.charCodeAt(0); }));
var lu = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (u) { return u.charCodeAt(0); }));
var ju, s0 = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Me = (ju = String.fromCodePoint) !== null && ju !== void 0 ? ju : function (u) { var e = ""; return u > 65535 && (u -= 65536, e += String.fromCharCode(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), e += String.fromCharCode(u), e; };
function zu(u) { var e; return u >= 55296 && u <= 57343 || u > 1114111 ? 65533 : (e = s0.get(u)) !== null && e !== void 0 ? e : u; }
var _;
(function (u) { u[u.NUM = 35] = "NUM", u[u.SEMI = 59] = "SEMI", u[u.EQUALS = 61] = "EQUALS", u[u.ZERO = 48] = "ZERO", u[u.NINE = 57] = "NINE", u[u.LOWER_A = 97] = "LOWER_A", u[u.LOWER_F = 102] = "LOWER_F", u[u.LOWER_X = 120] = "LOWER_X", u[u.LOWER_Z = 122] = "LOWER_Z", u[u.UPPER_A = 65] = "UPPER_A", u[u.UPPER_F = 70] = "UPPER_F", u[u.UPPER_Z = 90] = "UPPER_Z"; })(_ || (_ = {}));
var c0 = 32, Se;
(function (u) { u[u.VALUE_LENGTH = 49152] = "VALUE_LENGTH", u[u.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", u[u.JUMP_TABLE = 127] = "JUMP_TABLE"; })(Se || (Se = {}));
function $u(u) { return u >= _.ZERO && u <= _.NINE; }
function o0(u) { return u >= _.UPPER_A && u <= _.UPPER_F || u >= _.LOWER_A && u <= _.LOWER_F; }
function l0(u) { return u >= _.UPPER_A && u <= _.UPPER_Z || u >= _.LOWER_A && u <= _.LOWER_Z || $u(u); }
function f0(u) { return u === _.EQUALS || l0(u); }
var Y;
(function (u) { u[u.EntityStart = 0] = "EntityStart", u[u.NumericStart = 1] = "NumericStart", u[u.NumericDecimal = 2] = "NumericDecimal", u[u.NumericHex = 3] = "NumericHex", u[u.NamedEntity = 4] = "NamedEntity"; })(Y || (Y = {}));
var ce;
(function (u) { u[u.Legacy = 0] = "Legacy", u[u.Strict = 1] = "Strict", u[u.Attribute = 2] = "Attribute"; })(ce || (ce = {}));
var Oe = (function () {
    function Oe(e, t, r) {
        this.decodeTree = e, this.emitCodePoint = t, this.errors = r, this.state = Y.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = ce.Strict;
    }
    Oe.prototype.startEntity = function (e) { this.decodeMode = e, this.state = Y.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    Oe.prototype.write = function (e, t) { switch (this.state) {
        case Y.EntityStart: return e.charCodeAt(t) === _.NUM ? (this.state = Y.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = Y.NamedEntity, this.stateNamedEntity(e, t));
        case Y.NumericStart: return this.stateNumericStart(e, t);
        case Y.NumericDecimal: return this.stateNumericDecimal(e, t);
        case Y.NumericHex: return this.stateNumericHex(e, t);
        case Y.NamedEntity: return this.stateNamedEntity(e, t);
    } };
    Oe.prototype.stateNumericStart = function (e, t) { return t >= e.length ? -1 : (e.charCodeAt(t) | c0) === _.LOWER_X ? (this.state = Y.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = Y.NumericDecimal, this.stateNumericDecimal(e, t)); };
    Oe.prototype.addToNumericResult = function (e, t, r, n) { if (t !== r) {
        var i = r - t;
        this.result = this.result * Math.pow(n, i) + parseInt(e.substr(t, i), n), this.consumed += i;
    } };
    Oe.prototype.stateNumericHex = function (e, t) { var r = t; for (; t < e.length;) {
        var n = e.charCodeAt(t);
        if ($u(n) || o0(n))
            t += 1;
        else
            return this.addToNumericResult(e, r, t, 16), this.emitNumericEntity(n, 3);
    } return this.addToNumericResult(e, r, t, 16), -1; };
    Oe.prototype.stateNumericDecimal = function (e, t) { var r = t; for (; t < e.length;) {
        var n = e.charCodeAt(t);
        if ($u(n))
            t += 1;
        else
            return this.addToNumericResult(e, r, t, 10), this.emitNumericEntity(n, 2);
    } return this.addToNumericResult(e, r, t, 10), -1; };
    Oe.prototype.emitNumericEntity = function (e, t) { var r; if (this.consumed <= t)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (e === _.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === ce.Strict)
        return 0; return this.emitCodePoint(zu(this.result), this.consumed), this.errors && (e !== _.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    Oe.prototype.stateNamedEntity = function (e, t) { var r = this.decodeTree, n = r[this.treeIndex], i = (n & Se.VALUE_LENGTH) >> 14; for (; t < e.length; t++, this.excess++) {
        var a = e.charCodeAt(t);
        if (this.treeIndex = d0(r, n, this.treeIndex + Math.max(1, i), a), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === ce.Attribute && (i === 0 || f0(a)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (n = r[this.treeIndex], i = (n & Se.VALUE_LENGTH) >> 14, i !== 0) {
            if (a === _.SEMI)
                return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
            this.decodeMode !== ce.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    Oe.prototype.emitNotTerminatedNamedEntity = function () { var e; var _a = this, t = _a.result, r = _a.decodeTree, n = (r[t] & Se.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(t, n, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed; };
    Oe.prototype.emitNamedEntityData = function (e, t, r) { var n = this.decodeTree; return this.emitCodePoint(t === 1 ? n[e] & ~Se.VALUE_LENGTH : n[e + 1], r), t === 3 && this.emitCodePoint(n[e + 2], r), r; };
    Oe.prototype.end = function () { var e; switch (this.state) {
        case Y.NamedEntity: return this.result !== 0 && (this.decodeMode !== ce.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case Y.NumericDecimal: return this.emitNumericEntity(0, 2);
        case Y.NumericHex: return this.emitNumericEntity(0, 3);
        case Y.NumericStart: return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case Y.EntityStart: return 0;
    } };
    return Oe;
}());
function zt(u) { var e = "", t = new Oe(u, function (r) { return e += Me(r); }); return function (n, i) { var a = 0, c = 0; for (; (c = n.indexOf("&", c)) >= 0;) {
    e += n.slice(a, c), t.startEntity(i);
    var b = t.write(n, c + 1);
    if (b < 0) {
        a = c + t.end();
        break;
    }
    a = c + b, c = b === 0 ? a + 1 : a;
} var h = e + n.slice(a); return e = "", h; }; }
function d0(u, e, t, r) { var n = (e & Se.BRANCH_LENGTH) >> 7, i = e & Se.JUMP_TABLE; if (n === 0)
    return i !== 0 && r === i ? t : -1; if (i) {
    var h = r - i;
    return h < 0 || h >= n ? -1 : u[t + h] - 1;
} var a = t, c = a + n - 1; for (; a <= c;) {
    var h = a + c >>> 1, b = u[h];
    if (b < r)
        a = h + 1;
    else if (b > r)
        c = h - 1;
    else
        return u[h + n];
} return -1; }
var Vn = zt(ou), Gn = zt(lu);
var C;
(function (u) { u[u.Tab = 9] = "Tab", u[u.NewLine = 10] = "NewLine", u[u.FormFeed = 12] = "FormFeed", u[u.CarriageReturn = 13] = "CarriageReturn", u[u.Space = 32] = "Space", u[u.ExclamationMark = 33] = "ExclamationMark", u[u.Number = 35] = "Number", u[u.Amp = 38] = "Amp", u[u.SingleQuote = 39] = "SingleQuote", u[u.DoubleQuote = 34] = "DoubleQuote", u[u.Dash = 45] = "Dash", u[u.Slash = 47] = "Slash", u[u.Zero = 48] = "Zero", u[u.Nine = 57] = "Nine", u[u.Semi = 59] = "Semi", u[u.Lt = 60] = "Lt", u[u.Eq = 61] = "Eq", u[u.Gt = 62] = "Gt", u[u.Questionmark = 63] = "Questionmark", u[u.UpperA = 65] = "UpperA", u[u.LowerA = 97] = "LowerA", u[u.UpperF = 70] = "UpperF", u[u.LowerF = 102] = "LowerF", u[u.UpperZ = 90] = "UpperZ", u[u.LowerZ = 122] = "LowerZ", u[u.LowerX = 120] = "LowerX", u[u.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(C || (C = {}));
var x;
(function (u) { u[u.Text = 1] = "Text", u[u.BeforeTagName = 2] = "BeforeTagName", u[u.InTagName = 3] = "InTagName", u[u.InSelfClosingTag = 4] = "InSelfClosingTag", u[u.BeforeClosingTagName = 5] = "BeforeClosingTagName", u[u.InClosingTagName = 6] = "InClosingTagName", u[u.AfterClosingTagName = 7] = "AfterClosingTagName", u[u.BeforeAttributeName = 8] = "BeforeAttributeName", u[u.InAttributeName = 9] = "InAttributeName", u[u.AfterAttributeName = 10] = "AfterAttributeName", u[u.BeforeAttributeValue = 11] = "BeforeAttributeValue", u[u.InAttributeValueDq = 12] = "InAttributeValueDq", u[u.InAttributeValueSq = 13] = "InAttributeValueSq", u[u.InAttributeValueNq = 14] = "InAttributeValueNq", u[u.BeforeDeclaration = 15] = "BeforeDeclaration", u[u.InDeclaration = 16] = "InDeclaration", u[u.InProcessingInstruction = 17] = "InProcessingInstruction", u[u.BeforeComment = 18] = "BeforeComment", u[u.CDATASequence = 19] = "CDATASequence", u[u.InSpecialComment = 20] = "InSpecialComment", u[u.InCommentLike = 21] = "InCommentLike", u[u.BeforeSpecialS = 22] = "BeforeSpecialS", u[u.BeforeSpecialT = 23] = "BeforeSpecialT", u[u.SpecialStartSequence = 24] = "SpecialStartSequence", u[u.InSpecialTag = 25] = "InSpecialTag", u[u.InEntity = 26] = "InEntity"; })(x || (x = {}));
function me(u) { return u === C.Space || u === C.NewLine || u === C.Tab || u === C.FormFeed || u === C.CarriageReturn; }
function fu(u) { return u === C.Slash || u === C.Gt || me(u); }
function h0(u) { return u >= C.LowerA && u <= C.LowerZ || u >= C.UpperA && u <= C.UpperZ; }
var oe;
(function (u) { u[u.NoValue = 0] = "NoValue", u[u.Unquoted = 1] = "Unquoted", u[u.Single = 2] = "Single", u[u.Double = 3] = "Double"; })(oe || (oe = {}));
var ue = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Be = (function () {
    function Be(_a, r) {
        var _b = _a.xmlMode, e = _b === void 0 ? !1 : _b, _c = _a.decodeEntities, t = _c === void 0 ? !0 : _c;
        var _this = this;
        this.cbs = r, this.state = x.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = x.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = e, this.decodeEntities = t, this.entityDecoder = new Oe(e ? lu : ou, function (n, i) { return _this.emitCodePoint(n, i); });
    }
    Be.prototype.reset = function () { this.state = x.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = x.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Be.prototype.write = function (e) { this.offset += this.buffer.length, this.buffer = e, this.parse(); };
    Be.prototype.end = function () { this.running && this.finish(); };
    Be.prototype.pause = function () { this.running = !1; };
    Be.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Be.prototype.stateText = function (e) { e === C.Lt || !this.decodeEntities && this.fastForwardTo(C.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = x.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && e === C.Amp && this.startEntity(); };
    Be.prototype.stateSpecialStartSequence = function (e) { var t = this.sequenceIndex === this.currentSequence.length; if (!(t ? fu(e) : (e | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!t) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = x.InTagName, this.stateInTagName(e); };
    Be.prototype.stateInSpecialTag = function (e) { if (this.sequenceIndex === this.currentSequence.length) {
        if (e === C.Gt || me(e)) {
            var t = this.index - this.currentSequence.length;
            if (this.sectionStart < t) {
                var r = this.index;
                this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = t + 2, this.stateInClosingTagName(e);
            return;
        }
        this.sequenceIndex = 0;
    } (e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === ue.TitleEnd ? this.decodeEntities && e === C.Amp && this.startEntity() : this.fastForwardTo(C.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(e === C.Lt); };
    Be.prototype.stateCDATASequence = function (e) { e === ue.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === ue.Cdata.length && (this.state = x.InCommentLike, this.currentSequence = ue.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = x.InDeclaration, this.stateInDeclaration(e)); };
    Be.prototype.fastForwardTo = function (e) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === e)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Be.prototype.stateInCommentLike = function (e) { e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === ue.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = x.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Be.prototype.isTagStartChar = function (e) { return this.xmlMode ? !fu(e) : h0(e); };
    Be.prototype.startSpecial = function (e, t) { this.isSpecial = !0, this.currentSequence = e, this.sequenceIndex = t, this.state = x.SpecialStartSequence; };
    Be.prototype.stateBeforeTagName = function (e) { if (e === C.ExclamationMark)
        this.state = x.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (e === C.Questionmark)
        this.state = x.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(e)) {
        var t = e | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = x.InTagName : t === ue.ScriptEnd[2] ? this.state = x.BeforeSpecialS : t === ue.TitleEnd[2] ? this.state = x.BeforeSpecialT : this.state = x.InTagName;
    }
    else
        e === C.Slash ? this.state = x.BeforeClosingTagName : (this.state = x.Text, this.stateText(e)); };
    Be.prototype.stateInTagName = function (e) { fu(e) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Be.prototype.stateBeforeClosingTagName = function (e) { me(e) || (e === C.Gt ? this.state = x.Text : (this.state = this.isTagStartChar(e) ? x.InClosingTagName : x.InSpecialComment, this.sectionStart = this.index)); };
    Be.prototype.stateInClosingTagName = function (e) { (e === C.Gt || me(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = x.AfterClosingTagName, this.stateAfterClosingTagName(e)); };
    Be.prototype.stateAfterClosingTagName = function (e) { (e === C.Gt || this.fastForwardTo(C.Gt)) && (this.state = x.Text, this.sectionStart = this.index + 1); };
    Be.prototype.stateBeforeAttributeName = function (e) { e === C.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = x.InSpecialTag, this.sequenceIndex = 0) : this.state = x.Text, this.sectionStart = this.index + 1) : e === C.Slash ? this.state = x.InSelfClosingTag : me(e) || (this.state = x.InAttributeName, this.sectionStart = this.index); };
    Be.prototype.stateInSelfClosingTag = function (e) { e === C.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = x.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : me(e) || (this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Be.prototype.stateInAttributeName = function (e) { (e === C.Eq || fu(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = x.AfterAttributeName, this.stateAfterAttributeName(e)); };
    Be.prototype.stateAfterAttributeName = function (e) { e === C.Eq ? this.state = x.BeforeAttributeValue : e === C.Slash || e === C.Gt ? (this.cbs.onattribend(oe.NoValue, this.sectionStart), this.sectionStart = -1, this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(e)) : me(e) || (this.cbs.onattribend(oe.NoValue, this.sectionStart), this.state = x.InAttributeName, this.sectionStart = this.index); };
    Be.prototype.stateBeforeAttributeValue = function (e) { e === C.DoubleQuote ? (this.state = x.InAttributeValueDq, this.sectionStart = this.index + 1) : e === C.SingleQuote ? (this.state = x.InAttributeValueSq, this.sectionStart = this.index + 1) : me(e) || (this.sectionStart = this.index, this.state = x.InAttributeValueNq, this.stateInAttributeValueNoQuotes(e)); };
    Be.prototype.handleInAttributeValue = function (e, t) { e === t || !this.decodeEntities && this.fastForwardTo(t) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(t === C.DoubleQuote ? oe.Double : oe.Single, this.index + 1), this.state = x.BeforeAttributeName) : this.decodeEntities && e === C.Amp && this.startEntity(); };
    Be.prototype.stateInAttributeValueDoubleQuotes = function (e) { this.handleInAttributeValue(e, C.DoubleQuote); };
    Be.prototype.stateInAttributeValueSingleQuotes = function (e) { this.handleInAttributeValue(e, C.SingleQuote); };
    Be.prototype.stateInAttributeValueNoQuotes = function (e) { me(e) || e === C.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(oe.Unquoted, this.index), this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(e)) : this.decodeEntities && e === C.Amp && this.startEntity(); };
    Be.prototype.stateBeforeDeclaration = function (e) { e === C.OpeningSquareBracket ? (this.state = x.CDATASequence, this.sequenceIndex = 0) : this.state = e === C.Dash ? x.BeforeComment : x.InDeclaration; };
    Be.prototype.stateInDeclaration = function (e) { (e === C.Gt || this.fastForwardTo(C.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = x.Text, this.sectionStart = this.index + 1); };
    Be.prototype.stateInProcessingInstruction = function (e) { (e === C.Gt || this.fastForwardTo(C.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = x.Text, this.sectionStart = this.index + 1); };
    Be.prototype.stateBeforeComment = function (e) { e === C.Dash ? (this.state = x.InCommentLike, this.currentSequence = ue.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = x.InDeclaration; };
    Be.prototype.stateInSpecialComment = function (e) { (e === C.Gt || this.fastForwardTo(C.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = x.Text, this.sectionStart = this.index + 1); };
    Be.prototype.stateBeforeSpecialS = function (e) { var t = e | 32; t === ue.ScriptEnd[3] ? this.startSpecial(ue.ScriptEnd, 4) : t === ue.StyleEnd[3] ? this.startSpecial(ue.StyleEnd, 4) : (this.state = x.InTagName, this.stateInTagName(e)); };
    Be.prototype.stateBeforeSpecialT = function (e) { var t = e | 32; t === ue.TitleEnd[3] ? this.startSpecial(ue.TitleEnd, 4) : t === ue.TextareaEnd[3] ? this.startSpecial(ue.TextareaEnd, 4) : (this.state = x.InTagName, this.stateInTagName(e)); };
    Be.prototype.startEntity = function () { this.baseState = this.state, this.state = x.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? ce.Strict : this.baseState === x.Text || this.baseState === x.InSpecialTag ? ce.Legacy : ce.Attribute); };
    Be.prototype.stateInEntity = function () { var e = this.entityDecoder.write(this.buffer, this.index - this.offset); e >= 0 ? (this.state = this.baseState, e === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Be.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === x.Text || this.state === x.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === x.InAttributeValueDq || this.state === x.InAttributeValueSq || this.state === x.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Be.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Be.prototype.parse = function () { for (; this.shouldContinue();) {
        var e = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case x.Text: {
                this.stateText(e);
                break;
            }
            case x.SpecialStartSequence: {
                this.stateSpecialStartSequence(e);
                break;
            }
            case x.InSpecialTag: {
                this.stateInSpecialTag(e);
                break;
            }
            case x.CDATASequence: {
                this.stateCDATASequence(e);
                break;
            }
            case x.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(e);
                break;
            }
            case x.InAttributeName: {
                this.stateInAttributeName(e);
                break;
            }
            case x.InCommentLike: {
                this.stateInCommentLike(e);
                break;
            }
            case x.InSpecialComment: {
                this.stateInSpecialComment(e);
                break;
            }
            case x.BeforeAttributeName: {
                this.stateBeforeAttributeName(e);
                break;
            }
            case x.InTagName: {
                this.stateInTagName(e);
                break;
            }
            case x.InClosingTagName: {
                this.stateInClosingTagName(e);
                break;
            }
            case x.BeforeTagName: {
                this.stateBeforeTagName(e);
                break;
            }
            case x.AfterAttributeName: {
                this.stateAfterAttributeName(e);
                break;
            }
            case x.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(e);
                break;
            }
            case x.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(e);
                break;
            }
            case x.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(e);
                break;
            }
            case x.AfterClosingTagName: {
                this.stateAfterClosingTagName(e);
                break;
            }
            case x.BeforeSpecialS: {
                this.stateBeforeSpecialS(e);
                break;
            }
            case x.BeforeSpecialT: {
                this.stateBeforeSpecialT(e);
                break;
            }
            case x.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(e);
                break;
            }
            case x.InSelfClosingTag: {
                this.stateInSelfClosingTag(e);
                break;
            }
            case x.InDeclaration: {
                this.stateInDeclaration(e);
                break;
            }
            case x.BeforeDeclaration: {
                this.stateBeforeDeclaration(e);
                break;
            }
            case x.BeforeComment: {
                this.stateBeforeComment(e);
                break;
            }
            case x.InProcessingInstruction: {
                this.stateInProcessingInstruction(e);
                break;
            }
            case x.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Be.prototype.finish = function () { this.state === x.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Be.prototype.handleTrailingData = function () { var e = this.buffer.length + this.offset; this.sectionStart >= e || (this.state === x.InCommentLike ? this.currentSequence === ue.CdataEnd ? this.cbs.oncdata(this.sectionStart, e, 0) : this.cbs.oncomment(this.sectionStart, e, 0) : this.state === x.InTagName || this.state === x.BeforeAttributeName || this.state === x.BeforeAttributeValue || this.state === x.AfterAttributeName || this.state === x.InAttributeName || this.state === x.InAttributeValueSq || this.state === x.InAttributeValueDq || this.state === x.InAttributeValueNq || this.state === x.InClosingTagName || this.cbs.ontext(this.sectionStart, e)); };
    Be.prototype.emitCodePoint = function (e, t) { this.baseState !== x.Text && this.baseState !== x.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.onattribentity(e)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.ontextentity(e, this.sectionStart)); };
    return Be;
}());
var He = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), P = new Set(["p"]), $t = new Set(["thead", "tbody"]), Wt = new Set(["dd", "dt"]), Kt = new Set(["rt", "rp"]), b0 = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", P], ["h1", P], ["h2", P], ["h3", P], ["h4", P], ["h5", P], ["h6", P], ["select", He], ["input", He], ["output", He], ["button", He], ["datalist", He], ["textarea", He], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Wt], ["dt", Wt], ["address", P], ["article", P], ["aside", P], ["blockquote", P], ["details", P], ["div", P], ["dl", P], ["fieldset", P], ["figcaption", P], ["figure", P], ["footer", P], ["form", P], ["header", P], ["hr", P], ["main", P], ["nav", P], ["ol", P], ["pre", P], ["section", P], ["table", P], ["ul", P], ["rt", Kt], ["rp", Kt], ["tbody", $t], ["tfoot", $t]]), p0 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Qt = new Set(["math", "svg"]), Zt = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), g0 = /\s|\//, Qe = (function () {
    function Qe(e, t) {
        if (t === void 0) { t = {}; }
        var r, n, i, a, c, h;
        this.options = t, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = e != null ? e : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = t.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (n = t.lowerCaseAttributeNames) !== null && n !== void 0 ? n : this.htmlMode, this.recognizeSelfClosing = (i = t.recognizeSelfClosing) !== null && i !== void 0 ? i : !this.htmlMode, this.tokenizer = new ((a = t.Tokenizer) !== null && a !== void 0 ? a : Be)(this.options, this), this.foreignContext = [!this.htmlMode], (h = (c = this.cbs).onparserinit) === null || h === void 0 || h.call(c, this);
    }
    Qe.prototype.ontext = function (e, t) { var r, n; var i = this.getSlice(e, t); this.endIndex = t - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, i), this.startIndex = t; };
    Qe.prototype.ontextentity = function (e, t) { var r, n; this.endIndex = t - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, Me(e)), this.startIndex = t; };
    Qe.prototype.isVoidElement = function (e) { return this.htmlMode && p0.has(e); };
    Qe.prototype.onopentagname = function (e, t) { this.endIndex = t; var r = this.getSlice(e, t); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); };
    Qe.prototype.emitOpenTag = function (e) { var t, r, n, i; this.openTagStart = this.startIndex, this.tagname = e; var a = this.htmlMode && b0.get(e); if (a)
        for (; this.stack.length > 0 && a.has(this.stack[0]);) {
            var c = this.stack.shift();
            (r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, c, !0);
        } this.isVoidElement(e) || (this.stack.unshift(e), this.htmlMode && (Qt.has(e) ? this.foreignContext.unshift(!0) : Zt.has(e) && this.foreignContext.unshift(!1))), (i = (n = this.cbs).onopentagname) === null || i === void 0 || i.call(n, e), this.cbs.onopentag && (this.attribs = {}); };
    Qe.prototype.endOpenTag = function (e) { var t, r; this.startIndex = this.openTagStart, this.attribs && ((r = (t = this.cbs).onopentag) === null || r === void 0 || r.call(t, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    Qe.prototype.onopentagend = function (e) { this.endIndex = e, this.endOpenTag(!1), this.startIndex = e + 1; };
    Qe.prototype.onclosetag = function (e, t) { var r, n, i, a, c, h, b, v; this.endIndex = t; var k = this.getSlice(e, t); if (this.lowerCaseTagNames && (k = k.toLowerCase()), this.htmlMode && (Qt.has(k) || Zt.has(k)) && this.foreignContext.shift(), this.isVoidElement(k))
        this.htmlMode && k === "br" && ((a = (i = this.cbs).onopentagname) === null || a === void 0 || a.call(i, "br"), (h = (c = this.cbs).onopentag) === null || h === void 0 || h.call(c, "br", {}, !0), (v = (b = this.cbs).onclosetag) === null || v === void 0 || v.call(b, "br", !1));
    else {
        var T = this.stack.indexOf(k);
        if (T !== -1)
            for (var A = 0; A <= T; A++) {
                var D = this.stack.shift();
                (n = (r = this.cbs).onclosetag) === null || n === void 0 || n.call(r, D, A !== T);
            }
        else
            this.htmlMode && k === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = t + 1; };
    Qe.prototype.onselfclosingtag = function (e) { this.endIndex = e, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = e + 1) : this.onopentagend(e); };
    Qe.prototype.closeCurrentTag = function (e) { var t, r; var n = this.tagname; this.endOpenTag(e), this.stack[0] === n && ((r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, n, !e), this.stack.shift()); };
    Qe.prototype.onattribname = function (e, t) { this.startIndex = e; var r = this.getSlice(e, t); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; };
    Qe.prototype.onattribdata = function (e, t) { this.attribvalue += this.getSlice(e, t); };
    Qe.prototype.onattribentity = function (e) { this.attribvalue += Me(e); };
    Qe.prototype.onattribend = function (e, t) { var r, n; this.endIndex = t, (n = (r = this.cbs).onattribute) === null || n === void 0 || n.call(r, this.attribname, this.attribvalue, e === oe.Double ? '"' : e === oe.Single ? "'" : e === oe.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    Qe.prototype.getInstructionName = function (e) { var t = e.search(g0), r = t < 0 ? e : e.substr(0, t); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; };
    Qe.prototype.ondeclaration = function (e, t) { this.endIndex = t; var r = this.getSlice(e, t); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(n), "!".concat(r));
    } this.startIndex = t + 1; };
    Qe.prototype.onprocessinginstruction = function (e, t) { this.endIndex = t; var r = this.getSlice(e, t); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(n), "?".concat(r));
    } this.startIndex = t + 1; };
    Qe.prototype.oncomment = function (e, t, r) { var n, i, a, c; this.endIndex = t, (i = (n = this.cbs).oncomment) === null || i === void 0 || i.call(n, this.getSlice(e, t - r)), (c = (a = this.cbs).oncommentend) === null || c === void 0 || c.call(a), this.startIndex = t + 1; };
    Qe.prototype.oncdata = function (e, t, r) { var n, i, a, c, h, b, v, k, T, A; this.endIndex = t; var D = this.getSlice(e, t - r); !this.htmlMode || this.options.recognizeCDATA ? ((i = (n = this.cbs).oncdatastart) === null || i === void 0 || i.call(n), (c = (a = this.cbs).ontext) === null || c === void 0 || c.call(a, D), (b = (h = this.cbs).oncdataend) === null || b === void 0 || b.call(h)) : ((k = (v = this.cbs).oncomment) === null || k === void 0 || k.call(v, "[CDATA[".concat(D, "]]")), (A = (T = this.cbs).oncommentend) === null || A === void 0 || A.call(T)), this.startIndex = t + 1; };
    Qe.prototype.onend = function () { var e, t; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (t = (e = this.cbs).onend) === null || t === void 0 || t.call(e); };
    Qe.prototype.reset = function () { var e, t, r, n; (t = (e = this.cbs).onreset) === null || t === void 0 || t.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (n = (r = this.cbs).onparserinit) === null || n === void 0 || n.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    Qe.prototype.parseComplete = function (e) { this.reset(), this.end(e); };
    Qe.prototype.getSlice = function (e, t) { for (; e - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var r = this.buffers[0].slice(e - this.bufferOffset, t - this.bufferOffset); for (; t - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), r += this.buffers[0].slice(0, t - this.bufferOffset); return r; };
    Qe.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    Qe.prototype.write = function (e) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".write() after done!"));
        return;
    } this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++); };
    Qe.prototype.end = function (e) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".end() after done!"));
        return;
    } e && this.write(e), this.ended = !0, this.tokenizer.end(); };
    Qe.prototype.pause = function () { this.tokenizer.pause(); };
    Qe.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    Qe.prototype.parseChunk = function (e) { this.write(e); };
    Qe.prototype.done = function (e) { this.end(e); };
    return Qe;
}());
var du = {};
Gu(du, { CDATA: function () { return et; }, Comment: function () { return Xu; }, Directive: function () { return Zu; }, Doctype: function () { return ut; }, ElementType: function () { return M; }, Root: function () { return Ku; }, Script: function () { return Ju; }, Style: function () { return Yu; }, Tag: function () { return _u; }, Text: function () { return Qu; }, isTag: function () { return Wu; } });
var M;
(function (u) { u.Root = "root", u.Text = "text", u.Directive = "directive", u.Comment = "comment", u.Script = "script", u.Style = "style", u.Tag = "tag", u.CDATA = "cdata", u.Doctype = "doctype"; })(M || (M = {}));
function Wu(u) { return u.type === M.Tag || u.type === M.Script || u.type === M.Style; }
var Ku = M.Root, Qu = M.Text, Zu = M.Directive, Xu = M.Comment, Ju = M.Script, Yu = M.Style, _u = M.Tag, et = M.CDATA, ut = M.Doctype;
var hu = (function () {
    function hu() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(hu.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (e) { this.parent = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(hu.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (e) { this.prev = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(hu.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (e) { this.next = e; },
        enumerable: false,
        configurable: true
    });
    hu.prototype.cloneNode = function (e) {
        if (e === void 0) { e = !1; }
        return Xt(this, e);
    };
    return hu;
}()), Ze = (function (_super) {
    __extends(Ze, _super);
    function Ze(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = e;
        return _this;
    }
    Object.defineProperty(Ze.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (e) { this.data = e; },
        enumerable: false,
        configurable: true
    });
    return Ze;
}(hu)), Re = (function (_super) {
    __extends(Re, _super);
    function Re() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = M.Text;
        return _this;
    }
    Object.defineProperty(Re.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return Re;
}(Ze)), Xe = (function (_super) {
    __extends(Xe, _super);
    function Xe() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = M.Comment;
        return _this;
    }
    Object.defineProperty(Xe.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return Xe;
}(Ze)), Je = (function (_super) {
    __extends(Je, _super);
    function Je(e, t) {
        var _this = this;
        _this = _super.call(this, t) || this, _this.name = e, _this.type = M.Directive;
        return _this;
    }
    Object.defineProperty(Je.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return Je;
}(Ze)), Ye = (function (_super) {
    __extends(Ye, _super);
    function Ye(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = e;
        return _this;
    }
    Object.defineProperty(Ye.prototype, "firstChild", {
        get: function () { var e; return (e = this.children[0]) !== null && e !== void 0 ? e : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ye.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ye.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (e) { this.children = e; },
        enumerable: false,
        configurable: true
    });
    return Ye;
}(hu)), _e = (function (_super) {
    __extends(_e, _super);
    function _e() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = M.CDATA;
        return _this;
    }
    Object.defineProperty(_e.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return _e;
}(Ye)), Pe = (function (_super) {
    __extends(Pe, _super);
    function Pe() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = M.Root;
        return _this;
    }
    Object.defineProperty(Pe.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return Pe;
}(Ye)), eu = (function (_super) {
    __extends(eu, _super);
    function eu(e, t, r, n) {
        if (r === void 0) { r = []; }
        if (n === void 0) { n = e === "script" ? M.Script : e === "style" ? M.Style : M.Tag; }
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = e, _this.attribs = t, _this.type = n;
        return _this;
    }
    Object.defineProperty(eu.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(eu.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (e) { this.name = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(eu.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (e) { var t, r; return { name: e, value: _this.attribs[e], namespace: (t = _this["x-attribsNamespace"]) === null || t === void 0 ? void 0 : t[e], prefix: (r = _this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[e] }; });
        },
        enumerable: false,
        configurable: true
    });
    return eu;
}(Ye));
function H(u) { return Wu(u); }
function Fe(u) { return u.type === M.CDATA; }
function he(u) { return u.type === M.Text; }
function uu(u) { return u.type === M.Comment; }
function m0(u) { return u.type === M.Directive; }
function rt(u) { return u.type === M.Root; }
function re(u) { return Object.prototype.hasOwnProperty.call(u, "children"); }
function Xt(u, e) {
    if (e === void 0) { e = !1; }
    var t;
    if (he(u))
        t = new Re(u.data);
    else if (uu(u))
        t = new Xe(u.data);
    else if (H(u)) {
        var r = e ? tt(u.children) : [], n_1 = new eu(u.name, de({}, u.attribs), r);
        r.forEach(function (i) { return i.parent = n_1; }), u.namespace != null && (n_1.namespace = u.namespace), u["x-attribsNamespace"] && (n_1["x-attribsNamespace"] = de({}, u["x-attribsNamespace"])), u["x-attribsPrefix"] && (n_1["x-attribsPrefix"] = de({}, u["x-attribsPrefix"])), t = n_1;
    }
    else if (Fe(u)) {
        var r = e ? tt(u.children) : [], n_2 = new _e(r);
        r.forEach(function (i) { return i.parent = n_2; }), t = n_2;
    }
    else if (rt(u)) {
        var r = e ? tt(u.children) : [], n_3 = new Pe(r);
        r.forEach(function (i) { return i.parent = n_3; }), u["x-mode"] && (n_3["x-mode"] = u["x-mode"]), t = n_3;
    }
    else if (m0(u)) {
        var r = new Je(u.name, u.data);
        u["x-name"] != null && (r["x-name"] = u["x-name"], r["x-publicId"] = u["x-publicId"], r["x-systemId"] = u["x-systemId"]), t = r;
    }
    else
        throw new Error("Not implemented yet: ".concat(u.type));
    return t.startIndex = u.startIndex, t.endIndex = u.endIndex, u.sourceCodeLocation != null && (t.sourceCodeLocation = u.sourceCodeLocation), t;
}
function tt(u) { var e = u.map(function (t) { return Xt(t, !0); }); for (var t = 1; t < e.length; t++)
    e[t].prev = e[t - 1], e[t - 1].next = e[t]; return e; }
var Jt = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, Ve = (function () {
    function Ve(e, t, r) {
        this.dom = [], this.root = new Pe(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof t == "function" && (r = t, t = Jt), typeof e == "object" && (t = e, e = void 0), this.callback = e != null ? e : null, this.options = t != null ? t : Jt, this.elementCB = r != null ? r : null;
    }
    Ve.prototype.onparserinit = function (e) { this.parser = e; };
    Ve.prototype.onreset = function () { this.dom = [], this.root = new Pe(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    Ve.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    Ve.prototype.onerror = function (e) { this.handleCallback(e); };
    Ve.prototype.onclosetag = function () { this.lastNode = null; var e = this.tagStack.pop(); this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e); };
    Ve.prototype.onopentag = function (e, t) { var r = this.options.xmlMode ? M.Tag : void 0, n = new eu(e, t, void 0, r); this.addNode(n), this.tagStack.push(n); };
    Ve.prototype.ontext = function (e) { var t = this.lastNode; if (t && t.type === M.Text)
        t.data += e, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
    else {
        var r = new Re(e);
        this.addNode(r), this.lastNode = r;
    } };
    Ve.prototype.oncomment = function (e) { if (this.lastNode && this.lastNode.type === M.Comment) {
        this.lastNode.data += e;
        return;
    } var t = new Xe(e); this.addNode(t), this.lastNode = t; };
    Ve.prototype.oncommentend = function () { this.lastNode = null; };
    Ve.prototype.oncdatastart = function () { var e = new Re(""), t = new _e([e]); this.addNode(t), e.parent = t, this.lastNode = e; };
    Ve.prototype.oncdataend = function () { this.lastNode = null; };
    Ve.prototype.onprocessinginstruction = function (e, t) { var r = new Je(e, t); this.addNode(r); };
    Ve.prototype.handleCallback = function (e) { if (typeof this.callback == "function")
        this.callback(e, this.dom);
    else if (e)
        throw e; };
    Ve.prototype.addNode = function (e) { var t = this.tagStack[this.tagStack.length - 1], r = t.children[t.children.length - 1]; this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), t.children.push(e), r && (e.prev = r, r.next = e), e.parent = t, this.lastNode = null; };
    return Ve;
}());
var be = {};
Gu(be, { DocumentPosition: function () { return le; }, append: function () { return H0; }, appendChild: function () { return B0; }, compareDocumentPosition: function () { return dr; }, existsOne: function () { return lr; }, filter: function () { return je; }, find: function () { return vu; }, findAll: function () { return F0; }, findOne: function () { return Su; }, findOneChild: function () { return P0; }, getAttributeValue: function () { return L0; }, getChildren: function () { return xu; }, getElementById: function () { return z0; }, getElements: function () { return j0; }, getElementsByClassName: function () { return $0; }, getElementsByTagName: function () { return Ce; }, getElementsByTagType: function () { return W0; }, getFeed: function () { return pt; }, getInnerHTML: function () { return I0; }, getName: function () { return M0; }, getOuterHTML: function () { return cr; }, getParent: function () { return or; }, getSiblings: function () { return yu; }, getText: function () { return mu; }, hasAttrib: function () { return U0; }, hasChildren: function () { return re; }, innerText: function () { return ot; }, isCDATA: function () { return Fe; }, isComment: function () { return uu; }, isDocument: function () { return rt; }, isTag: function () { return H; }, isText: function () { return he; }, nextElementSibling: function () { return lt; }, prepend: function () { return dt; }, prependChild: function () { return R0; }, prevElementSibling: function () { return ft; }, removeElement: function () { return xe; }, removeSubsets: function () { return K0; }, replaceElement: function () { return O0; }, testElement: function () { return G0; }, textContent: function () { return we; }, uniqueSort: function () { return bt; } });
function bu(u) { for (var e = 1; e < u.length; e++)
    u[e][0] += u[e - 1][0] + 1; return u; }
var x0 = new Map(bu([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(bu([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(bu([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(bu([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var nt = /["&'<>$\x80-\uFFFF]/g, Yt = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), _t = String.prototype.codePointAt != null ? function (u, e) { return u.codePointAt(e); } : function (u, e) { return (u.charCodeAt(e) & 64512) === 55296 ? (u.charCodeAt(e) - 55296) * 1024 + u.charCodeAt(e + 1) - 56320 + 65536 : u.charCodeAt(e); };
function tu(u) { var e = "", t = 0, r; for (; (r = nt.exec(u)) !== null;) {
    var n = r.index, i = u.charCodeAt(n), a = Yt.get(i);
    a !== void 0 ? (e += u.substring(t, n) + a, t = n + 1) : (e += "".concat(u.substring(t, n), "&#x").concat(_t(u, n).toString(16), ";"), t = nt.lastIndex += +((i & 64512) === 55296));
} return e + u.substr(t); }
function it(u, e) { return function (r) { var n, i = 0, a = ""; for (; n = u.exec(r);)
    i !== n.index && (a += r.substring(i, n.index)), a += e.get(n[0].charCodeAt(0)), i = n.index + 1; return a + r.substring(i); }; }
var er = it(/[&<>'"]/g, Yt), pu = it(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), gu = it(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var ur;
(function (u) { u[u.XML = 0] = "XML", u[u.HTML = 1] = "HTML"; })(ur || (ur = {}));
var tr;
(function (u) { u[u.UTF8 = 0] = "UTF8", u[u.ASCII = 1] = "ASCII", u[u.Extensive = 2] = "Extensive", u[u.Attribute = 3] = "Attribute", u[u.Text = 4] = "Text"; })(tr || (tr = {}));
var ir = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (u) { return [u.toLowerCase(), u]; })), ar = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (u) { return [u.toLowerCase(), u]; }));
var v0 = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function S0(u) { return u.replace(/"/g, "&quot;"); }
function w0(u, e) { var t; if (!u)
    return; var r = ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) === !1 ? S0 : e.xmlMode || e.encodeEntities !== "utf8" ? tu : pu; return Object.keys(u).map(function (n) { var i, a; var c = (i = u[n]) !== null && i !== void 0 ? i : ""; return e.xmlMode === "foreign" && (n = (a = ar.get(n)) !== null && a !== void 0 ? a : n), !e.emptyAttrs && !e.xmlMode && c === "" ? n : "".concat(n, "=\"").concat(r(c), "\""); }).join(" "); }
var sr = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function ct(u, e) {
    if (e === void 0) { e = {}; }
    var t = "length" in u ? u : [u], r = "";
    for (var n = 0; n < t.length; n++)
        r += A0(t[n], e);
    return r;
}
var Ge = ct;
function A0(u, e) { switch (u.type) {
    case Ku: return ct(u.children, e);
    case ut:
    case Zu: return N0(u);
    case Xu: return q0(u);
    case et: return D0(u);
    case Ju:
    case Yu:
    case _u: return k0(u, e);
    case Qu: return C0(u, e);
} }
var E0 = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), T0 = new Set(["svg", "math"]);
function k0(u, e) { var t; e.xmlMode === "foreign" && (u.name = (t = ir.get(u.name)) !== null && t !== void 0 ? t : u.name, u.parent && E0.has(u.parent.name) && (e = ke(de({}, e), { xmlMode: !1 }))), !e.xmlMode && T0.has(u.name) && (e = ke(de({}, e), { xmlMode: "foreign" })); var r = "<".concat(u.name), n = w0(u.attribs, e); return n && (r += " ".concat(n)), u.children.length === 0 && (e.xmlMode ? e.selfClosingTags !== !1 : e.selfClosingTags && sr.has(u.name)) ? (e.xmlMode || (r += " "), r += "/>") : (r += ">", u.children.length > 0 && (r += ct(u.children, e)), (e.xmlMode || !sr.has(u.name)) && (r += "</".concat(u.name, ">"))), r; }
function N0(u) { return "<".concat(u.data, ">"); }
function C0(u, e) { var t; var r = u.data || ""; return ((t = e.encodeEntities) !== null && t !== void 0 ? t : e.decodeEntities) !== !1 && !(!e.xmlMode && u.parent && v0.has(u.parent.name)) && (r = e.xmlMode || e.encodeEntities !== "utf8" ? tu(r) : gu(r)), r; }
function D0(u) { return "<![CDATA[".concat(u.children[0].data, "]]>"); }
function q0(u) { return "<!--".concat(u.data, "-->"); }
function cr(u, e) { return Ge(u, e); }
function I0(u, e) { return re(u) ? u.children.map(function (t) { return cr(t, e); }).join("") : ""; }
function mu(u) {
    return Array.isArray(u) ? u.map(mu).join("") : H(u) ? u.name === "br" ? "\n" : mu(u.children) : Fe(u) ? mu(u.children) : he(u) ? u.data : "";
}
function we(u) { return Array.isArray(u) ? u.map(we).join("") : re(u) && !uu(u) ? we(u.children) : he(u) ? u.data : ""; }
function ot(u) { return Array.isArray(u) ? u.map(ot).join("") : re(u) && (u.type === M.Tag || Fe(u)) ? ot(u.children) : he(u) ? u.data : ""; }
function xu(u) { return re(u) ? u.children : []; }
function or(u) { return u.parent || null; }
function yu(u) {
    var _a, _b;
    var e = or(u);
    if (e != null)
        return xu(e);
    var t = [u], r = u.prev, n = u.next;
    for (; r != null;)
        t.unshift(r), _a = r, r = _a.prev;
    for (; n != null;)
        t.push(n), _b = n, n = _b.next;
    return t;
}
function L0(u, e) { var t; return (t = u.attribs) === null || t === void 0 ? void 0 : t[e]; }
function U0(u, e) { return u.attribs != null && Object.prototype.hasOwnProperty.call(u.attribs, e) && u.attribs[e] != null; }
function M0(u) { return u.name; }
function lt(u) {
    var _a;
    var e = u.next;
    for (; e !== null && !H(e);)
        (_a = e, e = _a.next);
    return e;
}
function ft(u) {
    var _a;
    var e = u.prev;
    for (; e !== null && !H(e);)
        (_a = e, e = _a.prev);
    return e;
}
function xe(u) { if (u.prev && (u.prev.next = u.next), u.next && (u.next.prev = u.prev), u.parent) {
    var e = u.parent.children, t = e.lastIndexOf(u);
    t >= 0 && e.splice(t, 1);
} u.next = null, u.prev = null, u.parent = null; }
function O0(u, e) { var t = e.prev = u.prev; t && (t.next = e); var r = e.next = u.next; r && (r.prev = e); var n = e.parent = u.parent; if (n) {
    var i = n.children;
    i[i.lastIndexOf(u)] = e, u.parent = null;
} }
function B0(u, e) { if (xe(e), e.next = null, e.parent = u, u.children.push(e) > 1) {
    var t = u.children[u.children.length - 2];
    t.next = e, e.prev = t;
}
else
    e.prev = null; }
function H0(u, e) { xe(e); var t = u.parent, r = u.next; if (e.next = r, e.prev = u, u.next = e, e.parent = t, r) {
    if (r.prev = e, t) {
        var n = t.children;
        n.splice(n.lastIndexOf(r), 0, e);
    }
}
else
    t && t.children.push(e); }
function R0(u, e) { if (xe(e), e.parent = u, e.prev = null, u.children.unshift(e) !== 1) {
    var t = u.children[1];
    t.prev = e, e.next = t;
}
else
    e.next = null; }
function dt(u, e) { xe(e); var t = u.parent; if (t) {
    var r = t.children;
    r.splice(r.indexOf(u), 0, e);
} u.prev && (u.prev.next = e), e.parent = t, e.prev = u.prev, e.next = u, u.prev = e; }
function je(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return vu(u, Array.isArray(e) ? e : [e], t, r);
}
function vu(u, e, t, r) { var n = [], i = [Array.isArray(e) ? e : [e]], a = [0]; for (;;) {
    if (a[0] >= i[0].length) {
        if (a.length === 1)
            return n;
        i.shift(), a.shift();
        continue;
    }
    var c = i[0][a[0]++];
    if (u(c) && (n.push(c), --r <= 0))
        return n;
    t && re(c) && c.children.length > 0 && (a.unshift(0), i.unshift(c.children));
} }
function P0(u, e) { return e.find(u); }
function Su(u, e, t) {
    if (t === void 0) { t = !0; }
    var r = Array.isArray(e) ? e : [e];
    for (var n = 0; n < r.length; n++) {
        var i = r[n];
        if (H(i) && u(i))
            return i;
        if (t && re(i) && i.children.length > 0) {
            var a = Su(u, i.children, !0);
            if (a)
                return a;
        }
    }
    return null;
}
function lr(u, e) { return (Array.isArray(e) ? e : [e]).some(function (t) { return H(t) && u(t) || re(t) && lr(u, t.children); }); }
function F0(u, e) { var t = [], r = [Array.isArray(e) ? e : [e]], n = [0]; for (;;) {
    if (n[0] >= r[0].length) {
        if (r.length === 1)
            return t;
        r.shift(), n.shift();
        continue;
    }
    var i = r[0][n[0]++];
    H(i) && u(i) && t.push(i), re(i) && i.children.length > 0 && (n.unshift(0), r.unshift(i.children));
} }
var wu = { tag_name: function (u) { return typeof u == "function" ? function (e) { return H(e) && u(e.name); } : u === "*" ? H : function (e) { return H(e) && e.name === u; }; }, tag_type: function (u) { return typeof u == "function" ? function (e) { return u(e.type); } : function (e) { return e.type === u; }; }, tag_contains: function (u) { return typeof u == "function" ? function (e) { return he(e) && u(e.data); } : function (e) { return he(e) && e.data === u; }; } };
function ht(u, e) { return typeof e == "function" ? function (t) { return H(t) && e(t.attribs[u]); } : function (t) { return H(t) && t.attribs[u] === e; }; }
function V0(u, e) { return function (t) { return u(t) || e(t); }; }
function fr(u) { var e = Object.keys(u).map(function (t) { var r = u[t]; return Object.prototype.hasOwnProperty.call(wu, t) ? wu[t](r) : ht(t, r); }); return e.length === 0 ? null : e.reduce(V0); }
function G0(u, e) { var t = fr(u); return t ? t(e) : !0; }
function j0(u, e, t, r) {
    if (r === void 0) { r = 1 / 0; }
    var n = fr(u);
    return n ? je(n, e, t, r) : [];
}
function z0(u, e, t) {
    if (t === void 0) { t = !0; }
    return Array.isArray(e) || (e = [e]), Su(ht("id", u), e, t);
}
function Ce(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return je(wu.tag_name(u), e, t, r);
}
function $0(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return je(ht("class", u), e, t, r);
}
function W0(u, e, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return je(wu.tag_type(u), e, t, r);
}
function K0(u) { var e = u.length; for (; --e >= 0;) {
    var t = u[e];
    if (e > 0 && u.lastIndexOf(t, e - 1) >= 0) {
        u.splice(e, 1);
        continue;
    }
    for (var r = t.parent; r; r = r.parent)
        if (u.includes(r)) {
            u.splice(e, 1);
            break;
        }
} return u; }
var le;
(function (u) { u[u.DISCONNECTED = 1] = "DISCONNECTED", u[u.PRECEDING = 2] = "PRECEDING", u[u.FOLLOWING = 4] = "FOLLOWING", u[u.CONTAINS = 8] = "CONTAINS", u[u.CONTAINED_BY = 16] = "CONTAINED_BY"; })(le || (le = {}));
function dr(u, e) { var t = [], r = []; if (u === e)
    return 0; var n = re(u) ? u : u.parent; for (; n;)
    t.unshift(n), n = n.parent; for (n = re(e) ? e : e.parent; n;)
    r.unshift(n), n = n.parent; var i = Math.min(t.length, r.length), a = 0; for (; a < i && t[a] === r[a];)
    a++; if (a === 0)
    return le.DISCONNECTED; var c = t[a - 1], h = c.children, b = t[a], v = r[a]; return h.indexOf(b) > h.indexOf(v) ? c === e ? le.FOLLOWING | le.CONTAINED_BY : le.FOLLOWING : c === u ? le.PRECEDING | le.CONTAINS : le.PRECEDING; }
function bt(u) { return u = u.filter(function (e, t, r) { return !r.includes(e, t + 1); }), u.sort(function (e, t) { var r = dr(e, t); return r & le.PRECEDING ? -1 : r & le.FOLLOWING ? 1 : 0; }), u; }
function pt(u) { var e = Au(Y0, u); return e ? e.name === "feed" ? Q0(e) : Z0(e) : null; }
function Q0(u) { var e; var t = u.children, r = { type: "atom", items: Ce("entry", t).map(function (a) { var c; var h = a.children, b = { media: hr(h) }; ae(b, "id", "id", h), ae(b, "title", "title", h); var v = (c = Au("link", h)) === null || c === void 0 ? void 0 : c.attribs.href; v && (b.link = v); var k = Ae("summary", h) || Ae("content", h); k && (b.description = k); var T = Ae("updated", h); return T && (b.pubDate = new Date(T)), b; }) }; ae(r, "id", "id", t), ae(r, "title", "title", t); var n = (e = Au("link", t)) === null || e === void 0 ? void 0 : e.attribs.href; n && (r.link = n), ae(r, "description", "subtitle", t); var i = Ae("updated", t); return i && (r.updated = new Date(i)), ae(r, "author", "email", t, !0), r; }
function Z0(u) { var e, t; var r = (t = (e = Au("channel", u.children)) === null || e === void 0 ? void 0 : e.children) !== null && t !== void 0 ? t : [], n = { type: u.name.substr(0, 3), id: "", items: Ce("item", u.children).map(function (a) { var c = a.children, h = { media: hr(c) }; ae(h, "id", "guid", c), ae(h, "title", "title", c), ae(h, "link", "link", c), ae(h, "description", "description", c); var b = Ae("pubDate", c) || Ae("dc:date", c); return b && (h.pubDate = new Date(b)), h; }) }; ae(n, "title", "title", r), ae(n, "link", "link", r), ae(n, "description", "description", r); var i = Ae("lastBuildDate", r); return i && (n.updated = new Date(i)), ae(n, "author", "managingEditor", r, !0), n; }
var X0 = ["url", "type", "lang"], J0 = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function hr(u) { return Ce("media:content", u).map(function (e) {
    var e_4, _a, e_5, _b;
    var t = e.attribs, r = { medium: t.medium, isDefault: !!t.isDefault };
    try {
        for (var X0_1 = __values(X0), X0_1_1 = X0_1.next(); !X0_1_1.done; X0_1_1 = X0_1.next()) {
            var n = X0_1_1.value;
            t[n] && (r[n] = t[n]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (X0_1_1 && !X0_1_1.done && (_a = X0_1.return)) _a.call(X0_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var J0_1 = __values(J0), J0_1_1 = J0_1.next(); !J0_1_1.done; J0_1_1 = J0_1.next()) {
            var n = J0_1_1.value;
            t[n] && (r[n] = parseInt(t[n], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (J0_1_1 && !J0_1_1.done && (_b = J0_1.return)) _b.call(J0_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return t.expression && (r.expression = t.expression), r;
}); }
function Au(u, e) { return Ce(u, e, !0, 1)[0]; }
function Ae(u, e, t) {
    if (t === void 0) { t = !1; }
    return we(Ce(u, e, t, 1)).trim();
}
function ae(u, e, t, r, n) {
    if (n === void 0) { n = !1; }
    var i = Ae(t, r, n);
    i && (u[e] = i);
}
function Y0(u) { return u === "rss" || u === "feed" || u === "rdf:RDF"; }
function br(u, e) { var t = new Ve(void 0, e); return new Qe(t, e).end(u), t.root; }
var E;
(function (u) { u.Attribute = "attribute", u.Pseudo = "pseudo", u.PseudoElement = "pseudo-element", u.Tag = "tag", u.Universal = "universal", u.Adjacent = "adjacent", u.Child = "child", u.Descendant = "descendant", u.Parent = "parent", u.Sibling = "sibling", u.ColumnCombinator = "column-combinator"; })(E || (E = {}));
var K;
(function (u) { u.Any = "any", u.Element = "element", u.End = "end", u.Equals = "equals", u.Exists = "exists", u.Hyphen = "hyphen", u.Not = "not", u.Start = "start"; })(K || (K = {}));
var pr = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, _0 = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, en = new Map([[126, K.Element], [94, K.Start], [36, K.End], [42, K.Any], [33, K.Not], [124, K.Hyphen]]), un = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function De(u) { switch (u.type) {
    case E.Adjacent:
    case E.Child:
    case E.Descendant:
    case E.Parent:
    case E.Sibling:
    case E.ColumnCombinator: return !0;
    default: return !1;
} }
var tn = new Set(["contains", "icontains"]);
function rn(u, e, t) { var r = parseInt(e, 16) - 65536; return r !== r || t ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function ru(u) { return u.replace(_0, rn); }
function gt(u) { return u === 39 || u === 34; }
function gr(u) { return u === 32 || u === 9 || u === 10 || u === 12 || u === 13; }
function Ee(u) { var e = [], t = mr(e, "".concat(u), 0); if (t < u.length)
    throw new Error("Unmatched selector: ".concat(u.slice(t))); return e; }
function mr(u, e, t) { var r = []; function n(T) { var A = e.slice(t + T).match(pr); if (!A)
    throw new Error("Expected name, found ".concat(e.slice(t))); var _a = __read(A, 1), D = _a[0]; return t += T + D.length, ru(D); } function i(T) { for (t += T; t < e.length && gr(e.charCodeAt(t));)
    t++; } function a() { t += 1; var T = t, A = 1; for (; A > 0 && t < e.length; t++)
    e.charCodeAt(t) === 40 && !c(t) ? A++ : e.charCodeAt(t) === 41 && !c(t) && A--; if (A)
    throw new Error("Parenthesis not matched"); return ru(e.slice(T, t - 1)); } function c(T) { var A = 0; for (; e.charCodeAt(--T) === 92;)
    A++; return (A & 1) === 1; } function h() { if (r.length > 0 && De(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function b(T) { if (r.length > 0 && r[r.length - 1].type === E.Descendant) {
    r[r.length - 1].type = T;
    return;
} h(), r.push({ type: T }); } function v(T, A) { r.push({ type: E.Attribute, name: T, action: A, value: n(1), namespace: null, ignoreCase: "quirks" }); } function k() { if (r.length && r[r.length - 1].type === E.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); u.push(r); } if (i(0), e.length === t)
    return t; e: for (; t < e.length;) {
    var T = e.charCodeAt(t);
    switch (T) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (r.length === 0 || r[0].type !== E.Descendant) && (h(), r.push({ type: E.Descendant })), i(1);
            break;
        }
        case 62: {
            b(E.Child), i(1);
            break;
        }
        case 60: {
            b(E.Parent), i(1);
            break;
        }
        case 126: {
            b(E.Sibling), i(1);
            break;
        }
        case 43: {
            b(E.Adjacent), i(1);
            break;
        }
        case 46: {
            v("class", K.Element);
            break;
        }
        case 35: {
            v("id", K.Equals);
            break;
        }
        case 91: {
            i(1);
            var A = void 0, D = null;
            e.charCodeAt(t) === 124 ? A = n(1) : e.startsWith("*|", t) ? (D = "*", A = n(2)) : (A = n(0), e.charCodeAt(t) === 124 && e.charCodeAt(t + 1) !== 61 && (D = A, A = n(1))), i(0);
            var R = K.Exists, Q = en.get(e.charCodeAt(t));
            if (Q) {
                if (R = Q, e.charCodeAt(t + 1) !== 61)
                    throw new Error("Expected `=`");
                i(2);
            }
            else
                e.charCodeAt(t) === 61 && (R = K.Equals, i(1));
            var F = "", $ = null;
            if (R !== "exists") {
                if (gt(e.charCodeAt(t))) {
                    var L = e.charCodeAt(t), q = t + 1;
                    for (; q < e.length && (e.charCodeAt(q) !== L || c(q));)
                        q += 1;
                    if (e.charCodeAt(q) !== L)
                        throw new Error("Attribute value didn't end");
                    F = ru(e.slice(t + 1, q)), t = q + 1;
                }
                else {
                    var L = t;
                    for (; t < e.length && (!gr(e.charCodeAt(t)) && e.charCodeAt(t) !== 93 || c(t));)
                        t += 1;
                    F = ru(e.slice(L, t));
                }
                i(0);
                var U = e.charCodeAt(t) | 32;
                U === 115 ? ($ = !1, i(1)) : U === 105 && ($ = !0, i(1));
            }
            if (e.charCodeAt(t) !== 93)
                throw new Error("Attribute selector didn't terminate");
            t += 1;
            var O = { type: E.Attribute, name: A, action: R, value: F, namespace: D, ignoreCase: $ };
            r.push(O);
            break;
        }
        case 58: {
            if (e.charCodeAt(t + 1) === 58) {
                r.push({ type: E.PseudoElement, name: n(2).toLowerCase(), data: e.charCodeAt(t) === 40 ? a() : null });
                continue;
            }
            var A = n(1).toLowerCase(), D = null;
            if (e.charCodeAt(t) === 40)
                if (un.has(A)) {
                    if (gt(e.charCodeAt(t + 1)))
                        throw new Error("Pseudo-selector ".concat(A, " cannot be quoted"));
                    if (D = [], t = mr(D, e, t + 1), e.charCodeAt(t) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(A, " (").concat(e, ")"));
                    t += 1;
                }
                else {
                    if (D = a(), tn.has(A)) {
                        var R = D.charCodeAt(0);
                        R === D.charCodeAt(D.length - 1) && gt(R) && (D = D.slice(1, -1));
                    }
                    D = ru(D);
                }
            r.push({ type: E.Pseudo, name: A, data: D });
            break;
        }
        case 44: {
            k(), r = [], i(1);
            break;
        }
        default: {
            if (e.startsWith("/*", t)) {
                var R = e.indexOf("*/", t + 2);
                if (R < 0)
                    throw new Error("Comment was not terminated");
                t = R + 2, r.length === 0 && i(0);
                break;
            }
            var A = null, D = void 0;
            if (T === 42)
                t += 1, D = "*";
            else if (T === 124) {
                if (D = "", e.charCodeAt(t + 1) === 124) {
                    b(E.ColumnCombinator), i(2);
                    break;
                }
            }
            else if (pr.test(e.slice(t)))
                D = n(0);
            else
                break e;
            e.charCodeAt(t) === 124 && e.charCodeAt(t + 1) !== 124 && (A = D, e.charCodeAt(t + 1) === 42 ? (D = "*", t += 2) : D = n(1)), r.push(D === "*" ? { type: E.Universal, namespace: A } : { type: E.Tag, name: D, namespace: A });
        }
    }
} return k(), t; }
var Nt = Ne(Te(), 1);
var ye = Ne(Te(), 1);
var yr = new Map([[E.Universal, 50], [E.Tag, 30], [E.Attribute, 1], [E.Pseudo, 0]]);
function nu(u) { return !yr.has(u.type); }
var nn = new Map([[K.Exists, 10], [K.Equals, 8], [K.Not, 7], [K.Start, 6], [K.End, 6], [K.Any, 5]]);
function mt(u) { var e = u.map(vr); for (var t = 1; t < u.length; t++) {
    var r = e[t];
    if (!(r < 0))
        for (var n = t - 1; n >= 0 && r < e[n]; n--) {
            var i = u[n + 1];
            u[n + 1] = u[n], u[n] = i, e[n + 1] = e[n], e[n] = r;
        }
} }
function vr(u) { var e, t; var r = (e = yr.get(u.type)) !== null && e !== void 0 ? e : -1; return u.type === E.Attribute ? (r = (t = nn.get(u.action)) !== null && t !== void 0 ? t : 4, u.action === K.Equals && u.name === "id" && (r = 9), u.ignoreCase && (r >>= 1)) : u.type === E.Pseudo && (u.data ? u.name === "has" || u.name === "contains" ? r = 0 : Array.isArray(u.data) ? (r = Math.min.apply(Math, __spreadArray([], __read(u.data.map(function (n) { return Math.min.apply(Math, __spreadArray([], __read(n.map(vr)), false)); })), false)), r < 0 && (r = 0)) : r = 2 : r = 3), r; }
var iu = Ne(Te(), 1), an = /[-[\]{}()*+?.,\\^$|#\s]/g;
function Sr(u) { return u.replace(an, "\\$&"); }
var sn = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function qe(u, e) { return typeof u.ignoreCase == "boolean" ? u.ignoreCase : u.ignoreCase === "quirks" ? !!e.quirksMode : !e.xmlMode && sn.has(u.name); }
var wr = { equals: function (u, e, t) { var r = t.adapter, n = e.name, i = e.value; return qe(e, t) ? (i = i.toLowerCase(), function (a) { var c = r.getAttributeValue(a, n); return c != null && c.length === i.length && c.toLowerCase() === i && u(a); }) : function (a) { return r.getAttributeValue(a, n) === i && u(a); }; }, hyphen: function (u, e, t) { var r = t.adapter, n = e.name, i = e.value, a = i.length; return qe(e, t) ? (i = i.toLowerCase(), function (h) { var b = r.getAttributeValue(h, n); return b != null && (b.length === a || b.charAt(a) === "-") && b.substr(0, a).toLowerCase() === i && u(h); }) : function (h) { var b = r.getAttributeValue(h, n); return b != null && (b.length === a || b.charAt(a) === "-") && b.substr(0, a) === i && u(h); }; }, element: function (u, e, t) { var r = t.adapter, n = e.name, i = e.value; if (/\s/.test(i))
        return iu.default.falseFunc; var a = new RegExp("(?:^|\\s)".concat(Sr(i), "(?:$|\\s)"), qe(e, t) ? "i" : ""); return function (h) { var b = r.getAttributeValue(h, n); return b != null && b.length >= i.length && a.test(b) && u(h); }; }, exists: function (u, _a, _b) {
        var e = _a.name;
        var t = _b.adapter;
        return function (r) { return t.hasAttrib(r, e) && u(r); };
    }, start: function (u, e, t) { var r = t.adapter, n = e.name, i = e.value, a = i.length; return a === 0 ? iu.default.falseFunc : qe(e, t) ? (i = i.toLowerCase(), function (c) { var h = r.getAttributeValue(c, n); return h != null && h.length >= a && h.substr(0, a).toLowerCase() === i && u(c); }) : function (c) { var h; return !!(!((h = r.getAttributeValue(c, n)) === null || h === void 0) && h.startsWith(i)) && u(c); }; }, end: function (u, e, t) { var r = t.adapter, n = e.name, i = e.value, a = -i.length; return a === 0 ? iu.default.falseFunc : qe(e, t) ? (i = i.toLowerCase(), function (c) { var h; return ((h = r.getAttributeValue(c, n)) === null || h === void 0 ? void 0 : h.substr(a).toLowerCase()) === i && u(c); }) : function (c) { var h; return !!(!((h = r.getAttributeValue(c, n)) === null || h === void 0) && h.endsWith(i)) && u(c); }; }, any: function (u, e, t) { var r = t.adapter, n = e.name, i = e.value; if (i === "")
        return iu.default.falseFunc; if (qe(e, t)) {
        var a_1 = new RegExp(Sr(i), "i");
        return function (h) { var b = r.getAttributeValue(h, n); return b != null && b.length >= i.length && a_1.test(b) && u(h); };
    } return function (a) { var c; return !!(!((c = r.getAttributeValue(a, n)) === null || c === void 0) && c.includes(i)) && u(a); }; }, not: function (u, e, t) { var r = t.adapter, n = e.name, i = e.value; return i === "" ? function (a) { return !!r.getAttributeValue(a, n) && u(a); } : qe(e, t) ? (i = i.toLowerCase(), function (a) { var c = r.getAttributeValue(a, n); return (c == null || c.length !== i.length || c.toLowerCase() !== i) && u(a); }) : function (a) { return r.getAttributeValue(a, n) !== i && u(a); }; } };
var cn = new Set([9, 10, 12, 13, 32]), Ar = 48, on = 57;
function Er(u) { if (u = u.trim().toLowerCase(), u === "even")
    return [2, 0]; if (u === "odd")
    return [2, 1]; var e = 0, t = 0, r = i(), n = a(); if (e < u.length && u.charAt(e) === "n" && (e++, t = r * (n != null ? n : 1), c(), e < u.length ? (r = i(), c(), n = a()) : r = n = 0), n === null || e < u.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(u, "')")); return [t, r * n]; function i() { return u.charAt(e) === "-" ? (e++, -1) : (u.charAt(e) === "+" && e++, 1); } function a() { var h = e, b = 0; for (; e < u.length && u.charCodeAt(e) >= Ar && u.charCodeAt(e) <= on;)
    b = b * 10 + (u.charCodeAt(e) - Ar), e++; return e === h ? null : b; } function c() { for (; e < u.length && cn.has(u.charCodeAt(e));)
    e++; } }
var xt = Ne(Te(), 1);
function Tr(u) { var e = u[0], t = u[1] - 1; if (t < 0 && e <= 0)
    return xt.default.falseFunc; if (e === -1)
    return function (i) { return i <= t; }; if (e === 0)
    return function (i) { return i === t; }; if (e === 1)
    return t < 0 ? xt.default.trueFunc : function (i) { return i >= t; }; var r = Math.abs(e), n = (t % r + r) % r; return e > 1 ? function (i) { return i >= t && i % r === n; } : function (i) { return i <= t && i % r === n; }; }
function ze(u) { return Tr(Er(u)); }
var se = Ne(Te(), 1);
function Eu(u, e) { return function (t) { var r = e.getParent(t); return r != null && e.isTag(r) && u(t); }; }
var $e = { contains: function (u, e, _a) {
        var t = _a.adapter;
        return function (n) { return u(n) && t.getText(n).includes(e); };
    }, icontains: function (u, e, _a) {
        var t = _a.adapter;
        var r = e.toLowerCase();
        return function (i) { return u(i) && t.getText(i).toLowerCase().includes(r); };
    }, "nth-child": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = ze(e);
        return n === se.default.falseFunc ? se.default.falseFunc : n === se.default.trueFunc ? Eu(u, t) : function (a) { var c = t.getSiblings(a), h = 0; for (var b = 0; b < c.length && !r(a, c[b]); b++)
            t.isTag(c[b]) && h++; return n(h) && u(a); };
    }, "nth-last-child": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = ze(e);
        return n === se.default.falseFunc ? se.default.falseFunc : n === se.default.trueFunc ? Eu(u, t) : function (a) { var c = t.getSiblings(a), h = 0; for (var b = c.length - 1; b >= 0 && !r(a, c[b]); b--)
            t.isTag(c[b]) && h++; return n(h) && u(a); };
    }, "nth-of-type": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = ze(e);
        return n === se.default.falseFunc ? se.default.falseFunc : n === se.default.trueFunc ? Eu(u, t) : function (a) { var c = t.getSiblings(a), h = 0; for (var b = 0; b < c.length; b++) {
            var v = c[b];
            if (r(a, v))
                break;
            t.isTag(v) && t.getName(v) === t.getName(a) && h++;
        } return n(h) && u(a); };
    }, "nth-last-of-type": function (u, e, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = ze(e);
        return n === se.default.falseFunc ? se.default.falseFunc : n === se.default.trueFunc ? Eu(u, t) : function (a) { var c = t.getSiblings(a), h = 0; for (var b = c.length - 1; b >= 0; b--) {
            var v = c[b];
            if (r(a, v))
                break;
            t.isTag(v) && t.getName(v) === t.getName(a) && h++;
        } return n(h) && u(a); };
    }, root: function (u, e, _a) {
        var t = _a.adapter;
        return function (r) { var n = t.getParent(r); return (n == null || !t.isTag(n)) && u(r); };
    }, scope: function (u, e, t, r) { var n = t.equals; return !r || r.length === 0 ? $e.root(u, e, t) : r.length === 1 ? function (i) { return n(r[0], i) && u(i); } : function (i) { return r.includes(i) && u(i); }; }, hover: yt("isHovered"), visited: yt("isVisited"), active: yt("isActive") };
function yt(u) { return function (t, r, _a) {
    var n = _a.adapter;
    var i = n[u];
    return typeof i != "function" ? se.default.falseFunc : function (c) { return i(c) && t(c); };
}; }
var au = { empty: function (u, _a) {
        var e = _a.adapter;
        return !e.getChildren(u).some(function (t) { return e.isTag(t) || e.getText(t) !== ""; });
    }, "first-child": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        if (e.prevElementSibling)
            return e.prevElementSibling(u) == null;
        var r = e.getSiblings(u).find(function (n) { return e.isTag(n); });
        return r != null && t(u, r);
    }, "last-child": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getSiblings(u);
        for (var n = r.length - 1; n >= 0; n--) {
            if (t(u, r[n]))
                return !0;
            if (e.isTag(r[n]))
                break;
        }
        return !1;
    }, "first-of-type": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getSiblings(u), n = e.getName(u);
        for (var i = 0; i < r.length; i++) {
            var a = r[i];
            if (t(u, a))
                return !0;
            if (e.isTag(a) && e.getName(a) === n)
                break;
        }
        return !1;
    }, "last-of-type": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getSiblings(u), n = e.getName(u);
        for (var i = r.length - 1; i >= 0; i--) {
            var a = r[i];
            if (t(u, a))
                return !0;
            if (e.isTag(a) && e.getName(a) === n)
                break;
        }
        return !1;
    }, "only-of-type": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        var r = e.getName(u);
        return e.getSiblings(u).every(function (n) { return t(u, n) || !e.isTag(n) || e.getName(n) !== r; });
    }, "only-child": function (u, _a) {
        var e = _a.adapter, t = _a.equals;
        return e.getSiblings(u).every(function (r) { return t(u, r) || !e.isTag(r); });
    } };
function vt(u, e, t, r) { if (t === null) {
    if (u.length > r)
        throw new Error("Pseudo-class :".concat(e, " requires an argument"));
}
else if (u.length === r)
    throw new Error("Pseudo-class :".concat(e, " doesn't have any arguments")); }
var Tu = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var fe = Ne(Te(), 1);
var At = {};
function Et(u, e) { return u === fe.default.falseFunc ? fe.default.falseFunc : function (t) { return e.isTag(t) && u(t); }; }
function Tt(u, e) { var t = e.getSiblings(u); if (t.length <= 1)
    return []; var r = t.indexOf(u); return r < 0 || r === t.length - 1 ? [] : t.slice(r + 1).filter(e.isTag); }
function wt(u) { return { xmlMode: !!u.xmlMode, lowerCaseAttributeNames: !!u.lowerCaseAttributeNames, lowerCaseTags: !!u.lowerCaseTags, quirksMode: !!u.quirksMode, cacheResults: !!u.cacheResults, pseudos: u.pseudos, adapter: u.adapter, equals: u.equals }; }
var St = function (u, e, t, r, n) { var i = n(e, wt(t), r); return i === fe.default.trueFunc ? u : i === fe.default.falseFunc ? fe.default.falseFunc : function (a) { return i(a) && u(a); }; }, ku = { is: St, matches: St, where: St, not: function (u, e, t, r, n) { var i = n(e, wt(t), r); return i === fe.default.falseFunc ? u : i === fe.default.trueFunc ? fe.default.falseFunc : function (a) { return !i(a) && u(a); }; }, has: function (u, e, t, r, n) { var i = t.adapter, a = wt(t); a.relativeSelector = !0; var c = e.some(function (v) { return v.some(nu); }) ? [At] : void 0, h = n(e, a, c); if (h === fe.default.falseFunc)
        return fe.default.falseFunc; var b = Et(h, i); if (c && h !== fe.default.trueFunc) {
        var _a = h.shouldTestNextSiblings, v_1 = _a === void 0 ? !1 : _a;
        return function (k) { if (!u(k))
            return !1; c[0] = k; var T = i.getChildren(k), A = v_1 ? __spreadArray(__spreadArray([], __read(T), false), __read(Tt(k, i)), false) : T; return i.existsOne(b, A); };
    } return function (v) { return u(v) && i.existsOne(b, i.getChildren(v)); }; } };
function kr(u, e, t, r, n) { var i; var a = e.name, c = e.data; if (Array.isArray(c)) {
    if (!(a in ku))
        throw new Error("Unknown pseudo-class :".concat(a, "(").concat(c, ")"));
    return ku[a](u, c, t, r, n);
} var h = (i = t.pseudos) === null || i === void 0 ? void 0 : i[a], b = typeof h == "string" ? h : Tu[a]; if (typeof b == "string") {
    if (c != null)
        throw new Error("Pseudo ".concat(a, " doesn't have any arguments"));
    var v = Ee(b);
    return ku.is(u, v, t, r, n);
} if (typeof h == "function")
    return vt(h, a, c, 1), function (v) { return h(v, c) && u(v); }; if (a in $e)
    return $e[a](u, c, t, r); if (a in au) {
    var v_2 = au[a];
    return vt(v_2, a, c, 2), function (k) { return v_2(k, t, c) && u(k); };
} throw new Error("Unknown pseudo-class :".concat(a)); }
function kt(u, e) { var t = e.getParent(u); return t && e.isTag(t) ? t : null; }
function Nr(u, e, t, r, n) { var i = t.adapter, a = t.equals; switch (e.type) {
    case E.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case E.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case E.Attribute: {
        if (e.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!t.xmlMode || t.lowerCaseAttributeNames) && (e.name = e.name.toLowerCase()), wr[e.action](u, e, t);
    }
    case E.Pseudo: return kr(u, e, t, r, n);
    case E.Tag: {
        if (e.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var c_1 = e.name;
        return (!t.xmlMode || t.lowerCaseTags) && (c_1 = c_1.toLowerCase()), function (b) { return i.getName(b) === c_1 && u(b); };
    }
    case E.Descendant: {
        if (t.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (b) { var v = b; for (; v = kt(v, i);)
                if (u(v))
                    return !0; return !1; };
        var c_2 = new WeakSet;
        return function (b) { var v = b; for (; v = kt(v, i);)
            if (!c_2.has(v)) {
                if (i.isTag(v) && u(v))
                    return !0;
                c_2.add(v);
            } return !1; };
    }
    case "_flexibleDescendant": return function (h) { var b = h; do
        if (u(b))
            return !0;
    while (b = kt(b, i)); return !1; };
    case E.Parent: return function (h) { return i.getChildren(h).some(function (b) { return i.isTag(b) && u(b); }); };
    case E.Child: return function (h) { var b = i.getParent(h); return b != null && i.isTag(b) && u(b); };
    case E.Sibling: return function (h) { var b = i.getSiblings(h); for (var v = 0; v < b.length; v++) {
        var k = b[v];
        if (a(h, k))
            break;
        if (i.isTag(k) && u(k))
            return !0;
    } return !1; };
    case E.Adjacent: return i.prevElementSibling ? function (h) { var b = i.prevElementSibling(h); return b != null && u(b); } : function (h) { var b = i.getSiblings(h), v; for (var k = 0; k < b.length; k++) {
        var T = b[k];
        if (a(h, T))
            break;
        i.isTag(T) && (v = T);
    } return !!v && u(v); };
    case E.Universal: {
        if (e.namespace != null && e.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return u;
    }
} }
function Cr(u, e, t) { var r = Nu(u, e, t); return Et(r, e.adapter); }
function Nu(u, e, t) { var r = typeof u == "string" ? Ee(u) : u; return Cu(r, e, t); }
function Dr(u) { return u.type === E.Pseudo && (u.name === "scope" || Array.isArray(u.data) && u.data.some(function (e) { return e.some(Dr); })); }
var ln = { type: E.Descendant }, fn = { type: "_flexibleDescendant" }, dn = { type: E.Pseudo, name: "scope", data: null };
function hn(u, _a, t) {
    var e_6, _b;
    var e = _a.adapter;
    var r = !!(t != null && t.every(function (n) { var i = e.isTag(n) && e.getParent(n); return n === At || i && e.isTag(i); }));
    try {
        for (var u_1 = __values(u), u_1_1 = u_1.next(); !u_1_1.done; u_1_1 = u_1.next()) {
            var n = u_1_1.value;
            if (!(n.length > 0 && nu(n[0]) && n[0].type !== E.Descendant))
                if (r && !n.some(Dr))
                    n.unshift(ln);
                else
                    continue;
            n.unshift(dn);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (u_1_1 && !u_1_1.done && (_b = u_1.return)) _b.call(u_1);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
function Cu(u, e, t) { var r; u.forEach(mt), t = (r = e.context) !== null && r !== void 0 ? r : t; var n = Array.isArray(t), i = t && (Array.isArray(t) ? t : [t]); if (e.relativeSelector !== !1)
    hn(u, e, i);
else if (u.some(function (h) { return h.length > 0 && nu(h[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var a = !1, c = u.map(function (h) { if (h.length >= 2) {
    var _a = __read(h, 2), b = _a[0], v = _a[1];
    b.type !== E.Pseudo || b.name !== "scope" || (n && v.type === E.Descendant ? h[1] = fn : (v.type === E.Adjacent || v.type === E.Sibling) && (a = !0));
} return bn(h, e, i); }).reduce(pn, ye.default.falseFunc); return c.shouldTestNextSiblings = a, c; }
function bn(u, e, t) { var r; return u.reduce(function (n, i) { return n === ye.default.falseFunc ? ye.default.falseFunc : Nr(n, i, e, t, Cu); }, (r = e.rootFunc) !== null && r !== void 0 ? r : ye.default.trueFunc); }
function pn(u, e) { return e === ye.default.falseFunc || u === ye.default.trueFunc ? u : u === ye.default.falseFunc || e === ye.default.trueFunc ? e : function (r) { return u(r) || e(r); }; }
var qr = function (u, e) { return u === e; }, gn = { adapter: be, equals: qr };
function Ir(u) { var e, t, r, n; var i = u != null ? u : gn; return (e = i.adapter) !== null && e !== void 0 || (i.adapter = be), (t = i.equals) !== null && t !== void 0 || (i.equals = (n = (r = i.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && n !== void 0 ? n : qr), i; }
function Ct(u) { return function (t, r, n) { var i = Ir(r); return u(t, i, n); }; }
var Fa = Ct(Cr), Va = Ct(Nu), Du = Ct(Cu);
function Lr(u) { return function (t, r, n) { var i = Ir(n); typeof t != "function" && (t = Nu(t, i, r)); var a = qu(r, i.adapter, t.shouldTestNextSiblings); return u(t, a, i); }; }
function qu(u, e, t) {
    if (t === void 0) { t = !1; }
    return t && (u = mn(u, e)), Array.isArray(u) ? e.removeSubsets(u) : e.getChildren(u);
}
function mn(u, e) { var t = Array.isArray(u) ? u.slice(0) : [u], r = t.length; for (var n = 0; n < r; n++) {
    var i = Tt(t[n], e);
    t.push.apply(t, __spreadArray([], __read(i), false));
} return t; }
var Ga = Lr(function (u, e, t) { return u === Nt.default.falseFunc || !e || e.length === 0 ? [] : t.adapter.findAll(u, e); }), ja = Lr(function (u, e, t) { return u === Nt.default.falseFunc || !e || e.length === 0 ? null : t.adapter.findOne(u, e); });
var Lu = Ne(Te(), 1);
var xn = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function We(u) { return u.type !== "pseudo" ? !1 : xn.has(u.name) ? !0 : u.name === "not" && Array.isArray(u.data) ? u.data.some(function (e) { return e.some(We); }) : !1; }
function Ur(u, e, t) { var r = e != null ? parseInt(e, 10) : NaN; switch (u) {
    case "first": return 1;
    case "nth":
    case "eq": return isFinite(r) ? r >= 0 ? r + 1 : 1 / 0 : 0;
    case "lt": return isFinite(r) ? r >= 0 ? Math.min(r, t) : 1 / 0 : 0;
    case "gt": return isFinite(r) ? 1 / 0 : 0;
    case "odd": return 2 * t;
    case "even": return 2 * t - 1;
    case "last":
    case "not": return 1 / 0;
} }
function Mr(u) { for (; u.parent;)
    u = u.parent; return u; }
function Iu(u) {
    var e_7, _a;
    var e = [], t = [];
    try {
        for (var u_2 = __values(u), u_2_1 = u_2.next(); !u_2_1.done; u_2_1 = u_2.next()) {
            var r = u_2_1.value;
            r.some(We) ? e.push(r) : t.push(r);
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (u_2_1 && !u_2_1.done && (_a = u_2.return)) _a.call(u_2);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return [t, e];
}
var yn = { type: E.Universal, namespace: null }, vn = { type: E.Pseudo, name: "scope", data: null };
function It(u, e, t) {
    if (t === void 0) { t = {}; }
    return Sn([u], e, t);
}
function Sn(u, e, t) {
    if (t === void 0) { t = {}; }
    if (typeof e == "function")
        return u.some(e);
    var _a = __read(Iu(Ee(e)), 2), r = _a[0], n = _a[1];
    return r.length > 0 && u.some(Du(r, t)) || n.some(function (i) { return Or(i, u, t).length > 0; });
}
function wn(u, e, t, r) { var n = typeof t == "string" ? parseInt(t, 10) : NaN; switch (u) {
    case "first":
    case "lt": return e;
    case "last": return e.length > 0 ? [e[e.length - 1]] : e;
    case "nth":
    case "eq": return isFinite(n) && Math.abs(n) < e.length ? [n < 0 ? e[e.length + n] : e[n]] : [];
    case "gt": return isFinite(n) ? e.slice(n + 1) : [];
    case "even": return e.filter(function (i, a) { return a % 2 === 0; });
    case "odd": return e.filter(function (i, a) { return a % 2 === 1; });
    case "not": {
        var i_1 = new Set(An(t, e, r));
        return e.filter(function (a) { return !i_1.has(a); });
    }
} }
function An(u, e, t) { if (e.length === 0)
    return []; var _a = __read(Iu(u), 2), r = _a[0], n = _a[1], i; if (r.length) {
    var a = qt(e, r, t);
    if (n.length === 0)
        return a;
    a.length && (i = new Set(a));
} for (var a = 0; a < n.length && (i == null ? void 0 : i.size) !== e.length; a++) {
    var c = n[a];
    if ((i ? e.filter(function (v) { return H(v) && !i.has(v); }) : e).length === 0)
        break;
    var b = Or(c, e, t);
    if (b.length)
        if (i)
            b.forEach(function (v) { return i.add(v); });
        else {
            if (a === n.length - 1)
                return b;
            i = new Set(b);
        }
} return typeof i != "undefined" ? i.size === e.length ? e : e.filter(function (a) { return i.has(a); }) : []; }
function Or(u, e, t) { var r; if (u.some(De)) {
    var n = (r = t.root) !== null && r !== void 0 ? r : Mr(e[0]), i = ke(de({}, t), { context: e, relativeSelector: !1 });
    return u.push(vn), Uu(n, u, i, !0, e.length);
} return Uu(e, u, t, !1, e.length); }
function Lt(u, e, t, r) {
    if (t === void 0) { t = {}; }
    if (r === void 0) { r = 1 / 0; }
    if (typeof u == "function")
        return Br(e, u);
    var _a = __read(Iu(Ee(u)), 2), n = _a[0], i = _a[1], a = i.map(function (c) { return Uu(e, c, t, !0, r); });
    return n.length && a.push(Dt(e, n, t, r)), a.length === 0 ? [] : a.length === 1 ? a[0] : bt(a.reduce(function (c, h) { return __spreadArray(__spreadArray([], __read(c), false), __read(h), false); }));
}
function Uu(u, e, t, r, n) { var i = e.findIndex(We), a = e.slice(0, i), c = e[i], h = e.length - 1 === i ? n : 1 / 0, b = Ur(c.name, c.data, h); if (b === 0)
    return []; var k = (a.length === 0 && !Array.isArray(u) ? xu(u).filter(H) : a.length === 0 ? (Array.isArray(u) ? u : [u]).filter(H) : r || a.some(De) ? Dt(u, [a], t, b) : qt(u, [a], t)).slice(0, b), T = wn(c.name, k, c.data, t); if (T.length === 0 || e.length === i + 1)
    return T; var A = e.slice(i + 1), D = A.some(De); if (D) {
    if (De(A[0])) {
        var R = A[0].type;
        (R === E.Sibling || R === E.Adjacent) && (T = qu(T, be, !0)), A.unshift(yn);
    }
    t = ke(de({}, t), { relativeSelector: !1, rootFunc: function (R) { return T.includes(R); } });
}
else
    t.rootFunc && t.rootFunc !== Lu.trueFunc && (t = ke(de({}, t), { rootFunc: Lu.trueFunc })); return A.some(We) ? Uu(T, A, t, !1, n) : D ? Dt(T, [A], t, n) : qt(T, [A], t); }
function Dt(u, e, t, r) { var n = Du(e, t, u); return Br(u, n, r); }
function Br(u, e, t) {
    if (t === void 0) { t = 1 / 0; }
    var r = qu(u, be, e.shouldTestNextSiblings);
    return vu(function (n) { return H(n) && e(n); }, r, !0, t);
}
function qt(u, e, t) { var r = (Array.isArray(u) ? u : [u]).filter(H); if (r.length === 0)
    return r; var n = Du(e, t); return n === Lu.trueFunc ? r : r.filter(n); }
function Hr(u) { var e = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(u) || []; return { scheme: e[1], auth: e[2], path: e[3] || "", query: e[4], frag: e[5] }; }
function Ut(u) { var e = [], t = u.split("/"); for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n === ".." ? (e.length > 1 && e.pop(), r === t.length - 1 && e.push("")) : n === "." ? r === t.length - 1 && e.push("") : e.push(n);
} return e.join("/"); }
function Ou(u, e) { e = e == null ? "" : String(e).trim(); var t = Hr(e); if (t.scheme || !u)
    return e; var r = Hr(String(u)); if (!r.scheme)
    return e; var n = r.auth, i, a; if (t.auth !== void 0)
    n = t.auth, i = Ut(t.path), a = t.query;
else if (!t.path)
    i = r.path, a = t.query !== void 0 ? t.query : r.query;
else {
    if (t.path.charAt(0) === "/")
        i = Ut(t.path);
    else {
        var c = n !== void 0 && !r.path ? "/" : r.path.slice(0, r.path.lastIndexOf("/") + 1);
        i = Ut(c + t.path);
    }
    a = t.query;
} return n !== void 0 && i.charAt(0) !== "/" && (i = "/" + i), r.scheme + ":" + (n !== void 0 ? "//" + n : "") + i + (a !== void 0 ? "?" + a : "") + (t.frag !== void 0 ? "#" + t.frag : ""); }
var Mu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function Rr(u) { if (typeof btoa == "function")
    return btoa(u); var e = ""; for (var t = 0; t < u.length; t += 3) {
    var r = u.charCodeAt(t), n = u.charCodeAt(t + 1), i = u.charCodeAt(t + 2), a = r << 16 | (n || 0) << 8 | (i || 0);
    e += Mu[a >> 18 & 63] + Mu[a >> 12 & 63] + (t + 1 < u.length ? Mu[a >> 6 & 63] : "=") + (t + 2 < u.length ? Mu[a & 63] : "=");
} return e; }
var En = function (u, e, t) { return Lt(u, e, t); }, Gr = function (u, e, t) { return Lt(u, e, t, 1)[0] || null; }, jr = /[\s ]+/g, Pr = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), Tn = { containsOwn: function (u, e) { return Ot(u).toLowerCase().includes(String(e).toLowerCase()); }, matches: function (u, e) { return Fr(e).test(Mt(u)); }, matchesOwn: function (u, e) { return Fr(e).test(Ot(u)); }, containsData: function (u, e) { return we(u).includes(e); }, "contains-ci": function (u, e) { return Mt(u).toLowerCase().includes(String(e).toLowerCase()); } };
function Fr(u) { try {
    return new RegExp(u);
}
catch (e) {
    return /$^/;
} }
var Bu = { pseudos: Tn, xmlMode: !1, lowerCaseTags: !0 };
function Hu(u) { return String(u).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function Mt(u) { if (!u)
    return ""; if (u.type === "text")
    return u.data; var e = "", t = function (r) {
    var e_8, _a;
    try {
        for (var _b = __values(r.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var n = _c.value;
            n.type === "text" ? e += n.data : (n.type === "tag" || n.type === "script" || n.type === "style") && (n.name === "br" ? e += " " : n.type === "tag" && (Pr.has(n.name) && (e += " "), t(n), Pr.has(n.name) && (e += " ")));
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_8) throw e_8.error; }
    }
}; return t(u), e.replace(jr, " ").trim(); }
function Ot(u) {
    var e_9, _a;
    var e = "";
    try {
        for (var _b = __values(u.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var t = _c.value;
            t.type === "text" && (e += t.data);
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return e.replace(jr, " ").trim();
}
function zr(u, e) { if (!e)
    return ""; try {
    return Ou(u, e);
}
catch (t) {
    return u ? "" : e;
} }
var Ie = (function () {
    function u(e, t) {
        this.node = e, this.doc = t;
    }
    Object.defineProperty(u.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    u.prototype.select = function (e) { return pe.of(En(Hu(e), this.node, Bu), this.doc); };
    u.prototype.selectFirst = function (e) { var t = Gr(Hu(e), this.node, Bu); return t ? new u(t, this.doc) : null; };
    u.prototype.is = function (e) { return It(this.node, Hu(e), Bu); };
    u.prototype.text = function () { return Mt(this.node); };
    u.prototype.ownText = function () { return Ot(this.node); };
    u.prototype.wholeText = function () { return we(this.node); };
    u.prototype.data = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return e.data; }).join(""); };
    u.prototype.html = function () { return (this.node.children || []).map(function (e) { return Ge(e, { decodeEntities: !1 }); }).join("").trim(); };
    u.prototype.outerHtml = function () { return Ge(this.node, { decodeEntities: !1 }); };
    u.prototype.toString = function () { return this.outerHtml(); };
    u.prototype.tagName = function () { return this.node.name || ""; };
    u.prototype.nodeName = function () { return this.node.name || "#" + this.node.type; };
    u.prototype.id = function () { return this.attr("id"); };
    u.prototype.className = function () { return this.attr("class"); };
    u.prototype.classNames = function () { return this.className().split(/\s+/).filter(Boolean); };
    u.prototype.hasClass = function (e) { return this.classNames().includes(e); };
    u.prototype.attr = function (e, t) { if (t !== void 0)
        return this.node.attribs && (this.node.attribs[e] = String(t)), this; if (!this.node.attribs)
        return ""; if (e.startsWith("abs:"))
        return zr(this.baseUri, this.node.attribs[e.slice(4)] || ""); var r = this.node.attribs[e]; return r == null ? "" : r; };
    u.prototype.absUrl = function (e) { return this.attr("abs:" + e); };
    u.prototype.hasAttr = function (e) { return !!(this.node.attribs && (e.startsWith("abs:") ? e.slice(4) : e) in this.node.attribs); };
    u.prototype.removeAttr = function (e) { return this.node.attribs && delete this.node.attribs[e], this; };
    u.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    u.prototype.dataset = function () {
        var e_10, _a;
        var e = {};
        try {
            for (var _b = __values(Object.entries(this.node.attribs || {})), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), t = _d[0], r = _d[1];
                t.startsWith("data-") && (e[t.slice(5)] = r);
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return e;
    };
    u.prototype.val = function () { return this.attr("value"); };
    u.prototype.parent = function () { var e = this.node.parent; return e && e.type !== "root" ? new u(e, this.doc) : null; };
    u.prototype.parents = function () { var e = [], t = this.node.parent; for (; t && t.type !== "root";)
        e.push(t), t = t.parent; return pe.of(e, this.doc); };
    u.prototype.closest = function (e) { var t = this.node; for (; t && t.type !== "root";) {
        if (t.type === "tag" && It(t, Hu(e), Bu))
            return new u(t, this.doc);
        t = t.parent;
    } return null; };
    u.prototype.children = function () { return pe.of((this.node.children || []).filter(H), this.doc); };
    u.prototype.child = function (e) { var t = (this.node.children || []).filter(H)[e]; return t ? new u(t, this.doc) : null; };
    u.prototype.childrenSize = function () { return (this.node.children || []).filter(H).length; };
    u.prototype.nextElementSibling = function () { var e = lt(this.node); return e ? new u(e, this.doc) : null; };
    u.prototype.previousElementSibling = function () { var e = ft(this.node); return e ? new u(e, this.doc) : null; };
    u.prototype.siblingElements = function () {
        var _this = this;
        return pe.of(yu(this.node).filter(function (e) { return e !== _this.node && H(e); }), this.doc);
    };
    u.prototype.elementSiblingIndex = function () { return yu(this.node).filter(H).indexOf(this.node); };
    u.prototype.getElementsByTag = function (e) { return this.select(e); };
    u.prototype.getElementsByClass = function (e) { return this.select("." + e); };
    u.prototype.getElementById = function (e) { return this.selectFirst("#" + e); };
    u.prototype.remove = function () { return xe(this.node), this; };
    u.prototype.empty = function () { return this.node.children = [], this; };
    u.prototype.textNodes = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return ({ text: function () { return e.data; }, toString: function () { return e.data; } }); }); };
    u.prototype.title = function () { var e = this.selectFirst("title"); return e ? e.text() : ""; };
    u.prototype.body = function () { return this.selectFirst("body") || this; };
    u.prototype.head = function () { return this.selectFirst("head") || this; };
    u.prototype.location = function () { return this.baseUri; };
    return u;
}()), Ht = Object.create(Array.prototype), pe = { of: Bt, prototype: Ht };
function Bt(u, e) {
    var e_11, _a;
    var t = [];
    try {
        for (var _b = __values(u || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var r = _c.value;
            t.push(r instanceof Ie ? r : new Ie(r, e));
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return Object.setPrototypeOf(t, Ht), t;
}
var Vr = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (u) { return this[u] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (u) { return pe.of(this[u] ? [this[u]] : [], null); }, text: function () { return this.map(function (u) { return u.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (u) { return u.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (u) { return u.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (u) { return u.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (u, e) {
        var e_12, _a;
        if (e !== void 0)
            return this.forEach(function (t) { return t.attr(u, e); }), this;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                if (t.hasAttr(u))
                    return t.attr(u);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return "";
    }, eachAttr: function (u) { return this.filter(function (e) { return e.hasAttr(u); }).map(function (e) { return e.attr(u); }); }, hasAttr: function (u) { return this.some(function (e) { return e.hasAttr(u); }); }, hasClass: function (u) { return this.some(function (e) { return e.hasClass(u); }); }, val: function () { return this.length ? this[0].val() : ""; }, select: function (u) {
        var e_13, _a, e_14, _b;
        var e = Bt([]), t = new Set;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var r = _d.value;
                try {
                    for (var _f = (e_14 = void 0, __values(r.select(u))), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var n = _g.value;
                        t.has(n.node) || (t.add(n.node), e.push(n));
                    }
                }
                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_14) throw e_14.error; }
                }
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return e;
    }, selectFirst: function (u) {
        var e_15, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var e = _c.value;
                var t = e.selectFirst(u);
                if (t)
                    return t;
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return null;
    }, is: function (u) { return this.some(function (e) { return e.is(u); }); }, not: function (u) { return pe.of(this.filter(function (e) { return !e.is(u); }), null); }, parents: function () {
        var e_16, _a;
        var u = Bt([]);
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var e = _c.value;
                u.push.apply(u, __spreadArray([], __read(e.parents()), false));
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_16) throw e_16.error; }
        }
        return u;
    }, next: function () { return pe.of(this.map(function (u) { return u.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return pe.of(this.map(function (u) { return u.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (u) { return u.remove(); }), this; }, empty: function () { return this.forEach(function (u) { return u.empty(); }), this; }, removeAttr: function (u) { return this.forEach(function (e) { return e.removeAttr(u); }), this; } };
try {
    for (var _b = __values(Object.keys(Vr)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var u = _c.value;
        Object.defineProperty(Ht, u, { value: Vr[u], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
function Ru(u, e) { var t = br(String(u == null ? "" : u), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), r = new Ie(t, null); r.doc = r, r.__base = e || ""; var n = Gr("base[href]", t); return n && n.attribs.href && (r.__base = zr(r.__base, n.attribs.href)), r; }
function $r(u, e) { var t = new Set((e || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), r = Ru(u), n = function (i) {
    var e_17, _a, e_18, _b;
    try {
        for (var _c = __values((i.children || []).slice()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var a = _d.value;
            if (a.type === "script" || a.type === "style" || a.type === "comment") {
                xe(a);
                continue;
            }
            if (a.type === "tag" && (n(a), !t.has(a.name))) {
                var c = (a.children || []).slice();
                try {
                    for (var c_3 = (e_18 = void 0, __values(c)), c_3_1 = c_3.next(); !c_3_1.done; c_3_1 = c_3.next()) {
                        var h = c_3_1.value;
                        dt(a, h);
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (c_3_1 && !c_3_1.done && (_b = c_3.return)) _b.call(c_3);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
                xe(a);
            }
        }
    }
    catch (e_17_1) { e_17 = { error: e_17_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_17) throw e_17.error; }
    }
}; return n(r.node), Ge(r.node.children, { decodeEntities: !1 }); }
var su = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function kn(u) { if (typeof Buffer != "undefined")
    return Buffer.from(u).toString("base64"); var e = ""; for (var t = 0; t < u.length; t++)
    e += String.fromCharCode(u[t]); return Rr(e); }
function Wr(u) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(u) : Uint8Array.from(unescape(encodeURIComponent(u)), function (e) { return e.charCodeAt(0); }); }
function Nn(u) { var e = ""; for (var t = 0; t < u.length; t++) {
    var r = u.charCodeAt(t);
    if (r < 128) {
        e += u[t];
        continue;
    }
    if (r === 128) {
        e += "€";
        continue;
    }
    var n = u.charCodeAt(t + 1);
    r >= 129 && r <= 254 && n >= 64 && n <= 254 && n !== 127 ? (e += __GBK_TABLE[(r - 129) * 190 + (n - 64) - (n > 127 ? 1 : 0)], t++) : e += "�";
} return e; }
var Pu = (function () {
    function Pu(e, t) {
        this.status = e.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = e.statusText || String(this.status), this.url = e.url || t.url, this.headers = e.headers || {}, this._raw = e, this.request = { url: t.url, headers: t.headers || {} };
    }
    Pu.prototype.header = function (e) { var t = Object.keys(this.headers).find(function (r) { return r.toLowerCase() === String(e).toLowerCase(); }); return t ? this.headers[t] : ""; };
    Pu.prototype.text = function (e) { if (e && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(e).toLowerCase()).decode(this._raw.bytes);
        }
        catch (r) { } var t = this._raw.text == null ? "" : String(this._raw.text); return e || (e = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), e && /^(gbk|gb2312|gb18030)$/i.test(String(e)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(t) && !/[^\x00-\xff]/.test(t) ? Nn(t) : t; };
    Pu.prototype.string = function (e) { return this.text(e); };
    Pu.prototype.html = function (e) { return Ru(this.text(e), this.url); };
    Pu.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (e) {
        return null;
    } };
    Pu.prototype.base64 = function () { return kn(this._raw.bytes || Wr(this.text())); };
    Pu.prototype.blob = function () { var e = this; return { size: (this._raw.bytes || Wr(this.text())).length, type: this.header("content-type"), base64: function () { return e.base64(); } }; };
    return Pu;
}());
function Cn(u) {
    var e_19, _a;
    var e = {};
    if (!u)
        return e;
    if (typeof u.forEach == "function" && !Array.isArray(u) && typeof u.entries == "function")
        return u.forEach(function (t, r) { e[r] = t; }), e;
    try {
        for (var _b = __values(Object.keys(u)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var t = _c.value;
            e[t] = String(u[t]);
        }
    }
    catch (e_19_1) { e_19 = { error: e_19_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_19) throw e_19.error; }
    }
    return e;
}
function Qr(u, e) {
    var t = function (c) { return ({ getItem: function (h) { var b = u.storageGet(c + h); return b == null ? null : b; }, setItem: function (h, b) { return u.storageSet(c + h, b == null ? null : String(b)); }, removeItem: function (h) { return u.storageSet(c + h, null); }, clear: function () { return u.storageClear && u.storageClear(c); } }); }, r = "__cookie__", n = [], i = {};
    i.Response = { success: function (c, h) { return ({ code: 0, data: c === void 0 ? null : c, data2: h === void 0 ? null : h }); }, error: function (c) { return ({ code: 1, data: c == null ? "" : String(c) }); } }, i.fetch = function (h, b) {
        return __awaiter(this, void 0, void 0, function () {
            var v, F, k, T, A, F, D, R, F_2, $, Q, F_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        b = b || {};
                        v = String(h);
                        if (b.queries) {
                            F = Object.entries(b.queries).map(function (_a) {
                                var _b = __read(_a, 2), $ = _b[0], O = _b[1];
                                return encodeURIComponent($) + "=" + encodeURIComponent(O);
                            }).join("&");
                            F && (v += (v.includes("?") ? "&" : "?") + F);
                        }
                        k = Object.assign({ "User-Agent": su }, Cn(b.headers)), T = u.storageGet(r);
                        T && !Object.keys(k).some(function (F) { return F.toLowerCase() === "cookie"; }) && (k.Cookie = T);
                        A = b.body;
                        if (A != null && typeof A == "object") {
                            F = Object.keys(k).find(function ($) { return $.toLowerCase() === "content-type"; });
                            F && /json/i.test(k[F]) ? A = JSON.stringify(A) : (A = Object.entries(A).map(function (_a) {
                                var _b = __read(_a, 2), $ = _b[0], O = _b[1];
                                return encodeURIComponent($) + "=" + encodeURIComponent(O);
                            }).join("&"), F || (k["Content-Type"] = "application/x-www-form-urlencoded"));
                        }
                        D = { url: v, method: (b.method || (A != null ? "POST" : "GET")).toUpperCase(), headers: k, body: A, timeout: b.timeout }, R = D.method === "GET" && A == null ? v + "\n" + JSON.stringify(k) : null;
                        if (R) {
                            F_2 = Date.now(), $ = n.find(function (O) { return O.k === R && F_2 - O.t < 6e4; });
                            if ($)
                                return [2, new Pu($.raw, D)];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, u.request(D)];
                    case 2:
                        Q = _a.sent();
                        return [3, 4];
                    case 3:
                        F_1 = _a.sent();
                        Q = { status: 0, url: v, headers: {}, text: "", error: String(F_1 && F_1.message || F_1) };
                        return [3, 4];
                    case 4: return [2, (R && Q && Q.status === 200 && String(Q.text == null ? "" : Q.text).length < 3e6 && (n.push({ k: R, t: Date.now(), raw: Q }), n.length > 6 && n.shift()), new Pu(Q, D))];
                }
            });
        });
    }, i.Http = { get: function (c) { return Kr(i, "GET", c); }, post: function (c) { return Kr(i, "POST", c); } }, i.Html = { parse: function (c, h) { return Ru(c, h || ""); }, clean: function (c, h) { return $r(c, h); } }, i.localStorage = t("ls:"), i.cacheStorage = t("cs:"), i.localConfig = { getItem: function (c) { return u.config(c); } }, i.localCookie = { setCookie: function (c) { u.storageSet(r, String(c).split(";")[0]); }, getCookie: function () { return u.storageGet(r) || ""; } }, i.sleep = function (c) { return new Promise(function (h) { return typeof setTimeout == "function" ? setTimeout(h, Math.min(Number(c) || 0, 1e4)) : h(); }); };
    var a = function () {
        var c = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            c[_i] = arguments[_i];
        }
        try {
            u.log && u.log(c.map(function (h) { return typeof h == "string" ? h : JSON.stringify(h); }).join(" "));
        }
        catch (h) { }
    };
    return i.Log = { log: a }, i.console = { log: a, error: a, warn: a, info: a }, i.Console = i.console, i.log = a, i.UserAgent = { system: function () { return su; }, chrome: function () { return su; }, android: function () { return su; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, i.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (u.name || "host") + ")"); } }, i.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, i.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, i.Elements = pe, i.Element = Ie, i.__meta = e, i;
}
function Kr(u, e, t) { var r = { method: e, url: t, headers: {}, body: void 0, queries: void 0 }, n = { headers: function (i) { return Object.assign(r.headers, i || {}), n; }, header: function (i, a) { return r.headers[i] = a, n; }, params: function (i) { return r.queries = i, n; }, queries: function (i) { return r.queries = i, n; }, body: function (i) { return r.body = i, n; }, html: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).html(i)];
            }
        }); });
    }, string: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(i)];
            }
        }); });
    }, text: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(i)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, u.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).json()];
            }
        }); });
    } }; return n; }
function Le(u, e) { if (!e)
    return ""; if (e = String(e).trim(), /^data:|^blob:/.test(e))
    return e; if (e.startsWith("//"))
    return "https:" + e; if (typeof __abs == "function")
    return __abs(u, e); try {
    return Ou(u, e);
}
catch (t) {
    return e;
} }
var G = function (u) { return u == null ? "" : String(u); }, Dn = function (u) { return u.filter(function (e, t) { return e && u.indexOf(e) === t; }); }, Fu = (function () {
    function class_1(e) {
        var t = e.meta, r = e.scripts, n = e.host;
        this.meta = t, this.host = n, this.env = e.env || Qr(n, t), this.scripts = r, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return G(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "origins", {
        get: function () { if (this._orig)
            return this._orig; var e = (this.meta.config || {}).DOMAIN || {}, t = function (i) { var a = /^https?:\/\/(?:www\.|m\.)?([^/?#:]+)/i.exec(G(i).trim()); return a ? a[1].toLowerCase() : ""; }, r = {}; [this.meta.source, e.default].concat(e.values || []).map(t).filter(Boolean).forEach(function (i) { r[i] = 1; }); var n = /^https?:\/\/[^/?#]+/i.exec(G(this.meta.source)); return this._orig = { key: t, hosts: r, def: n ? n[0] : "" }, this._orig; },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.canon = function (e) { e = G(e); var t = this.origins; if (!t.def)
        return e; var r = /^https?:\/\/[^/?#]+/i.exec(e); if (!r)
        return e; var n = t.key(r[0]); return t.hosts[n] === 1 || n === t.key(this.base) ? t.def + e.slice(r[0].length) : e; };
    class_1.prototype.decanon = function (e) { e = G(e); var t = this.origins; if (!t.def)
        return e; var r = (/^https?:\/\/[^/?#]+/i.exec(this.base) || [])[0]; return !r || r === t.def ? e : e.slice(0, t.def.length) === t.def ? r + e.slice(t.def.length) : e; };
    class_1.prototype.has = function (e) { return !!this.scripts[e]; };
    class_1.prototype.run = function (e) {
        var t = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            t[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var r, n, i, a;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this.scripts[e];
                        if (!r)
                            throw new Error("script " + e + " missing");
                        n = function (c) { var h = _this.host.config(c); return h == null ? (_this.meta.configDefaults || {})[c] : h; };
                        return [4, r(this.env, n)];
                    case 1:
                        i = _a.sent();
                        if (typeof i != "function")
                            throw new Error(e + ": execute() not defined");
                        return [4, i.apply(void 0, __spreadArray([], __read(t.map(G)), false))];
                    case 2:
                        a = _a.sent();
                        if (!a)
                            throw new Error(e + ": empty result");
                        if (a.code !== 0)
                            throw new Error(e + ": " + G(a.data || "error"));
                        return [2, a];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (e) { return G(e).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var e, _a, t_1, t_2; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (this.cache.tabs)
                        return [2, this.cache.tabs];
                    e = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    _a = this.has("home");
                    if (!_a) return [3, 3];
                    return [4, this.run("home")];
                case 2:
                    _a = (e = (_b.sent()).data || []);
                    _b.label = 3;
                case 3:
                    _a;
                    return [3, 5];
                case 4:
                    t_1 = _b.sent();
                    this.host.log && this.host.log("home: " + t_1.message);
                    return [3, 5];
                case 5:
                    if (!(!e.length && this.has("genre"))) return [3, 9];
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4, this.run("genre")];
                case 7:
                    e = ((_b.sent()).data || []).slice(0, 2);
                    return [3, 9];
                case 8:
                    t_2 = _b.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = e.filter(function (t) { return t && t.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (e, t, r) {
        return __awaiter(this, void 0, void 0, function () {
            var n, i, a, c, h;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        n = e + "|" + t;
                        r = Math.max(1, r | 0);
                        i = r === 1 ? "" : this.tokens[n + "|" + r];
                        if (r > 1 && i == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(e, t, i)];
                    case 1:
                        a = _a.sent(), c = G(a.data2);
                        c && (this.tokens[n + "|" + (r + 1)] = c);
                        h = (a.data || []).filter(Boolean).map(function (b) { return ({ name: G(b.name).trim(), link: _this.canon(Le(b.host || _this.base + "/", b.link)), cover: Le(b.host || _this.base + "/", b.cover), description: G(b.description), tag: G(b.tag) }); }).filter(function (b) { return b.name && b.link; });
                        return [2, { items: h, hasNext: !!c && h.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _a.sent();
                    return [2, t[0] ? this.list(this.scriptFile(t[0].script), G(t[0].input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.latest = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _a.sent(), r = t[1] || t[0];
                    return [2, r ? this.list(this.scriptFile(r.script), G(r.input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.search = function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, this.has("search") ? this.list("search", e, t) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e = this.decanon(e);
                    return [4, this.run("detail", e)];
                case 1:
                    t = (_a.sent()).data || {}, r = [].concat(t.genres || [], t.tags || []).map(function (n) { return typeof n == "string" ? n : n && n.title; }).filter(Boolean);
                    return [2, { name: G(t.name).trim(), cover: Le(t.host || this.base + "/", t.cover), author: G(t.author).trim(), description: Zr(G(t.description)), detail: Zr(G(t.detail)), ongoing: t.ongoing !== !1 && t.ongoing !== "false", genres: Dn(r.map(function (n) { return String(n).trim(); })), url: this.canon(e), format: G(t.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, r, r_1, r_1_1, n, _a, _b, e_20_1, _c;
            var e_20, _d;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        e = this.decanon(e);
                        t = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", e)];
                    case 1:
                        r = (_f.sent()).data || [e];
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 7, 8, 9]);
                        r_1 = __values(r), r_1_1 = r_1.next();
                        _f.label = 3;
                    case 3:
                        if (!!r_1_1.done) return [3, 6];
                        n = r_1_1.value;
                        _b = (_a = t).concat;
                        return [4, this.run("toc", G(n))];
                    case 4:
                        t = _b.apply(_a, [(_f.sent()).data || []]);
                        _f.label = 5;
                    case 5:
                        r_1_1 = r_1.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_20_1 = _f.sent();
                        e_20 = { error: e_20_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (r_1_1 && !r_1_1.done && (_d = r_1.return)) _d.call(r_1);
                        }
                        finally { if (e_20) throw e_20.error; }
                        return [7];
                    case 9: return [3, 13];
                    case 10:
                        _c = this.has("toc");
                        if (!_c) return [3, 12];
                        return [4, this.run("toc", e)];
                    case 11:
                        _c = (t = (_f.sent()).data || []);
                        _f.label = 12;
                    case 12:
                        _c;
                        _f.label = 13;
                    case 13: return [2, t.filter(function (r) { return r && r.url && r.type !== "section"; }).map(function (r, n) { return ({ name: G(r.name).trim() || "#" + (n + 1), url: _this.canon(Le(r.host || _this.base + "/", r.url)), pay: !!(r.pay || r.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, _a, _b, r, n;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        e = this.decanon(e);
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        _a = t = (_c.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", e)];
                    case 3:
                        _b = t = (_c.sent()).data;
                        return [3, 5];
                    case 4:
                        _b = t = [e];
                        _c.label = 5;
                    case 5:
                        _a = _b;
                        _c.label = 6;
                    case 6:
                        _a, typeof t == "string" && (t = t.split(/[\n,]+/));
                        r = function (i) { return !i || /^data:|loading|lazy|blank|placeholder|spacer|\/nocover|1x1\./i.test(String(i)); }, n = function (i) { if (typeof i == "string")
                            return i; if (!i)
                            return ""; var a = i.link || i.url || i.data, c = Array.isArray(i.fallback) ? i.fallback.filter(Boolean) : []; return r(a) && c.length ? c[0] : a; };
                        return [2, (t || []).map(function (i) { return Le(_this.base + "/", n(i)); }).filter(Boolean)];
                }
            });
        });
    };
    class_1.prototype.content = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e = this.decanon(e);
                    return [4, this.run("chap", e)];
                case 1:
                    t = _a.sent();
                    return [2, { html: G(t.data), title: G(t.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var t, n, r, t_3, t_3_1, n, i, a, a_2, a_2_1, c, h, i_2, e_21_1;
            var e_21, _a, e_22, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        e = this.decanon(e);
                        t = [{ title: "Default", data: e }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        n = (_c.sent()).data;
                        Array.isArray(n) && n.length && (t = n.map(function (i) { return typeof i == "string" ? { title: "Server", data: i } : { title: G(i.title || i.name || "Server"), data: G(i.data || i.url || i.link) }; }));
                        _c.label = 2;
                    case 2:
                        r = [];
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 10, 11, 12]);
                        t_3 = __values(t), t_3_1 = t_3.next();
                        _c.label = 4;
                    case 4:
                        if (!!t_3_1.done) return [3, 9];
                        n = t_3_1.value;
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 7, , 8]);
                        return [4, this.run("track", n.data)];
                    case 6:
                        i = (_c.sent()).data || {}, a = Array.isArray(i) ? i : [i];
                        try {
                            for (a_2 = (e_22 = void 0, __values(a)), a_2_1 = a_2.next(); !a_2_1.done; a_2_1 = a_2.next()) {
                                c = a_2_1.value;
                                if (!c || !c.data || c.type === "webview")
                                    continue;
                                h = Le(c.host || this.base + "/", c.data);
                                r.push({ url: h, quality: n.title + (c.quality ? " " + c.quality : ""), headers: c.headers || { Referer: this.base + "/" }, subtitles: (c.subtitles || (c.subtitle ? [{ data: c.subtitle, label: "Sub" }] : [])).map(function (b) { return ({ file: Le(_this.base + "/", b.data || b.file), label: G(b.label || b.language || "Sub") }); }), mimeType: G(c.mimeType) });
                            }
                        }
                        catch (e_22_1) { e_22 = { error: e_22_1 }; }
                        finally {
                            try {
                                if (a_2_1 && !a_2_1.done && (_b = a_2.return)) _b.call(a_2);
                            }
                            finally { if (e_22) throw e_22.error; }
                        }
                        return [3, 8];
                    case 7:
                        i_2 = _c.sent();
                        this.host.log && this.host.log("track " + n.title + ": " + i_2.message);
                        return [3, 8];
                    case 8:
                        t_3_1 = t_3.next();
                        return [3, 4];
                    case 9: return [3, 12];
                    case 10:
                        e_21_1 = _c.sent();
                        e_21 = { error: e_21_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (t_3_1 && !t_3_1.done && (_a = t_3.return)) _a.call(t_3);
                        }
                        finally { if (e_21) throw e_21.error; }
                        return [7];
                    case 12: return [2, r];
                }
            });
        });
    };
    return class_1;
}());
function Zr(u) {
    return String(u).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
var ve = { id: "truyendichai", name: "TruyenDich.AI", source: "https://truyendich.store", type: "novel", locale: "vi", nsfw: !1, version: 5, config: { DOMAIN: { title: "Domain", default: "https://truyendich.store", mode: "input", format: "text" } }, configDefaults: { DOMAIN: "https://truyendich.store" }, itemType: 2, short: !1, shorts: !1, lnId: "kiritokmn.truyendichai", lnIcon: "", lnVersion: "1.4.5" }, Xr = { home: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, a, c, h, b, v, k, T, A, D, R, Q, F, $) {
                    return __awaiter(this, void 0, void 0, function () { var O; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                O = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function U() {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                                                return [2, i.success([{ title: "Truyện Hot", input: "list:truyen-hot", script: "gen.js" }, { title: "Truyện Mới", input: "list:truyen-moi", script: "gen.js" }, { title: "Truyện Full", input: "list:truyen-full", script: "gen.js" }, { title: "Truyện Convert", input: "list:truyen-convert", script: "gen.js" }, { title: "Truyện Dịch", input: "list:truyen-dich", script: "gen.js" }, { title: "Truyện Dịch AI", input: "list:truyen-dich-ai", script: "gen.js" }])];
                                            }); });
                                        } return __generator(this, function (_a) {
                                            return [2, typeof U == "function" ? U : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, genre: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, a, c, h, b, v, k, T, A, D, R, Q, F, $) {
                    return __awaiter(this, void 0, void 0, function () { var O; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                O = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function L(s) { return s == null ? "" : String(s).trim(); } function q(s) { return L(s).replace(/\s+/g, " "); } function I(s) { return L(s).replace(/^\/+|\/+$/g, ""); } function j(s) { return s = L(s), !s || (s = s.replace(/^[a-z]+:\/\/[^/]+/i, ""), s = s.replace(/[?#].*$/, ""), !s) ? "" : (s.charAt(0) !== "/" && (s = "/" + s), s.length > 1 && (s = s.replace(/\/+$/, "")), s); } function z(s) { return s = q(s).toLowerCase(), s === "ai" ? "ai" : s === "convert" || s === "cv" ? "convert" : "base"; } function te(s) { return s = z(s), s === "ai" ? "Dịch AI" : s === "convert" ? "Convert" : "Bản Dịch"; } function W(s) { var g = j(s); if (!g || g.indexOf("/doc-truyen/") !== 0)
                                            return null; var l = g.substring(12).split("/").filter(Boolean), f = "base"; l[0] === "ai" ? (f = "ai", l.shift()) : l[0] === "cv" && (f = "convert", l.shift()); var o = I(l.shift()); if (!o)
                                            return null; var p = { edition: f, slug: o, kind: "detail", pageNo: 1, chapterSegment: "" }; return l.length === 0 ? p : /^trang-\d+$/.test(l[0]) ? (p.kind = "page", p.pageNo = parseInt(l[0].replace("trang-", ""), 10) || 1, p) : (p.kind = "chapter", p.chapterSegment = I(l.join("/")), p); } function Z(s) { if (!s || !s.slug)
                                            return ""; var g = "/doc-truyen", l = z(s.edition); if (l === "ai" && (g += "/ai"), l === "convert" && (g += "/cv"), g += "/" + I(s.slug), s.kind === "page") {
                                            var f = parseInt(s.pageNo, 10) || 1;
                                            return f > 1 && (g += "/trang-" + f), g;
                                        } return s.kind === "chapter" && s.chapterSegment && (g += "/" + I(s.chapterSegment)), g; } function V(s) { return s ? Z({ edition: s.edition, slug: s.slug, kind: "detail" }) : ""; } function ee(s) { return s = L(s), s ? /^https?:\/\//i.test(s) ? s : U + j(s) : ""; } function ne(s, g) { var l = [], f = {}, o = g && g.slug ? I(g.slug) : ""; return s.select("div:has(> div > span:contains(Phiên bản)) a[href^=/doc-truyen/]").forEach(function (p) { var m = W(p.attr("href")); if (!(!m || m.kind !== "detail") && !(o && m.slug !== o)) {
                                            var y = V(m), w = q(p.text()) || te(m.edition), N = f[y];
                                            if (N != null) {
                                                w.length > l[N].title.length && (l[N].title = w);
                                                return;
                                            }
                                            f[y] = l.length, l.push({ title: w, route: m, key: y });
                                        } }), l; } function ge(s, g) { var l = [], f = V(g); return ne(s, g).forEach(function (o) { !o || o.key === f || l.push(o); }), l; } function S(s, g) { return { title: s, input: "category:" + g, script: "gen.js" }; } function d() {
                                            return __awaiter(this, void 0, void 0, function () { var s, g, l, f; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4, t(U + "/the-loai")];
                                                    case 1:
                                                        s = _a.sent();
                                                        if (s.ok) {
                                                            g = s.html(), l = [], f = {};
                                                            if (g.select("a[href^=/the-loai/]").forEach(function (o) { var p = j(o.attr("href")), m = p.match(/^\/the-loai\/([^/?#]+)/), y = q(o.text()); !m || !y || f[m[1]] || (f[m[1]] = !0, l.push(S(y, m[1]))); }), l.length > 0)
                                                                return [2, i.success(l)];
                                                        }
                                                        return [2, i.success(X.map(function (o) { return S(o[0], o[1]); }))];
                                                }
                                            }); });
                                        } var U, X; return __generator(this, function (_a) {
                                            U = "https://truyendich.store";
                                            try {
                                                O && (U = O);
                                            }
                                            catch (s) { }
                                            X = [["Tiên Hiệp", "tien-hiep"], ["Kiếm Hiệp", "kiem-hiep"], ["Ngôn Tình", "ngon-tinh"], ["Đô Thị", "do-thi"], ["Huyền Huyễn", "huyen-huyen"], ["Võng Du", "vong-du"], ["Khoa Huyễn", "khoa-huyen"], ["Hệ Thống", "he-thong"], ["Dị Giới", "di-gioi"], ["Lịch Sử", "lich-su"], ["Quân Sự", "quan-su"], ["Trinh Thám", "trinh-tham"], ["Thám Hiểm", "tham-hiem"], ["Linh Dị", "linh-di"], ["Mạt Thế", "mat-the"], ["Xuyên Nhanh", "xuyen-nhanh"], ["Nữ Cường", "nu-cuong"], ["Cung Đấu", "cung-dau"], ["Đam Mỹ", "dam-my"], ["Bách Hợp", "bach-hop"]];
                                            return [2, typeof d == "function" ? d : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, detail: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, a, c, h, b, v, k, T, A, D, R, Q, F, $) {
                    return __awaiter(this, void 0, void 0, function () { var O; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                O = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function L(o) { return o == null ? "" : String(o).trim(); } function q(o) { return L(o).replace(/\s+/g, " "); } function I(o) { return L(o).replace(/^\/+|\/+$/g, ""); } function j(o) { return o = L(o), !o || (o = o.replace(/^[a-z]+:\/\/[^/]+/i, ""), o = o.replace(/[?#].*$/, ""), !o) ? "" : (o.charAt(0) !== "/" && (o = "/" + o), o.length > 1 && (o = o.replace(/\/+$/, "")), o); } function z(o) { return o = q(o).toLowerCase(), o === "ai" ? "ai" : o === "convert" || o === "cv" ? "convert" : "base"; } function te(o) { return o = z(o), o === "ai" ? "Dịch AI" : o === "convert" ? "Convert" : "Bản Dịch"; } function W(o) { var p = j(o); if (!p || p.indexOf("/doc-truyen/") !== 0)
                                            return null; var m = p.substring(12).split("/").filter(Boolean), y = "base"; m[0] === "ai" ? (y = "ai", m.shift()) : m[0] === "cv" && (y = "convert", m.shift()); var w = I(m.shift()); if (!w)
                                            return null; var N = { edition: y, slug: w, kind: "detail", pageNo: 1, chapterSegment: "" }; return m.length === 0 ? N : /^trang-\d+$/.test(m[0]) ? (N.kind = "page", N.pageNo = parseInt(m[0].replace("trang-", ""), 10) || 1, N) : (N.kind = "chapter", N.chapterSegment = I(m.join("/")), N); } function Z(o) { if (!o || !o.slug)
                                            return ""; var p = "/doc-truyen", m = z(o.edition); if (m === "ai" && (p += "/ai"), m === "convert" && (p += "/cv"), p += "/" + I(o.slug), o.kind === "page") {
                                            var y = parseInt(o.pageNo, 10) || 1;
                                            return y > 1 && (p += "/trang-" + y), p;
                                        } return o.kind === "chapter" && o.chapterSegment && (p += "/" + I(o.chapterSegment)), p; } function V(o) { return o ? Z({ edition: o.edition, slug: o.slug, kind: "detail" }) : ""; } function ee(o) { return o = L(o), o ? /^https?:\/\//i.test(o) ? o : U + j(o) : ""; } function ne(o, p) { var m = [], y = {}, w = p && p.slug ? I(p.slug) : ""; return o.select("div:has(> div > span:contains(Phiên bản)) a[href^=/doc-truyen/]").forEach(function (N) { var B = W(N.attr("href")); if (!(!B || B.kind !== "detail") && !(w && B.slug !== w)) {
                                            var J = V(B), ie = q(N.text()) || te(B.edition), Ue = y[J];
                                            if (Ue != null) {
                                                ie.length > m[Ue].title.length && (m[Ue].title = ie);
                                                return;
                                            }
                                            y[J] = m.length, m.push({ title: ie, route: B, key: J });
                                        } }), m; } function ge(o, p) { var m = [], y = V(p); return ne(o, p).forEach(function (w) { !w || w.key === y || m.push(w); }), m; } function X(o) { return o ? q(o.text()) : ""; } function S(o) { return o ? o.html() : ""; } function d(o, p) { var m = o.select("div:has(> div > span:contains(" + p + ")) > p").first(); return m ? q(m.text()) : ""; } function s(o) { var p = [], m = {}; return o.select("a[href^=/the-loai/]").forEach(function (y) { var w = j(y.attr("href")), N = w.match(/^\/the-loai\/([^/?#]+)/), B = q(y.text()); !N || !B || m[N[1]] || (m[N[1]] = !0, p.push({ title: B, input: "category:" + N[1], script: "gen.js" })); }), p; } function g(o, p) { return ge(o, p).length === 0 ? [] : [{ title: "Các bản dịch khác", input: V(p), script: "edition.js" }]; } function l(o, p, m, y, w, N) { var B = ["Tên truyện: " + p, "Tác giả: " + (m || "Không rõ")]; return y && B.push("Số chương: " + y), w && B.push("Cập nhật: " + w), N && B.push("Trạng thái: " + N), B.push("Phiên bản: " + te(o.edition)), B.join("<br>"); } function f(o) {
                                            return __awaiter(this, void 0, void 0, function () { var p, m, y, w, N, B, J, ie, Ue; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        p = W(o);
                                                        if (!p)
                                                            return [2, i.error("URL truyện không hợp lệ.")];
                                                        m = V(p);
                                                        return [4, t(ee(m))];
                                                    case 1:
                                                        y = _a.sent();
                                                        if (!y.ok)
                                                            return [2, i.error("HTTP " + y.status)];
                                                        w = y.html(), N = d(w, "Số chương"), B = d(w, "Cập nhật"), J = d(w, "Trạng thái"), ie = X(w.select("main header h1").first()), Ue = d(w, "Tác giả");
                                                        return [2, i.success({ name: ie, cover: ee(w.select("main header img").attr("src")), host: U, author: Ue, description: S(w.select("section .prose").first()), detail: l(p, ie, Ue, N, B, J), url: ee(m), type: "novel", format: "novel", ongoing: J.indexOf("Đang ra") >= 0, nsfw: !1, locale: "vi_VN", tags: s(w), genres: [], suggests: g(w, p), reviews: [], comments: [] })];
                                                }
                                            }); });
                                        } var U; return __generator(this, function (_a) {
                                            U = "https://truyendich.store";
                                            try {
                                                O && (U = O);
                                            }
                                            catch (o) { }
                                            return [2, typeof f == "function" ? f : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, search: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, a, c, h, b, v, k, T, A, D, R, Q, F, $) {
                    return __awaiter(this, void 0, void 0, function () { var O; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                O = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function L(d) { return d == null ? "" : String(d).trim(); } function q(d) { return L(d).replace(/\s+/g, " "); } function I(d) { return L(d).replace(/^\/+|\/+$/g, ""); } function j(d) { return d = L(d), !d || (d = d.replace(/^[a-z]+:\/\/[^/]+/i, ""), d = d.replace(/[?#].*$/, ""), !d) ? "" : (d.charAt(0) !== "/" && (d = "/" + d), d.length > 1 && (d = d.replace(/\/+$/, "")), d); } function z(d) { return d = q(d).toLowerCase(), d === "ai" ? "ai" : d === "convert" || d === "cv" ? "convert" : "base"; } function te(d) { return d = z(d), d === "ai" ? "Dịch AI" : d === "convert" ? "Convert" : "Bản Dịch"; } function W(d) { var s = j(d); if (!s || s.indexOf("/doc-truyen/") !== 0)
                                            return null; var g = s.substring(12).split("/").filter(Boolean), l = "base"; g[0] === "ai" ? (l = "ai", g.shift()) : g[0] === "cv" && (l = "convert", g.shift()); var f = I(g.shift()); if (!f)
                                            return null; var o = { edition: l, slug: f, kind: "detail", pageNo: 1, chapterSegment: "" }; return g.length === 0 ? o : /^trang-\d+$/.test(g[0]) ? (o.kind = "page", o.pageNo = parseInt(g[0].replace("trang-", ""), 10) || 1, o) : (o.kind = "chapter", o.chapterSegment = I(g.join("/")), o); } function Z(d) { if (!d || !d.slug)
                                            return ""; var s = "/doc-truyen", g = z(d.edition); if (g === "ai" && (s += "/ai"), g === "convert" && (s += "/cv"), s += "/" + I(d.slug), d.kind === "page") {
                                            var l = parseInt(d.pageNo, 10) || 1;
                                            return l > 1 && (s += "/trang-" + l), s;
                                        } return d.kind === "chapter" && d.chapterSegment && (s += "/" + I(d.chapterSegment)), s; } function V(d) { return d ? Z({ edition: d.edition, slug: d.slug, kind: "detail" }) : ""; } function ee(d) { return d = L(d), d ? /^https?:\/\//i.test(d) ? d : U + j(d) : ""; } function ne(d, s) { var g = [], l = {}, f = s && s.slug ? I(s.slug) : ""; return d.select("div:has(> div > span:contains(Phiên bản)) a[href^=/doc-truyen/]").forEach(function (o) { var p = W(o.attr("href")); if (!(!p || p.kind !== "detail") && !(f && p.slug !== f)) {
                                            var m = V(p), y = q(o.text()) || te(p.edition), w = l[m];
                                            if (w != null) {
                                                y.length > g[w].title.length && (g[w].title = y);
                                                return;
                                            }
                                            l[m] = g.length, g.push({ title: y, route: p, key: m });
                                        } }), g; } function ge(d, s) { var g = [], l = V(s); return ne(d, s).forEach(function (f) { !f || f.key === l || g.push(f); }), g; } function X(d) { var s = d.select("div:has(> span:contains(Chương))").last(); return s ? q(s.text()) : ""; } function S(d, s) {
                                            return __awaiter(this, void 0, void 0, function () { var g, l, f, o, p, m, y; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        if (d = L(d), !d)
                                                            return [2, i.success([])];
                                                        g = parseInt(s || "1", 10);
                                                        (!g || g < 1) && (g = 1);
                                                        return [4, t(U + "/tim-kiem?q=" + encodeURIComponent(d) + "&page=" + g)];
                                                    case 1:
                                                        l = _a.sent();
                                                        if (!l.ok)
                                                            return [2, i.error("HTTP " + l.status)];
                                                        f = l.html(), o = f.select("main a:contains(Trang sau)").attr("href"), p = o.match(/[?&]page=(\d+)/), m = p ? p[1] : "", y = [];
                                                        return [2, (f.select("main a.group[href^=/doc-truyen/]").forEach(function (w) { var N = q(w.select("h3").text()), B = j(w.attr("href")); !N || !B || y.push({ name: N, link: B, host: U, cover: ee(w.select("img").attr("src")), description: X(w) }); }), i.success(y, m))];
                                                }
                                            }); });
                                        } var U; return __generator(this, function (_a) {
                                            U = "https://truyendich.store";
                                            try {
                                                O && (U = O);
                                            }
                                            catch (d) { }
                                            return [2, typeof S == "function" ? S : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, page: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, a, c, h, b, v, k, T, A, D, R, Q, F, $) {
                    return __awaiter(this, void 0, void 0, function () { var O; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                O = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function L(f) { return f == null ? "" : String(f).trim(); } function q(f) { return L(f).replace(/\s+/g, " "); } function I(f) { return L(f).replace(/^\/+|\/+$/g, ""); } function j(f) { return f = L(f), !f || (f = f.replace(/^[a-z]+:\/\/[^/]+/i, ""), f = f.replace(/[?#].*$/, ""), !f) ? "" : (f.charAt(0) !== "/" && (f = "/" + f), f.length > 1 && (f = f.replace(/\/+$/, "")), f); } function z(f) { return f = q(f).toLowerCase(), f === "ai" ? "ai" : f === "convert" || f === "cv" ? "convert" : "base"; } function te(f) { return f = z(f), f === "ai" ? "Dịch AI" : f === "convert" ? "Convert" : "Bản Dịch"; } function W(f) { var o = j(f); if (!o || o.indexOf("/doc-truyen/") !== 0)
                                            return null; var p = o.substring(12).split("/").filter(Boolean), m = "base"; p[0] === "ai" ? (m = "ai", p.shift()) : p[0] === "cv" && (m = "convert", p.shift()); var y = I(p.shift()); if (!y)
                                            return null; var w = { edition: m, slug: y, kind: "detail", pageNo: 1, chapterSegment: "" }; return p.length === 0 ? w : /^trang-\d+$/.test(p[0]) ? (w.kind = "page", w.pageNo = parseInt(p[0].replace("trang-", ""), 10) || 1, w) : (w.kind = "chapter", w.chapterSegment = I(p.join("/")), w); } function Z(f) { if (!f || !f.slug)
                                            return ""; var o = "/doc-truyen", p = z(f.edition); if (p === "ai" && (o += "/ai"), p === "convert" && (o += "/cv"), o += "/" + I(f.slug), f.kind === "page") {
                                            var m = parseInt(f.pageNo, 10) || 1;
                                            return m > 1 && (o += "/trang-" + m), o;
                                        } return f.kind === "chapter" && f.chapterSegment && (o += "/" + I(f.chapterSegment)), o; } function V(f) { return f ? Z({ edition: f.edition, slug: f.slug, kind: "detail" }) : ""; } function ee(f) { return f = L(f), f ? /^https?:\/\//i.test(f) ? f : U + j(f) : ""; } function ne(f, o) { var p = [], m = {}, y = o && o.slug ? I(o.slug) : ""; return f.select("div:has(> div > span:contains(Phiên bản)) a[href^=/doc-truyen/]").forEach(function (w) { var N = W(w.attr("href")); if (!(!N || N.kind !== "detail") && !(y && N.slug !== y)) {
                                            var B = V(N), J = q(w.text()) || te(N.edition), ie = m[B];
                                            if (ie != null) {
                                                J.length > p[ie].title.length && (p[ie].title = J);
                                                return;
                                            }
                                            m[B] = p.length, p.push({ title: J, route: N, key: B });
                                        } }), p; } function ge(f, o) { var p = [], m = V(o); return ne(f, o).forEach(function (y) { !y || y.key === m || p.push(y); }), p; } function X(f) { var o = q(f).replace(/[^0-9]/g, ""); return o ? parseInt(o, 10) : 0; } function S(f) { return f.select("section:has(h2:contains(Danh sách chương))").first(); } function d(f) { if (!f)
                                            return 0; var o = 0, p = q(f.text()).match(/(\d[\d\.,]*)\s*Chương/i); p && (o = X(p[1])); var m = 0; return f.select("button").forEach(function (y) { var w = q(y.text()).match(/(\d[\d\.,]*)\s*-\s*(\d[\d\.,]*)/); if (w) {
                                            var N = X(w[2]);
                                            N > m && (m = N);
                                        } }), Math.max(o, m); } function s(f) { if (!f)
                                            return 50; var o = f.select("a[href*=/chuong-]").size(); return o > 0 ? o : 50; } function g(f) { var o = S(f), p = d(o); if (!p)
                                            return 1; var m = s(o), y = Math.ceil(p / m); return y > 0 ? y : 1; } function l(f) {
                                            return __awaiter(this, void 0, void 0, function () { var o, p, m, y, w, N; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        o = W(f);
                                                        if (!o)
                                                            return [2, i.error("URL truyện không hợp lệ.")];
                                                        p = V(o);
                                                        return [4, t(ee(p))];
                                                    case 1:
                                                        m = _a.sent();
                                                        if (!m.ok)
                                                            return [2, i.error("HTTP " + m.status)];
                                                        for (y = g(m.html()), w = [], N = 1; N <= y; N++)
                                                            w.push(Z({ edition: o.edition, slug: o.slug, kind: N === 1 ? "detail" : "page", pageNo: N }));
                                                        return [2, i.success(w)];
                                                }
                                            }); });
                                        } var U; return __generator(this, function (_a) {
                                            U = "https://truyendich.store";
                                            try {
                                                O && (U = O);
                                            }
                                            catch (f) { }
                                            return [2, typeof l == "function" ? l : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, toc: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, a, c, h, b, v, k, T, A, D, R, Q, F, $) {
                    return __awaiter(this, void 0, void 0, function () { var O; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                O = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function L(d) { return d == null ? "" : String(d).trim(); } function q(d) { return L(d).replace(/\s+/g, " "); } function I(d) { return L(d).replace(/^\/+|\/+$/g, ""); } function j(d) { return d = L(d), !d || (d = d.replace(/^[a-z]+:\/\/[^/]+/i, ""), d = d.replace(/[?#].*$/, ""), !d) ? "" : (d.charAt(0) !== "/" && (d = "/" + d), d.length > 1 && (d = d.replace(/\/+$/, "")), d); } function z(d) { return d = q(d).toLowerCase(), d === "ai" ? "ai" : d === "convert" || d === "cv" ? "convert" : "base"; } function te(d) { return d = z(d), d === "ai" ? "Dịch AI" : d === "convert" ? "Convert" : "Bản Dịch"; } function W(d) { var s = j(d); if (!s || s.indexOf("/doc-truyen/") !== 0)
                                            return null; var g = s.substring(12).split("/").filter(Boolean), l = "base"; g[0] === "ai" ? (l = "ai", g.shift()) : g[0] === "cv" && (l = "convert", g.shift()); var f = I(g.shift()); if (!f)
                                            return null; var o = { edition: l, slug: f, kind: "detail", pageNo: 1, chapterSegment: "" }; return g.length === 0 ? o : /^trang-\d+$/.test(g[0]) ? (o.kind = "page", o.pageNo = parseInt(g[0].replace("trang-", ""), 10) || 1, o) : (o.kind = "chapter", o.chapterSegment = I(g.join("/")), o); } function Z(d) { if (!d || !d.slug)
                                            return ""; var s = "/doc-truyen", g = z(d.edition); if (g === "ai" && (s += "/ai"), g === "convert" && (s += "/cv"), s += "/" + I(d.slug), d.kind === "page") {
                                            var l = parseInt(d.pageNo, 10) || 1;
                                            return l > 1 && (s += "/trang-" + l), s;
                                        } return d.kind === "chapter" && d.chapterSegment && (s += "/" + I(d.chapterSegment)), s; } function V(d) { return d ? Z({ edition: d.edition, slug: d.slug, kind: "detail" }) : ""; } function ee(d) { return d = L(d), d ? /^https?:\/\//i.test(d) ? d : U + j(d) : ""; } function ne(d, s) { var g = [], l = {}, f = s && s.slug ? I(s.slug) : ""; return d.select("div:has(> div > span:contains(Phiên bản)) a[href^=/doc-truyen/]").forEach(function (o) { var p = W(o.attr("href")); if (!(!p || p.kind !== "detail") && !(f && p.slug !== f)) {
                                            var m = V(p), y = q(o.text()) || te(p.edition), w = l[m];
                                            if (w != null) {
                                                y.length > g[w].title.length && (g[w].title = y);
                                                return;
                                            }
                                            l[m] = g.length, g.push({ title: y, route: p, key: m });
                                        } }), g; } function ge(d, s) { var g = [], l = V(s); return ne(d, s).forEach(function (f) { !f || f.key === l || g.push(f); }), g; } function X(d) { var s = d.select("span"); if (!s || s.size() === 0)
                                            return q(d.text()); var g = q(s.first().text()); if (!g)
                                            return q(d.text()); var l = q(s.last().text()); return !l || l === g ? g : l.indexOf(g) === 0 ? l : g + " " + l; } function S(d) {
                                            return __awaiter(this, void 0, void 0, function () { var s, g, l, f, o, p, m; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        s = W(d);
                                                        if (!s)
                                                            return [2, i.error("URL truyện không hợp lệ.")];
                                                        g = Z({ edition: s.edition, slug: s.slug, kind: s.kind === "page" ? "page" : "detail", pageNo: s.pageNo || 1 });
                                                        return [4, t(ee(g))];
                                                    case 1:
                                                        l = _a.sent();
                                                        if (!l.ok)
                                                            return [2, i.error("HTTP " + l.status)];
                                                        f = l.html(), o = f.select("section:has(h2:contains(Danh sách chương))").first(), p = o ? o.select("a[href*=/chuong-]") : f.select("a[href*=/chuong-]"), m = [];
                                                        return [2, (p.forEach(function (y) { var w = W(y.attr("href")); !w || w.kind !== "chapter" || (w.edition = s.edition, m.push({ name: X(y), url: Z(w), host: U })); }), i.success(m))];
                                                }
                                            }); });
                                        } var U; return __generator(this, function (_a) {
                                            U = "https://truyendich.store";
                                            try {
                                                O && (U = O);
                                            }
                                            catch (d) { }
                                            return [2, typeof S == "function" ? S : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, chap: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, a, c, h, b, v, k, T, A, D, R, Q, F, $) {
                    return __awaiter(this, void 0, void 0, function () { var O; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                O = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function L(S) { return S == null ? "" : String(S).trim(); } function q(S) { return L(S).replace(/\s+/g, " "); } function I(S) { return L(S).replace(/^\/+|\/+$/g, ""); } function j(S) { return S = L(S), !S || (S = S.replace(/^[a-z]+:\/\/[^/]+/i, ""), S = S.replace(/[?#].*$/, ""), !S) ? "" : (S.charAt(0) !== "/" && (S = "/" + S), S.length > 1 && (S = S.replace(/\/+$/, "")), S); } function z(S) { return S = q(S).toLowerCase(), S === "ai" ? "ai" : S === "convert" || S === "cv" ? "convert" : "base"; } function te(S) { return S = z(S), S === "ai" ? "Dịch AI" : S === "convert" ? "Convert" : "Bản Dịch"; } function W(S) { var d = j(S); if (!d || d.indexOf("/doc-truyen/") !== 0)
                                            return null; var s = d.substring(12).split("/").filter(Boolean), g = "base"; s[0] === "ai" ? (g = "ai", s.shift()) : s[0] === "cv" && (g = "convert", s.shift()); var l = I(s.shift()); if (!l)
                                            return null; var f = { edition: g, slug: l, kind: "detail", pageNo: 1, chapterSegment: "" }; return s.length === 0 ? f : /^trang-\d+$/.test(s[0]) ? (f.kind = "page", f.pageNo = parseInt(s[0].replace("trang-", ""), 10) || 1, f) : (f.kind = "chapter", f.chapterSegment = I(s.join("/")), f); } function Z(S) { if (!S || !S.slug)
                                            return ""; var d = "/doc-truyen", s = z(S.edition); if (s === "ai" && (d += "/ai"), s === "convert" && (d += "/cv"), d += "/" + I(S.slug), S.kind === "page") {
                                            var g = parseInt(S.pageNo, 10) || 1;
                                            return g > 1 && (d += "/trang-" + g), d;
                                        } return S.kind === "chapter" && S.chapterSegment && (d += "/" + I(S.chapterSegment)), d; } function V(S) { return S ? Z({ edition: S.edition, slug: S.slug, kind: "detail" }) : ""; } function ee(S) { return S = L(S), S ? /^https?:\/\//i.test(S) ? S : U + j(S) : ""; } function ne(S, d) { var s = [], g = {}, l = d && d.slug ? I(d.slug) : ""; return S.select("div:has(> div > span:contains(Phiên bản)) a[href^=/doc-truyen/]").forEach(function (f) { var o = W(f.attr("href")); if (!(!o || o.kind !== "detail") && !(l && o.slug !== l)) {
                                            var p = V(o), m = q(f.text()) || te(o.edition), y = g[p];
                                            if (y != null) {
                                                m.length > s[y].title.length && (s[y].title = m);
                                                return;
                                            }
                                            g[p] = s.length, s.push({ title: m, route: o, key: p });
                                        } }), s; } function ge(S, d) { var s = [], g = V(d); return ne(S, d).forEach(function (l) { !l || l.key === g || s.push(l); }), s; } function X(S) {
                                            return __awaiter(this, void 0, void 0, function () { var d, s, g, l, f; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        d = W(S);
                                                        if (!d)
                                                            return [2, i.error("URL chương không hợp lệ.")];
                                                        return [4, t(ee(Z(d)))];
                                                    case 1:
                                                        s = _a.sent();
                                                        if (!s.ok)
                                                            return [2, i.error("HTTP " + s.status)];
                                                        g = s.html(), l = g.select("section.prose-novel").first() || g.select("[itemprop=text]").first() || g.select("[itemProp=text]").first();
                                                        if (!l)
                                                            return [2, i.error("Không tìm thấy nội dung chương.")];
                                                        l.select("script,style,button,nav").remove();
                                                        f = l.select("div").first();
                                                        return [2, i.success(f ? f.html() : l.html(), q(g.select("main h1").first().text()))];
                                                }
                                            }); });
                                        } var U; return __generator(this, function (_a) {
                                            U = "https://truyendich.store";
                                            try {
                                                O && (U = O);
                                            }
                                            catch (S) { }
                                            return [2, typeof X == "function" ? X : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, edition: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, a, c, h, b, v, k, T, A, D, R, Q, F, $) {
                    return __awaiter(this, void 0, void 0, function () { var O; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                O = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function L(s) { return s == null ? "" : String(s).trim(); } function q(s) { return L(s).replace(/\s+/g, " "); } function I(s) { return L(s).replace(/^\/+|\/+$/g, ""); } function j(s) { return s = L(s), !s || (s = s.replace(/^[a-z]+:\/\/[^/]+/i, ""), s = s.replace(/[?#].*$/, ""), !s) ? "" : (s.charAt(0) !== "/" && (s = "/" + s), s.length > 1 && (s = s.replace(/\/+$/, "")), s); } function z(s) { return s = q(s).toLowerCase(), s === "ai" ? "ai" : s === "convert" || s === "cv" ? "convert" : "base"; } function te(s) { return s = z(s), s === "ai" ? "Dịch AI" : s === "convert" ? "Convert" : "Bản Dịch"; } function W(s) { var g = j(s); if (!g || g.indexOf("/doc-truyen/") !== 0)
                                            return null; var l = g.substring(12).split("/").filter(Boolean), f = "base"; l[0] === "ai" ? (f = "ai", l.shift()) : l[0] === "cv" && (f = "convert", l.shift()); var o = I(l.shift()); if (!o)
                                            return null; var p = { edition: f, slug: o, kind: "detail", pageNo: 1, chapterSegment: "" }; return l.length === 0 ? p : /^trang-\d+$/.test(l[0]) ? (p.kind = "page", p.pageNo = parseInt(l[0].replace("trang-", ""), 10) || 1, p) : (p.kind = "chapter", p.chapterSegment = I(l.join("/")), p); } function Z(s) { if (!s || !s.slug)
                                            return ""; var g = "/doc-truyen", l = z(s.edition); if (l === "ai" && (g += "/ai"), l === "convert" && (g += "/cv"), g += "/" + I(s.slug), s.kind === "page") {
                                            var f = parseInt(s.pageNo, 10) || 1;
                                            return f > 1 && (g += "/trang-" + f), g;
                                        } return s.kind === "chapter" && s.chapterSegment && (g += "/" + I(s.chapterSegment)), g; } function V(s) { return s ? Z({ edition: s.edition, slug: s.slug, kind: "detail" }) : ""; } function ee(s) { return s = L(s), s ? /^https?:\/\//i.test(s) ? s : U + j(s) : ""; } function ne(s, g) { var l = [], f = {}, o = g && g.slug ? I(g.slug) : ""; return s.select("div:has(> div > span:contains(Phiên bản)) a[href^=/doc-truyen/]").forEach(function (p) { var m = W(p.attr("href")); if (!(!m || m.kind !== "detail") && !(o && m.slug !== o)) {
                                            var y = V(m), w = q(p.text()) || te(m.edition), N = f[y];
                                            if (N != null) {
                                                w.length > l[N].title.length && (l[N].title = w);
                                                return;
                                            }
                                            f[y] = l.length, l.push({ title: w, route: m, key: y });
                                        } }), l; } function ge(s, g) { var l = [], f = V(g); return ne(s, g).forEach(function (o) { !o || o.key === f || l.push(o); }), l; } function X(s) { return s ? q(s.text()) : ""; } function S(s, g) { var l = X(s.select("main header h1").first()), f = ee(s.select("main header img").attr("src")), o = []; return ge(s, g).forEach(function (p) { o.push({ name: l ? l + " - " + p.title : p.title, link: p.key, host: U, cover: f, description: "Phiên bản: " + p.title }); }), o; } function d(s) {
                                            return __awaiter(this, void 0, void 0, function () { var g, l; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        g = W(s);
                                                        if (!g)
                                                            return [2, i.error("URL truyện không hợp lệ.")];
                                                        return [4, t(ee(V(g)))];
                                                    case 1:
                                                        l = _a.sent();
                                                        return [2, l.ok ? i.success(S(l.html(), g)) : i.error("HTTP " + l.status)];
                                                }
                                            }); });
                                        } var U; return __generator(this, function (_a) {
                                            U = "https://truyendich.store";
                                            try {
                                                O && (U = O);
                                            }
                                            catch (s) { }
                                            return [2, typeof d == "function" ? d : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    }, gen: function (u, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, a, c, h, b, v, k, T, A, D, R, Q, F, $) {
                    return __awaiter(this, void 0, void 0, function () { var O; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                O = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function L(l) { return l == null ? "" : String(l).trim(); } function q(l) { return L(l).replace(/\s+/g, " "); } function I(l) { return L(l).replace(/^\/+|\/+$/g, ""); } function j(l) { return l = L(l), !l || (l = l.replace(/^[a-z]+:\/\/[^/]+/i, ""), l = l.replace(/[?#].*$/, ""), !l) ? "" : (l.charAt(0) !== "/" && (l = "/" + l), l.length > 1 && (l = l.replace(/\/+$/, "")), l); } function z(l) { return l = q(l).toLowerCase(), l === "ai" ? "ai" : l === "convert" || l === "cv" ? "convert" : "base"; } function te(l) { return l = z(l), l === "ai" ? "Dịch AI" : l === "convert" ? "Convert" : "Bản Dịch"; } function W(l) { var f = j(l); if (!f || f.indexOf("/doc-truyen/") !== 0)
                                            return null; var o = f.substring(12).split("/").filter(Boolean), p = "base"; o[0] === "ai" ? (p = "ai", o.shift()) : o[0] === "cv" && (p = "convert", o.shift()); var m = I(o.shift()); if (!m)
                                            return null; var y = { edition: p, slug: m, kind: "detail", pageNo: 1, chapterSegment: "" }; return o.length === 0 ? y : /^trang-\d+$/.test(o[0]) ? (y.kind = "page", y.pageNo = parseInt(o[0].replace("trang-", ""), 10) || 1, y) : (y.kind = "chapter", y.chapterSegment = I(o.join("/")), y); } function Z(l) { if (!l || !l.slug)
                                            return ""; var f = "/doc-truyen", o = z(l.edition); if (o === "ai" && (f += "/ai"), o === "convert" && (f += "/cv"), f += "/" + I(l.slug), l.kind === "page") {
                                            var p = parseInt(l.pageNo, 10) || 1;
                                            return p > 1 && (f += "/trang-" + p), f;
                                        } return l.kind === "chapter" && l.chapterSegment && (f += "/" + I(l.chapterSegment)), f; } function V(l) { return l ? Z({ edition: l.edition, slug: l.slug, kind: "detail" }) : ""; } function ee(l) { return l = L(l), l ? /^https?:\/\//i.test(l) ? l : U + j(l) : ""; } function ne(l, f) { var o = [], p = {}, m = f && f.slug ? I(f.slug) : ""; return l.select("div:has(> div > span:contains(Phiên bản)) a[href^=/doc-truyen/]").forEach(function (y) { var w = W(y.attr("href")); if (!(!w || w.kind !== "detail") && !(m && w.slug !== m)) {
                                            var N = V(w), B = q(y.text()) || te(w.edition), J = p[N];
                                            if (J != null) {
                                                B.length > o[J].title.length && (o[J].title = B);
                                                return;
                                            }
                                            p[N] = o.length, o.push({ title: B, route: w, key: N });
                                        } }), o; } function ge(l, f) { var o = [], p = V(f); return ne(l, f).forEach(function (m) { !m || m.key === p || o.push(m); }), o; } function S(l, f) { return l.indexOf("list:") === 0 ? U + "/api/lists/" + l.replace("list:", "") + "?page=" + f + "&size=" + X : l.indexOf("category:") === 0 ? U + "/api/categories/" + l.replace("category:", "") + "?page=" + f + "&size=" + X : ""; } function d(l) { var f = []; return l.author && f.push(q(l.author)), l.latest_chapter_number && f.push("Chương " + l.latest_chapter_number), l.status === "completed" && f.push("Full"), l.status === "ongoing" && f.push("Đang ra"), f.join(" | "); } function s(l) { return { name: q(l.title), link: Z({ edition: "base", slug: l.slug, kind: "detail" }), host: U, cover: ee(l.image_url), description: d(l) }; } function g(l, f) {
                                            return __awaiter(this, void 0, void 0, function () { var o, p, m, y, w, N, B, J; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        l = q(l);
                                                        o = parseInt(f || "1", 10);
                                                        (!o || o < 1) && (o = 1);
                                                        p = S(l, o);
                                                        if (!p)
                                                            return [2, i.error("Input không hợp lệ.")];
                                                        return [4, t(p)];
                                                    case 1:
                                                        m = _a.sent();
                                                        if (!m.ok)
                                                            return [2, i.error("HTTP " + m.status)];
                                                        y = m.json(), w = y && y.items ? y.items : [], N = [];
                                                        w.forEach(function (ie) { !ie || !ie.slug || !ie.title || N.push(s(ie)); });
                                                        B = y && y.total ? parseInt(y.total, 10) : 0, J = "";
                                                        return [2, (B > o * X && (J = String(o + 1)), !J && !B && w.length === X && (J = String(o + 1)), i.success(N, J))];
                                                }
                                            }); });
                                        } var U, X; return __generator(this, function (_a) {
                                            U = "https://truyendich.store";
                                            try {
                                                O && (U = O);
                                            }
                                            catch (l) { }
                                            X = 20;
                                            return [2, typeof g == "function" ? g : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(u.fetch, u.Http, u.Html, u.Response, u.localStorage, u.cacheStorage, u.localConfig, u.localCookie, u.sleep, u.Log, u.console, u.Console, u.log, u.UserAgent, u.Engine, u.Graphics, u.Script)];
        }); });
    } };
function Jr(u) { return new Fu({ meta: ve, scripts: Xr, host: u }); }
var qn = require("@libs/fetch").fetchApi, cu = null;
try {
    cu = require("@libs/storage");
}
catch (u) {
    cu = null;
}
var Rt = {}, Vu = cu && cu.storage ? cu.storage : { get: function (u) { return Rt[u]; }, set: function (u, e) { Rt[u] = e; }, delete: function (u) { delete Rt[u]; } }, Pt = (function () {
    function class_2() {
        var _this = this;
        this.id = ve.lnId, this.name = ve.name, this.icon = ve.lnIcon, this.site = ve.source, this.version = ve.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = Jr({ name: "LNReader", request: function (e) { return __awaiter(_this, void 0, void 0, function () {
                var t, r, n;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            t = { method: e.method, headers: e.headers };
                            e.body != null && e.method !== "GET" && (t.body = e.body);
                            return [4, qn(e.url, t)];
                        case 1:
                            r = _b.sent(), n = {};
                            try {
                                r.headers.forEach(function (i, a) { n[a] = i; });
                            }
                            catch (i) { }
                            _a = { status: r.status, url: r.url || e.url, headers: n };
                            return [4, r.text()];
                        case 2: return [2, (_a.text = _b.sent(), _a)];
                    }
                });
            }); }, storageGet: function (e) { var t = Vu.get("vb_" + e); return t == null ? null : String(t); }, storageSet: function (e, t) { t == null ? Vu.delete && Vu.delete("vb_" + e) : Vu.set("vb_" + e, String(t)); }, config: function (e) { return null; }, log: function (e) { return console.log(e); } });
    }
    class_2.prototype.popularNovels = function (e, t) {
        return __awaiter(this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(t && t.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(e)];
                case 1:
                    _a = _b.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(e)];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4: return [2, (_a).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (e, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.search(e, t)];
                case 1: return [2, (_a.sent()).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (e) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.detail(e)];
                case 1:
                    t = _a.sent();
                    return [4, this.engine.chapters(e)];
                case 2:
                    r = _a.sent();
                    return [2, { path: e, name: t.name || "Untitled", cover: t.cover, summary: t.description, author: t.author, status: t.ongoing ? "Ongoing" : "Completed", genres: t.genres.join(","), chapters: r.map(function (n, i) { return ({ name: n.name, path: n.url, chapterNumber: i + 1 }); }) }];
            }
        }); });
    };
    class_2.prototype.parseChapter = function (e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.content(e)];
                case 1: return [2, (_a.sent()).html];
            }
        }); });
    };
    class_2.prototype.resolveUrl = function (e, t) { return /^https?:/i.test(e) ? e : ve.source.replace(/\/+$/, "") + "/" + String(e).replace(/^\/+/, ""); };
    return class_2;
}()), In = new Pt;

if (typeof exports === "object" && exports && module.exports !== exports && module.exports && module.exports.default) exports.default = module.exports.default;
