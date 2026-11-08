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
var jt = Object.defineProperty, $r = Object.defineProperties, Jr = Object.getOwnPropertyDescriptor, Wr = Object.getOwnPropertyDescriptors, Xr = Object.getOwnPropertyNames, Lu = Object.getOwnPropertySymbols, Kr = Object.getPrototypeOf, Uu = Object.prototype.hasOwnProperty, Zr = Object.prototype.propertyIsEnumerable;
var Ou = function (e, t, r) { return t in e ? jt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r; }, nt = function (e, t) {
    var e_2, _b;
    for (var r in t || (t = {}))
        Uu.call(t, r) && Ou(e, r, t[r]);
    if (Lu)
        try {
            for (var _c = __values(Lu(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var r = _d.value;
                Zr.call(t, r) && Ou(e, r, t[r]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    return e;
}, wt = function (e, t) { return $r(e, Wr(t)); };
var Qr = function (e, t) { return function () { return (t || e((t = { exports: {} }).exports, t), t.exports); }; }, Oe = function (e, t) { for (var r in t)
    jt(e, r, { get: t[r], enumerable: !0 }); }, Mu = function (e, t, r, i) {
    var e_3, _b;
    if (t && typeof t == "object" || typeof t == "function") {
        var _loop_1 = function (s) {
            !Uu.call(e, s) && s !== r && jt(e, s, { get: function () { return t[s]; }, enumerable: !(i = Jr(t, s)) || i.enumerable });
        };
        try {
            for (var _c = __values(Xr(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var s = _d.value;
                _loop_1(s);
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
    return e;
};
var yt = function (e, t, r) { return (r = e != null ? Gr(Kr(e)) : {}, Mu(t || !e || !e.__esModule ? jt(r, "default", { value: e, enumerable: !0 }) : r, e)); }, Yr = function (e) { return Mu(jt({}, "__esModule", { value: !0 }), e); };
var vt = Qr(function (t0, lr) { lr.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var ki = {};
Oe(ki, { default: function () { return Ai; } });
module.exports = Yr(ki);
var ue = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (e) { return e.charCodeAt(0); }));
var re = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (e) { return e.charCodeAt(0); }));
var Ue, ta = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Ct = (Ue = String.fromCodePoint) !== null && Ue !== void 0 ? Ue : function (e) { var t = ""; return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t; };
function Me(e) { var t; return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = ta.get(e)) !== null && t !== void 0 ? t : e; }
var $;
(function (e) { e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z"; })($ || ($ = {}));
var ea = 32, gt;
(function (e) { e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE"; })(gt || (gt = {}));
function Pe(e) { return e >= $.ZERO && e <= $.NINE; }
function ua(e) { return e >= $.UPPER_A && e <= $.UPPER_F || e >= $.LOWER_A && e <= $.LOWER_F; }
function ra(e) { return e >= $.UPPER_A && e <= $.UPPER_Z || e >= $.LOWER_A && e <= $.LOWER_Z || Pe(e); }
function aa(e) { return e === $.EQUALS || ra(e); }
var G;
(function (e) { e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity"; })(G || (G = {}));
var ut;
(function (e) { e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute"; })(ut || (ut = {}));
var qt = (function () {
    function qt(t, r, i) {
        this.decodeTree = t, this.emitCodePoint = r, this.errors = i, this.state = G.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = ut.Strict;
    }
    qt.prototype.startEntity = function (t) { this.decodeMode = t, this.state = G.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    qt.prototype.write = function (t, r) { switch (this.state) {
        case G.EntityStart: return t.charCodeAt(r) === $.NUM ? (this.state = G.NumericStart, this.consumed += 1, this.stateNumericStart(t, r + 1)) : (this.state = G.NamedEntity, this.stateNamedEntity(t, r));
        case G.NumericStart: return this.stateNumericStart(t, r);
        case G.NumericDecimal: return this.stateNumericDecimal(t, r);
        case G.NumericHex: return this.stateNumericHex(t, r);
        case G.NamedEntity: return this.stateNamedEntity(t, r);
    } };
    qt.prototype.stateNumericStart = function (t, r) { return r >= t.length ? -1 : (t.charCodeAt(r) | ea) === $.LOWER_X ? (this.state = G.NumericHex, this.consumed += 1, this.stateNumericHex(t, r + 1)) : (this.state = G.NumericDecimal, this.stateNumericDecimal(t, r)); };
    qt.prototype.addToNumericResult = function (t, r, i, s) { if (r !== i) {
        var o = i - r;
        this.result = this.result * Math.pow(s, o) + parseInt(t.substr(r, o), s), this.consumed += o;
    } };
    qt.prototype.stateNumericHex = function (t, r) { var i = r; for (; r < t.length;) {
        var s = t.charCodeAt(r);
        if (Pe(s) || ua(s))
            r += 1;
        else
            return this.addToNumericResult(t, i, r, 16), this.emitNumericEntity(s, 3);
    } return this.addToNumericResult(t, i, r, 16), -1; };
    qt.prototype.stateNumericDecimal = function (t, r) { var i = r; for (; r < t.length;) {
        var s = t.charCodeAt(r);
        if (Pe(s))
            r += 1;
        else
            return this.addToNumericResult(t, i, r, 10), this.emitNumericEntity(s, 2);
    } return this.addToNumericResult(t, i, r, 10), -1; };
    qt.prototype.emitNumericEntity = function (t, r) { var i; if (this.consumed <= r)
        return (i = this.errors) === null || i === void 0 || i.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (t === $.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === ut.Strict)
        return 0; return this.emitCodePoint(Me(this.result), this.consumed), this.errors && (t !== $.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    qt.prototype.stateNamedEntity = function (t, r) { var i = this.decodeTree, s = i[this.treeIndex], o = (s & gt.VALUE_LENGTH) >> 14; for (; r < t.length; r++, this.excess++) {
        var g = t.charCodeAt(r);
        if (this.treeIndex = ia(i, s, this.treeIndex + Math.max(1, o), g), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === ut.Attribute && (o === 0 || aa(g)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (s = i[this.treeIndex], o = (s & gt.VALUE_LENGTH) >> 14, o !== 0) {
            if (g === $.SEMI)
                return this.emitNamedEntityData(this.treeIndex, o, this.consumed + this.excess);
            this.decodeMode !== ut.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    qt.prototype.emitNotTerminatedNamedEntity = function () { var t; var _b = this, r = _b.result, i = _b.decodeTree, s = (i[r] & gt.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(r, s, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed; };
    qt.prototype.emitNamedEntityData = function (t, r, i) { var s = this.decodeTree; return this.emitCodePoint(r === 1 ? s[t] & ~gt.VALUE_LENGTH : s[t + 1], i), r === 3 && this.emitCodePoint(s[t + 2], i), i; };
    qt.prototype.end = function () { var t; switch (this.state) {
        case G.NamedEntity: return this.result !== 0 && (this.decodeMode !== ut.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case G.NumericDecimal: return this.emitNumericEntity(0, 2);
        case G.NumericHex: return this.emitNumericEntity(0, 3);
        case G.NumericStart: return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case G.EntityStart: return 0;
    } };
    return qt;
}());
function Pu(e) { var t = "", r = new qt(e, function (i) { return t += Ct(i); }); return function (s, o) { var g = 0, v = 0; for (; (v = s.indexOf("&", v)) >= 0;) {
    t += s.slice(g, v), r.startEntity(o);
    var S = r.write(s, v + 1);
    if (S < 0) {
        g = v + r.end();
        break;
    }
    g = v + S, v = S === 0 ? g + 1 : g;
} var y = t + s.slice(g); return t = "", y; }; }
function ia(e, t, r, i) { var s = (t & gt.BRANCH_LENGTH) >> 7, o = t & gt.JUMP_TABLE; if (s === 0)
    return o !== 0 && i === o ? r : -1; if (o) {
    var y = i - o;
    return y < 0 || y >= s ? -1 : e[r + y] - 1;
} var g = r, v = g + s - 1; for (; g <= v;) {
    var y = g + v >>> 1, S = e[y];
    if (S < i)
        g = y + 1;
    else if (S > i)
        v = y - 1;
    else
        return e[y + s];
} return -1; }
var Li = Pu(ue), Oi = Pu(re);
var I;
(function (e) { e[e.Tab = 9] = "Tab", e[e.NewLine = 10] = "NewLine", e[e.FormFeed = 12] = "FormFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.Number = 35] = "Number", e[e.Amp = 38] = "Amp", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Dash = 45] = "Dash", e[e.Slash = 47] = "Slash", e[e.Zero = 48] = "Zero", e[e.Nine = 57] = "Nine", e[e.Semi = 59] = "Semi", e[e.Lt = 60] = "Lt", e[e.Eq = 61] = "Eq", e[e.Gt = 62] = "Gt", e[e.Questionmark = 63] = "Questionmark", e[e.UpperA = 65] = "UpperA", e[e.LowerA = 97] = "LowerA", e[e.UpperF = 70] = "UpperF", e[e.LowerF = 102] = "LowerF", e[e.UpperZ = 90] = "UpperZ", e[e.LowerZ = 122] = "LowerZ", e[e.LowerX = 120] = "LowerX", e[e.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(I || (I = {}));
var E;
(function (e) { e[e.Text = 1] = "Text", e[e.BeforeTagName = 2] = "BeforeTagName", e[e.InTagName = 3] = "InTagName", e[e.InSelfClosingTag = 4] = "InSelfClosingTag", e[e.BeforeClosingTagName = 5] = "BeforeClosingTagName", e[e.InClosingTagName = 6] = "InClosingTagName", e[e.AfterClosingTagName = 7] = "AfterClosingTagName", e[e.BeforeAttributeName = 8] = "BeforeAttributeName", e[e.InAttributeName = 9] = "InAttributeName", e[e.AfterAttributeName = 10] = "AfterAttributeName", e[e.BeforeAttributeValue = 11] = "BeforeAttributeValue", e[e.InAttributeValueDq = 12] = "InAttributeValueDq", e[e.InAttributeValueSq = 13] = "InAttributeValueSq", e[e.InAttributeValueNq = 14] = "InAttributeValueNq", e[e.BeforeDeclaration = 15] = "BeforeDeclaration", e[e.InDeclaration = 16] = "InDeclaration", e[e.InProcessingInstruction = 17] = "InProcessingInstruction", e[e.BeforeComment = 18] = "BeforeComment", e[e.CDATASequence = 19] = "CDATASequence", e[e.InSpecialComment = 20] = "InSpecialComment", e[e.InCommentLike = 21] = "InCommentLike", e[e.BeforeSpecialS = 22] = "BeforeSpecialS", e[e.BeforeSpecialT = 23] = "BeforeSpecialT", e[e.SpecialStartSequence = 24] = "SpecialStartSequence", e[e.InSpecialTag = 25] = "InSpecialTag", e[e.InEntity = 26] = "InEntity"; })(E || (E = {}));
function lt(e) { return e === I.Space || e === I.NewLine || e === I.Tab || e === I.FormFeed || e === I.CarriageReturn; }
function ae(e) { return e === I.Slash || e === I.Gt || lt(e); }
function na(e) { return e >= I.LowerA && e <= I.LowerZ || e >= I.UpperA && e <= I.UpperZ; }
var rt;
(function (e) { e[e.NoValue = 0] = "NoValue", e[e.Unquoted = 1] = "Unquoted", e[e.Single = 2] = "Single", e[e.Double = 3] = "Double"; })(rt || (rt = {}));
var K = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Nt = (function () {
    function Nt(_b, i) {
        var _c = _b.xmlMode, t = _c === void 0 ? !1 : _c, _d = _b.decodeEntities, r = _d === void 0 ? !0 : _d;
        var _this = this;
        this.cbs = i, this.state = E.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = E.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = t, this.decodeEntities = r, this.entityDecoder = new qt(t ? re : ue, function (s, o) { return _this.emitCodePoint(s, o); });
    }
    Nt.prototype.reset = function () { this.state = E.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = E.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Nt.prototype.write = function (t) { this.offset += this.buffer.length, this.buffer = t, this.parse(); };
    Nt.prototype.end = function () { this.running && this.finish(); };
    Nt.prototype.pause = function () { this.running = !1; };
    Nt.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Nt.prototype.stateText = function (t) { t === I.Lt || !this.decodeEntities && this.fastForwardTo(I.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = E.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && t === I.Amp && this.startEntity(); };
    Nt.prototype.stateSpecialStartSequence = function (t) { var r = this.sequenceIndex === this.currentSequence.length; if (!(r ? ae(t) : (t | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!r) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = E.InTagName, this.stateInTagName(t); };
    Nt.prototype.stateInSpecialTag = function (t) { if (this.sequenceIndex === this.currentSequence.length) {
        if (t === I.Gt || lt(t)) {
            var r = this.index - this.currentSequence.length;
            if (this.sectionStart < r) {
                var i = this.index;
                this.index = r, this.cbs.ontext(this.sectionStart, r), this.index = i;
            }
            this.isSpecial = !1, this.sectionStart = r + 2, this.stateInClosingTagName(t);
            return;
        }
        this.sequenceIndex = 0;
    } (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === K.TitleEnd ? this.decodeEntities && t === I.Amp && this.startEntity() : this.fastForwardTo(I.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === I.Lt); };
    Nt.prototype.stateCDATASequence = function (t) { t === K.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === K.Cdata.length && (this.state = E.InCommentLike, this.currentSequence = K.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = E.InDeclaration, this.stateInDeclaration(t)); };
    Nt.prototype.fastForwardTo = function (t) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === t)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Nt.prototype.stateInCommentLike = function (t) { t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === K.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = E.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Nt.prototype.isTagStartChar = function (t) { return this.xmlMode ? !ae(t) : na(t); };
    Nt.prototype.startSpecial = function (t, r) { this.isSpecial = !0, this.currentSequence = t, this.sequenceIndex = r, this.state = E.SpecialStartSequence; };
    Nt.prototype.stateBeforeTagName = function (t) { if (t === I.ExclamationMark)
        this.state = E.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (t === I.Questionmark)
        this.state = E.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(t)) {
        var r = t | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = E.InTagName : r === K.ScriptEnd[2] ? this.state = E.BeforeSpecialS : r === K.TitleEnd[2] ? this.state = E.BeforeSpecialT : this.state = E.InTagName;
    }
    else
        t === I.Slash ? this.state = E.BeforeClosingTagName : (this.state = E.Text, this.stateText(t)); };
    Nt.prototype.stateInTagName = function (t) { ae(t) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = E.BeforeAttributeName, this.stateBeforeAttributeName(t)); };
    Nt.prototype.stateBeforeClosingTagName = function (t) { lt(t) || (t === I.Gt ? this.state = E.Text : (this.state = this.isTagStartChar(t) ? E.InClosingTagName : E.InSpecialComment, this.sectionStart = this.index)); };
    Nt.prototype.stateInClosingTagName = function (t) { (t === I.Gt || lt(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = E.AfterClosingTagName, this.stateAfterClosingTagName(t)); };
    Nt.prototype.stateAfterClosingTagName = function (t) { (t === I.Gt || this.fastForwardTo(I.Gt)) && (this.state = E.Text, this.sectionStart = this.index + 1); };
    Nt.prototype.stateBeforeAttributeName = function (t) { t === I.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = E.InSpecialTag, this.sequenceIndex = 0) : this.state = E.Text, this.sectionStart = this.index + 1) : t === I.Slash ? this.state = E.InSelfClosingTag : lt(t) || (this.state = E.InAttributeName, this.sectionStart = this.index); };
    Nt.prototype.stateInSelfClosingTag = function (t) { t === I.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = E.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : lt(t) || (this.state = E.BeforeAttributeName, this.stateBeforeAttributeName(t)); };
    Nt.prototype.stateInAttributeName = function (t) { (t === I.Eq || ae(t)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = E.AfterAttributeName, this.stateAfterAttributeName(t)); };
    Nt.prototype.stateAfterAttributeName = function (t) { t === I.Eq ? this.state = E.BeforeAttributeValue : t === I.Slash || t === I.Gt ? (this.cbs.onattribend(rt.NoValue, this.sectionStart), this.sectionStart = -1, this.state = E.BeforeAttributeName, this.stateBeforeAttributeName(t)) : lt(t) || (this.cbs.onattribend(rt.NoValue, this.sectionStart), this.state = E.InAttributeName, this.sectionStart = this.index); };
    Nt.prototype.stateBeforeAttributeValue = function (t) { t === I.DoubleQuote ? (this.state = E.InAttributeValueDq, this.sectionStart = this.index + 1) : t === I.SingleQuote ? (this.state = E.InAttributeValueSq, this.sectionStart = this.index + 1) : lt(t) || (this.sectionStart = this.index, this.state = E.InAttributeValueNq, this.stateInAttributeValueNoQuotes(t)); };
    Nt.prototype.handleInAttributeValue = function (t, r) { t === r || !this.decodeEntities && this.fastForwardTo(r) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(r === I.DoubleQuote ? rt.Double : rt.Single, this.index + 1), this.state = E.BeforeAttributeName) : this.decodeEntities && t === I.Amp && this.startEntity(); };
    Nt.prototype.stateInAttributeValueDoubleQuotes = function (t) { this.handleInAttributeValue(t, I.DoubleQuote); };
    Nt.prototype.stateInAttributeValueSingleQuotes = function (t) { this.handleInAttributeValue(t, I.SingleQuote); };
    Nt.prototype.stateInAttributeValueNoQuotes = function (t) { lt(t) || t === I.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(rt.Unquoted, this.index), this.state = E.BeforeAttributeName, this.stateBeforeAttributeName(t)) : this.decodeEntities && t === I.Amp && this.startEntity(); };
    Nt.prototype.stateBeforeDeclaration = function (t) { t === I.OpeningSquareBracket ? (this.state = E.CDATASequence, this.sequenceIndex = 0) : this.state = t === I.Dash ? E.BeforeComment : E.InDeclaration; };
    Nt.prototype.stateInDeclaration = function (t) { (t === I.Gt || this.fastForwardTo(I.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = E.Text, this.sectionStart = this.index + 1); };
    Nt.prototype.stateInProcessingInstruction = function (t) { (t === I.Gt || this.fastForwardTo(I.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = E.Text, this.sectionStart = this.index + 1); };
    Nt.prototype.stateBeforeComment = function (t) { t === I.Dash ? (this.state = E.InCommentLike, this.currentSequence = K.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = E.InDeclaration; };
    Nt.prototype.stateInSpecialComment = function (t) { (t === I.Gt || this.fastForwardTo(I.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = E.Text, this.sectionStart = this.index + 1); };
    Nt.prototype.stateBeforeSpecialS = function (t) { var r = t | 32; r === K.ScriptEnd[3] ? this.startSpecial(K.ScriptEnd, 4) : r === K.StyleEnd[3] ? this.startSpecial(K.StyleEnd, 4) : (this.state = E.InTagName, this.stateInTagName(t)); };
    Nt.prototype.stateBeforeSpecialT = function (t) { var r = t | 32; r === K.TitleEnd[3] ? this.startSpecial(K.TitleEnd, 4) : r === K.TextareaEnd[3] ? this.startSpecial(K.TextareaEnd, 4) : (this.state = E.InTagName, this.stateInTagName(t)); };
    Nt.prototype.startEntity = function () { this.baseState = this.state, this.state = E.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? ut.Strict : this.baseState === E.Text || this.baseState === E.InSpecialTag ? ut.Legacy : ut.Attribute); };
    Nt.prototype.stateInEntity = function () { var t = this.entityDecoder.write(this.buffer, this.index - this.offset); t >= 0 ? (this.state = this.baseState, t === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Nt.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === E.Text || this.state === E.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === E.InAttributeValueDq || this.state === E.InAttributeValueSq || this.state === E.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Nt.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Nt.prototype.parse = function () { for (; this.shouldContinue();) {
        var t = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case E.Text: {
                this.stateText(t);
                break;
            }
            case E.SpecialStartSequence: {
                this.stateSpecialStartSequence(t);
                break;
            }
            case E.InSpecialTag: {
                this.stateInSpecialTag(t);
                break;
            }
            case E.CDATASequence: {
                this.stateCDATASequence(t);
                break;
            }
            case E.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(t);
                break;
            }
            case E.InAttributeName: {
                this.stateInAttributeName(t);
                break;
            }
            case E.InCommentLike: {
                this.stateInCommentLike(t);
                break;
            }
            case E.InSpecialComment: {
                this.stateInSpecialComment(t);
                break;
            }
            case E.BeforeAttributeName: {
                this.stateBeforeAttributeName(t);
                break;
            }
            case E.InTagName: {
                this.stateInTagName(t);
                break;
            }
            case E.InClosingTagName: {
                this.stateInClosingTagName(t);
                break;
            }
            case E.BeforeTagName: {
                this.stateBeforeTagName(t);
                break;
            }
            case E.AfterAttributeName: {
                this.stateAfterAttributeName(t);
                break;
            }
            case E.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(t);
                break;
            }
            case E.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(t);
                break;
            }
            case E.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(t);
                break;
            }
            case E.AfterClosingTagName: {
                this.stateAfterClosingTagName(t);
                break;
            }
            case E.BeforeSpecialS: {
                this.stateBeforeSpecialS(t);
                break;
            }
            case E.BeforeSpecialT: {
                this.stateBeforeSpecialT(t);
                break;
            }
            case E.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(t);
                break;
            }
            case E.InSelfClosingTag: {
                this.stateInSelfClosingTag(t);
                break;
            }
            case E.InDeclaration: {
                this.stateInDeclaration(t);
                break;
            }
            case E.BeforeDeclaration: {
                this.stateBeforeDeclaration(t);
                break;
            }
            case E.BeforeComment: {
                this.stateBeforeComment(t);
                break;
            }
            case E.InProcessingInstruction: {
                this.stateInProcessingInstruction(t);
                break;
            }
            case E.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Nt.prototype.finish = function () { this.state === E.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Nt.prototype.handleTrailingData = function () { var t = this.buffer.length + this.offset; this.sectionStart >= t || (this.state === E.InCommentLike ? this.currentSequence === K.CdataEnd ? this.cbs.oncdata(this.sectionStart, t, 0) : this.cbs.oncomment(this.sectionStart, t, 0) : this.state === E.InTagName || this.state === E.BeforeAttributeName || this.state === E.BeforeAttributeValue || this.state === E.AfterAttributeName || this.state === E.InAttributeName || this.state === E.InAttributeValueSq || this.state === E.InAttributeValueDq || this.state === E.InAttributeValueNq || this.state === E.InClosingTagName || this.cbs.ontext(this.sectionStart, t)); };
    Nt.prototype.emitCodePoint = function (t, r) { this.baseState !== E.Text && this.baseState !== E.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + r, this.index = this.sectionStart - 1, this.cbs.onattribentity(t)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + r, this.index = this.sectionStart - 1, this.cbs.ontextentity(t, this.sectionStart)); };
    return Nt;
}());
var _t = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), F = new Set(["p"]), Bu = new Set(["thead", "tbody"]), Fu = new Set(["dd", "dt"]), ju = new Set(["rt", "rp"]), ca = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", F], ["h1", F], ["h2", F], ["h3", F], ["h4", F], ["h5", F], ["h6", F], ["select", _t], ["input", _t], ["output", _t], ["button", _t], ["datalist", _t], ["textarea", _t], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Fu], ["dt", Fu], ["address", F], ["article", F], ["aside", F], ["blockquote", F], ["details", F], ["div", F], ["dl", F], ["fieldset", F], ["figcaption", F], ["figure", F], ["footer", F], ["form", F], ["header", F], ["hr", F], ["main", F], ["nav", F], ["ol", F], ["pre", F], ["section", F], ["table", F], ["ul", F], ["rt", ju], ["rp", ju], ["tbody", Bu], ["tfoot", Bu]]), sa = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Vu = new Set(["math", "svg"]), zu = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), oa = /\s|\//, Vt = (function () {
    function Vt(t, r) {
        if (r === void 0) { r = {}; }
        var i, s, o, g, v, y;
        this.options = r, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = t != null ? t : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (i = r.lowerCaseTags) !== null && i !== void 0 ? i : this.htmlMode, this.lowerCaseAttributeNames = (s = r.lowerCaseAttributeNames) !== null && s !== void 0 ? s : this.htmlMode, this.recognizeSelfClosing = (o = r.recognizeSelfClosing) !== null && o !== void 0 ? o : !this.htmlMode, this.tokenizer = new ((g = r.Tokenizer) !== null && g !== void 0 ? g : Nt)(this.options, this), this.foreignContext = [!this.htmlMode], (y = (v = this.cbs).onparserinit) === null || y === void 0 || y.call(v, this);
    }
    Vt.prototype.ontext = function (t, r) { var i, s; var o = this.getSlice(t, r); this.endIndex = r - 1, (s = (i = this.cbs).ontext) === null || s === void 0 || s.call(i, o), this.startIndex = r; };
    Vt.prototype.ontextentity = function (t, r) { var i, s; this.endIndex = r - 1, (s = (i = this.cbs).ontext) === null || s === void 0 || s.call(i, Ct(t)), this.startIndex = r; };
    Vt.prototype.isVoidElement = function (t) { return this.htmlMode && sa.has(t); };
    Vt.prototype.onopentagname = function (t, r) { this.endIndex = r; var i = this.getSlice(t, r); this.lowerCaseTagNames && (i = i.toLowerCase()), this.emitOpenTag(i); };
    Vt.prototype.emitOpenTag = function (t) { var r, i, s, o; this.openTagStart = this.startIndex, this.tagname = t; var g = this.htmlMode && ca.get(t); if (g)
        for (; this.stack.length > 0 && g.has(this.stack[0]);) {
            var v = this.stack.shift();
            (i = (r = this.cbs).onclosetag) === null || i === void 0 || i.call(r, v, !0);
        } this.isVoidElement(t) || (this.stack.unshift(t), this.htmlMode && (Vu.has(t) ? this.foreignContext.unshift(!0) : zu.has(t) && this.foreignContext.unshift(!1))), (o = (s = this.cbs).onopentagname) === null || o === void 0 || o.call(s, t), this.cbs.onopentag && (this.attribs = {}); };
    Vt.prototype.endOpenTag = function (t) { var r, i; this.startIndex = this.openTagStart, this.attribs && ((i = (r = this.cbs).onopentag) === null || i === void 0 || i.call(r, this.tagname, this.attribs, t), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    Vt.prototype.onopentagend = function (t) { this.endIndex = t, this.endOpenTag(!1), this.startIndex = t + 1; };
    Vt.prototype.onclosetag = function (t, r) { var i, s, o, g, v, y, S, T; this.endIndex = r; var L = this.getSlice(t, r); if (this.lowerCaseTagNames && (L = L.toLowerCase()), this.htmlMode && (Vu.has(L) || zu.has(L)) && this.foreignContext.shift(), this.isVoidElement(L))
        this.htmlMode && L === "br" && ((g = (o = this.cbs).onopentagname) === null || g === void 0 || g.call(o, "br"), (y = (v = this.cbs).onopentag) === null || y === void 0 || y.call(v, "br", {}, !0), (T = (S = this.cbs).onclosetag) === null || T === void 0 || T.call(S, "br", !1));
    else {
        var q = this.stack.indexOf(L);
        if (q !== -1)
            for (var N = 0; N <= q; N++) {
                var O = this.stack.shift();
                (s = (i = this.cbs).onclosetag) === null || s === void 0 || s.call(i, O, N !== q);
            }
        else
            this.htmlMode && L === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = r + 1; };
    Vt.prototype.onselfclosingtag = function (t) { this.endIndex = t, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = t + 1) : this.onopentagend(t); };
    Vt.prototype.closeCurrentTag = function (t) { var r, i; var s = this.tagname; this.endOpenTag(t), this.stack[0] === s && ((i = (r = this.cbs).onclosetag) === null || i === void 0 || i.call(r, s, !t), this.stack.shift()); };
    Vt.prototype.onattribname = function (t, r) { this.startIndex = t; var i = this.getSlice(t, r); this.attribname = this.lowerCaseAttributeNames ? i.toLowerCase() : i; };
    Vt.prototype.onattribdata = function (t, r) { this.attribvalue += this.getSlice(t, r); };
    Vt.prototype.onattribentity = function (t) { this.attribvalue += Ct(t); };
    Vt.prototype.onattribend = function (t, r) { var i, s; this.endIndex = r, (s = (i = this.cbs).onattribute) === null || s === void 0 || s.call(i, this.attribname, this.attribvalue, t === rt.Double ? '"' : t === rt.Single ? "'" : t === rt.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    Vt.prototype.getInstructionName = function (t) { var r = t.search(oa), i = r < 0 ? t : t.substr(0, r); return this.lowerCaseTagNames && (i = i.toLowerCase()), i; };
    Vt.prototype.ondeclaration = function (t, r) { this.endIndex = r; var i = this.getSlice(t, r); if (this.cbs.onprocessinginstruction) {
        var s = this.getInstructionName(i);
        this.cbs.onprocessinginstruction("!".concat(s), "!".concat(i));
    } this.startIndex = r + 1; };
    Vt.prototype.onprocessinginstruction = function (t, r) { this.endIndex = r; var i = this.getSlice(t, r); if (this.cbs.onprocessinginstruction) {
        var s = this.getInstructionName(i);
        this.cbs.onprocessinginstruction("?".concat(s), "?".concat(i));
    } this.startIndex = r + 1; };
    Vt.prototype.oncomment = function (t, r, i) { var s, o, g, v; this.endIndex = r, (o = (s = this.cbs).oncomment) === null || o === void 0 || o.call(s, this.getSlice(t, r - i)), (v = (g = this.cbs).oncommentend) === null || v === void 0 || v.call(g), this.startIndex = r + 1; };
    Vt.prototype.oncdata = function (t, r, i) { var s, o, g, v, y, S, T, L, q, N; this.endIndex = r; var O = this.getSlice(t, r - i); !this.htmlMode || this.options.recognizeCDATA ? ((o = (s = this.cbs).oncdatastart) === null || o === void 0 || o.call(s), (v = (g = this.cbs).ontext) === null || v === void 0 || v.call(g, O), (S = (y = this.cbs).oncdataend) === null || S === void 0 || S.call(y)) : ((L = (T = this.cbs).oncomment) === null || L === void 0 || L.call(T, "[CDATA[".concat(O, "]]")), (N = (q = this.cbs).oncommentend) === null || N === void 0 || N.call(q)), this.startIndex = r + 1; };
    Vt.prototype.onend = function () { var t, r; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var i = 0; i < this.stack.length; i++)
            this.cbs.onclosetag(this.stack[i], !0);
    } (r = (t = this.cbs).onend) === null || r === void 0 || r.call(t); };
    Vt.prototype.reset = function () { var t, r, i, s; (r = (t = this.cbs).onreset) === null || r === void 0 || r.call(t), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (s = (i = this.cbs).onparserinit) === null || s === void 0 || s.call(i, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    Vt.prototype.parseComplete = function (t) { this.reset(), this.end(t); };
    Vt.prototype.getSlice = function (t, r) { for (; t - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var i = this.buffers[0].slice(t - this.bufferOffset, r - this.bufferOffset); for (; r - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), i += this.buffers[0].slice(0, r - this.bufferOffset); return i; };
    Vt.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    Vt.prototype.write = function (t) { var r, i; if (this.ended) {
        (i = (r = this.cbs).onerror) === null || i === void 0 || i.call(r, new Error(".write() after done!"));
        return;
    } this.buffers.push(t), this.tokenizer.running && (this.tokenizer.write(t), this.writeIndex++); };
    Vt.prototype.end = function (t) { var r, i; if (this.ended) {
        (i = (r = this.cbs).onerror) === null || i === void 0 || i.call(r, new Error(".end() after done!"));
        return;
    } t && this.write(t), this.ended = !0, this.tokenizer.end(); };
    Vt.prototype.pause = function () { this.tokenizer.pause(); };
    Vt.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    Vt.prototype.parseChunk = function (t) { this.write(t); };
    Vt.prototype.done = function (t) { this.end(t); };
    return Vt;
}());
var ie = {};
Oe(ie, { CDATA: function () { return $e; }, Comment: function () { return ze; }, Directive: function () { return Ve; }, Doctype: function () { return Je; }, ElementType: function () { return U; }, Root: function () { return Fe; }, Script: function () { return He; }, Style: function () { return Re; }, Tag: function () { return Ge; }, Text: function () { return je; }, isTag: function () { return Be; } });
var U;
(function (e) { e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"; })(U || (U = {}));
function Be(e) { return e.type === U.Tag || e.type === U.Script || e.type === U.Style; }
var Fe = U.Root, je = U.Text, Ve = U.Directive, ze = U.Comment, He = U.Script, Re = U.Style, Ge = U.Tag, $e = U.CDATA, Je = U.Doctype;
var ne = (function () {
    function ne() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(ne.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (t) { this.parent = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ne.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (t) { this.prev = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ne.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (t) { this.next = t; },
        enumerable: false,
        configurable: true
    });
    ne.prototype.cloneNode = function (t) {
        if (t === void 0) { t = !1; }
        return Hu(this, t);
    };
    return ne;
}()), zt = (function (_super) {
    __extends(zt, _super);
    function zt(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = t;
        return _this;
    }
    Object.defineProperty(zt.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (t) { this.data = t; },
        enumerable: false,
        configurable: true
    });
    return zt;
}(ne)), Dt = (function (_super) {
    __extends(Dt, _super);
    function Dt() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = U.Text;
        return _this;
    }
    Object.defineProperty(Dt.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return Dt;
}(zt)), Ht = (function (_super) {
    __extends(Ht, _super);
    function Ht() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = U.Comment;
        return _this;
    }
    Object.defineProperty(Ht.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return Ht;
}(zt)), Rt = (function (_super) {
    __extends(Rt, _super);
    function Rt(t, r) {
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = t, _this.type = U.Directive;
        return _this;
    }
    Object.defineProperty(Rt.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return Rt;
}(zt)), Gt = (function (_super) {
    __extends(Gt, _super);
    function Gt(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = t;
        return _this;
    }
    Object.defineProperty(Gt.prototype, "firstChild", {
        get: function () { var t; return (t = this.children[0]) !== null && t !== void 0 ? t : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gt.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gt.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (t) { this.children = t; },
        enumerable: false,
        configurable: true
    });
    return Gt;
}(ne)), $t = (function (_super) {
    __extends($t, _super);
    function $t() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = U.CDATA;
        return _this;
    }
    Object.defineProperty($t.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return $t;
}(Gt)), It = (function (_super) {
    __extends(It, _super);
    function It() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = U.Root;
        return _this;
    }
    Object.defineProperty(It.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return It;
}(Gt)), Jt = (function (_super) {
    __extends(Jt, _super);
    function Jt(t, r, i, s) {
        if (i === void 0) { i = []; }
        if (s === void 0) { s = t === "script" ? U.Script : t === "style" ? U.Style : U.Tag; }
        var _this = this;
        _this = _super.call(this, i) || this, _this.name = t, _this.attribs = r, _this.type = s;
        return _this;
    }
    Object.defineProperty(Jt.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jt.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (t) { this.name = t; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jt.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (t) { var r, i; return { name: t, value: _this.attribs[t], namespace: (r = _this["x-attribsNamespace"]) === null || r === void 0 ? void 0 : r[t], prefix: (i = _this["x-attribsPrefix"]) === null || i === void 0 ? void 0 : i[t] }; });
        },
        enumerable: false,
        configurable: true
    });
    return Jt;
}(Gt));
function P(e) { return Be(e); }
function Lt(e) { return e.type === U.CDATA; }
function ct(e) { return e.type === U.Text; }
function Wt(e) { return e.type === U.Comment; }
function fa(e) { return e.type === U.Directive; }
function Xe(e) { return e.type === U.Root; }
function Z(e) { return Object.prototype.hasOwnProperty.call(e, "children"); }
function Hu(e, t) {
    if (t === void 0) { t = !1; }
    var r;
    if (ct(e))
        r = new Dt(e.data);
    else if (Wt(e))
        r = new Ht(e.data);
    else if (P(e)) {
        var i = t ? We(e.children) : [], s_1 = new Jt(e.name, nt({}, e.attribs), i);
        i.forEach(function (o) { return o.parent = s_1; }), e.namespace != null && (s_1.namespace = e.namespace), e["x-attribsNamespace"] && (s_1["x-attribsNamespace"] = nt({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (s_1["x-attribsPrefix"] = nt({}, e["x-attribsPrefix"])), r = s_1;
    }
    else if (Lt(e)) {
        var i = t ? We(e.children) : [], s_2 = new $t(i);
        i.forEach(function (o) { return o.parent = s_2; }), r = s_2;
    }
    else if (Xe(e)) {
        var i = t ? We(e.children) : [], s_3 = new It(i);
        i.forEach(function (o) { return o.parent = s_3; }), e["x-mode"] && (s_3["x-mode"] = e["x-mode"]), r = s_3;
    }
    else if (fa(e)) {
        var i = new Rt(e.name, e.data);
        e["x-name"] != null && (i["x-name"] = e["x-name"], i["x-publicId"] = e["x-publicId"], i["x-systemId"] = e["x-systemId"]), r = i;
    }
    else
        throw new Error("Not implemented yet: ".concat(e.type));
    return r.startIndex = e.startIndex, r.endIndex = e.endIndex, e.sourceCodeLocation != null && (r.sourceCodeLocation = e.sourceCodeLocation), r;
}
function We(e) { var t = e.map(function (r) { return Hu(r, !0); }); for (var r = 1; r < t.length; r++)
    t[r].prev = t[r - 1], t[r - 1].next = t[r]; return t; }
var Ru = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, Ot = (function () {
    function Ot(t, r, i) {
        this.dom = [], this.root = new It(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof r == "function" && (i = r, r = Ru), typeof t == "object" && (r = t, t = void 0), this.callback = t != null ? t : null, this.options = r != null ? r : Ru, this.elementCB = i != null ? i : null;
    }
    Ot.prototype.onparserinit = function (t) { this.parser = t; };
    Ot.prototype.onreset = function () { this.dom = [], this.root = new It(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    Ot.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    Ot.prototype.onerror = function (t) { this.handleCallback(t); };
    Ot.prototype.onclosetag = function () { this.lastNode = null; var t = this.tagStack.pop(); this.options.withEndIndices && (t.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(t); };
    Ot.prototype.onopentag = function (t, r) { var i = this.options.xmlMode ? U.Tag : void 0, s = new Jt(t, r, void 0, i); this.addNode(s), this.tagStack.push(s); };
    Ot.prototype.ontext = function (t) { var r = this.lastNode; if (r && r.type === U.Text)
        r.data += t, this.options.withEndIndices && (r.endIndex = this.parser.endIndex);
    else {
        var i = new Dt(t);
        this.addNode(i), this.lastNode = i;
    } };
    Ot.prototype.oncomment = function (t) { if (this.lastNode && this.lastNode.type === U.Comment) {
        this.lastNode.data += t;
        return;
    } var r = new Ht(t); this.addNode(r), this.lastNode = r; };
    Ot.prototype.oncommentend = function () { this.lastNode = null; };
    Ot.prototype.oncdatastart = function () { var t = new Dt(""), r = new $t([t]); this.addNode(r), t.parent = r, this.lastNode = t; };
    Ot.prototype.oncdataend = function () { this.lastNode = null; };
    Ot.prototype.onprocessinginstruction = function (t, r) { var i = new Rt(t, r); this.addNode(i); };
    Ot.prototype.handleCallback = function (t) { if (typeof this.callback == "function")
        this.callback(t, this.dom);
    else if (t)
        throw t; };
    Ot.prototype.addNode = function (t) { var r = this.tagStack[this.tagStack.length - 1], i = r.children[r.children.length - 1]; this.options.withStartIndices && (t.startIndex = this.parser.startIndex), this.options.withEndIndices && (t.endIndex = this.parser.endIndex), r.children.push(t), i && (t.prev = i, i.next = t), t.parent = r, this.lastNode = null; };
    return Ot;
}());
var st = {};
Oe(st, { DocumentPosition: function () { return at; }, append: function () { return _a; }, appendChild: function () { return Na; }, compareDocumentPosition: function () { return ir; }, existsOne: function () { return rr; }, filter: function () { return Mt; }, find: function () { return he; }, findAll: function () { return La; }, findOne: function () { return pe; }, findOneChild: function () { return Ia; }, getAttributeValue: function () { return Ea; }, getChildren: function () { return le; }, getElementById: function () { return Pa; }, getElements: function () { return Ma; }, getElementsByClassName: function () { return Ba; }, getElementsByTagName: function () { return St; }, getElementsByTagType: function () { return Fa; }, getFeed: function () { return cu; }, getInnerHTML: function () { return ka; }, getName: function () { return Ca; }, getOuterHTML: function () { return er; }, getParent: function () { return ur; }, getSiblings: function () { return de; }, getText: function () { return fe; }, hasAttrib: function () { return Ta; }, hasChildren: function () { return Z; }, innerText: function () { return eu; }, isCDATA: function () { return Lt; }, isComment: function () { return Wt; }, isDocument: function () { return Xe; }, isTag: function () { return P; }, isText: function () { return ct; }, nextElementSibling: function () { return uu; }, prepend: function () { return au; }, prependChild: function () { return Da; }, prevElementSibling: function () { return ru; }, removeElement: function () { return dt; }, removeSubsets: function () { return ja; }, replaceElement: function () { return qa; }, testElement: function () { return Ua; }, textContent: function () { return bt; }, uniqueSort: function () { return nu; } });
function ce(e) { for (var t = 1; t < e.length; t++)
    e[t][0] += e[t - 1][0] + 1; return e; }
var la = new Map(ce([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(ce([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(ce([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(ce([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var Ke = /["&'<>$\x80-\uFFFF]/g, Gu = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), $u = String.prototype.codePointAt != null ? function (e, t) { return e.codePointAt(t); } : function (e, t) { return (e.charCodeAt(t) & 64512) === 55296 ? (e.charCodeAt(t) - 55296) * 1024 + e.charCodeAt(t + 1) - 56320 + 65536 : e.charCodeAt(t); };
function Xt(e) { var t = "", r = 0, i; for (; (i = Ke.exec(e)) !== null;) {
    var s = i.index, o = e.charCodeAt(s), g = Gu.get(o);
    g !== void 0 ? (t += e.substring(r, s) + g, r = s + 1) : (t += "".concat(e.substring(r, s), "&#x").concat($u(e, s).toString(16), ";"), r = Ke.lastIndex += +((o & 64512) === 55296));
} return t + e.substr(r); }
function Ze(e, t) { return function (i) { var s, o = 0, g = ""; for (; s = e.exec(i);)
    o !== s.index && (g += i.substring(o, s.index)), g += t.get(s[0].charCodeAt(0)), o = s.index + 1; return g + i.substring(o); }; }
var Ju = Ze(/[&<>'"]/g, Gu), se = Ze(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), oe = Ze(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var Wu;
(function (e) { e[e.XML = 0] = "XML", e[e.HTML = 1] = "HTML"; })(Wu || (Wu = {}));
var Xu;
(function (e) { e[e.UTF8 = 0] = "UTF8", e[e.ASCII = 1] = "ASCII", e[e.Extensive = 2] = "Extensive", e[e.Attribute = 3] = "Attribute", e[e.Text = 4] = "Text"; })(Xu || (Xu = {}));
var Qu = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (e) { return [e.toLowerCase(), e]; })), Yu = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (e) { return [e.toLowerCase(), e]; }));
var ha = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function pa(e) { return e.replace(/"/g, "&quot;"); }
function ga(e, t) { var r; if (!e)
    return; var i = ((r = t.encodeEntities) !== null && r !== void 0 ? r : t.decodeEntities) === !1 ? pa : t.xmlMode || t.encodeEntities !== "utf8" ? Xt : se; return Object.keys(e).map(function (s) { var o, g; var v = (o = e[s]) !== null && o !== void 0 ? o : ""; return t.xmlMode === "foreign" && (s = (g = Yu.get(s)) !== null && g !== void 0 ? g : s), !t.emptyAttrs && !t.xmlMode && v === "" ? s : "".concat(s, "=\"").concat(i(v), "\""); }).join(" "); }
var tr = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function tu(e, t) {
    if (t === void 0) { t = {}; }
    var r = "length" in e ? e : [e], i = "";
    for (var s = 0; s < r.length; s++)
        i += ba(r[s], t);
    return i;
}
var Ut = tu;
function ba(e, t) { switch (e.type) {
    case Fe: return tu(e.children, t);
    case Je:
    case Ve: return wa(e);
    case ze: return Aa(e);
    case $e: return Sa(e);
    case He:
    case Re:
    case Ge: return va(e, t);
    case je: return ya(e, t);
} }
var ma = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), xa = new Set(["svg", "math"]);
function va(e, t) { var r; t.xmlMode === "foreign" && (e.name = (r = Qu.get(e.name)) !== null && r !== void 0 ? r : e.name, e.parent && ma.has(e.parent.name) && (t = wt(nt({}, t), { xmlMode: !1 }))), !t.xmlMode && xa.has(e.name) && (t = wt(nt({}, t), { xmlMode: "foreign" })); var i = "<".concat(e.name), s = ga(e.attribs, t); return s && (i += " ".concat(s)), e.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== !1 : t.selfClosingTags && tr.has(e.name)) ? (t.xmlMode || (i += " "), i += "/>") : (i += ">", e.children.length > 0 && (i += tu(e.children, t)), (t.xmlMode || !tr.has(e.name)) && (i += "</".concat(e.name, ">"))), i; }
function wa(e) { return "<".concat(e.data, ">"); }
function ya(e, t) { var r; var i = e.data || ""; return ((r = t.encodeEntities) !== null && r !== void 0 ? r : t.decodeEntities) !== !1 && !(!t.xmlMode && e.parent && ha.has(e.parent.name)) && (i = t.xmlMode || t.encodeEntities !== "utf8" ? Xt(i) : oe(i)), i; }
function Sa(e) { return "<![CDATA[".concat(e.children[0].data, "]]>"); }
function Aa(e) { return "<!--".concat(e.data, "-->"); }
function er(e, t) { return Ut(e, t); }
function ka(e, t) { return Z(e) ? e.children.map(function (r) { return er(r, t); }).join("") : ""; }
function fe(e) {
    return Array.isArray(e) ? e.map(fe).join("") : P(e) ? e.name === "br" ? "\n" : fe(e.children) : Lt(e) ? fe(e.children) : ct(e) ? e.data : "";
}
function bt(e) { return Array.isArray(e) ? e.map(bt).join("") : Z(e) && !Wt(e) ? bt(e.children) : ct(e) ? e.data : ""; }
function eu(e) { return Array.isArray(e) ? e.map(eu).join("") : Z(e) && (e.type === U.Tag || Lt(e)) ? eu(e.children) : ct(e) ? e.data : ""; }
function le(e) { return Z(e) ? e.children : []; }
function ur(e) { return e.parent || null; }
function de(e) {
    var _b, _c;
    var t = ur(e);
    if (t != null)
        return le(t);
    var r = [e], i = e.prev, s = e.next;
    for (; i != null;)
        r.unshift(i), _b = i, i = _b.prev;
    for (; s != null;)
        r.push(s), _c = s, s = _c.next;
    return r;
}
function Ea(e, t) { var r; return (r = e.attribs) === null || r === void 0 ? void 0 : r[t]; }
function Ta(e, t) { return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, t) && e.attribs[t] != null; }
function Ca(e) { return e.name; }
function uu(e) {
    var _b;
    var t = e.next;
    for (; t !== null && !P(t);)
        (_b = t, t = _b.next);
    return t;
}
function ru(e) {
    var _b;
    var t = e.prev;
    for (; t !== null && !P(t);)
        (_b = t, t = _b.prev);
    return t;
}
function dt(e) { if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var t = e.parent.children, r = t.lastIndexOf(e);
    r >= 0 && t.splice(r, 1);
} e.next = null, e.prev = null, e.parent = null; }
function qa(e, t) { var r = t.prev = e.prev; r && (r.next = t); var i = t.next = e.next; i && (i.prev = t); var s = t.parent = e.parent; if (s) {
    var o = s.children;
    o[o.lastIndexOf(e)] = t, e.parent = null;
} }
function Na(e, t) { if (dt(t), t.next = null, t.parent = e, e.children.push(t) > 1) {
    var r = e.children[e.children.length - 2];
    r.next = t, t.prev = r;
}
else
    t.prev = null; }
function _a(e, t) { dt(t); var r = e.parent, i = e.next; if (t.next = i, t.prev = e, e.next = t, t.parent = r, i) {
    if (i.prev = t, r) {
        var s = r.children;
        s.splice(s.lastIndexOf(i), 0, t);
    }
}
else
    r && r.children.push(t); }
function Da(e, t) { if (dt(t), t.parent = e, t.prev = null, e.children.unshift(t) !== 1) {
    var r = e.children[1];
    r.prev = t, t.next = r;
}
else
    t.next = null; }
function au(e, t) { dt(t); var r = e.parent; if (r) {
    var i = r.children;
    i.splice(i.indexOf(e), 0, t);
} e.prev && (e.prev.next = t), t.parent = r, t.prev = e.prev, t.next = e, e.prev = t; }
function Mt(e, t, r, i) {
    if (r === void 0) { r = !0; }
    if (i === void 0) { i = 1 / 0; }
    return he(e, Array.isArray(t) ? t : [t], r, i);
}
function he(e, t, r, i) { var s = [], o = [Array.isArray(t) ? t : [t]], g = [0]; for (;;) {
    if (g[0] >= o[0].length) {
        if (g.length === 1)
            return s;
        o.shift(), g.shift();
        continue;
    }
    var v = o[0][g[0]++];
    if (e(v) && (s.push(v), --i <= 0))
        return s;
    r && Z(v) && v.children.length > 0 && (g.unshift(0), o.unshift(v.children));
} }
function Ia(e, t) { return t.find(e); }
function pe(e, t, r) {
    if (r === void 0) { r = !0; }
    var i = Array.isArray(t) ? t : [t];
    for (var s = 0; s < i.length; s++) {
        var o = i[s];
        if (P(o) && e(o))
            return o;
        if (r && Z(o) && o.children.length > 0) {
            var g = pe(e, o.children, !0);
            if (g)
                return g;
        }
    }
    return null;
}
function rr(e, t) { return (Array.isArray(t) ? t : [t]).some(function (r) { return P(r) && e(r) || Z(r) && rr(e, r.children); }); }
function La(e, t) { var r = [], i = [Array.isArray(t) ? t : [t]], s = [0]; for (;;) {
    if (s[0] >= i[0].length) {
        if (i.length === 1)
            return r;
        i.shift(), s.shift();
        continue;
    }
    var o = i[0][s[0]++];
    P(o) && e(o) && r.push(o), Z(o) && o.children.length > 0 && (s.unshift(0), i.unshift(o.children));
} }
var ge = { tag_name: function (e) { return typeof e == "function" ? function (t) { return P(t) && e(t.name); } : e === "*" ? P : function (t) { return P(t) && t.name === e; }; }, tag_type: function (e) { return typeof e == "function" ? function (t) { return e(t.type); } : function (t) { return t.type === e; }; }, tag_contains: function (e) { return typeof e == "function" ? function (t) { return ct(t) && e(t.data); } : function (t) { return ct(t) && t.data === e; }; } };
function iu(e, t) { return typeof t == "function" ? function (r) { return P(r) && t(r.attribs[e]); } : function (r) { return P(r) && r.attribs[e] === t; }; }
function Oa(e, t) { return function (r) { return e(r) || t(r); }; }
function ar(e) { var t = Object.keys(e).map(function (r) { var i = e[r]; return Object.prototype.hasOwnProperty.call(ge, r) ? ge[r](i) : iu(r, i); }); return t.length === 0 ? null : t.reduce(Oa); }
function Ua(e, t) { var r = ar(e); return r ? r(t) : !0; }
function Ma(e, t, r, i) {
    if (i === void 0) { i = 1 / 0; }
    var s = ar(e);
    return s ? Mt(s, t, r, i) : [];
}
function Pa(e, t, r) {
    if (r === void 0) { r = !0; }
    return Array.isArray(t) || (t = [t]), pe(iu("id", e), t, r);
}
function St(e, t, r, i) {
    if (r === void 0) { r = !0; }
    if (i === void 0) { i = 1 / 0; }
    return Mt(ge.tag_name(e), t, r, i);
}
function Ba(e, t, r, i) {
    if (r === void 0) { r = !0; }
    if (i === void 0) { i = 1 / 0; }
    return Mt(iu("class", e), t, r, i);
}
function Fa(e, t, r, i) {
    if (r === void 0) { r = !0; }
    if (i === void 0) { i = 1 / 0; }
    return Mt(ge.tag_type(e), t, r, i);
}
function ja(e) { var t = e.length; for (; --t >= 0;) {
    var r = e[t];
    if (t > 0 && e.lastIndexOf(r, t - 1) >= 0) {
        e.splice(t, 1);
        continue;
    }
    for (var i = r.parent; i; i = i.parent)
        if (e.includes(i)) {
            e.splice(t, 1);
            break;
        }
} return e; }
var at;
(function (e) { e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.PRECEDING = 2] = "PRECEDING", e[e.FOLLOWING = 4] = "FOLLOWING", e[e.CONTAINS = 8] = "CONTAINS", e[e.CONTAINED_BY = 16] = "CONTAINED_BY"; })(at || (at = {}));
function ir(e, t) { var r = [], i = []; if (e === t)
    return 0; var s = Z(e) ? e : e.parent; for (; s;)
    r.unshift(s), s = s.parent; for (s = Z(t) ? t : t.parent; s;)
    i.unshift(s), s = s.parent; var o = Math.min(r.length, i.length), g = 0; for (; g < o && r[g] === i[g];)
    g++; if (g === 0)
    return at.DISCONNECTED; var v = r[g - 1], y = v.children, S = r[g], T = i[g]; return y.indexOf(S) > y.indexOf(T) ? v === t ? at.FOLLOWING | at.CONTAINED_BY : at.FOLLOWING : v === e ? at.PRECEDING | at.CONTAINS : at.PRECEDING; }
function nu(e) { return e = e.filter(function (t, r, i) { return !i.includes(t, r + 1); }), e.sort(function (t, r) { var i = ir(t, r); return i & at.PRECEDING ? -1 : i & at.FOLLOWING ? 1 : 0; }), e; }
function cu(e) { var t = be(Ga, e); return t ? t.name === "feed" ? Va(t) : za(t) : null; }
function Va(e) { var t; var r = e.children, i = { type: "atom", items: St("entry", r).map(function (g) { var v; var y = g.children, S = { media: nr(y) }; Y(S, "id", "id", y), Y(S, "title", "title", y); var T = (v = be("link", y)) === null || v === void 0 ? void 0 : v.attribs.href; T && (S.link = T); var L = mt("summary", y) || mt("content", y); L && (S.description = L); var q = mt("updated", y); return q && (S.pubDate = new Date(q)), S; }) }; Y(i, "id", "id", r), Y(i, "title", "title", r); var s = (t = be("link", r)) === null || t === void 0 ? void 0 : t.attribs.href; s && (i.link = s), Y(i, "description", "subtitle", r); var o = mt("updated", r); return o && (i.updated = new Date(o)), Y(i, "author", "email", r, !0), i; }
function za(e) { var t, r; var i = (r = (t = be("channel", e.children)) === null || t === void 0 ? void 0 : t.children) !== null && r !== void 0 ? r : [], s = { type: e.name.substr(0, 3), id: "", items: St("item", e.children).map(function (g) { var v = g.children, y = { media: nr(v) }; Y(y, "id", "guid", v), Y(y, "title", "title", v), Y(y, "link", "link", v), Y(y, "description", "description", v); var S = mt("pubDate", v) || mt("dc:date", v); return S && (y.pubDate = new Date(S)), y; }) }; Y(s, "title", "title", i), Y(s, "link", "link", i), Y(s, "description", "description", i); var o = mt("lastBuildDate", i); return o && (s.updated = new Date(o)), Y(s, "author", "managingEditor", i, !0), s; }
var Ha = ["url", "type", "lang"], Ra = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function nr(e) { return St("media:content", e).map(function (t) {
    var e_4, _b, e_5, _c;
    var r = t.attribs, i = { medium: r.medium, isDefault: !!r.isDefault };
    try {
        for (var Ha_1 = __values(Ha), Ha_1_1 = Ha_1.next(); !Ha_1_1.done; Ha_1_1 = Ha_1.next()) {
            var s = Ha_1_1.value;
            r[s] && (i[s] = r[s]);
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
            var s = Ra_1_1.value;
            r[s] && (i[s] = parseInt(r[s], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (Ra_1_1 && !Ra_1_1.done && (_c = Ra_1.return)) _c.call(Ra_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return r.expression && (i.expression = r.expression), i;
}); }
function be(e, t) { return St(e, t, !0, 1)[0]; }
function mt(e, t, r) {
    if (r === void 0) { r = !1; }
    return bt(St(e, t, r, 1)).trim();
}
function Y(e, t, r, i, s) {
    if (s === void 0) { s = !1; }
    var o = mt(r, i, s);
    o && (e[t] = o);
}
function Ga(e) { return e === "rss" || e === "feed" || e === "rdf:RDF"; }
function cr(e, t) { var r = new Ot(void 0, t); return new Vt(r, t).end(e), r.root; }
var _;
(function (e) { e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"; })(_ || (_ = {}));
var H;
(function (e) { e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"; })(H || (H = {}));
var sr = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, $a = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, Ja = new Map([[126, H.Element], [94, H.Start], [36, H.End], [42, H.Any], [33, H.Not], [124, H.Hyphen]]), Wa = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function At(e) { switch (e.type) {
    case _.Adjacent:
    case _.Child:
    case _.Descendant:
    case _.Parent:
    case _.Sibling:
    case _.ColumnCombinator: return !0;
    default: return !1;
} }
var Xa = new Set(["contains", "icontains"]);
function Ka(e, t, r) { var i = parseInt(t, 16) - 65536; return i !== i || r ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, i & 1023 | 56320); }
function Kt(e) { return e.replace($a, Ka); }
function su(e) { return e === 39 || e === 34; }
function or(e) { return e === 32 || e === 9 || e === 10 || e === 12 || e === 13; }
function xt(e) { var t = [], r = fr(t, "".concat(e), 0); if (r < e.length)
    throw new Error("Unmatched selector: ".concat(e.slice(r))); return t; }
function fr(e, t, r) { var i = []; function s(q) { var N = t.slice(r + q).match(sr); if (!N)
    throw new Error("Expected name, found ".concat(t.slice(r))); var _b = __read(N, 1), O = _b[0]; return r += q + O.length, Kt(O); } function o(q) { for (r += q; r < t.length && or(t.charCodeAt(r));)
    r++; } function g() { r += 1; var q = r, N = 1; for (; N > 0 && r < t.length; r++)
    t.charCodeAt(r) === 40 && !v(r) ? N++ : t.charCodeAt(r) === 41 && !v(r) && N--; if (N)
    throw new Error("Parenthesis not matched"); return Kt(t.slice(q, r - 1)); } function v(q) { var N = 0; for (; t.charCodeAt(--q) === 92;)
    N++; return (N & 1) === 1; } function y() { if (i.length > 0 && At(i[i.length - 1]))
    throw new Error("Did not expect successive traversals."); } function S(q) { if (i.length > 0 && i[i.length - 1].type === _.Descendant) {
    i[i.length - 1].type = q;
    return;
} y(), i.push({ type: q }); } function T(q, N) { i.push({ type: _.Attribute, name: q, action: N, value: s(1), namespace: null, ignoreCase: "quirks" }); } function L() { if (i.length && i[i.length - 1].type === _.Descendant && i.pop(), i.length === 0)
    throw new Error("Empty sub-selector"); e.push(i); } if (o(0), t.length === r)
    return r; t: for (; r < t.length;) {
    var q = t.charCodeAt(r);
    switch (q) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (i.length === 0 || i[0].type !== _.Descendant) && (y(), i.push({ type: _.Descendant })), o(1);
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
            t.charCodeAt(r) === 124 ? N = s(1) : t.startsWith("*|", r) ? (O = "*", N = s(2)) : (N = s(0), t.charCodeAt(r) === 124 && t.charCodeAt(r + 1) !== 61 && (O = N, N = s(1))), o(0);
            var M = H.Exists, Q = Ja.get(t.charCodeAt(r));
            if (Q) {
                if (M = Q, t.charCodeAt(r + 1) !== 61)
                    throw new Error("Expected `=`");
                o(2);
            }
            else
                t.charCodeAt(r) === 61 && (M = H.Equals, o(1));
            var et = "", ft = null;
            if (M !== "exists") {
                if (su(t.charCodeAt(r))) {
                    var c = t.charCodeAt(r), d = r + 1;
                    for (; d < t.length && (t.charCodeAt(d) !== c || v(d));)
                        d += 1;
                    if (t.charCodeAt(d) !== c)
                        throw new Error("Attribute value didn't end");
                    et = Kt(t.slice(r + 1, d)), r = d + 1;
                }
                else {
                    var c = r;
                    for (; r < t.length && (!or(t.charCodeAt(r)) && t.charCodeAt(r) !== 93 || v(r));)
                        r += 1;
                    et = Kt(t.slice(c, r));
                }
                o(0);
                var k = t.charCodeAt(r) | 32;
                k === 115 ? (ft = !1, o(1)) : k === 105 && (ft = !0, o(1));
            }
            if (t.charCodeAt(r) !== 93)
                throw new Error("Attribute selector didn't terminate");
            r += 1;
            var R = { type: _.Attribute, name: N, action: M, value: et, namespace: O, ignoreCase: ft };
            i.push(R);
            break;
        }
        case 58: {
            if (t.charCodeAt(r + 1) === 58) {
                i.push({ type: _.PseudoElement, name: s(2).toLowerCase(), data: t.charCodeAt(r) === 40 ? g() : null });
                continue;
            }
            var N = s(1).toLowerCase(), O = null;
            if (t.charCodeAt(r) === 40)
                if (Wa.has(N)) {
                    if (su(t.charCodeAt(r + 1)))
                        throw new Error("Pseudo-selector ".concat(N, " cannot be quoted"));
                    if (O = [], r = fr(O, t, r + 1), t.charCodeAt(r) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(N, " (").concat(t, ")"));
                    r += 1;
                }
                else {
                    if (O = g(), Xa.has(N)) {
                        var M = O.charCodeAt(0);
                        M === O.charCodeAt(O.length - 1) && su(M) && (O = O.slice(1, -1));
                    }
                    O = Kt(O);
                }
            i.push({ type: _.Pseudo, name: N, data: O });
            break;
        }
        case 44: {
            L(), i = [], o(1);
            break;
        }
        default: {
            if (t.startsWith("/*", r)) {
                var M = t.indexOf("*/", r + 2);
                if (M < 0)
                    throw new Error("Comment was not terminated");
                r = M + 2, i.length === 0 && o(0);
                break;
            }
            var N = null, O = void 0;
            if (q === 42)
                r += 1, O = "*";
            else if (q === 124) {
                if (O = "", t.charCodeAt(r + 1) === 124) {
                    S(_.ColumnCombinator), o(2);
                    break;
                }
            }
            else if (sr.test(t.slice(r)))
                O = s(0);
            else
                break t;
            t.charCodeAt(r) === 124 && t.charCodeAt(r + 1) !== 124 && (N = O, t.charCodeAt(r + 1) === 42 ? (O = "*", r += 2) : O = s(1)), i.push(O === "*" ? { type: _.Universal, namespace: N } : { type: _.Tag, name: O, namespace: N });
        }
    }
} return L(), r; }
var vu = yt(vt(), 1);
var ht = yt(vt(), 1);
var dr = new Map([[_.Universal, 50], [_.Tag, 30], [_.Attribute, 1], [_.Pseudo, 0]]);
function Zt(e) { return !dr.has(e.type); }
var Za = new Map([[H.Exists, 10], [H.Equals, 8], [H.Not, 7], [H.Start, 6], [H.End, 6], [H.Any, 5]]);
function ou(e) { var t = e.map(hr); for (var r = 1; r < e.length; r++) {
    var i = t[r];
    if (!(i < 0))
        for (var s = r - 1; s >= 0 && i < t[s]; s--) {
            var o = e[s + 1];
            e[s + 1] = e[s], e[s] = o, t[s + 1] = t[s], t[s] = i;
        }
} }
function hr(e) { var t, r; var i = (t = dr.get(e.type)) !== null && t !== void 0 ? t : -1; return e.type === _.Attribute ? (i = (r = Za.get(e.action)) !== null && r !== void 0 ? r : 4, e.action === H.Equals && e.name === "id" && (i = 9), e.ignoreCase && (i >>= 1)) : e.type === _.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? i = 0 : Array.isArray(e.data) ? (i = Math.min.apply(Math, __spreadArray([], __read(e.data.map(function (s) { return Math.min.apply(Math, __spreadArray([], __read(s.map(hr)), false)); })), false)), i < 0 && (i = 0)) : i = 2 : i = 3), i; }
var Qt = yt(vt(), 1), Qa = /[-[\]{}()*+?.,\\^$|#\s]/g;
function pr(e) { return e.replace(Qa, "\\$&"); }
var Ya = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function kt(e, t) { return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!t.quirksMode : !t.xmlMode && Ya.has(e.name); }
var gr = { equals: function (e, t, r) { var i = r.adapter, s = t.name, o = t.value; return kt(t, r) ? (o = o.toLowerCase(), function (g) { var v = i.getAttributeValue(g, s); return v != null && v.length === o.length && v.toLowerCase() === o && e(g); }) : function (g) { return i.getAttributeValue(g, s) === o && e(g); }; }, hyphen: function (e, t, r) { var i = r.adapter, s = t.name, o = t.value, g = o.length; return kt(t, r) ? (o = o.toLowerCase(), function (y) { var S = i.getAttributeValue(y, s); return S != null && (S.length === g || S.charAt(g) === "-") && S.substr(0, g).toLowerCase() === o && e(y); }) : function (y) { var S = i.getAttributeValue(y, s); return S != null && (S.length === g || S.charAt(g) === "-") && S.substr(0, g) === o && e(y); }; }, element: function (e, t, r) { var i = r.adapter, s = t.name, o = t.value; if (/\s/.test(o))
        return Qt.default.falseFunc; var g = new RegExp("(?:^|\\s)".concat(pr(o), "(?:$|\\s)"), kt(t, r) ? "i" : ""); return function (y) { var S = i.getAttributeValue(y, s); return S != null && S.length >= o.length && g.test(S) && e(y); }; }, exists: function (e, _b, _c) {
        var t = _b.name;
        var r = _c.adapter;
        return function (i) { return r.hasAttrib(i, t) && e(i); };
    }, start: function (e, t, r) { var i = r.adapter, s = t.name, o = t.value, g = o.length; return g === 0 ? Qt.default.falseFunc : kt(t, r) ? (o = o.toLowerCase(), function (v) { var y = i.getAttributeValue(v, s); return y != null && y.length >= g && y.substr(0, g).toLowerCase() === o && e(v); }) : function (v) { var y; return !!(!((y = i.getAttributeValue(v, s)) === null || y === void 0) && y.startsWith(o)) && e(v); }; }, end: function (e, t, r) { var i = r.adapter, s = t.name, o = t.value, g = -o.length; return g === 0 ? Qt.default.falseFunc : kt(t, r) ? (o = o.toLowerCase(), function (v) { var y; return ((y = i.getAttributeValue(v, s)) === null || y === void 0 ? void 0 : y.substr(g).toLowerCase()) === o && e(v); }) : function (v) { var y; return !!(!((y = i.getAttributeValue(v, s)) === null || y === void 0) && y.endsWith(o)) && e(v); }; }, any: function (e, t, r) { var i = r.adapter, s = t.name, o = t.value; if (o === "")
        return Qt.default.falseFunc; if (kt(t, r)) {
        var g_1 = new RegExp(pr(o), "i");
        return function (y) { var S = i.getAttributeValue(y, s); return S != null && S.length >= o.length && g_1.test(S) && e(y); };
    } return function (g) { var v; return !!(!((v = i.getAttributeValue(g, s)) === null || v === void 0) && v.includes(o)) && e(g); }; }, not: function (e, t, r) { var i = r.adapter, s = t.name, o = t.value; return o === "" ? function (g) { return !!i.getAttributeValue(g, s) && e(g); } : kt(t, r) ? (o = o.toLowerCase(), function (g) { var v = i.getAttributeValue(g, s); return (v == null || v.length !== o.length || v.toLowerCase() !== o) && e(g); }) : function (g) { return i.getAttributeValue(g, s) !== o && e(g); }; } };
var ti = new Set([9, 10, 12, 13, 32]), br = 48, ei = 57;
function mr(e) { if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0]; if (e === "odd")
    return [2, 1]; var t = 0, r = 0, i = o(), s = g(); if (t < e.length && e.charAt(t) === "n" && (t++, r = i * (s != null ? s : 1), v(), t < e.length ? (i = o(), v(), s = g()) : i = s = 0), s === null || t < e.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(e, "')")); return [r, i * s]; function o() { return e.charAt(t) === "-" ? (t++, -1) : (e.charAt(t) === "+" && t++, 1); } function g() { var y = t, S = 0; for (; t < e.length && e.charCodeAt(t) >= br && e.charCodeAt(t) <= ei;)
    S = S * 10 + (e.charCodeAt(t) - br), t++; return t === y ? null : S; } function v() { for (; t < e.length && ti.has(e.charCodeAt(t));)
    t++; } }
var fu = yt(vt(), 1);
function xr(e) { var t = e[0], r = e[1] - 1; if (r < 0 && t <= 0)
    return fu.default.falseFunc; if (t === -1)
    return function (o) { return o <= r; }; if (t === 0)
    return function (o) { return o === r; }; if (t === 1)
    return r < 0 ? fu.default.trueFunc : function (o) { return o >= r; }; var i = Math.abs(t), s = (r % i + i) % i; return t > 1 ? function (o) { return o >= r && o % i === s; } : function (o) { return o <= r && o % i === s; }; }
function Pt(e) { return xr(mr(e)); }
var tt = yt(vt(), 1);
function me(e, t) { return function (r) { var i = t.getParent(r); return i != null && t.isTag(i) && e(r); }; }
var Bt = { contains: function (e, t, _b) {
        var r = _b.adapter;
        return function (s) { return e(s) && r.getText(s).includes(t); };
    }, icontains: function (e, t, _b) {
        var r = _b.adapter;
        var i = t.toLowerCase();
        return function (o) { return e(o) && r.getText(o).toLowerCase().includes(i); };
    }, "nth-child": function (e, t, _b) {
        var r = _b.adapter, i = _b.equals;
        var s = Pt(t);
        return s === tt.default.falseFunc ? tt.default.falseFunc : s === tt.default.trueFunc ? me(e, r) : function (g) { var v = r.getSiblings(g), y = 0; for (var S = 0; S < v.length && !i(g, v[S]); S++)
            r.isTag(v[S]) && y++; return s(y) && e(g); };
    }, "nth-last-child": function (e, t, _b) {
        var r = _b.adapter, i = _b.equals;
        var s = Pt(t);
        return s === tt.default.falseFunc ? tt.default.falseFunc : s === tt.default.trueFunc ? me(e, r) : function (g) { var v = r.getSiblings(g), y = 0; for (var S = v.length - 1; S >= 0 && !i(g, v[S]); S--)
            r.isTag(v[S]) && y++; return s(y) && e(g); };
    }, "nth-of-type": function (e, t, _b) {
        var r = _b.adapter, i = _b.equals;
        var s = Pt(t);
        return s === tt.default.falseFunc ? tt.default.falseFunc : s === tt.default.trueFunc ? me(e, r) : function (g) { var v = r.getSiblings(g), y = 0; for (var S = 0; S < v.length; S++) {
            var T = v[S];
            if (i(g, T))
                break;
            r.isTag(T) && r.getName(T) === r.getName(g) && y++;
        } return s(y) && e(g); };
    }, "nth-last-of-type": function (e, t, _b) {
        var r = _b.adapter, i = _b.equals;
        var s = Pt(t);
        return s === tt.default.falseFunc ? tt.default.falseFunc : s === tt.default.trueFunc ? me(e, r) : function (g) { var v = r.getSiblings(g), y = 0; for (var S = v.length - 1; S >= 0; S--) {
            var T = v[S];
            if (i(g, T))
                break;
            r.isTag(T) && r.getName(T) === r.getName(g) && y++;
        } return s(y) && e(g); };
    }, root: function (e, t, _b) {
        var r = _b.adapter;
        return function (i) { var s = r.getParent(i); return (s == null || !r.isTag(s)) && e(i); };
    }, scope: function (e, t, r, i) { var s = r.equals; return !i || i.length === 0 ? Bt.root(e, t, r) : i.length === 1 ? function (o) { return s(i[0], o) && e(o); } : function (o) { return i.includes(o) && e(o); }; }, hover: lu("isHovered"), visited: lu("isVisited"), active: lu("isActive") };
function lu(e) { return function (r, i, _b) {
    var s = _b.adapter;
    var o = s[e];
    return typeof o != "function" ? tt.default.falseFunc : function (v) { return o(v) && r(v); };
}; }
var Yt = { empty: function (e, _b) {
        var t = _b.adapter;
        return !t.getChildren(e).some(function (r) { return t.isTag(r) || t.getText(r) !== ""; });
    }, "first-child": function (e, _b) {
        var t = _b.adapter, r = _b.equals;
        if (t.prevElementSibling)
            return t.prevElementSibling(e) == null;
        var i = t.getSiblings(e).find(function (s) { return t.isTag(s); });
        return i != null && r(e, i);
    }, "last-child": function (e, _b) {
        var t = _b.adapter, r = _b.equals;
        var i = t.getSiblings(e);
        for (var s = i.length - 1; s >= 0; s--) {
            if (r(e, i[s]))
                return !0;
            if (t.isTag(i[s]))
                break;
        }
        return !1;
    }, "first-of-type": function (e, _b) {
        var t = _b.adapter, r = _b.equals;
        var i = t.getSiblings(e), s = t.getName(e);
        for (var o = 0; o < i.length; o++) {
            var g = i[o];
            if (r(e, g))
                return !0;
            if (t.isTag(g) && t.getName(g) === s)
                break;
        }
        return !1;
    }, "last-of-type": function (e, _b) {
        var t = _b.adapter, r = _b.equals;
        var i = t.getSiblings(e), s = t.getName(e);
        for (var o = i.length - 1; o >= 0; o--) {
            var g = i[o];
            if (r(e, g))
                return !0;
            if (t.isTag(g) && t.getName(g) === s)
                break;
        }
        return !1;
    }, "only-of-type": function (e, _b) {
        var t = _b.adapter, r = _b.equals;
        var i = t.getName(e);
        return t.getSiblings(e).every(function (s) { return r(e, s) || !t.isTag(s) || t.getName(s) !== i; });
    }, "only-child": function (e, _b) {
        var t = _b.adapter, r = _b.equals;
        return t.getSiblings(e).every(function (i) { return r(e, i) || !t.isTag(i); });
    } };
function du(e, t, r, i) { if (r === null) {
    if (e.length > i)
        throw new Error("Pseudo-class :".concat(t, " requires an argument"));
}
else if (e.length === i)
    throw new Error("Pseudo-class :".concat(t, " doesn't have any arguments")); }
var xe = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var it = yt(vt(), 1);
var gu = {};
function bu(e, t) { return e === it.default.falseFunc ? it.default.falseFunc : function (r) { return t.isTag(r) && e(r); }; }
function mu(e, t) { var r = t.getSiblings(e); if (r.length <= 1)
    return []; var i = r.indexOf(e); return i < 0 || i === r.length - 1 ? [] : r.slice(i + 1).filter(t.isTag); }
function pu(e) { return { xmlMode: !!e.xmlMode, lowerCaseAttributeNames: !!e.lowerCaseAttributeNames, lowerCaseTags: !!e.lowerCaseTags, quirksMode: !!e.quirksMode, cacheResults: !!e.cacheResults, pseudos: e.pseudos, adapter: e.adapter, equals: e.equals }; }
var hu = function (e, t, r, i, s) { var o = s(t, pu(r), i); return o === it.default.trueFunc ? e : o === it.default.falseFunc ? it.default.falseFunc : function (g) { return o(g) && e(g); }; }, ve = { is: hu, matches: hu, where: hu, not: function (e, t, r, i, s) { var o = s(t, pu(r), i); return o === it.default.falseFunc ? e : o === it.default.trueFunc ? it.default.falseFunc : function (g) { return !o(g) && e(g); }; }, has: function (e, t, r, i, s) { var o = r.adapter, g = pu(r); g.relativeSelector = !0; var v = t.some(function (T) { return T.some(Zt); }) ? [gu] : void 0, y = s(t, g, v); if (y === it.default.falseFunc)
        return it.default.falseFunc; var S = bu(y, o); if (v && y !== it.default.trueFunc) {
        var _b = y.shouldTestNextSiblings, T_1 = _b === void 0 ? !1 : _b;
        return function (L) { if (!e(L))
            return !1; v[0] = L; var q = o.getChildren(L), N = T_1 ? __spreadArray(__spreadArray([], __read(q), false), __read(mu(L, o)), false) : q; return o.existsOne(S, N); };
    } return function (T) { return e(T) && o.existsOne(S, o.getChildren(T)); }; } };
function vr(e, t, r, i, s) { var o; var g = t.name, v = t.data; if (Array.isArray(v)) {
    if (!(g in ve))
        throw new Error("Unknown pseudo-class :".concat(g, "(").concat(v, ")"));
    return ve[g](e, v, r, i, s);
} var y = (o = r.pseudos) === null || o === void 0 ? void 0 : o[g], S = typeof y == "string" ? y : xe[g]; if (typeof S == "string") {
    if (v != null)
        throw new Error("Pseudo ".concat(g, " doesn't have any arguments"));
    var T = xt(S);
    return ve.is(e, T, r, i, s);
} if (typeof y == "function")
    return du(y, g, v, 1), function (T) { return y(T, v) && e(T); }; if (g in Bt)
    return Bt[g](e, v, r, i); if (g in Yt) {
    var T_2 = Yt[g];
    return du(T_2, g, v, 2), function (L) { return T_2(L, r, v) && e(L); };
} throw new Error("Unknown pseudo-class :".concat(g)); }
function xu(e, t) { var r = t.getParent(e); return r && t.isTag(r) ? r : null; }
function wr(e, t, r, i, s) { var o = r.adapter, g = r.equals; switch (t.type) {
    case _.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case _.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case _.Attribute: {
        if (t.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!r.xmlMode || r.lowerCaseAttributeNames) && (t.name = t.name.toLowerCase()), gr[t.action](e, t, r);
    }
    case _.Pseudo: return vr(e, t, r, i, s);
    case _.Tag: {
        if (t.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var v_1 = t.name;
        return (!r.xmlMode || r.lowerCaseTags) && (v_1 = v_1.toLowerCase()), function (S) { return o.getName(S) === v_1 && e(S); };
    }
    case _.Descendant: {
        if (r.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (S) { var T = S; for (; T = xu(T, o);)
                if (e(T))
                    return !0; return !1; };
        var v_2 = new WeakSet;
        return function (S) { var T = S; for (; T = xu(T, o);)
            if (!v_2.has(T)) {
                if (o.isTag(T) && e(T))
                    return !0;
                v_2.add(T);
            } return !1; };
    }
    case "_flexibleDescendant": return function (y) { var S = y; do
        if (e(S))
            return !0;
    while (S = xu(S, o)); return !1; };
    case _.Parent: return function (y) { return o.getChildren(y).some(function (S) { return o.isTag(S) && e(S); }); };
    case _.Child: return function (y) { var S = o.getParent(y); return S != null && o.isTag(S) && e(S); };
    case _.Sibling: return function (y) { var S = o.getSiblings(y); for (var T = 0; T < S.length; T++) {
        var L = S[T];
        if (g(y, L))
            break;
        if (o.isTag(L) && e(L))
            return !0;
    } return !1; };
    case _.Adjacent: return o.prevElementSibling ? function (y) { var S = o.prevElementSibling(y); return S != null && e(S); } : function (y) { var S = o.getSiblings(y), T; for (var L = 0; L < S.length; L++) {
        var q = S[L];
        if (g(y, q))
            break;
        o.isTag(q) && (T = q);
    } return !!T && e(T); };
    case _.Universal: {
        if (t.namespace != null && t.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return e;
    }
} }
function yr(e, t, r) { var i = we(e, t, r); return bu(i, t.adapter); }
function we(e, t, r) { var i = typeof e == "string" ? xt(e) : e; return ye(i, t, r); }
function Sr(e) { return e.type === _.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(function (t) { return t.some(Sr); })); }
var ui = { type: _.Descendant }, ri = { type: "_flexibleDescendant" }, ai = { type: _.Pseudo, name: "scope", data: null };
function ii(e, _b, r) {
    var e_6, _c;
    var t = _b.adapter;
    var i = !!(r != null && r.every(function (s) { var o = t.isTag(s) && t.getParent(s); return s === gu || o && t.isTag(o); }));
    try {
        for (var e_7 = __values(e), e_7_1 = e_7.next(); !e_7_1.done; e_7_1 = e_7.next()) {
            var s = e_7_1.value;
            if (!(s.length > 0 && Zt(s[0]) && s[0].type !== _.Descendant))
                if (i && !s.some(Sr))
                    s.unshift(ui);
                else
                    continue;
            s.unshift(ai);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (e_7_1 && !e_7_1.done && (_c = e_7.return)) _c.call(e_7);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
function ye(e, t, r) { var i; e.forEach(ou), r = (i = t.context) !== null && i !== void 0 ? i : r; var s = Array.isArray(r), o = r && (Array.isArray(r) ? r : [r]); if (t.relativeSelector !== !1)
    ii(e, t, o);
else if (e.some(function (y) { return y.length > 0 && Zt(y[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var g = !1, v = e.map(function (y) { if (y.length >= 2) {
    var _b = __read(y, 2), S = _b[0], T = _b[1];
    S.type !== _.Pseudo || S.name !== "scope" || (s && T.type === _.Descendant ? y[1] = ri : (T.type === _.Adjacent || T.type === _.Sibling) && (g = !0));
} return ni(y, t, o); }).reduce(ci, ht.default.falseFunc); return v.shouldTestNextSiblings = g, v; }
function ni(e, t, r) { var i; return e.reduce(function (s, o) { return s === ht.default.falseFunc ? ht.default.falseFunc : wr(s, o, t, r, ye); }, (i = t.rootFunc) !== null && i !== void 0 ? i : ht.default.trueFunc); }
function ci(e, t) { return t === ht.default.falseFunc || e === ht.default.trueFunc ? e : e === ht.default.falseFunc || t === ht.default.trueFunc ? t : function (i) { return e(i) || t(i); }; }
var Ar = function (e, t) { return e === t; }, si = { adapter: st, equals: Ar };
function kr(e) { var t, r, i, s; var o = e != null ? e : si; return (t = o.adapter) !== null && t !== void 0 || (o.adapter = st), (r = o.equals) !== null && r !== void 0 || (o.equals = (s = (i = o.adapter) === null || i === void 0 ? void 0 : i.equals) !== null && s !== void 0 ? s : Ar), o; }
function wu(e) { return function (r, i, s) { var o = kr(i); return e(r, o, s); }; }
var L0 = wu(yr), O0 = wu(we), Se = wu(ye);
function Er(e) { return function (r, i, s) { var o = kr(s); typeof r != "function" && (r = we(r, o, i)); var g = Ae(i, o.adapter, r.shouldTestNextSiblings); return e(r, g, o); }; }
function Ae(e, t, r) {
    if (r === void 0) { r = !1; }
    return r && (e = oi(e, t)), Array.isArray(e) ? t.removeSubsets(e) : t.getChildren(e);
}
function oi(e, t) { var r = Array.isArray(e) ? e.slice(0) : [e], i = r.length; for (var s = 0; s < i; s++) {
    var o = mu(r[s], t);
    r.push.apply(r, __spreadArray([], __read(o), false));
} return r; }
var U0 = Er(function (e, t, r) { return e === vu.default.falseFunc || !t || t.length === 0 ? [] : r.adapter.findAll(e, t); }), M0 = Er(function (e, t, r) { return e === vu.default.falseFunc || !t || t.length === 0 ? null : r.adapter.findOne(e, t); });
var Ee = yt(vt(), 1);
var fi = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function Ft(e) { return e.type !== "pseudo" ? !1 : fi.has(e.name) ? !0 : e.name === "not" && Array.isArray(e.data) ? e.data.some(function (t) { return t.some(Ft); }) : !1; }
function Tr(e, t, r) { var i = t != null ? parseInt(t, 10) : NaN; switch (e) {
    case "first": return 1;
    case "nth":
    case "eq": return isFinite(i) ? i >= 0 ? i + 1 : 1 / 0 : 0;
    case "lt": return isFinite(i) ? i >= 0 ? Math.min(i, r) : 1 / 0 : 0;
    case "gt": return isFinite(i) ? 1 / 0 : 0;
    case "odd": return 2 * r;
    case "even": return 2 * r - 1;
    case "last":
    case "not": return 1 / 0;
} }
function Cr(e) { for (; e.parent;)
    e = e.parent; return e; }
function ke(e) {
    var e_8, _b;
    var t = [], r = [];
    try {
        for (var e_9 = __values(e), e_9_1 = e_9.next(); !e_9_1.done; e_9_1 = e_9.next()) {
            var i = e_9_1.value;
            i.some(Ft) ? t.push(i) : r.push(i);
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (e_9_1 && !e_9_1.done && (_b = e_9.return)) _b.call(e_9);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return [r, t];
}
var li = { type: _.Universal, namespace: null }, di = { type: _.Pseudo, name: "scope", data: null };
function Au(e, t, r) {
    if (r === void 0) { r = {}; }
    return hi([e], t, r);
}
function hi(e, t, r) {
    if (r === void 0) { r = {}; }
    if (typeof t == "function")
        return e.some(t);
    var _b = __read(ke(xt(t)), 2), i = _b[0], s = _b[1];
    return i.length > 0 && e.some(Se(i, r)) || s.some(function (o) { return qr(o, e, r).length > 0; });
}
function pi(e, t, r, i) { var s = typeof r == "string" ? parseInt(r, 10) : NaN; switch (e) {
    case "first":
    case "lt": return t;
    case "last": return t.length > 0 ? [t[t.length - 1]] : t;
    case "nth":
    case "eq": return isFinite(s) && Math.abs(s) < t.length ? [s < 0 ? t[t.length + s] : t[s]] : [];
    case "gt": return isFinite(s) ? t.slice(s + 1) : [];
    case "even": return t.filter(function (o, g) { return g % 2 === 0; });
    case "odd": return t.filter(function (o, g) { return g % 2 === 1; });
    case "not": {
        var o_1 = new Set(gi(r, t, i));
        return t.filter(function (g) { return !o_1.has(g); });
    }
} }
function gi(e, t, r) { if (t.length === 0)
    return []; var _b = __read(ke(e), 2), i = _b[0], s = _b[1], o; if (i.length) {
    var g = Su(t, i, r);
    if (s.length === 0)
        return g;
    g.length && (o = new Set(g));
} for (var g = 0; g < s.length && (o == null ? void 0 : o.size) !== t.length; g++) {
    var v = s[g];
    if ((o ? t.filter(function (T) { return P(T) && !o.has(T); }) : t).length === 0)
        break;
    var S = qr(v, t, r);
    if (S.length)
        if (o)
            S.forEach(function (T) { return o.add(T); });
        else {
            if (g === s.length - 1)
                return S;
            o = new Set(S);
        }
} return typeof o != "undefined" ? o.size === t.length ? t : t.filter(function (g) { return o.has(g); }) : []; }
function qr(e, t, r) { var i; if (e.some(At)) {
    var s = (i = r.root) !== null && i !== void 0 ? i : Cr(t[0]), o = wt(nt({}, r), { context: t, relativeSelector: !1 });
    return e.push(di), Te(s, e, o, !0, t.length);
} return Te(t, e, r, !1, t.length); }
function ku(e, t, r, i) {
    if (r === void 0) { r = {}; }
    if (i === void 0) { i = 1 / 0; }
    if (typeof e == "function")
        return Nr(t, e);
    var _b = __read(ke(xt(e)), 2), s = _b[0], o = _b[1], g = o.map(function (v) { return Te(t, v, r, !0, i); });
    return s.length && g.push(yu(t, s, r, i)), g.length === 0 ? [] : g.length === 1 ? g[0] : nu(g.reduce(function (v, y) { return __spreadArray(__spreadArray([], __read(v), false), __read(y), false); }));
}
function Te(e, t, r, i, s) { var o = t.findIndex(Ft), g = t.slice(0, o), v = t[o], y = t.length - 1 === o ? s : 1 / 0, S = Tr(v.name, v.data, y); if (S === 0)
    return []; var L = (g.length === 0 && !Array.isArray(e) ? le(e).filter(P) : g.length === 0 ? (Array.isArray(e) ? e : [e]).filter(P) : i || g.some(At) ? yu(e, [g], r, S) : Su(e, [g], r)).slice(0, S), q = pi(v.name, L, v.data, r); if (q.length === 0 || t.length === o + 1)
    return q; var N = t.slice(o + 1), O = N.some(At); if (O) {
    if (At(N[0])) {
        var M = N[0].type;
        (M === _.Sibling || M === _.Adjacent) && (q = Ae(q, st, !0)), N.unshift(li);
    }
    r = wt(nt({}, r), { relativeSelector: !1, rootFunc: function (M) { return q.includes(M); } });
}
else
    r.rootFunc && r.rootFunc !== Ee.trueFunc && (r = wt(nt({}, r), { rootFunc: Ee.trueFunc })); return N.some(Ft) ? Te(q, N, r, !1, s) : O ? yu(q, [N], r, s) : Su(q, [N], r); }
function yu(e, t, r, i) { var s = Se(t, r, e); return Nr(e, s, i); }
function Nr(e, t, r) {
    if (r === void 0) { r = 1 / 0; }
    var i = Ae(e, st, t.shouldTestNextSiblings);
    return he(function (s) { return P(s) && t(s); }, i, !0, r);
}
function Su(e, t, r) { var i = (Array.isArray(e) ? e : [e]).filter(P); if (i.length === 0)
    return i; var s = Se(t, r); return s === Ee.trueFunc ? i : i.filter(s); }
function _r(e) { var t = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(e) || []; return { scheme: t[1], auth: t[2], path: t[3] || "", query: t[4], frag: t[5] }; }
function Eu(e) { var t = [], r = e.split("/"); for (var i = 0; i < r.length; i++) {
    var s = r[i];
    s === ".." ? (t.length > 1 && t.pop(), i === r.length - 1 && t.push("")) : s === "." ? i === r.length - 1 && t.push("") : t.push(s);
} return t.join("/"); }
function qe(e, t) { t = t == null ? "" : String(t).trim(); var r = _r(t); if (r.scheme || !e)
    return t; var i = _r(String(e)); if (!i.scheme)
    return t; var s = i.auth, o, g; if (r.auth !== void 0)
    s = r.auth, o = Eu(r.path), g = r.query;
else if (!r.path)
    o = i.path, g = r.query !== void 0 ? r.query : i.query;
else {
    if (r.path.charAt(0) === "/")
        o = Eu(r.path);
    else {
        var v = s !== void 0 && !i.path ? "/" : i.path.slice(0, i.path.lastIndexOf("/") + 1);
        o = Eu(v + r.path);
    }
    g = r.query;
} return s !== void 0 && o.charAt(0) !== "/" && (o = "/" + o), i.scheme + ":" + (s !== void 0 ? "//" + s : "") + o + (g !== void 0 ? "?" + g : "") + (r.frag !== void 0 ? "#" + r.frag : ""); }
var Ce = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function Dr(e) { if (typeof btoa == "function")
    return btoa(e); var t = ""; for (var r = 0; r < e.length; r += 3) {
    var i = e.charCodeAt(r), s = e.charCodeAt(r + 1), o = e.charCodeAt(r + 2), g = i << 16 | (s || 0) << 8 | (o || 0);
    t += Ce[g >> 18 & 63] + Ce[g >> 12 & 63] + (r + 1 < e.length ? Ce[g >> 6 & 63] : "=") + (r + 2 < e.length ? Ce[g & 63] : "=");
} return t; }
var bi = function (e, t, r) { return ku(e, t, r); }, Ur = function (e, t, r) { return ku(e, t, r, 1)[0] || null; }, Mr = /[\s ]+/g, Ir = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), mi = { containsOwn: function (e, t) { return Cu(e).toLowerCase().includes(String(t).toLowerCase()); }, matches: function (e, t) { return Lr(t).test(Tu(e)); }, matchesOwn: function (e, t) { return Lr(t).test(Cu(e)); }, containsData: function (e, t) { return bt(e).includes(t); }, "contains-ci": function (e, t) { return Tu(e).toLowerCase().includes(String(t).toLowerCase()); } };
function Lr(e) { try {
    return new RegExp(e);
}
catch (t) {
    return /$^/;
} }
var Ne = { pseudos: mi, xmlMode: !1, lowerCaseTags: !0 };
function _e(e) { return String(e).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function Tu(e) { if (!e)
    return ""; if (e.type === "text")
    return e.data; var t = "", r = function (i) {
    var e_10, _b;
    try {
        for (var _c = __values(i.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var s = _d.value;
            s.type === "text" ? t += s.data : (s.type === "tag" || s.type === "script" || s.type === "style") && (s.name === "br" ? t += " " : s.type === "tag" && (Ir.has(s.name) && (t += " "), r(s), Ir.has(s.name) && (t += " ")));
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_10) throw e_10.error; }
    }
}; return r(e), t.replace(Mr, " ").trim(); }
function Cu(e) {
    var e_11, _b;
    var t = "";
    try {
        for (var _c = __values(e.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var r = _d.value;
            r.type === "text" && (t += r.data);
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return t.replace(Mr, " ").trim();
}
function Pr(e, t) { if (!t)
    return ""; try {
    return qe(e, t);
}
catch (r) {
    return e ? "" : t;
} }
var Et = (function () {
    function e(t, r) {
        this.node = t, this.doc = r;
    }
    Object.defineProperty(e.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    e.prototype.select = function (t) { return ot.of(bi(_e(t), this.node, Ne), this.doc); };
    e.prototype.selectFirst = function (t) { var r = Ur(_e(t), this.node, Ne); return r ? new e(r, this.doc) : null; };
    e.prototype.is = function (t) { return Au(this.node, _e(t), Ne); };
    e.prototype.text = function () { return Tu(this.node); };
    e.prototype.ownText = function () { return Cu(this.node); };
    e.prototype.wholeText = function () { return bt(this.node); };
    e.prototype.data = function () { return (this.node.children || []).filter(function (t) { return t.type === "text"; }).map(function (t) { return t.data; }).join(""); };
    e.prototype.html = function () { return (this.node.children || []).map(function (t) { return Ut(t, { decodeEntities: !1 }); }).join("").trim(); };
    e.prototype.outerHtml = function () { return Ut(this.node, { decodeEntities: !1 }); };
    e.prototype.toString = function () { return this.outerHtml(); };
    e.prototype.tagName = function () { return this.node.name || ""; };
    e.prototype.nodeName = function () { return this.node.name || "#" + this.node.type; };
    e.prototype.id = function () { return this.attr("id"); };
    e.prototype.className = function () { return this.attr("class"); };
    e.prototype.classNames = function () { return this.className().split(/\s+/).filter(Boolean); };
    e.prototype.hasClass = function (t) { return this.classNames().includes(t); };
    e.prototype.attr = function (t, r) { if (r !== void 0)
        return this.node.attribs && (this.node.attribs[t] = String(r)), this; if (!this.node.attribs)
        return ""; if (t.startsWith("abs:"))
        return Pr(this.baseUri, this.node.attribs[t.slice(4)] || ""); var i = this.node.attribs[t]; return i == null ? "" : i; };
    e.prototype.absUrl = function (t) { return this.attr("abs:" + t); };
    e.prototype.hasAttr = function (t) { return !!(this.node.attribs && (t.startsWith("abs:") ? t.slice(4) : t) in this.node.attribs); };
    e.prototype.removeAttr = function (t) { return this.node.attribs && delete this.node.attribs[t], this; };
    e.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    e.prototype.dataset = function () {
        var e_12, _b;
        var t = {};
        try {
            for (var _c = __values(Object.entries(this.node.attribs || {})), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _f = __read(_d.value, 2), r = _f[0], i = _f[1];
                r.startsWith("data-") && (t[r.slice(5)] = i);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return t;
    };
    e.prototype.val = function () { return this.attr("value"); };
    e.prototype.parent = function () { var t = this.node.parent; return t && t.type !== "root" ? new e(t, this.doc) : null; };
    e.prototype.parents = function () { var t = [], r = this.node.parent; for (; r && r.type !== "root";)
        t.push(r), r = r.parent; return ot.of(t, this.doc); };
    e.prototype.closest = function (t) { var r = this.node; for (; r && r.type !== "root";) {
        if (r.type === "tag" && Au(r, _e(t), Ne))
            return new e(r, this.doc);
        r = r.parent;
    } return null; };
    e.prototype.children = function () { return ot.of((this.node.children || []).filter(P), this.doc); };
    e.prototype.child = function (t) { var r = (this.node.children || []).filter(P)[t]; return r ? new e(r, this.doc) : null; };
    e.prototype.childrenSize = function () { return (this.node.children || []).filter(P).length; };
    e.prototype.nextElementSibling = function () { var t = uu(this.node); return t ? new e(t, this.doc) : null; };
    e.prototype.previousElementSibling = function () { var t = ru(this.node); return t ? new e(t, this.doc) : null; };
    e.prototype.siblingElements = function () {
        var _this = this;
        return ot.of(de(this.node).filter(function (t) { return t !== _this.node && P(t); }), this.doc);
    };
    e.prototype.elementSiblingIndex = function () { return de(this.node).filter(P).indexOf(this.node); };
    e.prototype.getElementsByTag = function (t) { return this.select(t); };
    e.prototype.getElementsByClass = function (t) { return this.select("." + t); };
    e.prototype.getElementById = function (t) { return this.selectFirst("#" + t); };
    e.prototype.remove = function () { return dt(this.node), this; };
    e.prototype.empty = function () { return this.node.children = [], this; };
    e.prototype.textNodes = function () { return (this.node.children || []).filter(function (t) { return t.type === "text"; }).map(function (t) { return ({ text: function () { return t.data; }, toString: function () { return t.data; } }); }); };
    e.prototype.title = function () { var t = this.selectFirst("title"); return t ? t.text() : ""; };
    e.prototype.body = function () { return this.selectFirst("body") || this; };
    e.prototype.head = function () { return this.selectFirst("head") || this; };
    e.prototype.location = function () { return this.baseUri; };
    return e;
}()), Nu = Object.create(Array.prototype), ot = { of: qu, prototype: Nu };
function qu(e, t) {
    var e_13, _b;
    var r = [];
    try {
        for (var _c = __values(e || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var i = _d.value;
            r.push(i instanceof Et ? i : new Et(i, t));
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return Object.setPrototypeOf(r, Nu), r;
}
var Or = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (e) { return this[e] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (e) { return ot.of(this[e] ? [this[e]] : [], null); }, text: function () { return this.map(function (e) { return e.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (e) { return e.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (e) { return e.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (e) { return e.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (e, t) {
        var e_14, _b;
        if (t !== void 0)
            return this.forEach(function (r) { return r.attr(e, t); }), this;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var r = _d.value;
                if (r.hasAttr(e))
                    return r.attr(e);
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_14) throw e_14.error; }
        }
        return "";
    }, eachAttr: function (e) { return this.filter(function (t) { return t.hasAttr(e); }).map(function (t) { return t.attr(e); }); }, hasAttr: function (e) { return this.some(function (t) { return t.hasAttr(e); }); }, hasClass: function (e) { return this.some(function (t) { return t.hasClass(e); }); }, val: function () { return this.length ? this[0].val() : ""; }, select: function (e) {
        var e_15, _b, e_16, _c;
        var t = qu([]), r = new Set;
        try {
            for (var _d = __values(this), _f = _d.next(); !_f.done; _f = _d.next()) {
                var i = _f.value;
                try {
                    for (var _g = (e_16 = void 0, __values(i.select(e))), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var s = _h.value;
                        r.has(s.node) || (r.add(s.node), t.push(s));
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_c = _g.return)) _c.call(_g);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return t;
    }, selectFirst: function (e) {
        var e_17, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var t = _d.value;
                var r = t.selectFirst(e);
                if (r)
                    return r;
            }
        }
        catch (e_17_1) { e_17 = { error: e_17_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_17) throw e_17.error; }
        }
        return null;
    }, is: function (e) { return this.some(function (t) { return t.is(e); }); }, not: function (e) { return ot.of(this.filter(function (t) { return !t.is(e); }), null); }, parents: function () {
        var e_18, _b;
        var e = qu([]);
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var t = _d.value;
                e.push.apply(e, __spreadArray([], __read(t.parents()), false));
            }
        }
        catch (e_18_1) { e_18 = { error: e_18_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_18) throw e_18.error; }
        }
        return e;
    }, next: function () { return ot.of(this.map(function (e) { return e.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return ot.of(this.map(function (e) { return e.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (e) { return e.remove(); }), this; }, empty: function () { return this.forEach(function (e) { return e.empty(); }), this; }, removeAttr: function (e) { return this.forEach(function (t) { return t.removeAttr(e); }), this; } };
try {
    for (var _c = __values(Object.keys(Or)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var e = _d.value;
        Object.defineProperty(Nu, e, { value: Or[e], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
function De(e, t) { var r = cr(String(e == null ? "" : e), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), i = new Et(r, null); i.doc = i, i.__base = t || ""; var s = Ur("base[href]", r); return s && s.attribs.href && (i.__base = Pr(i.__base, s.attribs.href)), i; }
function Br(e, t) { var r = new Set((t || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), i = De(e), s = function (o) {
    var e_19, _b, e_20, _c;
    try {
        for (var _d = __values((o.children || []).slice()), _f = _d.next(); !_f.done; _f = _d.next()) {
            var g = _f.value;
            if (g.type === "script" || g.type === "style" || g.type === "comment") {
                dt(g);
                continue;
            }
            if (g.type === "tag" && (s(g), !r.has(g.name))) {
                var v = (g.children || []).slice();
                try {
                    for (var v_3 = (e_20 = void 0, __values(v)), v_3_1 = v_3.next(); !v_3_1.done; v_3_1 = v_3.next()) {
                        var y = v_3_1.value;
                        au(g, y);
                    }
                }
                catch (e_20_1) { e_20 = { error: e_20_1 }; }
                finally {
                    try {
                        if (v_3_1 && !v_3_1.done && (_c = v_3.return)) _c.call(v_3);
                    }
                    finally { if (e_20) throw e_20.error; }
                }
                dt(g);
            }
        }
    }
    catch (e_19_1) { e_19 = { error: e_19_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
        }
        finally { if (e_19) throw e_19.error; }
    }
}; return s(i.node), Ut(i.node.children, { decodeEntities: !1 }); }
var te = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function xi(e) { if (typeof Buffer != "undefined")
    return Buffer.from(e).toString("base64"); var t = ""; for (var r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]); return Dr(t); }
function Fr(e) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(e) : Uint8Array.from(unescape(encodeURIComponent(e)), function (t) { return t.charCodeAt(0); }); }
function vi(e) { var t = ""; for (var r = 0; r < e.length; r++) {
    var i = e.charCodeAt(r);
    if (i < 128) {
        t += e[r];
        continue;
    }
    if (i === 128) {
        t += "€";
        continue;
    }
    var s = e.charCodeAt(r + 1);
    i >= 129 && i <= 254 && s >= 64 && s <= 254 && s !== 127 ? (t += __GBK_TABLE[(i - 129) * 190 + (s - 64) - (s > 127 ? 1 : 0)], r++) : t += "�";
} return t; }
var _u = (function () {
    function _u(t, r) {
        this.status = t.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText || String(this.status), this.url = t.url || r.url, this.headers = t.headers || {}, this._raw = t, this.request = { url: r.url, headers: r.headers || {} };
    }
    _u.prototype.header = function (t) { var r = Object.keys(this.headers).find(function (i) { return i.toLowerCase() === String(t).toLowerCase(); }); return r ? this.headers[r] : ""; };
    _u.prototype.text = function (t) { if (t && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(t).toLowerCase()).decode(this._raw.bytes);
        }
        catch (i) { } var r = this._raw.text == null ? "" : String(this._raw.text); return t || (t = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), t && /^(gbk|gb2312|gb18030)$/i.test(String(t)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(r) && !/[^\x00-\xff]/.test(r) ? vi(r) : r; };
    _u.prototype.string = function (t) { return this.text(t); };
    _u.prototype.html = function (t) { return De(this.text(t), this.url); };
    _u.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (t) {
        return null;
    } };
    _u.prototype.base64 = function () { return xi(this._raw.bytes || Fr(this.text())); };
    _u.prototype.blob = function () { var t = this; return { size: (this._raw.bytes || Fr(this.text())).length, type: this.header("content-type"), base64: function () { return t.base64(); } }; };
    return _u;
}());
function wi(e) {
    var e_21, _b;
    var t = {};
    if (!e)
        return t;
    if (typeof e.forEach == "function" && !Array.isArray(e) && typeof e.entries == "function")
        return e.forEach(function (r, i) { t[i] = r; }), t;
    try {
        for (var _c = __values(Object.keys(e)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var r = _d.value;
            t[r] = String(e[r]);
        }
    }
    catch (e_21_1) { e_21 = { error: e_21_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_21) throw e_21.error; }
    }
    return t;
}
function Vr(e, t) { var r = function (g) { return ({ getItem: function (v) { var y = e.storageGet(g + v); return y == null ? null : y; }, setItem: function (v, y) { return e.storageSet(g + v, y == null ? null : String(y)); }, removeItem: function (v) { return e.storageSet(g + v, null); }, clear: function () { return e.storageClear && e.storageClear(g); } }); }, i = "__cookie__", s = {}; s.Response = { success: function (g, v) { return ({ code: 0, data: g === void 0 ? null : g, data2: v === void 0 ? null : v }); }, error: function (g) { return ({ code: 1, data: g == null ? "" : String(g) }); } }, s.fetch = function (v, y) {
    return __awaiter(this, void 0, void 0, function () { var S, M, T, L, q, M, N, O, M_1; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                y = y || {};
                S = String(v);
                if (y.queries) {
                    M = Object.entries(y.queries).map(function (_b) {
                        var _c = __read(_b, 2), Q = _c[0], et = _c[1];
                        return encodeURIComponent(Q) + "=" + encodeURIComponent(et);
                    }).join("&");
                    M && (S += (S.includes("?") ? "&" : "?") + M);
                }
                T = Object.assign({ "User-Agent": te }, wi(y.headers)), L = e.storageGet(i);
                L && !Object.keys(T).some(function (M) { return M.toLowerCase() === "cookie"; }) && (T.Cookie = L);
                q = y.body;
                if (q != null && typeof q == "object") {
                    M = Object.keys(T).find(function (Q) { return Q.toLowerCase() === "content-type"; });
                    M && /json/i.test(T[M]) ? q = JSON.stringify(q) : (q = Object.entries(q).map(function (_b) {
                        var _c = __read(_b, 2), Q = _c[0], et = _c[1];
                        return encodeURIComponent(Q) + "=" + encodeURIComponent(et);
                    }).join("&"), M || (T["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                N = { url: S, method: (y.method || (q != null ? "POST" : "GET")).toUpperCase(), headers: T, body: q, timeout: y.timeout };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4, e.request(N)];
            case 2:
                O = _b.sent();
                return [3, 4];
            case 3:
                M_1 = _b.sent();
                O = { status: 0, url: S, headers: {}, text: "", error: String(M_1 && M_1.message || M_1) };
                return [3, 4];
            case 4: return [2, new _u(O, N)];
        }
    }); });
}, s.Http = { get: function (g) { return jr(s, "GET", g); }, post: function (g) { return jr(s, "POST", g); } }, s.Html = { parse: function (g, v) { return De(g, v || ""); }, clean: function (g, v) { return Br(g, v); } }, s.localStorage = r("ls:"), s.cacheStorage = r("cs:"), s.resumeStorage = { get: function (g) { try {
        var v = e.storageGet("resume:" + g);
        return v && parseFloat(v) || 0;
    }
    catch (y) {
        return 0;
    } }, set: function (g, v) { try {
        e.storageSet("resume:" + g, String(Math.max(0, v || 0)));
    }
    catch (y) { } } }, s.localConfig = { getItem: function (g) { return e.config(g); } }, s.localCookie = { setCookie: function (g) { e.storageSet(i, String(g).split(";")[0]); }, getCookie: function () { return e.storageGet(i) || ""; } }, s.sleep = function (g) { return new Promise(function (v) { return typeof setTimeout == "function" ? setTimeout(v, Math.min(Number(g) || 0, 1e4)) : v(); }); }; var o = function () {
    var g = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        g[_i] = arguments[_i];
    }
    try {
        e.log && e.log(g.map(function (v) { return typeof v == "string" ? v : JSON.stringify(v); }).join(" "));
    }
    catch (v) { }
}; return s.Log = { log: o }, s.console = { log: o, error: o, warn: o, info: o }, s.Console = s.console, s.log = o, s.UserAgent = { system: function () { return te; }, chrome: function () { return te; }, android: function () { return te; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, s.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (e.name || "host") + ")"); } }, s.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, s.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, s.Elements = ot, s.Element = Et, s.__meta = t, s; }
function jr(e, t, r) { var i = { method: t, url: r, headers: {}, body: void 0, queries: void 0 }, s = { headers: function (o) { return Object.assign(i.headers, o || {}), s; }, header: function (o, g) { return i.headers[o] = g, s; }, params: function (o) { return i.queries = o, s; }, queries: function (o) { return i.queries = o, s; }, body: function (o) { return i.body = o, s; }, html: function (o) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(i.url, i)];
                case 1: return [2, (_b.sent()).html(o)];
            }
        }); });
    }, string: function (o) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(i.url, i)];
                case 1: return [2, (_b.sent()).text(o)];
            }
        }); });
    }, text: function (o) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(i.url, i)];
                case 1: return [2, (_b.sent()).text(o)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, e.fetch(i.url, i)];
                case 1: return [2, (_b.sent()).json()];
            }
        }); });
    } }; return s; }
function Tt(e, t) { if (!t)
    return ""; if (t = String(t).trim(), /^data:|^blob:/.test(t))
    return t; if (t.startsWith("//"))
    return "https:" + t; if (typeof __abs == "function")
    return __abs(e, t); try {
    return qe(e, t);
}
catch (r) {
    return t;
} }
var z = function (e) { return e == null ? "" : String(e); }, yi = function (e) { return e.filter(function (t, r) { return t && e.indexOf(t) === r; }); }, Ie = (function () {
    function class_1(t) {
        var r = t.meta, i = t.scripts, s = t.host;
        this.meta = r, this.host = s, this.env = t.env || Vr(s, r), this.scripts = i, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return z(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.has = function (t) { return !!this.scripts[t]; };
    class_1.prototype.run = function (t) {
        var r = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            r[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var i, s, o, g;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        i = this.scripts[t];
                        if (!i)
                            throw new Error("script " + t + " missing");
                        s = function (v) { var y = _this.host.config(v); return y == null ? (_this.meta.configDefaults || {})[v] : y; };
                        return [4, i(this.env, s)];
                    case 1:
                        o = _b.sent();
                        if (typeof o != "function")
                            throw new Error(t + ": execute() not defined");
                        return [4, o.apply(void 0, __spreadArray([], __read(r.map(z)), false))];
                    case 2:
                        g = _b.sent();
                        if (!g)
                            throw new Error(t + ": empty result");
                        if (g.code !== 0)
                            throw new Error(t + ": " + z(g.data || "error"));
                        return [2, g];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (t) { return z(t).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var t, _b, r_1, r_2; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (this.cache.tabs)
                        return [2, this.cache.tabs];
                    t = [];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 5]);
                    _b = this.has("home");
                    if (!_b) return [3, 3];
                    return [4, this.run("home")];
                case 2:
                    _b = (t = (_c.sent()).data || []);
                    _c.label = 3;
                case 3:
                    _b;
                    return [3, 5];
                case 4:
                    r_1 = _c.sent();
                    this.host.log && this.host.log("home: " + r_1.message);
                    return [3, 5];
                case 5:
                    if (!(!t.length && this.has("genre"))) return [3, 9];
                    _c.label = 6;
                case 6:
                    _c.trys.push([6, 8, , 9]);
                    return [4, this.run("genre")];
                case 7:
                    t = ((_c.sent()).data || []).slice(0, 2);
                    return [3, 9];
                case 8:
                    r_2 = _c.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = t.filter(function (r) { return r && r.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (t, r, i) {
        return __awaiter(this, void 0, void 0, function () {
            var s, o, g, v, y;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        s = t + "|" + r;
                        i = Math.max(1, i | 0);
                        o = i === 1 ? "" : this.tokens[s + "|" + i];
                        if (i > 1 && o == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(t, r, o)];
                    case 1:
                        g = _b.sent(), v = z(g.data2);
                        v && (this.tokens[s + "|" + (i + 1)] = v);
                        y = (g.data || []).filter(Boolean).map(function (S) { return ({ name: z(S.name).trim(), link: Tt(S.host || _this.base + "/", S.link), cover: Tt(S.host || _this.base + "/", S.cover), description: z(S.description), tag: z(S.tag) }); }).filter(function (S) { return S.name && S.link; });
                        return [2, { items: y, hasNext: !!v && y.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (t) {
        return __awaiter(this, void 0, void 0, function () { var r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    r = _b.sent();
                    return [2, r[0] ? this.list(this.scriptFile(r[0].script), z(r[0].input), t) : this.search("", t)];
            }
        }); });
    };
    class_1.prototype.latest = function (t) {
        return __awaiter(this, void 0, void 0, function () { var r, i; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    r = _b.sent(), i = r[1] || r[0];
                    return [2, i ? this.list(this.scriptFile(i.script), z(i.input), t) : this.search("", t)];
            }
        }); });
    };
    class_1.prototype.search = function (t, r) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, this.has("search") ? this.list("search", t, r) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (t) {
        return __awaiter(this, void 0, void 0, function () { var r, i; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.run("detail", t)];
                case 1:
                    r = (_b.sent()).data || {}, i = [].concat(r.genres || [], r.tags || []).map(function (s) { return typeof s == "string" ? s : s && s.title; }).filter(Boolean);
                    return [2, { name: z(r.name).trim(), cover: Tt(r.host || this.base + "/", r.cover), author: z(r.author).trim(), description: zr(z(r.description)), detail: zr(z(r.detail)), ongoing: r.ongoing !== !1 && r.ongoing !== "false", genres: yi(i.map(function (s) { return String(s).trim(); })), url: t, format: z(r.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var r, i, i_1, i_1_1, s, _b, _c, e_22_1, _d;
            var e_22, _f;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        r = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", t)];
                    case 1:
                        i = (_g.sent()).data || [t];
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 7, 8, 9]);
                        i_1 = __values(i), i_1_1 = i_1.next();
                        _g.label = 3;
                    case 3:
                        if (!!i_1_1.done) return [3, 6];
                        s = i_1_1.value;
                        _c = (_b = r).concat;
                        return [4, this.run("toc", z(s))];
                    case 4:
                        r = _c.apply(_b, [(_g.sent()).data || []]);
                        _g.label = 5;
                    case 5:
                        i_1_1 = i_1.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_22_1 = _g.sent();
                        e_22 = { error: e_22_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (i_1_1 && !i_1_1.done && (_f = i_1.return)) _f.call(i_1);
                        }
                        finally { if (e_22) throw e_22.error; }
                        return [7];
                    case 9: return [3, 13];
                    case 10:
                        _d = this.has("toc");
                        if (!_d) return [3, 12];
                        return [4, this.run("toc", t)];
                    case 11:
                        _d = (r = (_g.sent()).data || []);
                        _g.label = 12;
                    case 12:
                        _d;
                        _g.label = 13;
                    case 13: return [2, r.filter(function (i) { return i && i.url && i.type !== "section"; }).map(function (i, s) { return ({ name: z(i.name).trim() || "#" + (s + 1), url: Tt(i.host || _this.base + "/", i.url), pay: !!(i.pay || i.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var r, _b, _c, i, s;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", t)];
                    case 1:
                        _b = r = (_d.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", t)];
                    case 3:
                        _c = r = (_d.sent()).data;
                        return [3, 5];
                    case 4:
                        _c = r = [t];
                        _d.label = 5;
                    case 5:
                        _b = _c;
                        _d.label = 6;
                    case 6:
                        _b, typeof r == "string" && (r = r.split(/[\n,]+/));
                        i = function (o) { return !o || /^data:|loading|lazy|blank|placeholder|spacer|\/nocover|1x1\./i.test(String(o)); }, s = function (o) { if (typeof o == "string")
                            return o; if (!o)
                            return ""; var g = o.link || o.url || o.data, v = Array.isArray(o.fallback) ? o.fallback.filter(Boolean) : []; return i(g) && v.length ? v[0] : g; };
                        return [2, (r || []).map(function (o) { return Tt(_this.base + "/", s(o)); }).filter(Boolean)];
                }
            });
        });
    };
    class_1.prototype.content = function (t) {
        return __awaiter(this, void 0, void 0, function () { var r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.run("chap", t)];
                case 1:
                    r = _b.sent();
                    return [2, { html: z(r.data), title: z(r.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var r, o, i, s, r_3, r_3_1, o, g, v, v_4, v_4_1, y, S, T, L, g_2, e_23_1;
            var e_23, _b, e_24, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        r = [{ title: "Default", data: t }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", t)];
                    case 1:
                        o = (_d.sent()).data;
                        Array.isArray(o) && o.length && (r = o.map(function (g) { return typeof g == "string" ? { title: "Server", data: g } : { title: z(g.title || g.name || "Server"), data: z(g.data || g.url || g.link) }; }));
                        _d.label = 2;
                    case 2:
                        i = this.env && this.env.resumeStorage ? this.env.resumeStorage.get(t) : 0, s = [];
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 10, 11, 12]);
                        r_3 = __values(r), r_3_1 = r_3.next();
                        _d.label = 4;
                    case 4:
                        if (!!r_3_1.done) return [3, 9];
                        o = r_3_1.value;
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 7, , 8]);
                        return [4, this.run("track", o.data)];
                    case 6:
                        g = (_d.sent()).data || {}, v = Array.isArray(g) ? g : [g];
                        try {
                            for (v_4 = (e_24 = void 0, __values(v)), v_4_1 = v_4.next(); !v_4_1.done; v_4_1 = v_4.next()) {
                                y = v_4_1.value;
                                if (!y || !y.data || y.type === "webview")
                                    continue;
                                S = Tt(y.host || this.base + "/", y.data), T = i > 0 && !y.data.includes("#t=") && !y.data.includes("&t=") ? (y.data.includes("#") ? "&" : "#") + "t=" + Math.floor(i) : "", L = i > 0 ? " [Tiếp tục " + Math.floor(i / 60) + ":" + ("0" + Math.floor(i % 60)).slice(-2) + "]" : "";
                                s.push({ url: S + T, rawUrl: S, resumeSec: i, quality: o.title + (y.quality ? " " + y.quality : "") + L, headers: y.headers || { Referer: this.base + "/" }, subtitles: (y.subtitles || (y.subtitle ? [{ data: y.subtitle, label: "Sub" }] : [])).map(function (q) { return ({ file: Tt(_this.base + "/", q.data || q.file), label: z(q.label || q.language || "Sub") }); }), mimeType: z(y.mimeType) });
                            }
                        }
                        catch (e_24_1) { e_24 = { error: e_24_1 }; }
                        finally {
                            try {
                                if (v_4_1 && !v_4_1.done && (_c = v_4.return)) _c.call(v_4);
                            }
                            finally { if (e_24) throw e_24.error; }
                        }
                        return [3, 8];
                    case 7:
                        g_2 = _d.sent();
                        this.host.log && this.host.log("track " + o.title + ": " + g_2.message);
                        return [3, 8];
                    case 8:
                        r_3_1 = r_3.next();
                        return [3, 4];
                    case 9: return [3, 12];
                    case 10:
                        e_23_1 = _d.sent();
                        e_23 = { error: e_23_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (r_3_1 && !r_3_1.done && (_b = r_3.return)) _b.call(r_3);
                        }
                        finally { if (e_23) throw e_23.error; }
                        return [7];
                    case 12: return [2, s];
                }
            });
        });
    };
    return class_1;
}());
function zr(e) {
    return String(e).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
function J(e, t) {
    return __awaiter(this, void 0, void 0, function () { var r, i, _b, _c; return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                e = e || [];
                r = [], i = 0;
                _d.label = 1;
            case 1:
                if (!(i < e.length)) return [3, 4];
                _c = (_b = r).push;
                return [4, t(e[i], i, e)];
            case 2:
                _c.apply(_b, [_d.sent()]);
                _d.label = 3;
            case 3:
                i++;
                return [3, 1];
            case 4: return [2, r];
        }
    }); });
}
var pt = { id: "uukanshu", name: "uukanshu", source: "https://uukanshu.cc", type: "novel", locale: "zh-CN", nsfw: !1, version: 3, config: { DOMAIN: { title: "Tên miền", subtitle: "Đổi khi trang đổi tên miền", default: "https://uukanshu.cc", values: ["https://uukanshu.cc"], mode: "input", format: "text" } }, configDefaults: { DOMAIN: "https://uukanshu.cc" }, itemType: 2, short: !1, shorts: !1, lnId: "kiritokmn.uukanshu", lnIcon: "", lnVersion: "1.3.3" }, Hr = { home: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (r, i, s, o, g, v, y, S, T, L, q, N, O, M, Q, et, ft) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = t("DOMAIN");
                                        return [4, (function () {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    function W() {
                                                        return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
                                                            u = [];
                                                            for (a in c.tabs)
                                                                u.push({ title: a, input: a, script: "browse.js" });
                                                            return [2, o.success(u)];
                                                        }); });
                                                    }
                                                    var k, c, d, x;
                                                    return __generator(this, function (_b) {
                                                        k = "https://uukanshu.cc";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (u) { }
                                                        c = { tabs: { 排行: "/top/allvisit_{p}.html", 玄幻: "/class_1_{p}.html", 修真: "/class_2_{p}.html", 都市: "/class_3_{p}.html", 全本: "/quanben/", 首頁: "/" }, search: "/search/{q}/{p}.html", ch_list: "#list-chapterAll dd a, .chapterlist a", item: "div.item, div.bookinfo", title: "dt a || .bookname a", link: "dt a@href || .bookname a@href", cover: "img@img", desc: "dd || .update", pageSize: 10, d_title: "h1", d_cover: "meta[property=og:image]@content", d_author: "meta[property=og:novel:author]@content", d_desc: "meta[property=og:description]@content", content: ".readcotent", c_title: "h1" }, d = { img: function (u) { if (!u)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], n = 0; n < a.length; n++) {
                                                                var f = u.attr(a[n]);
                                                                if (f && f.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(f))
                                                                    return d.fix(f.trim());
                                                            } var l = u.attr("data-srcset") || u.attr("srcset"); return l ? d.fix(l.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (u) { return u ? (u = String(u).trim(), u.indexOf("//") === 0 ? "https:" + u : u.indexOf("http") === 0 ? u : u.charAt(0) === "/" ? k + u : k + "/" + u) : ""; }, text: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            n = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(n < a.length)) return [3, 4];
                                                                            return [4, u.select(a[n]).text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, f.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            n++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            n = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (f in a.headers)
                                                                                    n[f] = a.headers[f];
                                                                            return [4, r(u, { method: a.method, headers: n, body: a.body })];
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
                                                                            return [4, r(u, { method: a.method, headers: n, body: a.body })];
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
                                                                return __awaiter(this, void 0, void 0, function () { var n, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            n = _d.sent();
                                                                            return [4, n.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            n = _d.sent();
                                                                            return [4, n.json()];
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
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, p, m, b, w, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !u)
                                                                                return [2, ""];
                                                                            n = String(a).split(" || "), f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < n.length)) return [3, 9];
                                                                            l = n[f], h = "text", p = l.lastIndexOf("@");
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
                                                            }, url: function (u, a, n) { var f = d.page(a), l = String(u); return l = l.replace(/\[([^\]]*)\]/g, function (h, p) { return f > 1 ? p : ""; }), l = l.replace(/\{p\}/g, String(f)).replace(/\{p0\}/g, String(f - 1)).replace(/\{q\}/g, d.enc(n || "")).replace(/\{base\}/g, k), d.fix(l); }, items: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var n, f, l, h, p, m, b, w, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                n = function (A) { return a && c[a + A] || c[A]; }, f = u.select(n("item")), l = [], h = {}, p = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(p < f.size())) return [3, 9];
                                                                                return [4, f.get(p)];
                                                                            case 2:
                                                                                m = _g.sent();
                                                                                return [4, x.pick(m, n("link") || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || h[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, x.pick(m, n("title") || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                w = _g.sent();
                                                                                _b = w;
                                                                                if (!_b) return [3, 7];
                                                                                h[b] = 1;
                                                                                _d = (_c = l).push;
                                                                                _f = { name: w, link: d.fix(b) };
                                                                                return [4, x.pick(m, n("cover") || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, x.pick(m, n("desc") || "")];
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
                                                            }, listPage: function (u, a, n) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(x.url(u, a, n), c.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            return [4, x.items(f, n ? "s_" : "")];
                                                                        case 2:
                                                                            l = _b.sent(), h = c.next ? f.select(c.next).size() > 0 : l.length >= (c.pageSize || 10);
                                                                            return [2, o.success(l, d.next(h && l.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            n = c.tabs && c.tabs[u] || u;
                                                                            return [4, x.listPage(n, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            if (!(c.q_cut && !d.isUrl(u) && (u = String(u).split(new RegExp(c.q_cut))[0].trim() || u), d.isUrl(u))) return [3, 2];
                                                                            n = d.fix(u);
                                                                            return [4, x.listPage(n + (n.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _c.sent()];
                                                                        case 2:
                                                                            if (!c.search_post) return [3, 5];
                                                                            return [4, d.html(x.url(c.search_post.url, a, u), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: String(c.search_post.body).replace(/\{q\}/g, d.enc(u)) })];
                                                                        case 3:
                                                                            f = _c.sent();
                                                                            return [4, x.items(f, "s_")];
                                                                        case 4:
                                                                            l = _c.sent();
                                                                            return [2, o.success(l, null)];
                                                                        case 5:
                                                                            if (!c.search_json) return [3, 7];
                                                                            return [4, x.jsonSearch(c.search_json, u, a)];
                                                                        case 6:
                                                                            _b = _c.sent();
                                                                            return [3, 9];
                                                                        case 7: return [4, x.listPage(c.search, a, u)];
                                                                        case 8:
                                                                            _b = _c.sent();
                                                                            _c.label = 9;
                                                                        case 9: return [2, _b];
                                                                    }
                                                                }); });
                                                            }, jsonSearch: function (u, a, n) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.json(x.url(u.url, n, a), c.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            u.list && u.list.split(".").forEach(function (p) { f = f && f[p]; });
                                                                            l = function (p, m) { return String(m || "").indexOf("{") >= 0 ? String(m).replace(/\{(\w+)\}/g, function (b, w) { return p[w] == null ? "" : p[w]; }) : p[m] == null ? "" : String(p[m]); }, h = [];
                                                                            return [2, ((f || []).forEach(function (p) { var m = l(p, u.title || "title"), b = l(p, u.link || "url"); m && b && h.push({ name: m, link: d.fix(b), cover: d.fix(l(p, u.cover || "cover")), description: u.desc ? l(p, u.desc) : "", host: k }); }), o.success(h, u.paged && h.length ? d.next(!0, n) : null))];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!c.genre)
                                                                                return [2, o.success([])];
                                                                            return [4, d.html(d.fix(c.genrePage || "/"))];
                                                                        case 1:
                                                                            u = _b.sent();
                                                                            return [4, J(u.select(c.genre), function (n) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, n.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(n.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, o.success(a.filter(function (n) { return n.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, n, f, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(u, c.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!c.d_genres) return [3, 3];
                                                                                return [4, J(a.select(c.d_genres), function (l) {
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
                                                                                n = _b;
                                                                                return [4, x.pick(a, c.d_status)];
                                                                            case 5:
                                                                                f = _j.sent();
                                                                                _d = (_c = o).success;
                                                                                _h = {};
                                                                                return [4, x.pick(a, c.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, x.pick(a, c.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, x.pick(a, c.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, x.pick(a, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = f ? "Tình trạng: " + f : "", _h.ongoing = d.ongoing(f), _h.genres = n, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, n, f, l, h, _b, p, m, b, w, A, _c, _d, _f, _g, C, D, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!c.ch_action) return [3, 2];
                                                                                return [4, x.actionToc(u)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (c.single)
                                                                                    return [2, o.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: u, host: k }])];
                                                                                a = [u], n = [], f = {};
                                                                                return [4, d.html(c.ch_rewrite ? u.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : u, c.req)];
                                                                            case 3:
                                                                                l = _k.sent();
                                                                                if (!c.ch_url) return [3, 7];
                                                                                return [4, x.pick(l, c.ch_url)];
                                                                            case 4:
                                                                                h = _k.sent();
                                                                                _b = h;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(h), c.req)];
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
                                                                                if (!(p < (c.ch_maxPages || 60))) return [3, 22];
                                                                                m = l.select(c.ch_list), b = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(b < m.size())) return [3, 17];
                                                                                return [4, m.get(b)];
                                                                            case 10:
                                                                                w = _k.sent(), A = c.ch_attr ? w.attr(c.ch_attr) : w.attr("href") || w.attr("data-href");
                                                                                _c = !A || A === "#" || f[A];
                                                                                if (_c) return [3, 15];
                                                                                f[A] = 1;
                                                                                _f = (_d = n).push;
                                                                                _j = {};
                                                                                if (!c.ch_name) return [3, 12];
                                                                                return [4, x.pick(w, c.ch_name)];
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
                                                                                C = c.ch_next ? l.select(c.ch_next).first() : null;
                                                                                if (!C || !C.attr("href"))
                                                                                    return [3, 22];
                                                                                D = d.fix(C.attr("href"));
                                                                                if (a.indexOf(D) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(D);
                                                                                _h = c.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, T(c.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(D, c.req)];
                                                                            case 20:
                                                                                l = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                p++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (c.ch_reverse && n.reverse(), !n.length && c.ch_fallback_single && n.push({ name: c.ch_fallback_single === !0 ? "Xem phim" : c.ch_fallback_single, url: u, host: k }), o.success(n))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, n, f, l, h, p, m, b, _b, _c, w, A, C, D, _d, _f, _g, _h, j, V, _j, _k, X, B; return __generator(this, function (_l) {
                                                                    switch (_l.label) {
                                                                        case 0:
                                                                            a = [], n = [u], f = u, l = 0;
                                                                            _l.label = 1;
                                                                        case 1:
                                                                            if (!(l < (c.pages_max || 40))) return [3, 17];
                                                                            if (!c.initmanga) return [3, 5];
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(f, c.req)];
                                                                        case 2: return [4, _c.apply(_b, [_l.sent(), f])];
                                                                        case 3:
                                                                            p = _l.sent();
                                                                            return [4, p.text()];
                                                                        case 4:
                                                                            m = (_l.sent()) || "", b = x.initManga(m);
                                                                            h = s.parse(b ? '<div id="imc-dec">' + b + "</div>" : m, f);
                                                                            return [3, 7];
                                                                        case 5: return [4, d.html(f, c.req)];
                                                                        case 6:
                                                                            h = _l.sent();
                                                                            _l.label = 7;
                                                                        case 7:
                                                                            w = h.select(c.initmanga ? "#imc-dec img, " + (c.pages || "#chapter-content img") : c.pages || ".page-chapter img, .reading-content img, .chapter-content img");
                                                                            if (!c.initmanga) return [3, 11];
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
                                                                            if (!c.pages_next)
                                                                                return [3, 17];
                                                                            X = h.select(c.pages_next).first();
                                                                            if (!X)
                                                                                return [3, 17];
                                                                            B = d.fix(X.attr("href"));
                                                                            if (!B || n.indexOf(B) >= 0)
                                                                                return [3, 17];
                                                                            n.push(B), f = B;
                                                                            _l.label = 16;
                                                                        case 16:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 17: return [2, o.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, n, _b, _c, f, l, h, _d, _f, _g, p, _h, _j, _k, m, b, _l, _m, _o, _p, _q, _s; return __generator(this, function (_v) {
                                                                    switch (_v.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, c.req)];
                                                                        case 1: return [4, _c.apply(_b, [_v.sent(), u])];
                                                                        case 2:
                                                                            a = _v.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            n = (_v.sent()) || "";
                                                                            if (!c.content_rsc) return [3, 5];
                                                                            f = x.rscText(n), l = c.c_locked && new RegExp(c.c_locked, "i").test(n), h = l ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(f || l)) return [3, 5];
                                                                            _f = (_d = o).success;
                                                                            _g = [x.toParas(f) + h];
                                                                            return [4, x.pick(s.parse(n, u), c.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_v.sent()]))];
                                                                        case 5:
                                                                            if (!c.initmanga) return [3, 8];
                                                                            p = x.initManga(n);
                                                                            if (!p) return [3, 8];
                                                                            _j = (_h = o).success;
                                                                            return [4, d.cleanContent(s.parse('<div id="imc-dec">' + p + "</div>", u).select("#imc-dec").first())];
                                                                        case 6:
                                                                            _k = [_v.sent()];
                                                                            return [4, x.pick(s.parse(n, u), c.c_title || "h1 || h2")];
                                                                        case 7: return [2, _j.apply(_h, _k.concat([_v.sent()]))];
                                                                        case 8:
                                                                            m = s.parse(n, u), b = m.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!b) return [3, 10];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(n.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _m = (_l = o).error;
                                                                            _o = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, x.pick(m, "title")];
                                                                        case 9: return [2, _m.apply(_l, [_o + ((_v.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + n.length + " ký tự)" + (n.length < 400 ? ": " + n.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 10:
                                                                            _q = (_p = o).success;
                                                                            return [4, d.cleanContent(b)];
                                                                        case 11:
                                                                            _s = [_v.sent()];
                                                                            return [4, x.pick(m, c.c_title || "h1 || h2")];
                                                                        case 12: return [2, _q.apply(_p, _s.concat([_v.sent()]))];
                                                                    }
                                                                }); });
                                                            }, initManga: function (u) { var a = /InitMangaEncryptedChapter\s*=\s*(\{[\s\S]*?\})\s*;/.exec(u), n = /"decryption_key"\s*:\s*"([^"]+)"/.exec(u); if (!a || !n || typeof CryptoJS == "undefined")
                                                                return ""; var f; try {
                                                                f = JSON.parse(a[1]);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } if (!f || !f.ciphertext)
                                                                return ""; var l = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(n[1])), h = CryptoJS.PBKDF2(l, CryptoJS.enc.Hex.parse(f.salt), { hasher: CryptoJS.algo.SHA512, keySize: 8, iterations: 999 }); try {
                                                                return CryptoJS.AES.decrypt(f.ciphertext, h, { iv: CryptoJS.enc.Hex.parse(f.iv) }).toString(CryptoJS.enc.Utf8);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } }, rscAction: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, p, m, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (n = [], l = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; f = l.exec(u);)
                                                                                n.indexOf(f[0]) < 0 && n.push(f[0]);
                                                                            h = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), p = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(p < n.length && p < 60)) return [3, 5];
                                                                            return [4, d.get(k + n[p])];
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
                                                                for (var a = String(u || "").split("\n"), n = 0; n < a.length; n++) {
                                                                    var f = /^[0-9a-f]+:(\[.*)$/.exec(a[n]);
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
                                                                return __awaiter(this, void 0, void 0, function () { var a, n, f, _b, _c, l, h, p, _d, m, _f, b; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = c.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, c.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), u])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            n = (_g.sent()) || "", f = new RegExp(a.arg).exec(n);
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
                                                                            return [4, x.rscAction(n, a.name)];
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
                                                            }, rscText: function (u) { for (var a = "", n, f = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; n = f.exec(u);)
                                                                try {
                                                                    a += JSON.parse(n[1]);
                                                                }
                                                                catch (D) { } for (var l = "", h = /([0-9a-f]+):T([0-9a-f]+),/g, p; p = h.exec(a);) {
                                                                for (var m = parseInt(p[2], 16), b = h.lastIndex, w = 0; b < a.length && w < m;) {
                                                                    var A = a.charCodeAt(b);
                                                                    A < 128 ? w += 1 : A < 2048 ? w += 2 : A >= 55296 && A <= 56319 ? (w += 4, b++) : w += 3, b++;
                                                                }
                                                                var C = a.slice(h.lastIndex, b);
                                                                C.length > l.length && (l = C), h.lastIndex = b;
                                                            } return l; }, toParas: function (u) { return /<p[\s>]|<br\s*\/?>/i.test(u) ? u : u.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, n; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!c.servers)
                                                                                return [2, o.success([{ title: "Server", data: u }])];
                                                                            return [4, d.html(u, c.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, J(a.select(c.servers), function (f) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var l;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, x.pick(f, c.server_data || ":self@data-link || :self@data-src || :self@href")];
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
                                                                            n = (_b.sent()).filter(function (f) { return f.data; });
                                                                            return [2, o.success(n.length ? n : [{ title: "Server", data: u }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (u) { u = String(u || "").replace(/\\\//g, "/"); var a = u.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || u.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, p, m, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(u))
                                                                                return [2, o.success({ type: "native", data: u, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(u)];
                                                                        case 1:
                                                                            n = _b.sent();
                                                                            return [4, n.text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (!(c.video && !a)) return [3, 4];
                                                                            return [4, x.pick(s.parse(f, u), c.video)];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, o.success({ type: "native", data: d.fix(l), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            h = x.sniff(f);
                                                                            if (h)
                                                                                return [2, o.success({ type: "native", data: h, headers: { Referer: a ? u : k + "/" } })];
                                                                            p = s.parse(f, u), m = p.select(c.iframe || "iframe[src], iframe[data-src]").first();
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
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, search: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (r, i, s, o, g, v, y, S, T, L, q, N, O, M, Q, et, ft) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = t("DOMAIN");
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
                                                    var k, c, d, x;
                                                    return __generator(this, function (_b) {
                                                        k = "https://uukanshu.cc";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (u) { }
                                                        c = { tabs: { 排行: "/top/allvisit_{p}.html", 玄幻: "/class_1_{p}.html", 修真: "/class_2_{p}.html", 都市: "/class_3_{p}.html", 全本: "/quanben/", 首頁: "/" }, search: "/search/{q}/{p}.html", ch_list: "#list-chapterAll dd a, .chapterlist a", item: "div.item, div.bookinfo", title: "dt a || .bookname a", link: "dt a@href || .bookname a@href", cover: "img@img", desc: "dd || .update", pageSize: 10, d_title: "h1", d_cover: "meta[property=og:image]@content", d_author: "meta[property=og:novel:author]@content", d_desc: "meta[property=og:description]@content", content: ".readcotent", c_title: "h1" }, d = { img: function (u) { if (!u)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], n = 0; n < a.length; n++) {
                                                                var f = u.attr(a[n]);
                                                                if (f && f.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(f))
                                                                    return d.fix(f.trim());
                                                            } var l = u.attr("data-srcset") || u.attr("srcset"); return l ? d.fix(l.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (u) { return u ? (u = String(u).trim(), u.indexOf("//") === 0 ? "https:" + u : u.indexOf("http") === 0 ? u : u.charAt(0) === "/" ? k + u : k + "/" + u) : ""; }, text: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            n = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(n < a.length)) return [3, 4];
                                                                            return [4, u.select(a[n]).text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, f.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            n++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            n = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (f in a.headers)
                                                                                    n[f] = a.headers[f];
                                                                            return [4, r(u, { method: a.method, headers: n, body: a.body })];
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
                                                                            return [4, r(u, { method: a.method, headers: n, body: a.body })];
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
                                                                return __awaiter(this, void 0, void 0, function () { var n, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            n = _d.sent();
                                                                            return [4, n.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            n = _d.sent();
                                                                            return [4, n.json()];
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
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, p, m, b, w, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !u)
                                                                                return [2, ""];
                                                                            n = String(a).split(" || "), f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < n.length)) return [3, 9];
                                                                            l = n[f], h = "text", p = l.lastIndexOf("@");
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
                                                            }, url: function (u, a, n) { var f = d.page(a), l = String(u); return l = l.replace(/\[([^\]]*)\]/g, function (h, p) { return f > 1 ? p : ""; }), l = l.replace(/\{p\}/g, String(f)).replace(/\{p0\}/g, String(f - 1)).replace(/\{q\}/g, d.enc(n || "")).replace(/\{base\}/g, k), d.fix(l); }, items: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var n, f, l, h, p, m, b, w, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                n = function (A) { return a && c[a + A] || c[A]; }, f = u.select(n("item")), l = [], h = {}, p = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(p < f.size())) return [3, 9];
                                                                                return [4, f.get(p)];
                                                                            case 2:
                                                                                m = _g.sent();
                                                                                return [4, x.pick(m, n("link") || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || h[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, x.pick(m, n("title") || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                w = _g.sent();
                                                                                _b = w;
                                                                                if (!_b) return [3, 7];
                                                                                h[b] = 1;
                                                                                _d = (_c = l).push;
                                                                                _f = { name: w, link: d.fix(b) };
                                                                                return [4, x.pick(m, n("cover") || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, x.pick(m, n("desc") || "")];
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
                                                            }, listPage: function (u, a, n) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(x.url(u, a, n), c.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            return [4, x.items(f, n ? "s_" : "")];
                                                                        case 2:
                                                                            l = _b.sent(), h = c.next ? f.select(c.next).size() > 0 : l.length >= (c.pageSize || 10);
                                                                            return [2, o.success(l, d.next(h && l.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            n = c.tabs && c.tabs[u] || u;
                                                                            return [4, x.listPage(n, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            if (!(c.q_cut && !d.isUrl(u) && (u = String(u).split(new RegExp(c.q_cut))[0].trim() || u), d.isUrl(u))) return [3, 2];
                                                                            n = d.fix(u);
                                                                            return [4, x.listPage(n + (n.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _c.sent()];
                                                                        case 2:
                                                                            if (!c.search_post) return [3, 5];
                                                                            return [4, d.html(x.url(c.search_post.url, a, u), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: String(c.search_post.body).replace(/\{q\}/g, d.enc(u)) })];
                                                                        case 3:
                                                                            f = _c.sent();
                                                                            return [4, x.items(f, "s_")];
                                                                        case 4:
                                                                            l = _c.sent();
                                                                            return [2, o.success(l, null)];
                                                                        case 5:
                                                                            if (!c.search_json) return [3, 7];
                                                                            return [4, x.jsonSearch(c.search_json, u, a)];
                                                                        case 6:
                                                                            _b = _c.sent();
                                                                            return [3, 9];
                                                                        case 7: return [4, x.listPage(c.search, a, u)];
                                                                        case 8:
                                                                            _b = _c.sent();
                                                                            _c.label = 9;
                                                                        case 9: return [2, _b];
                                                                    }
                                                                }); });
                                                            }, jsonSearch: function (u, a, n) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.json(x.url(u.url, n, a), c.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            u.list && u.list.split(".").forEach(function (p) { f = f && f[p]; });
                                                                            l = function (p, m) { return String(m || "").indexOf("{") >= 0 ? String(m).replace(/\{(\w+)\}/g, function (b, w) { return p[w] == null ? "" : p[w]; }) : p[m] == null ? "" : String(p[m]); }, h = [];
                                                                            return [2, ((f || []).forEach(function (p) { var m = l(p, u.title || "title"), b = l(p, u.link || "url"); m && b && h.push({ name: m, link: d.fix(b), cover: d.fix(l(p, u.cover || "cover")), description: u.desc ? l(p, u.desc) : "", host: k }); }), o.success(h, u.paged && h.length ? d.next(!0, n) : null))];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!c.genre)
                                                                                return [2, o.success([])];
                                                                            return [4, d.html(d.fix(c.genrePage || "/"))];
                                                                        case 1:
                                                                            u = _b.sent();
                                                                            return [4, J(u.select(c.genre), function (n) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, n.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(n.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, o.success(a.filter(function (n) { return n.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, n, f, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(u, c.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!c.d_genres) return [3, 3];
                                                                                return [4, J(a.select(c.d_genres), function (l) {
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
                                                                                n = _b;
                                                                                return [4, x.pick(a, c.d_status)];
                                                                            case 5:
                                                                                f = _j.sent();
                                                                                _d = (_c = o).success;
                                                                                _h = {};
                                                                                return [4, x.pick(a, c.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, x.pick(a, c.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, x.pick(a, c.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, x.pick(a, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = f ? "Tình trạng: " + f : "", _h.ongoing = d.ongoing(f), _h.genres = n, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, n, f, l, h, _b, p, m, b, w, A, _c, _d, _f, _g, C, D, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!c.ch_action) return [3, 2];
                                                                                return [4, x.actionToc(u)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (c.single)
                                                                                    return [2, o.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: u, host: k }])];
                                                                                a = [u], n = [], f = {};
                                                                                return [4, d.html(c.ch_rewrite ? u.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : u, c.req)];
                                                                            case 3:
                                                                                l = _k.sent();
                                                                                if (!c.ch_url) return [3, 7];
                                                                                return [4, x.pick(l, c.ch_url)];
                                                                            case 4:
                                                                                h = _k.sent();
                                                                                _b = h;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(h), c.req)];
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
                                                                                if (!(p < (c.ch_maxPages || 60))) return [3, 22];
                                                                                m = l.select(c.ch_list), b = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(b < m.size())) return [3, 17];
                                                                                return [4, m.get(b)];
                                                                            case 10:
                                                                                w = _k.sent(), A = c.ch_attr ? w.attr(c.ch_attr) : w.attr("href") || w.attr("data-href");
                                                                                _c = !A || A === "#" || f[A];
                                                                                if (_c) return [3, 15];
                                                                                f[A] = 1;
                                                                                _f = (_d = n).push;
                                                                                _j = {};
                                                                                if (!c.ch_name) return [3, 12];
                                                                                return [4, x.pick(w, c.ch_name)];
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
                                                                                C = c.ch_next ? l.select(c.ch_next).first() : null;
                                                                                if (!C || !C.attr("href"))
                                                                                    return [3, 22];
                                                                                D = d.fix(C.attr("href"));
                                                                                if (a.indexOf(D) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(D);
                                                                                _h = c.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, T(c.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(D, c.req)];
                                                                            case 20:
                                                                                l = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                p++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (c.ch_reverse && n.reverse(), !n.length && c.ch_fallback_single && n.push({ name: c.ch_fallback_single === !0 ? "Xem phim" : c.ch_fallback_single, url: u, host: k }), o.success(n))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, n, f, l, h, p, m, b, _b, _c, w, A, C, D, _d, _f, _g, _h, j, V, _j, _k, X, B; return __generator(this, function (_l) {
                                                                    switch (_l.label) {
                                                                        case 0:
                                                                            a = [], n = [u], f = u, l = 0;
                                                                            _l.label = 1;
                                                                        case 1:
                                                                            if (!(l < (c.pages_max || 40))) return [3, 17];
                                                                            if (!c.initmanga) return [3, 5];
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(f, c.req)];
                                                                        case 2: return [4, _c.apply(_b, [_l.sent(), f])];
                                                                        case 3:
                                                                            p = _l.sent();
                                                                            return [4, p.text()];
                                                                        case 4:
                                                                            m = (_l.sent()) || "", b = x.initManga(m);
                                                                            h = s.parse(b ? '<div id="imc-dec">' + b + "</div>" : m, f);
                                                                            return [3, 7];
                                                                        case 5: return [4, d.html(f, c.req)];
                                                                        case 6:
                                                                            h = _l.sent();
                                                                            _l.label = 7;
                                                                        case 7:
                                                                            w = h.select(c.initmanga ? "#imc-dec img, " + (c.pages || "#chapter-content img") : c.pages || ".page-chapter img, .reading-content img, .chapter-content img");
                                                                            if (!c.initmanga) return [3, 11];
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
                                                                            if (!c.pages_next)
                                                                                return [3, 17];
                                                                            X = h.select(c.pages_next).first();
                                                                            if (!X)
                                                                                return [3, 17];
                                                                            B = d.fix(X.attr("href"));
                                                                            if (!B || n.indexOf(B) >= 0)
                                                                                return [3, 17];
                                                                            n.push(B), f = B;
                                                                            _l.label = 16;
                                                                        case 16:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 17: return [2, o.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, n, _b, _c, f, l, h, _d, _f, _g, p, _h, _j, _k, m, b, _l, _m, _o, _p, _q, _s; return __generator(this, function (_v) {
                                                                    switch (_v.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, c.req)];
                                                                        case 1: return [4, _c.apply(_b, [_v.sent(), u])];
                                                                        case 2:
                                                                            a = _v.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            n = (_v.sent()) || "";
                                                                            if (!c.content_rsc) return [3, 5];
                                                                            f = x.rscText(n), l = c.c_locked && new RegExp(c.c_locked, "i").test(n), h = l ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(f || l)) return [3, 5];
                                                                            _f = (_d = o).success;
                                                                            _g = [x.toParas(f) + h];
                                                                            return [4, x.pick(s.parse(n, u), c.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_v.sent()]))];
                                                                        case 5:
                                                                            if (!c.initmanga) return [3, 8];
                                                                            p = x.initManga(n);
                                                                            if (!p) return [3, 8];
                                                                            _j = (_h = o).success;
                                                                            return [4, d.cleanContent(s.parse('<div id="imc-dec">' + p + "</div>", u).select("#imc-dec").first())];
                                                                        case 6:
                                                                            _k = [_v.sent()];
                                                                            return [4, x.pick(s.parse(n, u), c.c_title || "h1 || h2")];
                                                                        case 7: return [2, _j.apply(_h, _k.concat([_v.sent()]))];
                                                                        case 8:
                                                                            m = s.parse(n, u), b = m.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!b) return [3, 10];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(n.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _m = (_l = o).error;
                                                                            _o = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, x.pick(m, "title")];
                                                                        case 9: return [2, _m.apply(_l, [_o + ((_v.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + n.length + " ký tự)" + (n.length < 400 ? ": " + n.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 10:
                                                                            _q = (_p = o).success;
                                                                            return [4, d.cleanContent(b)];
                                                                        case 11:
                                                                            _s = [_v.sent()];
                                                                            return [4, x.pick(m, c.c_title || "h1 || h2")];
                                                                        case 12: return [2, _q.apply(_p, _s.concat([_v.sent()]))];
                                                                    }
                                                                }); });
                                                            }, initManga: function (u) { var a = /InitMangaEncryptedChapter\s*=\s*(\{[\s\S]*?\})\s*;/.exec(u), n = /"decryption_key"\s*:\s*"([^"]+)"/.exec(u); if (!a || !n || typeof CryptoJS == "undefined")
                                                                return ""; var f; try {
                                                                f = JSON.parse(a[1]);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } if (!f || !f.ciphertext)
                                                                return ""; var l = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(n[1])), h = CryptoJS.PBKDF2(l, CryptoJS.enc.Hex.parse(f.salt), { hasher: CryptoJS.algo.SHA512, keySize: 8, iterations: 999 }); try {
                                                                return CryptoJS.AES.decrypt(f.ciphertext, h, { iv: CryptoJS.enc.Hex.parse(f.iv) }).toString(CryptoJS.enc.Utf8);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } }, rscAction: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, p, m, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (n = [], l = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; f = l.exec(u);)
                                                                                n.indexOf(f[0]) < 0 && n.push(f[0]);
                                                                            h = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), p = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(p < n.length && p < 60)) return [3, 5];
                                                                            return [4, d.get(k + n[p])];
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
                                                                for (var a = String(u || "").split("\n"), n = 0; n < a.length; n++) {
                                                                    var f = /^[0-9a-f]+:(\[.*)$/.exec(a[n]);
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
                                                                return __awaiter(this, void 0, void 0, function () { var a, n, f, _b, _c, l, h, p, _d, m, _f, b; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = c.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, c.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), u])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            n = (_g.sent()) || "", f = new RegExp(a.arg).exec(n);
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
                                                                            return [4, x.rscAction(n, a.name)];
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
                                                            }, rscText: function (u) { for (var a = "", n, f = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; n = f.exec(u);)
                                                                try {
                                                                    a += JSON.parse(n[1]);
                                                                }
                                                                catch (D) { } for (var l = "", h = /([0-9a-f]+):T([0-9a-f]+),/g, p; p = h.exec(a);) {
                                                                for (var m = parseInt(p[2], 16), b = h.lastIndex, w = 0; b < a.length && w < m;) {
                                                                    var A = a.charCodeAt(b);
                                                                    A < 128 ? w += 1 : A < 2048 ? w += 2 : A >= 55296 && A <= 56319 ? (w += 4, b++) : w += 3, b++;
                                                                }
                                                                var C = a.slice(h.lastIndex, b);
                                                                C.length > l.length && (l = C), h.lastIndex = b;
                                                            } return l; }, toParas: function (u) { return /<p[\s>]|<br\s*\/?>/i.test(u) ? u : u.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, n; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!c.servers)
                                                                                return [2, o.success([{ title: "Server", data: u }])];
                                                                            return [4, d.html(u, c.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, J(a.select(c.servers), function (f) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var l;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, x.pick(f, c.server_data || ":self@data-link || :self@data-src || :self@href")];
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
                                                                            n = (_b.sent()).filter(function (f) { return f.data; });
                                                                            return [2, o.success(n.length ? n : [{ title: "Server", data: u }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (u) { u = String(u || "").replace(/\\\//g, "/"); var a = u.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || u.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, p, m, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(u))
                                                                                return [2, o.success({ type: "native", data: u, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(u)];
                                                                        case 1:
                                                                            n = _b.sent();
                                                                            return [4, n.text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (!(c.video && !a)) return [3, 4];
                                                                            return [4, x.pick(s.parse(f, u), c.video)];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, o.success({ type: "native", data: d.fix(l), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            h = x.sniff(f);
                                                                            if (h)
                                                                                return [2, o.success({ type: "native", data: h, headers: { Referer: a ? u : k + "/" } })];
                                                                            p = s.parse(f, u), m = p.select(c.iframe || "iframe[src], iframe[data-src]").first();
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
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, detail: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (r, i, s, o, g, v, y, S, T, L, q, N, O, M, Q, et, ft) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = t("DOMAIN");
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
                                                    var k, c, d, x;
                                                    return __generator(this, function (_b) {
                                                        k = "https://uukanshu.cc";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (u) { }
                                                        c = { tabs: { 排行: "/top/allvisit_{p}.html", 玄幻: "/class_1_{p}.html", 修真: "/class_2_{p}.html", 都市: "/class_3_{p}.html", 全本: "/quanben/", 首頁: "/" }, search: "/search/{q}/{p}.html", ch_list: "#list-chapterAll dd a, .chapterlist a", item: "div.item, div.bookinfo", title: "dt a || .bookname a", link: "dt a@href || .bookname a@href", cover: "img@img", desc: "dd || .update", pageSize: 10, d_title: "h1", d_cover: "meta[property=og:image]@content", d_author: "meta[property=og:novel:author]@content", d_desc: "meta[property=og:description]@content", content: ".readcotent", c_title: "h1" }, d = { img: function (u) { if (!u)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], n = 0; n < a.length; n++) {
                                                                var f = u.attr(a[n]);
                                                                if (f && f.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(f))
                                                                    return d.fix(f.trim());
                                                            } var l = u.attr("data-srcset") || u.attr("srcset"); return l ? d.fix(l.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (u) { return u ? (u = String(u).trim(), u.indexOf("//") === 0 ? "https:" + u : u.indexOf("http") === 0 ? u : u.charAt(0) === "/" ? k + u : k + "/" + u) : ""; }, text: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            n = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(n < a.length)) return [3, 4];
                                                                            return [4, u.select(a[n]).text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, f.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            n++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            n = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (f in a.headers)
                                                                                    n[f] = a.headers[f];
                                                                            return [4, r(u, { method: a.method, headers: n, body: a.body })];
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
                                                                            return [4, r(u, { method: a.method, headers: n, body: a.body })];
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
                                                                return __awaiter(this, void 0, void 0, function () { var n, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            n = _d.sent();
                                                                            return [4, n.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            n = _d.sent();
                                                                            return [4, n.json()];
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
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, p, m, b, w, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !u)
                                                                                return [2, ""];
                                                                            n = String(a).split(" || "), f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < n.length)) return [3, 9];
                                                                            l = n[f], h = "text", p = l.lastIndexOf("@");
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
                                                            }, url: function (u, a, n) { var f = d.page(a), l = String(u); return l = l.replace(/\[([^\]]*)\]/g, function (h, p) { return f > 1 ? p : ""; }), l = l.replace(/\{p\}/g, String(f)).replace(/\{p0\}/g, String(f - 1)).replace(/\{q\}/g, d.enc(n || "")).replace(/\{base\}/g, k), d.fix(l); }, items: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var n, f, l, h, p, m, b, w, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                n = function (A) { return a && c[a + A] || c[A]; }, f = u.select(n("item")), l = [], h = {}, p = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(p < f.size())) return [3, 9];
                                                                                return [4, f.get(p)];
                                                                            case 2:
                                                                                m = _g.sent();
                                                                                return [4, x.pick(m, n("link") || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || h[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, x.pick(m, n("title") || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                w = _g.sent();
                                                                                _b = w;
                                                                                if (!_b) return [3, 7];
                                                                                h[b] = 1;
                                                                                _d = (_c = l).push;
                                                                                _f = { name: w, link: d.fix(b) };
                                                                                return [4, x.pick(m, n("cover") || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, x.pick(m, n("desc") || "")];
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
                                                            }, listPage: function (u, a, n) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(x.url(u, a, n), c.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            return [4, x.items(f, n ? "s_" : "")];
                                                                        case 2:
                                                                            l = _b.sent(), h = c.next ? f.select(c.next).size() > 0 : l.length >= (c.pageSize || 10);
                                                                            return [2, o.success(l, d.next(h && l.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            n = c.tabs && c.tabs[u] || u;
                                                                            return [4, x.listPage(n, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            if (!(c.q_cut && !d.isUrl(u) && (u = String(u).split(new RegExp(c.q_cut))[0].trim() || u), d.isUrl(u))) return [3, 2];
                                                                            n = d.fix(u);
                                                                            return [4, x.listPage(n + (n.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _c.sent()];
                                                                        case 2:
                                                                            if (!c.search_post) return [3, 5];
                                                                            return [4, d.html(x.url(c.search_post.url, a, u), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: String(c.search_post.body).replace(/\{q\}/g, d.enc(u)) })];
                                                                        case 3:
                                                                            f = _c.sent();
                                                                            return [4, x.items(f, "s_")];
                                                                        case 4:
                                                                            l = _c.sent();
                                                                            return [2, o.success(l, null)];
                                                                        case 5:
                                                                            if (!c.search_json) return [3, 7];
                                                                            return [4, x.jsonSearch(c.search_json, u, a)];
                                                                        case 6:
                                                                            _b = _c.sent();
                                                                            return [3, 9];
                                                                        case 7: return [4, x.listPage(c.search, a, u)];
                                                                        case 8:
                                                                            _b = _c.sent();
                                                                            _c.label = 9;
                                                                        case 9: return [2, _b];
                                                                    }
                                                                }); });
                                                            }, jsonSearch: function (u, a, n) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.json(x.url(u.url, n, a), c.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            u.list && u.list.split(".").forEach(function (p) { f = f && f[p]; });
                                                                            l = function (p, m) { return String(m || "").indexOf("{") >= 0 ? String(m).replace(/\{(\w+)\}/g, function (b, w) { return p[w] == null ? "" : p[w]; }) : p[m] == null ? "" : String(p[m]); }, h = [];
                                                                            return [2, ((f || []).forEach(function (p) { var m = l(p, u.title || "title"), b = l(p, u.link || "url"); m && b && h.push({ name: m, link: d.fix(b), cover: d.fix(l(p, u.cover || "cover")), description: u.desc ? l(p, u.desc) : "", host: k }); }), o.success(h, u.paged && h.length ? d.next(!0, n) : null))];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!c.genre)
                                                                                return [2, o.success([])];
                                                                            return [4, d.html(d.fix(c.genrePage || "/"))];
                                                                        case 1:
                                                                            u = _b.sent();
                                                                            return [4, J(u.select(c.genre), function (n) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, n.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(n.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, o.success(a.filter(function (n) { return n.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, n, f, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(u, c.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!c.d_genres) return [3, 3];
                                                                                return [4, J(a.select(c.d_genres), function (l) {
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
                                                                                n = _b;
                                                                                return [4, x.pick(a, c.d_status)];
                                                                            case 5:
                                                                                f = _j.sent();
                                                                                _d = (_c = o).success;
                                                                                _h = {};
                                                                                return [4, x.pick(a, c.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, x.pick(a, c.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, x.pick(a, c.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, x.pick(a, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = f ? "Tình trạng: " + f : "", _h.ongoing = d.ongoing(f), _h.genres = n, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, n, f, l, h, _b, p, m, b, w, A, _c, _d, _f, _g, C, D, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!c.ch_action) return [3, 2];
                                                                                return [4, x.actionToc(u)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (c.single)
                                                                                    return [2, o.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: u, host: k }])];
                                                                                a = [u], n = [], f = {};
                                                                                return [4, d.html(c.ch_rewrite ? u.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : u, c.req)];
                                                                            case 3:
                                                                                l = _k.sent();
                                                                                if (!c.ch_url) return [3, 7];
                                                                                return [4, x.pick(l, c.ch_url)];
                                                                            case 4:
                                                                                h = _k.sent();
                                                                                _b = h;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(h), c.req)];
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
                                                                                if (!(p < (c.ch_maxPages || 60))) return [3, 22];
                                                                                m = l.select(c.ch_list), b = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(b < m.size())) return [3, 17];
                                                                                return [4, m.get(b)];
                                                                            case 10:
                                                                                w = _k.sent(), A = c.ch_attr ? w.attr(c.ch_attr) : w.attr("href") || w.attr("data-href");
                                                                                _c = !A || A === "#" || f[A];
                                                                                if (_c) return [3, 15];
                                                                                f[A] = 1;
                                                                                _f = (_d = n).push;
                                                                                _j = {};
                                                                                if (!c.ch_name) return [3, 12];
                                                                                return [4, x.pick(w, c.ch_name)];
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
                                                                                C = c.ch_next ? l.select(c.ch_next).first() : null;
                                                                                if (!C || !C.attr("href"))
                                                                                    return [3, 22];
                                                                                D = d.fix(C.attr("href"));
                                                                                if (a.indexOf(D) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(D);
                                                                                _h = c.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, T(c.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(D, c.req)];
                                                                            case 20:
                                                                                l = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                p++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (c.ch_reverse && n.reverse(), !n.length && c.ch_fallback_single && n.push({ name: c.ch_fallback_single === !0 ? "Xem phim" : c.ch_fallback_single, url: u, host: k }), o.success(n))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, n, f, l, h, p, m, b, _b, _c, w, A, C, D, _d, _f, _g, _h, j, V, _j, _k, X, B; return __generator(this, function (_l) {
                                                                    switch (_l.label) {
                                                                        case 0:
                                                                            a = [], n = [u], f = u, l = 0;
                                                                            _l.label = 1;
                                                                        case 1:
                                                                            if (!(l < (c.pages_max || 40))) return [3, 17];
                                                                            if (!c.initmanga) return [3, 5];
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(f, c.req)];
                                                                        case 2: return [4, _c.apply(_b, [_l.sent(), f])];
                                                                        case 3:
                                                                            p = _l.sent();
                                                                            return [4, p.text()];
                                                                        case 4:
                                                                            m = (_l.sent()) || "", b = x.initManga(m);
                                                                            h = s.parse(b ? '<div id="imc-dec">' + b + "</div>" : m, f);
                                                                            return [3, 7];
                                                                        case 5: return [4, d.html(f, c.req)];
                                                                        case 6:
                                                                            h = _l.sent();
                                                                            _l.label = 7;
                                                                        case 7:
                                                                            w = h.select(c.initmanga ? "#imc-dec img, " + (c.pages || "#chapter-content img") : c.pages || ".page-chapter img, .reading-content img, .chapter-content img");
                                                                            if (!c.initmanga) return [3, 11];
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
                                                                            if (!c.pages_next)
                                                                                return [3, 17];
                                                                            X = h.select(c.pages_next).first();
                                                                            if (!X)
                                                                                return [3, 17];
                                                                            B = d.fix(X.attr("href"));
                                                                            if (!B || n.indexOf(B) >= 0)
                                                                                return [3, 17];
                                                                            n.push(B), f = B;
                                                                            _l.label = 16;
                                                                        case 16:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 17: return [2, o.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, n, _b, _c, f, l, h, _d, _f, _g, p, _h, _j, _k, m, b, _l, _m, _o, _p, _q, _s; return __generator(this, function (_v) {
                                                                    switch (_v.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, c.req)];
                                                                        case 1: return [4, _c.apply(_b, [_v.sent(), u])];
                                                                        case 2:
                                                                            a = _v.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            n = (_v.sent()) || "";
                                                                            if (!c.content_rsc) return [3, 5];
                                                                            f = x.rscText(n), l = c.c_locked && new RegExp(c.c_locked, "i").test(n), h = l ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(f || l)) return [3, 5];
                                                                            _f = (_d = o).success;
                                                                            _g = [x.toParas(f) + h];
                                                                            return [4, x.pick(s.parse(n, u), c.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_v.sent()]))];
                                                                        case 5:
                                                                            if (!c.initmanga) return [3, 8];
                                                                            p = x.initManga(n);
                                                                            if (!p) return [3, 8];
                                                                            _j = (_h = o).success;
                                                                            return [4, d.cleanContent(s.parse('<div id="imc-dec">' + p + "</div>", u).select("#imc-dec").first())];
                                                                        case 6:
                                                                            _k = [_v.sent()];
                                                                            return [4, x.pick(s.parse(n, u), c.c_title || "h1 || h2")];
                                                                        case 7: return [2, _j.apply(_h, _k.concat([_v.sent()]))];
                                                                        case 8:
                                                                            m = s.parse(n, u), b = m.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!b) return [3, 10];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(n.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _m = (_l = o).error;
                                                                            _o = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, x.pick(m, "title")];
                                                                        case 9: return [2, _m.apply(_l, [_o + ((_v.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + n.length + " ký tự)" + (n.length < 400 ? ": " + n.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 10:
                                                                            _q = (_p = o).success;
                                                                            return [4, d.cleanContent(b)];
                                                                        case 11:
                                                                            _s = [_v.sent()];
                                                                            return [4, x.pick(m, c.c_title || "h1 || h2")];
                                                                        case 12: return [2, _q.apply(_p, _s.concat([_v.sent()]))];
                                                                    }
                                                                }); });
                                                            }, initManga: function (u) { var a = /InitMangaEncryptedChapter\s*=\s*(\{[\s\S]*?\})\s*;/.exec(u), n = /"decryption_key"\s*:\s*"([^"]+)"/.exec(u); if (!a || !n || typeof CryptoJS == "undefined")
                                                                return ""; var f; try {
                                                                f = JSON.parse(a[1]);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } if (!f || !f.ciphertext)
                                                                return ""; var l = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(n[1])), h = CryptoJS.PBKDF2(l, CryptoJS.enc.Hex.parse(f.salt), { hasher: CryptoJS.algo.SHA512, keySize: 8, iterations: 999 }); try {
                                                                return CryptoJS.AES.decrypt(f.ciphertext, h, { iv: CryptoJS.enc.Hex.parse(f.iv) }).toString(CryptoJS.enc.Utf8);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } }, rscAction: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, p, m, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (n = [], l = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; f = l.exec(u);)
                                                                                n.indexOf(f[0]) < 0 && n.push(f[0]);
                                                                            h = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), p = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(p < n.length && p < 60)) return [3, 5];
                                                                            return [4, d.get(k + n[p])];
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
                                                                for (var a = String(u || "").split("\n"), n = 0; n < a.length; n++) {
                                                                    var f = /^[0-9a-f]+:(\[.*)$/.exec(a[n]);
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
                                                                return __awaiter(this, void 0, void 0, function () { var a, n, f, _b, _c, l, h, p, _d, m, _f, b; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = c.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, c.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), u])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            n = (_g.sent()) || "", f = new RegExp(a.arg).exec(n);
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
                                                                            return [4, x.rscAction(n, a.name)];
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
                                                            }, rscText: function (u) { for (var a = "", n, f = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; n = f.exec(u);)
                                                                try {
                                                                    a += JSON.parse(n[1]);
                                                                }
                                                                catch (D) { } for (var l = "", h = /([0-9a-f]+):T([0-9a-f]+),/g, p; p = h.exec(a);) {
                                                                for (var m = parseInt(p[2], 16), b = h.lastIndex, w = 0; b < a.length && w < m;) {
                                                                    var A = a.charCodeAt(b);
                                                                    A < 128 ? w += 1 : A < 2048 ? w += 2 : A >= 55296 && A <= 56319 ? (w += 4, b++) : w += 3, b++;
                                                                }
                                                                var C = a.slice(h.lastIndex, b);
                                                                C.length > l.length && (l = C), h.lastIndex = b;
                                                            } return l; }, toParas: function (u) { return /<p[\s>]|<br\s*\/?>/i.test(u) ? u : u.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, n; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!c.servers)
                                                                                return [2, o.success([{ title: "Server", data: u }])];
                                                                            return [4, d.html(u, c.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, J(a.select(c.servers), function (f) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var l;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, x.pick(f, c.server_data || ":self@data-link || :self@data-src || :self@href")];
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
                                                                            n = (_b.sent()).filter(function (f) { return f.data; });
                                                                            return [2, o.success(n.length ? n : [{ title: "Server", data: u }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (u) { u = String(u || "").replace(/\\\//g, "/"); var a = u.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || u.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, p, m, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(u))
                                                                                return [2, o.success({ type: "native", data: u, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(u)];
                                                                        case 1:
                                                                            n = _b.sent();
                                                                            return [4, n.text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (!(c.video && !a)) return [3, 4];
                                                                            return [4, x.pick(s.parse(f, u), c.video)];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, o.success({ type: "native", data: d.fix(l), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            h = x.sniff(f);
                                                                            if (h)
                                                                                return [2, o.success({ type: "native", data: h, headers: { Referer: a ? u : k + "/" } })];
                                                                            p = s.parse(f, u), m = p.select(c.iframe || "iframe[src], iframe[data-src]").first();
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
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, toc: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (r, i, s, o, g, v, y, S, T, L, q, N, O, M, Q, et, ft) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = t("DOMAIN");
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
                                                    var k, c, d, x;
                                                    return __generator(this, function (_b) {
                                                        k = "https://uukanshu.cc";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (u) { }
                                                        c = { tabs: { 排行: "/top/allvisit_{p}.html", 玄幻: "/class_1_{p}.html", 修真: "/class_2_{p}.html", 都市: "/class_3_{p}.html", 全本: "/quanben/", 首頁: "/" }, search: "/search/{q}/{p}.html", ch_list: "#list-chapterAll dd a, .chapterlist a", item: "div.item, div.bookinfo", title: "dt a || .bookname a", link: "dt a@href || .bookname a@href", cover: "img@img", desc: "dd || .update", pageSize: 10, d_title: "h1", d_cover: "meta[property=og:image]@content", d_author: "meta[property=og:novel:author]@content", d_desc: "meta[property=og:description]@content", content: ".readcotent", c_title: "h1" }, d = { img: function (u) { if (!u)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], n = 0; n < a.length; n++) {
                                                                var f = u.attr(a[n]);
                                                                if (f && f.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(f))
                                                                    return d.fix(f.trim());
                                                            } var l = u.attr("data-srcset") || u.attr("srcset"); return l ? d.fix(l.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (u) { return u ? (u = String(u).trim(), u.indexOf("//") === 0 ? "https:" + u : u.indexOf("http") === 0 ? u : u.charAt(0) === "/" ? k + u : k + "/" + u) : ""; }, text: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            n = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(n < a.length)) return [3, 4];
                                                                            return [4, u.select(a[n]).text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, f.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            n++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            n = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (f in a.headers)
                                                                                    n[f] = a.headers[f];
                                                                            return [4, r(u, { method: a.method, headers: n, body: a.body })];
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
                                                                            return [4, r(u, { method: a.method, headers: n, body: a.body })];
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
                                                                return __awaiter(this, void 0, void 0, function () { var n, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            n = _d.sent();
                                                                            return [4, n.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            n = _d.sent();
                                                                            return [4, n.json()];
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
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, p, m, b, w, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !u)
                                                                                return [2, ""];
                                                                            n = String(a).split(" || "), f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < n.length)) return [3, 9];
                                                                            l = n[f], h = "text", p = l.lastIndexOf("@");
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
                                                            }, url: function (u, a, n) { var f = d.page(a), l = String(u); return l = l.replace(/\[([^\]]*)\]/g, function (h, p) { return f > 1 ? p : ""; }), l = l.replace(/\{p\}/g, String(f)).replace(/\{p0\}/g, String(f - 1)).replace(/\{q\}/g, d.enc(n || "")).replace(/\{base\}/g, k), d.fix(l); }, items: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var n, f, l, h, p, m, b, w, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                n = function (A) { return a && c[a + A] || c[A]; }, f = u.select(n("item")), l = [], h = {}, p = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(p < f.size())) return [3, 9];
                                                                                return [4, f.get(p)];
                                                                            case 2:
                                                                                m = _g.sent();
                                                                                return [4, x.pick(m, n("link") || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || h[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, x.pick(m, n("title") || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                w = _g.sent();
                                                                                _b = w;
                                                                                if (!_b) return [3, 7];
                                                                                h[b] = 1;
                                                                                _d = (_c = l).push;
                                                                                _f = { name: w, link: d.fix(b) };
                                                                                return [4, x.pick(m, n("cover") || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, x.pick(m, n("desc") || "")];
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
                                                            }, listPage: function (u, a, n) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(x.url(u, a, n), c.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            return [4, x.items(f, n ? "s_" : "")];
                                                                        case 2:
                                                                            l = _b.sent(), h = c.next ? f.select(c.next).size() > 0 : l.length >= (c.pageSize || 10);
                                                                            return [2, o.success(l, d.next(h && l.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            n = c.tabs && c.tabs[u] || u;
                                                                            return [4, x.listPage(n, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            if (!(c.q_cut && !d.isUrl(u) && (u = String(u).split(new RegExp(c.q_cut))[0].trim() || u), d.isUrl(u))) return [3, 2];
                                                                            n = d.fix(u);
                                                                            return [4, x.listPage(n + (n.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _c.sent()];
                                                                        case 2:
                                                                            if (!c.search_post) return [3, 5];
                                                                            return [4, d.html(x.url(c.search_post.url, a, u), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: String(c.search_post.body).replace(/\{q\}/g, d.enc(u)) })];
                                                                        case 3:
                                                                            f = _c.sent();
                                                                            return [4, x.items(f, "s_")];
                                                                        case 4:
                                                                            l = _c.sent();
                                                                            return [2, o.success(l, null)];
                                                                        case 5:
                                                                            if (!c.search_json) return [3, 7];
                                                                            return [4, x.jsonSearch(c.search_json, u, a)];
                                                                        case 6:
                                                                            _b = _c.sent();
                                                                            return [3, 9];
                                                                        case 7: return [4, x.listPage(c.search, a, u)];
                                                                        case 8:
                                                                            _b = _c.sent();
                                                                            _c.label = 9;
                                                                        case 9: return [2, _b];
                                                                    }
                                                                }); });
                                                            }, jsonSearch: function (u, a, n) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.json(x.url(u.url, n, a), c.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            u.list && u.list.split(".").forEach(function (p) { f = f && f[p]; });
                                                                            l = function (p, m) { return String(m || "").indexOf("{") >= 0 ? String(m).replace(/\{(\w+)\}/g, function (b, w) { return p[w] == null ? "" : p[w]; }) : p[m] == null ? "" : String(p[m]); }, h = [];
                                                                            return [2, ((f || []).forEach(function (p) { var m = l(p, u.title || "title"), b = l(p, u.link || "url"); m && b && h.push({ name: m, link: d.fix(b), cover: d.fix(l(p, u.cover || "cover")), description: u.desc ? l(p, u.desc) : "", host: k }); }), o.success(h, u.paged && h.length ? d.next(!0, n) : null))];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!c.genre)
                                                                                return [2, o.success([])];
                                                                            return [4, d.html(d.fix(c.genrePage || "/"))];
                                                                        case 1:
                                                                            u = _b.sent();
                                                                            return [4, J(u.select(c.genre), function (n) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, n.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(n.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, o.success(a.filter(function (n) { return n.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, n, f, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(u, c.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!c.d_genres) return [3, 3];
                                                                                return [4, J(a.select(c.d_genres), function (l) {
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
                                                                                n = _b;
                                                                                return [4, x.pick(a, c.d_status)];
                                                                            case 5:
                                                                                f = _j.sent();
                                                                                _d = (_c = o).success;
                                                                                _h = {};
                                                                                return [4, x.pick(a, c.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, x.pick(a, c.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, x.pick(a, c.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, x.pick(a, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = f ? "Tình trạng: " + f : "", _h.ongoing = d.ongoing(f), _h.genres = n, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, n, f, l, h, _b, p, m, b, w, A, _c, _d, _f, _g, C, D, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!c.ch_action) return [3, 2];
                                                                                return [4, x.actionToc(u)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (c.single)
                                                                                    return [2, o.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: u, host: k }])];
                                                                                a = [u], n = [], f = {};
                                                                                return [4, d.html(c.ch_rewrite ? u.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : u, c.req)];
                                                                            case 3:
                                                                                l = _k.sent();
                                                                                if (!c.ch_url) return [3, 7];
                                                                                return [4, x.pick(l, c.ch_url)];
                                                                            case 4:
                                                                                h = _k.sent();
                                                                                _b = h;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(h), c.req)];
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
                                                                                if (!(p < (c.ch_maxPages || 60))) return [3, 22];
                                                                                m = l.select(c.ch_list), b = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(b < m.size())) return [3, 17];
                                                                                return [4, m.get(b)];
                                                                            case 10:
                                                                                w = _k.sent(), A = c.ch_attr ? w.attr(c.ch_attr) : w.attr("href") || w.attr("data-href");
                                                                                _c = !A || A === "#" || f[A];
                                                                                if (_c) return [3, 15];
                                                                                f[A] = 1;
                                                                                _f = (_d = n).push;
                                                                                _j = {};
                                                                                if (!c.ch_name) return [3, 12];
                                                                                return [4, x.pick(w, c.ch_name)];
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
                                                                                C = c.ch_next ? l.select(c.ch_next).first() : null;
                                                                                if (!C || !C.attr("href"))
                                                                                    return [3, 22];
                                                                                D = d.fix(C.attr("href"));
                                                                                if (a.indexOf(D) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(D);
                                                                                _h = c.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, T(c.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(D, c.req)];
                                                                            case 20:
                                                                                l = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                p++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (c.ch_reverse && n.reverse(), !n.length && c.ch_fallback_single && n.push({ name: c.ch_fallback_single === !0 ? "Xem phim" : c.ch_fallback_single, url: u, host: k }), o.success(n))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, n, f, l, h, p, m, b, _b, _c, w, A, C, D, _d, _f, _g, _h, j, V, _j, _k, X, B; return __generator(this, function (_l) {
                                                                    switch (_l.label) {
                                                                        case 0:
                                                                            a = [], n = [u], f = u, l = 0;
                                                                            _l.label = 1;
                                                                        case 1:
                                                                            if (!(l < (c.pages_max || 40))) return [3, 17];
                                                                            if (!c.initmanga) return [3, 5];
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(f, c.req)];
                                                                        case 2: return [4, _c.apply(_b, [_l.sent(), f])];
                                                                        case 3:
                                                                            p = _l.sent();
                                                                            return [4, p.text()];
                                                                        case 4:
                                                                            m = (_l.sent()) || "", b = x.initManga(m);
                                                                            h = s.parse(b ? '<div id="imc-dec">' + b + "</div>" : m, f);
                                                                            return [3, 7];
                                                                        case 5: return [4, d.html(f, c.req)];
                                                                        case 6:
                                                                            h = _l.sent();
                                                                            _l.label = 7;
                                                                        case 7:
                                                                            w = h.select(c.initmanga ? "#imc-dec img, " + (c.pages || "#chapter-content img") : c.pages || ".page-chapter img, .reading-content img, .chapter-content img");
                                                                            if (!c.initmanga) return [3, 11];
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
                                                                            if (!c.pages_next)
                                                                                return [3, 17];
                                                                            X = h.select(c.pages_next).first();
                                                                            if (!X)
                                                                                return [3, 17];
                                                                            B = d.fix(X.attr("href"));
                                                                            if (!B || n.indexOf(B) >= 0)
                                                                                return [3, 17];
                                                                            n.push(B), f = B;
                                                                            _l.label = 16;
                                                                        case 16:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 17: return [2, o.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, n, _b, _c, f, l, h, _d, _f, _g, p, _h, _j, _k, m, b, _l, _m, _o, _p, _q, _s; return __generator(this, function (_v) {
                                                                    switch (_v.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, c.req)];
                                                                        case 1: return [4, _c.apply(_b, [_v.sent(), u])];
                                                                        case 2:
                                                                            a = _v.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            n = (_v.sent()) || "";
                                                                            if (!c.content_rsc) return [3, 5];
                                                                            f = x.rscText(n), l = c.c_locked && new RegExp(c.c_locked, "i").test(n), h = l ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(f || l)) return [3, 5];
                                                                            _f = (_d = o).success;
                                                                            _g = [x.toParas(f) + h];
                                                                            return [4, x.pick(s.parse(n, u), c.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_v.sent()]))];
                                                                        case 5:
                                                                            if (!c.initmanga) return [3, 8];
                                                                            p = x.initManga(n);
                                                                            if (!p) return [3, 8];
                                                                            _j = (_h = o).success;
                                                                            return [4, d.cleanContent(s.parse('<div id="imc-dec">' + p + "</div>", u).select("#imc-dec").first())];
                                                                        case 6:
                                                                            _k = [_v.sent()];
                                                                            return [4, x.pick(s.parse(n, u), c.c_title || "h1 || h2")];
                                                                        case 7: return [2, _j.apply(_h, _k.concat([_v.sent()]))];
                                                                        case 8:
                                                                            m = s.parse(n, u), b = m.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!b) return [3, 10];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(n.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _m = (_l = o).error;
                                                                            _o = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, x.pick(m, "title")];
                                                                        case 9: return [2, _m.apply(_l, [_o + ((_v.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + n.length + " ký tự)" + (n.length < 400 ? ": " + n.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 10:
                                                                            _q = (_p = o).success;
                                                                            return [4, d.cleanContent(b)];
                                                                        case 11:
                                                                            _s = [_v.sent()];
                                                                            return [4, x.pick(m, c.c_title || "h1 || h2")];
                                                                        case 12: return [2, _q.apply(_p, _s.concat([_v.sent()]))];
                                                                    }
                                                                }); });
                                                            }, initManga: function (u) { var a = /InitMangaEncryptedChapter\s*=\s*(\{[\s\S]*?\})\s*;/.exec(u), n = /"decryption_key"\s*:\s*"([^"]+)"/.exec(u); if (!a || !n || typeof CryptoJS == "undefined")
                                                                return ""; var f; try {
                                                                f = JSON.parse(a[1]);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } if (!f || !f.ciphertext)
                                                                return ""; var l = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(n[1])), h = CryptoJS.PBKDF2(l, CryptoJS.enc.Hex.parse(f.salt), { hasher: CryptoJS.algo.SHA512, keySize: 8, iterations: 999 }); try {
                                                                return CryptoJS.AES.decrypt(f.ciphertext, h, { iv: CryptoJS.enc.Hex.parse(f.iv) }).toString(CryptoJS.enc.Utf8);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } }, rscAction: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, p, m, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (n = [], l = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; f = l.exec(u);)
                                                                                n.indexOf(f[0]) < 0 && n.push(f[0]);
                                                                            h = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), p = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(p < n.length && p < 60)) return [3, 5];
                                                                            return [4, d.get(k + n[p])];
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
                                                                for (var a = String(u || "").split("\n"), n = 0; n < a.length; n++) {
                                                                    var f = /^[0-9a-f]+:(\[.*)$/.exec(a[n]);
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
                                                                return __awaiter(this, void 0, void 0, function () { var a, n, f, _b, _c, l, h, p, _d, m, _f, b; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = c.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, c.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), u])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            n = (_g.sent()) || "", f = new RegExp(a.arg).exec(n);
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
                                                                            return [4, x.rscAction(n, a.name)];
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
                                                            }, rscText: function (u) { for (var a = "", n, f = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; n = f.exec(u);)
                                                                try {
                                                                    a += JSON.parse(n[1]);
                                                                }
                                                                catch (D) { } for (var l = "", h = /([0-9a-f]+):T([0-9a-f]+),/g, p; p = h.exec(a);) {
                                                                for (var m = parseInt(p[2], 16), b = h.lastIndex, w = 0; b < a.length && w < m;) {
                                                                    var A = a.charCodeAt(b);
                                                                    A < 128 ? w += 1 : A < 2048 ? w += 2 : A >= 55296 && A <= 56319 ? (w += 4, b++) : w += 3, b++;
                                                                }
                                                                var C = a.slice(h.lastIndex, b);
                                                                C.length > l.length && (l = C), h.lastIndex = b;
                                                            } return l; }, toParas: function (u) { return /<p[\s>]|<br\s*\/?>/i.test(u) ? u : u.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, n; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!c.servers)
                                                                                return [2, o.success([{ title: "Server", data: u }])];
                                                                            return [4, d.html(u, c.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, J(a.select(c.servers), function (f) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var l;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, x.pick(f, c.server_data || ":self@data-link || :self@data-src || :self@href")];
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
                                                                            n = (_b.sent()).filter(function (f) { return f.data; });
                                                                            return [2, o.success(n.length ? n : [{ title: "Server", data: u }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (u) { u = String(u || "").replace(/\\\//g, "/"); var a = u.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || u.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, p, m, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(u))
                                                                                return [2, o.success({ type: "native", data: u, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(u)];
                                                                        case 1:
                                                                            n = _b.sent();
                                                                            return [4, n.text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (!(c.video && !a)) return [3, 4];
                                                                            return [4, x.pick(s.parse(f, u), c.video)];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, o.success({ type: "native", data: d.fix(l), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            h = x.sniff(f);
                                                                            if (h)
                                                                                return [2, o.success({ type: "native", data: h, headers: { Referer: a ? u : k + "/" } })];
                                                                            p = s.parse(f, u), m = p.select(c.iframe || "iframe[src], iframe[data-src]").first();
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
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, chap: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (r, i, s, o, g, v, y, S, T, L, q, N, O, M, Q, et, ft) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = t("DOMAIN");
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
                                                    var k, c, d, x;
                                                    return __generator(this, function (_b) {
                                                        k = "https://uukanshu.cc";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (u) { }
                                                        c = { tabs: { 排行: "/top/allvisit_{p}.html", 玄幻: "/class_1_{p}.html", 修真: "/class_2_{p}.html", 都市: "/class_3_{p}.html", 全本: "/quanben/", 首頁: "/" }, search: "/search/{q}/{p}.html", ch_list: "#list-chapterAll dd a, .chapterlist a", item: "div.item, div.bookinfo", title: "dt a || .bookname a", link: "dt a@href || .bookname a@href", cover: "img@img", desc: "dd || .update", pageSize: 10, d_title: "h1", d_cover: "meta[property=og:image]@content", d_author: "meta[property=og:novel:author]@content", d_desc: "meta[property=og:description]@content", content: ".readcotent", c_title: "h1" }, d = { img: function (u) { if (!u)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], n = 0; n < a.length; n++) {
                                                                var f = u.attr(a[n]);
                                                                if (f && f.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(f))
                                                                    return d.fix(f.trim());
                                                            } var l = u.attr("data-srcset") || u.attr("srcset"); return l ? d.fix(l.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (u) { return u ? (u = String(u).trim(), u.indexOf("//") === 0 ? "https:" + u : u.indexOf("http") === 0 ? u : u.charAt(0) === "/" ? k + u : k + "/" + u) : ""; }, text: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            n = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(n < a.length)) return [3, 4];
                                                                            return [4, u.select(a[n]).text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, f.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            n++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            n = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (f in a.headers)
                                                                                    n[f] = a.headers[f];
                                                                            return [4, r(u, { method: a.method, headers: n, body: a.body })];
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
                                                                            return [4, r(u, { method: a.method, headers: n, body: a.body })];
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
                                                                return __awaiter(this, void 0, void 0, function () { var n, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            n = _d.sent();
                                                                            return [4, n.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            n = _d.sent();
                                                                            return [4, n.json()];
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
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, p, m, b, w, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !u)
                                                                                return [2, ""];
                                                                            n = String(a).split(" || "), f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < n.length)) return [3, 9];
                                                                            l = n[f], h = "text", p = l.lastIndexOf("@");
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
                                                            }, url: function (u, a, n) { var f = d.page(a), l = String(u); return l = l.replace(/\[([^\]]*)\]/g, function (h, p) { return f > 1 ? p : ""; }), l = l.replace(/\{p\}/g, String(f)).replace(/\{p0\}/g, String(f - 1)).replace(/\{q\}/g, d.enc(n || "")).replace(/\{base\}/g, k), d.fix(l); }, items: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var n, f, l, h, p, m, b, w, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                n = function (A) { return a && c[a + A] || c[A]; }, f = u.select(n("item")), l = [], h = {}, p = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(p < f.size())) return [3, 9];
                                                                                return [4, f.get(p)];
                                                                            case 2:
                                                                                m = _g.sent();
                                                                                return [4, x.pick(m, n("link") || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || h[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, x.pick(m, n("title") || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                w = _g.sent();
                                                                                _b = w;
                                                                                if (!_b) return [3, 7];
                                                                                h[b] = 1;
                                                                                _d = (_c = l).push;
                                                                                _f = { name: w, link: d.fix(b) };
                                                                                return [4, x.pick(m, n("cover") || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, x.pick(m, n("desc") || "")];
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
                                                            }, listPage: function (u, a, n) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(x.url(u, a, n), c.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            return [4, x.items(f, n ? "s_" : "")];
                                                                        case 2:
                                                                            l = _b.sent(), h = c.next ? f.select(c.next).size() > 0 : l.length >= (c.pageSize || 10);
                                                                            return [2, o.success(l, d.next(h && l.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            n = c.tabs && c.tabs[u] || u;
                                                                            return [4, x.listPage(n, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            if (!(c.q_cut && !d.isUrl(u) && (u = String(u).split(new RegExp(c.q_cut))[0].trim() || u), d.isUrl(u))) return [3, 2];
                                                                            n = d.fix(u);
                                                                            return [4, x.listPage(n + (n.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _c.sent()];
                                                                        case 2:
                                                                            if (!c.search_post) return [3, 5];
                                                                            return [4, d.html(x.url(c.search_post.url, a, u), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: String(c.search_post.body).replace(/\{q\}/g, d.enc(u)) })];
                                                                        case 3:
                                                                            f = _c.sent();
                                                                            return [4, x.items(f, "s_")];
                                                                        case 4:
                                                                            l = _c.sent();
                                                                            return [2, o.success(l, null)];
                                                                        case 5:
                                                                            if (!c.search_json) return [3, 7];
                                                                            return [4, x.jsonSearch(c.search_json, u, a)];
                                                                        case 6:
                                                                            _b = _c.sent();
                                                                            return [3, 9];
                                                                        case 7: return [4, x.listPage(c.search, a, u)];
                                                                        case 8:
                                                                            _b = _c.sent();
                                                                            _c.label = 9;
                                                                        case 9: return [2, _b];
                                                                    }
                                                                }); });
                                                            }, jsonSearch: function (u, a, n) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.json(x.url(u.url, n, a), c.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            u.list && u.list.split(".").forEach(function (p) { f = f && f[p]; });
                                                                            l = function (p, m) { return String(m || "").indexOf("{") >= 0 ? String(m).replace(/\{(\w+)\}/g, function (b, w) { return p[w] == null ? "" : p[w]; }) : p[m] == null ? "" : String(p[m]); }, h = [];
                                                                            return [2, ((f || []).forEach(function (p) { var m = l(p, u.title || "title"), b = l(p, u.link || "url"); m && b && h.push({ name: m, link: d.fix(b), cover: d.fix(l(p, u.cover || "cover")), description: u.desc ? l(p, u.desc) : "", host: k }); }), o.success(h, u.paged && h.length ? d.next(!0, n) : null))];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!c.genre)
                                                                                return [2, o.success([])];
                                                                            return [4, d.html(d.fix(c.genrePage || "/"))];
                                                                        case 1:
                                                                            u = _b.sent();
                                                                            return [4, J(u.select(c.genre), function (n) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, n.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(n.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, o.success(a.filter(function (n) { return n.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, n, f, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(u, c.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!c.d_genres) return [3, 3];
                                                                                return [4, J(a.select(c.d_genres), function (l) {
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
                                                                                n = _b;
                                                                                return [4, x.pick(a, c.d_status)];
                                                                            case 5:
                                                                                f = _j.sent();
                                                                                _d = (_c = o).success;
                                                                                _h = {};
                                                                                return [4, x.pick(a, c.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, x.pick(a, c.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, x.pick(a, c.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, x.pick(a, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = f ? "Tình trạng: " + f : "", _h.ongoing = d.ongoing(f), _h.genres = n, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, n, f, l, h, _b, p, m, b, w, A, _c, _d, _f, _g, C, D, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!c.ch_action) return [3, 2];
                                                                                return [4, x.actionToc(u)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (c.single)
                                                                                    return [2, o.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: u, host: k }])];
                                                                                a = [u], n = [], f = {};
                                                                                return [4, d.html(c.ch_rewrite ? u.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : u, c.req)];
                                                                            case 3:
                                                                                l = _k.sent();
                                                                                if (!c.ch_url) return [3, 7];
                                                                                return [4, x.pick(l, c.ch_url)];
                                                                            case 4:
                                                                                h = _k.sent();
                                                                                _b = h;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(h), c.req)];
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
                                                                                if (!(p < (c.ch_maxPages || 60))) return [3, 22];
                                                                                m = l.select(c.ch_list), b = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(b < m.size())) return [3, 17];
                                                                                return [4, m.get(b)];
                                                                            case 10:
                                                                                w = _k.sent(), A = c.ch_attr ? w.attr(c.ch_attr) : w.attr("href") || w.attr("data-href");
                                                                                _c = !A || A === "#" || f[A];
                                                                                if (_c) return [3, 15];
                                                                                f[A] = 1;
                                                                                _f = (_d = n).push;
                                                                                _j = {};
                                                                                if (!c.ch_name) return [3, 12];
                                                                                return [4, x.pick(w, c.ch_name)];
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
                                                                                C = c.ch_next ? l.select(c.ch_next).first() : null;
                                                                                if (!C || !C.attr("href"))
                                                                                    return [3, 22];
                                                                                D = d.fix(C.attr("href"));
                                                                                if (a.indexOf(D) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(D);
                                                                                _h = c.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, T(c.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(D, c.req)];
                                                                            case 20:
                                                                                l = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                p++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (c.ch_reverse && n.reverse(), !n.length && c.ch_fallback_single && n.push({ name: c.ch_fallback_single === !0 ? "Xem phim" : c.ch_fallback_single, url: u, host: k }), o.success(n))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, n, f, l, h, p, m, b, _b, _c, w, A, C, D, _d, _f, _g, _h, j, V, _j, _k, X, B; return __generator(this, function (_l) {
                                                                    switch (_l.label) {
                                                                        case 0:
                                                                            a = [], n = [u], f = u, l = 0;
                                                                            _l.label = 1;
                                                                        case 1:
                                                                            if (!(l < (c.pages_max || 40))) return [3, 17];
                                                                            if (!c.initmanga) return [3, 5];
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(f, c.req)];
                                                                        case 2: return [4, _c.apply(_b, [_l.sent(), f])];
                                                                        case 3:
                                                                            p = _l.sent();
                                                                            return [4, p.text()];
                                                                        case 4:
                                                                            m = (_l.sent()) || "", b = x.initManga(m);
                                                                            h = s.parse(b ? '<div id="imc-dec">' + b + "</div>" : m, f);
                                                                            return [3, 7];
                                                                        case 5: return [4, d.html(f, c.req)];
                                                                        case 6:
                                                                            h = _l.sent();
                                                                            _l.label = 7;
                                                                        case 7:
                                                                            w = h.select(c.initmanga ? "#imc-dec img, " + (c.pages || "#chapter-content img") : c.pages || ".page-chapter img, .reading-content img, .chapter-content img");
                                                                            if (!c.initmanga) return [3, 11];
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
                                                                            if (!c.pages_next)
                                                                                return [3, 17];
                                                                            X = h.select(c.pages_next).first();
                                                                            if (!X)
                                                                                return [3, 17];
                                                                            B = d.fix(X.attr("href"));
                                                                            if (!B || n.indexOf(B) >= 0)
                                                                                return [3, 17];
                                                                            n.push(B), f = B;
                                                                            _l.label = 16;
                                                                        case 16:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 17: return [2, o.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, n, _b, _c, f, l, h, _d, _f, _g, p, _h, _j, _k, m, b, _l, _m, _o, _p, _q, _s; return __generator(this, function (_v) {
                                                                    switch (_v.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, c.req)];
                                                                        case 1: return [4, _c.apply(_b, [_v.sent(), u])];
                                                                        case 2:
                                                                            a = _v.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            n = (_v.sent()) || "";
                                                                            if (!c.content_rsc) return [3, 5];
                                                                            f = x.rscText(n), l = c.c_locked && new RegExp(c.c_locked, "i").test(n), h = l ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(f || l)) return [3, 5];
                                                                            _f = (_d = o).success;
                                                                            _g = [x.toParas(f) + h];
                                                                            return [4, x.pick(s.parse(n, u), c.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_v.sent()]))];
                                                                        case 5:
                                                                            if (!c.initmanga) return [3, 8];
                                                                            p = x.initManga(n);
                                                                            if (!p) return [3, 8];
                                                                            _j = (_h = o).success;
                                                                            return [4, d.cleanContent(s.parse('<div id="imc-dec">' + p + "</div>", u).select("#imc-dec").first())];
                                                                        case 6:
                                                                            _k = [_v.sent()];
                                                                            return [4, x.pick(s.parse(n, u), c.c_title || "h1 || h2")];
                                                                        case 7: return [2, _j.apply(_h, _k.concat([_v.sent()]))];
                                                                        case 8:
                                                                            m = s.parse(n, u), b = m.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!b) return [3, 10];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(n.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _m = (_l = o).error;
                                                                            _o = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, x.pick(m, "title")];
                                                                        case 9: return [2, _m.apply(_l, [_o + ((_v.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + n.length + " ký tự)" + (n.length < 400 ? ": " + n.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 10:
                                                                            _q = (_p = o).success;
                                                                            return [4, d.cleanContent(b)];
                                                                        case 11:
                                                                            _s = [_v.sent()];
                                                                            return [4, x.pick(m, c.c_title || "h1 || h2")];
                                                                        case 12: return [2, _q.apply(_p, _s.concat([_v.sent()]))];
                                                                    }
                                                                }); });
                                                            }, initManga: function (u) { var a = /InitMangaEncryptedChapter\s*=\s*(\{[\s\S]*?\})\s*;/.exec(u), n = /"decryption_key"\s*:\s*"([^"]+)"/.exec(u); if (!a || !n || typeof CryptoJS == "undefined")
                                                                return ""; var f; try {
                                                                f = JSON.parse(a[1]);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } if (!f || !f.ciphertext)
                                                                return ""; var l = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(n[1])), h = CryptoJS.PBKDF2(l, CryptoJS.enc.Hex.parse(f.salt), { hasher: CryptoJS.algo.SHA512, keySize: 8, iterations: 999 }); try {
                                                                return CryptoJS.AES.decrypt(f.ciphertext, h, { iv: CryptoJS.enc.Hex.parse(f.iv) }).toString(CryptoJS.enc.Utf8);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } }, rscAction: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, p, m, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (n = [], l = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; f = l.exec(u);)
                                                                                n.indexOf(f[0]) < 0 && n.push(f[0]);
                                                                            h = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), p = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(p < n.length && p < 60)) return [3, 5];
                                                                            return [4, d.get(k + n[p])];
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
                                                                for (var a = String(u || "").split("\n"), n = 0; n < a.length; n++) {
                                                                    var f = /^[0-9a-f]+:(\[.*)$/.exec(a[n]);
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
                                                                return __awaiter(this, void 0, void 0, function () { var a, n, f, _b, _c, l, h, p, _d, m, _f, b; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = c.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, c.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), u])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            n = (_g.sent()) || "", f = new RegExp(a.arg).exec(n);
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
                                                                            return [4, x.rscAction(n, a.name)];
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
                                                            }, rscText: function (u) { for (var a = "", n, f = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; n = f.exec(u);)
                                                                try {
                                                                    a += JSON.parse(n[1]);
                                                                }
                                                                catch (D) { } for (var l = "", h = /([0-9a-f]+):T([0-9a-f]+),/g, p; p = h.exec(a);) {
                                                                for (var m = parseInt(p[2], 16), b = h.lastIndex, w = 0; b < a.length && w < m;) {
                                                                    var A = a.charCodeAt(b);
                                                                    A < 128 ? w += 1 : A < 2048 ? w += 2 : A >= 55296 && A <= 56319 ? (w += 4, b++) : w += 3, b++;
                                                                }
                                                                var C = a.slice(h.lastIndex, b);
                                                                C.length > l.length && (l = C), h.lastIndex = b;
                                                            } return l; }, toParas: function (u) { return /<p[\s>]|<br\s*\/?>/i.test(u) ? u : u.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, n; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!c.servers)
                                                                                return [2, o.success([{ title: "Server", data: u }])];
                                                                            return [4, d.html(u, c.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, J(a.select(c.servers), function (f) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var l;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, x.pick(f, c.server_data || ":self@data-link || :self@data-src || :self@href")];
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
                                                                            n = (_b.sent()).filter(function (f) { return f.data; });
                                                                            return [2, o.success(n.length ? n : [{ title: "Server", data: u }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (u) { u = String(u || "").replace(/\\\//g, "/"); var a = u.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || u.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, p, m, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(u))
                                                                                return [2, o.success({ type: "native", data: u, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(u)];
                                                                        case 1:
                                                                            n = _b.sent();
                                                                            return [4, n.text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (!(c.video && !a)) return [3, 4];
                                                                            return [4, x.pick(s.parse(f, u), c.video)];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, o.success({ type: "native", data: d.fix(l), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            h = x.sniff(f);
                                                                            if (h)
                                                                                return [2, o.success({ type: "native", data: h, headers: { Referer: a ? u : k + "/" } })];
                                                                            p = s.parse(f, u), m = p.select(c.iframe || "iframe[src], iframe[data-src]").first();
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
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    }, browse: function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2, (function (r, i, s, o, g, v, y, S, T, L, q, N, O, M, Q, et, ft) {
                        return __awaiter(this, void 0, void 0, function () {
                            var R;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        R = t("DOMAIN");
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
                                                    var k, c, d, x;
                                                    return __generator(this, function (_b) {
                                                        k = "https://uukanshu.cc";
                                                        try {
                                                            R && (k = String(R).replace(/\/+$/, ""));
                                                        }
                                                        catch (u) { }
                                                        c = { tabs: { 排行: "/top/allvisit_{p}.html", 玄幻: "/class_1_{p}.html", 修真: "/class_2_{p}.html", 都市: "/class_3_{p}.html", 全本: "/quanben/", 首頁: "/" }, search: "/search/{q}/{p}.html", ch_list: "#list-chapterAll dd a, .chapterlist a", item: "div.item, div.bookinfo", title: "dt a || .bookname a", link: "dt a@href || .bookname a@href", cover: "img@img", desc: "dd || .update", pageSize: 10, d_title: "h1", d_cover: "meta[property=og:image]@content", d_author: "meta[property=og:novel:author]@content", d_desc: "meta[property=og:description]@content", content: ".readcotent", c_title: "h1" }, d = { img: function (u) { if (!u)
                                                                return ""; for (var a = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], n = 0; n < a.length; n++) {
                                                                var f = u.attr(a[n]);
                                                                if (f && f.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(f))
                                                                    return d.fix(f.trim());
                                                            } var l = u.attr("data-srcset") || u.attr("srcset"); return l ? d.fix(l.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (u) { return u ? (u = String(u).trim(), u.indexOf("//") === 0 ? "https:" + u : u.indexOf("http") === 0 ? u : u.charAt(0) === "/" ? k + u : k + "/" + u) : ""; }, text: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            n = 0;
                                                                            _b.label = 1;
                                                                        case 1:
                                                                            if (!(n < a.length)) return [3, 4];
                                                                            return [4, u.select(a[n]).text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (f)
                                                                                return [2, f.trim()];
                                                                            _b.label = 3;
                                                                        case 3:
                                                                            n++;
                                                                            return [3, 1];
                                                                        case 4: return [2, ""];
                                                                    }
                                                                }); });
                                                            }, get: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            a = a || {};
                                                                            n = { Referer: k + "/" };
                                                                            if (a.headers)
                                                                                for (f in a.headers)
                                                                                    n[f] = a.headers[f];
                                                                            return [4, r(u, { method: a.method, headers: n, body: a.body })];
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
                                                                            return [4, r(u, { method: a.method, headers: n, body: a.body })];
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
                                                                return __awaiter(this, void 0, void 0, function () { var n, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            n = _d.sent();
                                                                            return [4, n.html(a && a.charset)];
                                                                        case 3: return [2, _d.sent()];
                                                                    }
                                                                }); });
                                                            }, json: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, a)];
                                                                        case 1: return [4, _c.apply(_b, [_d.sent(), u])];
                                                                        case 2:
                                                                            n = _d.sent();
                                                                            return [4, n.json()];
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
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, p, m, b, w, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            if (!a || !u)
                                                                                return [2, ""];
                                                                            n = String(a).split(" || "), f = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(f < n.length)) return [3, 9];
                                                                            l = n[f], h = "text", p = l.lastIndexOf("@");
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
                                                            }, url: function (u, a, n) { var f = d.page(a), l = String(u); return l = l.replace(/\[([^\]]*)\]/g, function (h, p) { return f > 1 ? p : ""; }), l = l.replace(/\{p\}/g, String(f)).replace(/\{p0\}/g, String(f - 1)).replace(/\{q\}/g, d.enc(n || "")).replace(/\{base\}/g, k), d.fix(l); }, items: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var n, f, l, h, p, m, b, w, _b, _c, _d;
                                                                    var _f;
                                                                    return __generator(this, function (_g) {
                                                                        switch (_g.label) {
                                                                            case 0:
                                                                                n = function (A) { return a && c[a + A] || c[A]; }, f = u.select(n("item")), l = [], h = {}, p = 0;
                                                                                _g.label = 1;
                                                                            case 1:
                                                                                if (!(p < f.size())) return [3, 9];
                                                                                return [4, f.get(p)];
                                                                            case 2:
                                                                                m = _g.sent();
                                                                                return [4, x.pick(m, n("link") || "a@href")];
                                                                            case 3:
                                                                                b = _g.sent();
                                                                                if (!!(!b || h[b] || /^javascript|#$/.test(b))) return [3, 8];
                                                                                return [4, x.pick(m, n("title") || "h3 || h2 || a@title || img@alt")];
                                                                            case 4:
                                                                                w = _g.sent();
                                                                                _b = w;
                                                                                if (!_b) return [3, 7];
                                                                                h[b] = 1;
                                                                                _d = (_c = l).push;
                                                                                _f = { name: w, link: d.fix(b) };
                                                                                return [4, x.pick(m, n("cover") || "img@img")];
                                                                            case 5:
                                                                                _f.cover = _g.sent();
                                                                                return [4, x.pick(m, n("desc") || "")];
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
                                                            }, listPage: function (u, a, n) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.html(x.url(u, a, n), c.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            return [4, x.items(f, n ? "s_" : "")];
                                                                        case 2:
                                                                            l = _b.sent(), h = c.next ? f.select(c.next).size() > 0 : l.length >= (c.pageSize || 10);
                                                                            return [2, o.success(l, d.next(h && l.length > 0, a))];
                                                                    }
                                                                }); });
                                                            }, browse: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            n = c.tabs && c.tabs[u] || u;
                                                                            return [4, x.listPage(n, a, "")];
                                                                        case 1: return [2, _b.sent()];
                                                                    }
                                                                }); });
                                                            }, search: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, _b; return __generator(this, function (_c) {
                                                                    switch (_c.label) {
                                                                        case 0:
                                                                            if (!(c.q_cut && !d.isUrl(u) && (u = String(u).split(new RegExp(c.q_cut))[0].trim() || u), d.isUrl(u))) return [3, 2];
                                                                            n = d.fix(u);
                                                                            return [4, x.listPage(n + (n.indexOf("?") > 0 ? "&" : "?") + (c.pageParam || "page") + "={p}", a, "")];
                                                                        case 1: return [2, _c.sent()];
                                                                        case 2:
                                                                            if (!c.search_post) return [3, 5];
                                                                            return [4, d.html(x.url(c.search_post.url, a, u), { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: String(c.search_post.body).replace(/\{q\}/g, d.enc(u)) })];
                                                                        case 3:
                                                                            f = _c.sent();
                                                                            return [4, x.items(f, "s_")];
                                                                        case 4:
                                                                            l = _c.sent();
                                                                            return [2, o.success(l, null)];
                                                                        case 5:
                                                                            if (!c.search_json) return [3, 7];
                                                                            return [4, x.jsonSearch(c.search_json, u, a)];
                                                                        case 6:
                                                                            _b = _c.sent();
                                                                            return [3, 9];
                                                                        case 7: return [4, x.listPage(c.search, a, u)];
                                                                        case 8:
                                                                            _b = _c.sent();
                                                                            _c.label = 9;
                                                                        case 9: return [2, _b];
                                                                    }
                                                                }); });
                                                            }, jsonSearch: function (u, a, n) {
                                                                return __awaiter(this, void 0, void 0, function () { var f, l, h; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0: return [4, d.json(x.url(u.url, n, a), c.req)];
                                                                        case 1:
                                                                            f = _b.sent();
                                                                            u.list && u.list.split(".").forEach(function (p) { f = f && f[p]; });
                                                                            l = function (p, m) { return String(m || "").indexOf("{") >= 0 ? String(m).replace(/\{(\w+)\}/g, function (b, w) { return p[w] == null ? "" : p[w]; }) : p[m] == null ? "" : String(p[m]); }, h = [];
                                                                            return [2, ((f || []).forEach(function (p) { var m = l(p, u.title || "title"), b = l(p, u.link || "url"); m && b && h.push({ name: m, link: d.fix(b), cover: d.fix(l(p, u.cover || "cover")), description: u.desc ? l(p, u.desc) : "", host: k }); }), o.success(h, u.paged && h.length ? d.next(!0, n) : null))];
                                                                    }
                                                                }); });
                                                            }, genre: function () {
                                                                return __awaiter(this, void 0, void 0, function () { var u, a; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!c.genre)
                                                                                return [2, o.success([])];
                                                                            return [4, d.html(d.fix(c.genrePage || "/"))];
                                                                        case 1:
                                                                            u = _b.sent();
                                                                            return [4, J(u.select(c.genre), function (n) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0:
                                                                                                    _b = {};
                                                                                                    return [4, n.text()];
                                                                                                case 1: return [2, (_b.title = _c.sent(), _b.input = d.fix(n.attr("href")), _b.script = "search.js", _b)];
                                                                                            }
                                                                                        });
                                                                                    });
                                                                                })];
                                                                        case 2:
                                                                            a = _b.sent();
                                                                            return [2, o.success(a.filter(function (n) { return n.title; }))];
                                                                    }
                                                                }); });
                                                            }, detail: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, n, f, _b, _c, _d, _f, _g;
                                                                    var _h;
                                                                    return __generator(this, function (_j) {
                                                                        switch (_j.label) {
                                                                            case 0: return [4, d.html(u, c.req)];
                                                                            case 1:
                                                                                a = _j.sent();
                                                                                if (!c.d_genres) return [3, 3];
                                                                                return [4, J(a.select(c.d_genres), function (l) {
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
                                                                                n = _b;
                                                                                return [4, x.pick(a, c.d_status)];
                                                                            case 5:
                                                                                f = _j.sent();
                                                                                _d = (_c = o).success;
                                                                                _h = {};
                                                                                return [4, x.pick(a, c.d_title || "h1")];
                                                                            case 6:
                                                                                _h.name = _j.sent();
                                                                                _g = (_f = d).fix;
                                                                                return [4, x.pick(a, c.d_cover || "meta[property=og:image]@content")];
                                                                            case 7:
                                                                                _h.cover = _g.apply(_f, [_j.sent()]);
                                                                                return [4, x.pick(a, c.d_author)];
                                                                            case 8:
                                                                                _h.author = _j.sent();
                                                                                return [4, x.pick(a, (c.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                            case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = f ? "Tình trạng: " + f : "", _h.ongoing = d.ongoing(f), _h.genres = n, _h.host = k, _h)])];
                                                                        }
                                                                    });
                                                                });
                                                            }, toc: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () {
                                                                    var a, n, f, l, h, _b, p, m, b, w, A, _c, _d, _f, _g, C, D, _h;
                                                                    var _j;
                                                                    return __generator(this, function (_k) {
                                                                        switch (_k.label) {
                                                                            case 0:
                                                                                if (!c.ch_action) return [3, 2];
                                                                                return [4, x.actionToc(u)];
                                                                            case 1: return [2, _k.sent()];
                                                                            case 2:
                                                                                if (c.single)
                                                                                    return [2, o.success([{ name: c.single === !0 ? "Xem / Đọc" : c.single, url: u, host: k }])];
                                                                                a = [u], n = [], f = {};
                                                                                return [4, d.html(c.ch_rewrite ? u.replace(new RegExp(c.ch_rewrite[0]), c.ch_rewrite[1]) : u, c.req)];
                                                                            case 3:
                                                                                l = _k.sent();
                                                                                if (!c.ch_url) return [3, 7];
                                                                                return [4, x.pick(l, c.ch_url)];
                                                                            case 4:
                                                                                h = _k.sent();
                                                                                _b = h;
                                                                                if (!_b) return [3, 6];
                                                                                return [4, d.html(d.fix(h), c.req)];
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
                                                                                if (!(p < (c.ch_maxPages || 60))) return [3, 22];
                                                                                m = l.select(c.ch_list), b = 0;
                                                                                _k.label = 9;
                                                                            case 9:
                                                                                if (!(b < m.size())) return [3, 17];
                                                                                return [4, m.get(b)];
                                                                            case 10:
                                                                                w = _k.sent(), A = c.ch_attr ? w.attr(c.ch_attr) : w.attr("href") || w.attr("data-href");
                                                                                _c = !A || A === "#" || f[A];
                                                                                if (_c) return [3, 15];
                                                                                f[A] = 1;
                                                                                _f = (_d = n).push;
                                                                                _j = {};
                                                                                if (!c.ch_name) return [3, 12];
                                                                                return [4, x.pick(w, c.ch_name)];
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
                                                                                C = c.ch_next ? l.select(c.ch_next).first() : null;
                                                                                if (!C || !C.attr("href"))
                                                                                    return [3, 22];
                                                                                D = d.fix(C.attr("href"));
                                                                                if (a.indexOf(D) >= 0)
                                                                                    return [3, 22];
                                                                                a.push(D);
                                                                                _h = c.ch_delay;
                                                                                if (!_h) return [3, 19];
                                                                                return [4, T(c.ch_delay)];
                                                                            case 18:
                                                                                _h = (_k.sent());
                                                                                _k.label = 19;
                                                                            case 19:
                                                                                _h;
                                                                                return [4, d.html(D, c.req)];
                                                                            case 20:
                                                                                l = _k.sent();
                                                                                _k.label = 21;
                                                                            case 21:
                                                                                p++;
                                                                                return [3, 8];
                                                                            case 22: return [2, (c.ch_reverse && n.reverse(), !n.length && c.ch_fallback_single && n.push({ name: c.ch_fallback_single === !0 ? "Xem phim" : c.ch_fallback_single, url: u, host: k }), o.success(n))];
                                                                        }
                                                                    });
                                                                });
                                                            }, pages: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, n, f, l, h, p, m, b, _b, _c, w, A, C, D, _d, _f, _g, _h, j, V, _j, _k, X, B; return __generator(this, function (_l) {
                                                                    switch (_l.label) {
                                                                        case 0:
                                                                            a = [], n = [u], f = u, l = 0;
                                                                            _l.label = 1;
                                                                        case 1:
                                                                            if (!(l < (c.pages_max || 40))) return [3, 17];
                                                                            if (!c.initmanga) return [3, 5];
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(f, c.req)];
                                                                        case 2: return [4, _c.apply(_b, [_l.sent(), f])];
                                                                        case 3:
                                                                            p = _l.sent();
                                                                            return [4, p.text()];
                                                                        case 4:
                                                                            m = (_l.sent()) || "", b = x.initManga(m);
                                                                            h = s.parse(b ? '<div id="imc-dec">' + b + "</div>" : m, f);
                                                                            return [3, 7];
                                                                        case 5: return [4, d.html(f, c.req)];
                                                                        case 6:
                                                                            h = _l.sent();
                                                                            _l.label = 7;
                                                                        case 7:
                                                                            w = h.select(c.initmanga ? "#imc-dec img, " + (c.pages || "#chapter-content img") : c.pages || ".page-chapter img, .reading-content img, .chapter-content img");
                                                                            if (!c.initmanga) return [3, 11];
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
                                                                            if (!c.pages_next)
                                                                                return [3, 17];
                                                                            X = h.select(c.pages_next).first();
                                                                            if (!X)
                                                                                return [3, 17];
                                                                            B = d.fix(X.attr("href"));
                                                                            if (!B || n.indexOf(B) >= 0)
                                                                                return [3, 17];
                                                                            n.push(B), f = B;
                                                                            _l.label = 16;
                                                                        case 16:
                                                                            l++;
                                                                            return [3, 1];
                                                                        case 17: return [2, o.success(a)];
                                                                    }
                                                                }); });
                                                            }, text: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, n, _b, _c, f, l, h, _d, _f, _g, p, _h, _j, _k, m, b, _l, _m, _o, _p, _q, _s; return __generator(this, function (_v) {
                                                                    switch (_v.label) {
                                                                        case 0:
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, c.req)];
                                                                        case 1: return [4, _c.apply(_b, [_v.sent(), u])];
                                                                        case 2:
                                                                            a = _v.sent();
                                                                            return [4, a.text()];
                                                                        case 3:
                                                                            n = (_v.sent()) || "";
                                                                            if (!c.content_rsc) return [3, 5];
                                                                            f = x.rscText(n), l = c.c_locked && new RegExp(c.c_locked, "i").test(n), h = l ? "<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại " + k + " để đọc tiếp.</i></p>" : "";
                                                                            if (!(f || l)) return [3, 5];
                                                                            _f = (_d = o).success;
                                                                            _g = [x.toParas(f) + h];
                                                                            return [4, x.pick(s.parse(n, u), c.c_title || "h1 || title")];
                                                                        case 4: return [2, _f.apply(_d, _g.concat([_v.sent()]))];
                                                                        case 5:
                                                                            if (!c.initmanga) return [3, 8];
                                                                            p = x.initManga(n);
                                                                            if (!p) return [3, 8];
                                                                            _j = (_h = o).success;
                                                                            return [4, d.cleanContent(s.parse('<div id="imc-dec">' + p + "</div>", u).select("#imc-dec").first())];
                                                                        case 6:
                                                                            _k = [_v.sent()];
                                                                            return [4, x.pick(s.parse(n, u), c.c_title || "h1 || h2")];
                                                                        case 7: return [2, _j.apply(_h, _k.concat([_v.sent()]))];
                                                                        case 8:
                                                                            m = s.parse(n, u), b = m.select(c.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                            if (!!b) return [3, 10];
                                                                            if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(n.slice(0, 2e4)))
                                                                                throw new Error("CLOUDFLARE: trang " + k + " yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.");
                                                                            _m = (_l = o).error;
                                                                            _o = 'Không tìm thấy nội dung — trang nhận được: "';
                                                                            return [4, x.pick(m, "title")];
                                                                        case 9: return [2, _m.apply(_l, [_o + ((_v.sent()) || "?").slice(0, 60) + '" (' + a.status + ", " + n.length + " ký tự)" + (n.length < 400 ? ": " + n.replace(/\s+/g, " ").slice(0, 200) : "")])];
                                                                        case 10:
                                                                            _q = (_p = o).success;
                                                                            return [4, d.cleanContent(b)];
                                                                        case 11:
                                                                            _s = [_v.sent()];
                                                                            return [4, x.pick(m, c.c_title || "h1 || h2")];
                                                                        case 12: return [2, _q.apply(_p, _s.concat([_v.sent()]))];
                                                                    }
                                                                }); });
                                                            }, initManga: function (u) { var a = /InitMangaEncryptedChapter\s*=\s*(\{[\s\S]*?\})\s*;/.exec(u), n = /"decryption_key"\s*:\s*"([^"]+)"/.exec(u); if (!a || !n || typeof CryptoJS == "undefined")
                                                                return ""; var f; try {
                                                                f = JSON.parse(a[1]);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } if (!f || !f.ciphertext)
                                                                return ""; var l = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(n[1])), h = CryptoJS.PBKDF2(l, CryptoJS.enc.Hex.parse(f.salt), { hasher: CryptoJS.algo.SHA512, keySize: 8, iterations: 999 }); try {
                                                                return CryptoJS.AES.decrypt(f.ciphertext, h, { iv: CryptoJS.enc.Hex.parse(f.iv) }).toString(CryptoJS.enc.Utf8);
                                                            }
                                                            catch (p) {
                                                                return "";
                                                            } }, rscAction: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, p, m, b, _b, _c; return __generator(this, function (_d) {
                                                                    switch (_d.label) {
                                                                        case 0:
                                                                            for (n = [], l = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g; f = l.exec(u);)
                                                                                n.indexOf(f[0]) < 0 && n.push(f[0]);
                                                                            h = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + a + '"'), p = 0;
                                                                            _d.label = 1;
                                                                        case 1:
                                                                            if (!(p < n.length && p < 60)) return [3, 5];
                                                                            return [4, d.get(k + n[p])];
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
                                                                for (var a = String(u || "").split("\n"), n = 0; n < a.length; n++) {
                                                                    var f = /^[0-9a-f]+:(\[.*)$/.exec(a[n]);
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
                                                                return __awaiter(this, void 0, void 0, function () { var a, n, f, _b, _c, l, h, p, _d, m, _f, b; return __generator(this, function (_g) {
                                                                    switch (_g.label) {
                                                                        case 0:
                                                                            a = c.ch_action;
                                                                            _c = (_b = d).check;
                                                                            return [4, d.get(u, c.req)];
                                                                        case 1: return [4, _c.apply(_b, [_g.sent(), u])];
                                                                        case 2: return [4, (_g.sent()).text()];
                                                                        case 3:
                                                                            n = (_g.sent()) || "", f = new RegExp(a.arg).exec(n);
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
                                                                            return [4, x.rscAction(n, a.name)];
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
                                                            }, rscText: function (u) { for (var a = "", n, f = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g; n = f.exec(u);)
                                                                try {
                                                                    a += JSON.parse(n[1]);
                                                                }
                                                                catch (D) { } for (var l = "", h = /([0-9a-f]+):T([0-9a-f]+),/g, p; p = h.exec(a);) {
                                                                for (var m = parseInt(p[2], 16), b = h.lastIndex, w = 0; b < a.length && w < m;) {
                                                                    var A = a.charCodeAt(b);
                                                                    A < 128 ? w += 1 : A < 2048 ? w += 2 : A >= 55296 && A <= 56319 ? (w += 4, b++) : w += 3, b++;
                                                                }
                                                                var C = a.slice(h.lastIndex, b);
                                                                C.length > l.length && (l = C), h.lastIndex = b;
                                                            } return l; }, toParas: function (u) { return /<p[\s>]|<br\s*\/?>/i.test(u) ? u : u.split(/\n+/).map(function (a) { return a = a.trim(), a ? "<p>" + a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>" : ""; }).join(""); }, servers: function (u) {
                                                                return __awaiter(this, void 0, void 0, function () { var a, n; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (!c.servers)
                                                                                return [2, o.success([{ title: "Server", data: u }])];
                                                                            return [4, d.html(u, c.req)];
                                                                        case 1:
                                                                            a = _b.sent();
                                                                            return [4, J(a.select(c.servers), function (f) {
                                                                                    return __awaiter(this, void 0, void 0, function () {
                                                                                        var l;
                                                                                        var _b;
                                                                                        return __generator(this, function (_c) {
                                                                                            switch (_c.label) {
                                                                                                case 0: return [4, x.pick(f, c.server_data || ":self@data-link || :self@data-src || :self@href")];
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
                                                                            n = (_b.sent()).filter(function (f) { return f.data; });
                                                                            return [2, o.success(n.length ? n : [{ title: "Server", data: u }])];
                                                                    }
                                                                }); });
                                                            }, sniff: function (u) { u = String(u || "").replace(/\\\//g, "/"); var a = u.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || u.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return a ? a[0] : ""; }, track: function (u, a) {
                                                                return __awaiter(this, void 0, void 0, function () { var n, f, l, h, p, m, b; return __generator(this, function (_b) {
                                                                    switch (_b.label) {
                                                                        case 0:
                                                                            if (a = a || 0, /\.(m3u8|mp4)(\?|$)/i.test(u))
                                                                                return [2, o.success({ type: "native", data: u, headers: { Referer: k + "/" } })];
                                                                            return [4, d.get(u)];
                                                                        case 1:
                                                                            n = _b.sent();
                                                                            return [4, n.text()];
                                                                        case 2:
                                                                            f = _b.sent();
                                                                            if (!(c.video && !a)) return [3, 4];
                                                                            return [4, x.pick(s.parse(f, u), c.video)];
                                                                        case 3:
                                                                            l = _b.sent();
                                                                            if (l)
                                                                                return [2, o.success({ type: "native", data: d.fix(l), headers: { Referer: k + "/" } })];
                                                                            _b.label = 4;
                                                                        case 4:
                                                                            h = x.sniff(f);
                                                                            if (h)
                                                                                return [2, o.success({ type: "native", data: h, headers: { Referer: a ? u : k + "/" } })];
                                                                            p = s.parse(f, u), m = p.select(c.iframe || "iframe[src], iframe[data-src]").first();
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
                    })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
            });
        });
    } };
function Rr(e) { return new Ie({ meta: pt, scripts: Hr, host: e }); }
var Si = require("@libs/fetch").fetchApi, ee = null;
try {
    ee = require("@libs/storage");
}
catch (e) {
    ee = null;
}
var Du = {}, Le = ee && ee.storage ? ee.storage : { get: function (e) { return Du[e]; }, set: function (e, t) { Du[e] = t; }, delete: function (e) { delete Du[e]; } }, Iu = (function () {
    function class_2() {
        var _this = this;
        this.id = pt.lnId, this.name = pt.name, this.icon = pt.lnIcon, this.site = pt.source, this.version = pt.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = Rr({ name: "LNReader", request: function (t) { return __awaiter(_this, void 0, void 0, function () {
                var r, i, s;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            r = { method: t.method, headers: t.headers };
                            t.body != null && t.method !== "GET" && (r.body = t.body);
                            return [4, Si(t.url, r)];
                        case 1:
                            i = _c.sent(), s = {};
                            try {
                                i.headers.forEach(function (o, g) { s[g] = o; });
                            }
                            catch (o) { }
                            _b = { status: i.status, url: i.url || t.url, headers: s };
                            return [4, i.text()];
                        case 2: return [2, (_b.text = _c.sent(), _b)];
                    }
                });
            }); }, storageGet: function (t) { var r = Le.get("vb_" + t); return r == null ? null : String(r); }, storageSet: function (t, r) { r == null ? Le.delete && Le.delete("vb_" + t) : Le.set("vb_" + t, String(r)); }, config: function (t) { return null; }, log: function (t) { return console.log(t); } });
    }
    class_2.prototype.popularNovels = function (t, r) {
        return __awaiter(this, void 0, void 0, function () { var _b; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(r && r.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(t)];
                case 1:
                    _b = _c.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(t)];
                case 3:
                    _b = _c.sent();
                    _c.label = 4;
                case 4: return [2, (_b).items.map(function (s) { return ({ name: s.name, path: s.link, cover: s.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (t, r) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.search(t, r)];
                case 1: return [2, (_b.sent()).items.map(function (s) { return ({ name: s.name, path: s.link, cover: s.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (t) {
        return __awaiter(this, void 0, void 0, function () { var r, i; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.detail(t)];
                case 1:
                    r = _b.sent();
                    return [4, this.engine.chapters(t)];
                case 2:
                    i = _b.sent();
                    return [2, { path: t, name: r.name || "Untitled", cover: r.cover, summary: r.description, author: r.author, status: r.ongoing ? "Ongoing" : "Completed", genres: r.genres.join(","), chapters: i.map(function (s, o) { return ({ name: s.name, path: s.url, chapterNumber: o + 1 }); }) }];
            }
        }); });
    };
    class_2.prototype.parseChapter = function (t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.content(t)];
                case 1: return [2, (_b.sent()).html];
            }
        }); });
    };
    class_2.prototype.resolveUrl = function (t, r) { return /^https?:/i.test(t) ? t : pt.source.replace(/\/+$/, "") + "/" + String(t).replace(/^\/+/, ""); };
    return class_2;
}()), Ai = new Iu;

if (typeof exports === "object" && exports && module.exports !== exports && module.exports && module.exports.default) exports.default = module.exports.default;
